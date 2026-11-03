<template>
  <div class="catalog">
    <div class="catalog__wrapper maxwidth-theme">
      <div class="catalog__title-wrapper">
        <h1 class="catalog__title">
          {{ title }}
        </h1>
        <span class="catalog__products-count">{{ productsCount }}</span>
      </div>
      <nav class="catalog__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="`breadcrumb.${breadcrumb.link}`"
            class="breadcrumb-item"
            :class="{ 'active': !breadcrumb.link }"
          >
            <a v-if="index < breadcrumbs.length - 1" :href="$router.resolve({path: breadcrumb.link}).href">{{ breadcrumb.title }}</a>
            <span v-else>{{ breadcrumb.title }}</span>
          </li>
        </ol>
      </nav>

      <CatalogCategories :categories="childCategories || []" />

      <div class="catalog__block d-flex justify-content-between">
        <CatalogSidebar
          v-if="categories.length > 0"
          :categories="categories"
        />
        <CatalogMain
          v-if="!isLoading"
          :order="order"
          :productsData="productsData"
          :activePage="activePage"
          :activeSort="activeSort"
          :activeInStock="!!inStockFilter"
          @sort="sort"
          @updateOrder="setOrder"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  getOrderById as getOrderByIdRequest,
} from '@/api/orders'
import {
  getCategories as getCategoriesRequest,
  getProductsByCategory as getProductsByCategoryRequest
} from '@/api/catalog'
import CatalogCategories from '../components/catalog/CatalogCategories'
import CatalogSidebar from '../components/catalog/CatalogSidebar'
import CatalogMain from '../components/catalog/CatalogMain'

export default {
  name: "catalog",
  components: {
    CatalogCategories,
    CatalogSidebar,
    CatalogMain
  },
  data() {
    return {
      isLoading: false,
      maxSize: 20,
      activePage: 0,
      activeSort: 'totalRating,asc',
      inStockFilter: undefined,
      order: null,
      categories: [],
      childCategories: [],
      productsData: null,
      products: []
    }
  },
  computed: {
    currentCategorySlugs() {
      return this.$route.path.split(`/${this.$route.name}/`)[1]?.split('/') || []
    },
    currentCategoryData() {
      if (this.categories.length > 0) {
        const categorySlugs = this.currentCategorySlugs;
        let current = null;
        let categories = this.categories;
        for (let slug of categorySlugs) {
          const found = this.findCategoryBySlug(categories, slug)
          if (categorySlugs.indexOf(slug) === categorySlugs.length - 1) {
            current = found
            break
          }
          categories = found?.childCategories
        }
        return current;
      }
      return null;
    },
    title() {
      if (this.categories.length > 0 && this.currentCategoryData?.displayName) {
        return this.currentCategoryData?.displayName
      }
      return ''
    },
    productsCount() {
      if (this.categories.length > 0 && this.currentCategoryData?.productsCount) {
        return this.currentCategoryData?.productsCount
      }
      return 0
    },
    breadcrumbs() {
      const breadcrumbs = [{
        link: '/',
        title: 'Главная'
      }]
      if (this.categories.length > 0) {
        const categorySlugs = this.currentCategorySlugs
        let lastLink = '/catalog';
        let categories = this.categories;
        for (let slug of categorySlugs) {
          const data = this.findCategoryBySlug(categories, slug)
          const fallbackName = decodeURIComponent(slug)
          lastLink += `/${this.categoryNameToSlug(data?.name || fallbackName)}`
          breadcrumbs.push({
            link: lastLink,
            title: data?.displayName || fallbackName
          })
          categories = data?.childCategories
        }
      }
      return breadcrumbs;
    }
  },
  watch:{
    async '$route'(to, from) {
      // Игнорируем изменение query от $router.replace внутри sort()
      if (to.path === from.path) return

      this.activePage    = 0
      this.activeSort    = 'totalRating,asc'
      this.inStockFilter = undefined
      await this.initData()
    }
  },
  async beforeMount() {
    this.restoreStateFromQuery()
    await this.initData()
    document.title = 'Купить ' + this.currentCategoryData.displayName.toLowerCase() + ' с доставкой по Беларуси от интернет-магазина TeaHub';
  },
  methods: {
    restoreStateFromQuery() {
      const { page, sort, inStock } = this.$route.query
      if (page)    this.activePage    = Number(page)
      if (sort)    this.activeSort    = sort
      if (inStock) this.inStockFilter = true
    },
    categoryNameToSlug(name) {
      return name ? name.replace(/\s+/g, '-') : name
    },
    findCategoryBySlug(categories, slug) {
      const decoded = decodeURIComponent(slug || '')
      return (
          categories?.find((item) => item.name === decoded) ||
          categories?.find((item) => item.name === decoded.replace(/-/g, ' '))
      )
    },
    async initData() {
      this.isLoading = true
      await this.getCategories()
      await this.setOrder()
      await this.getProductsByCategory()
      this.isLoading = false
    },
    async setOrder() {
      this.order = await getOrderByIdRequest(localStorage.getItem('orderId'))
    },
    async getCategories() {
      this.categories = await getCategoriesRequest()
    },
    async getProductsByCategory() {
      const categorySlugs = this.currentCategorySlugs
      let categories = this.categories
      const realNames = []
      for (const slug of categorySlugs) {
        const found = this.findCategoryBySlug(categories, slug)
        realNames.push(found?.name || decodeURIComponent(slug))
        categories = found?.childCategories
      }
      const categoryPath = realNames.join('/')
      const requestPath = categoryPath
          ? `/${this.$route.name}/${categoryPath}`
          : this.$route.fullPath

      const data = await getProductsByCategoryRequest(requestPath, {
        userId: localStorage.getItem("userId"),
        page: this.activePage,
        size: this.maxSize,
        sort: this.activeSort,
        inStock: this.inStockFilter
      })
      this.products = data.productsDto?.content || []
      this.productsData = data.productsDto
      this.childCategories = data.childCategories
    },
    async sort(sort, inStockFilter = undefined, page = 0) {
      this.activeSort = sort
      this.activePage = page
      this.inStockFilter = inStockFilter ? true : undefined

      // Пишем в URL — браузер сам запомнит для кнопки "назад" и F5
      this.$router.replace({
        query: {
          ...this.$route.query,
          page:    page > 0     ? page    : undefined,  // page=0 не пишем
          sort:    sort !== 'totalRating,asc' ? sort : undefined,  // дефолт не пишем
          inStock: inStockFilter ? 'true'  : undefined
        }
      })

      await this.getProductsByCategory()

      if (page > 0 && window.innerWidth < 992) {
        await this.$nextTick()
        // Ищем по атрибуту data-v или берём фиксированный отступ
        const el = document.querySelector('[class^="catalog__block"]')
            || document.querySelector('[class*="catalog__block"]')

        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 50
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.catalog {
  padding: 60px 0;
  background-color: #ffffff;
  box-sizing: border-box;

  &__wrapper {
    max-width: 1408px;
    box-sizing: border-box;
  }

  &__title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &__title {
    font-size: 2.133em;
    font-weight: 400;
    color: #333333;
    line-height: 1.126em;
    margin-bottom: 0 !important;
  }

  &__products-count {
    font-size: .867em;
    line-height: 1;
    margin-top: 2px;
    margin-left: 10px;
    padding: 2px 6px 3px;
    border: 1px solid rgba(153,153,153,0.35);
  }

  &__breadcrumbs {
    padding: 15px 0 40px;

    .breadcrumb-item {
      font-size: .867em;
      line-height: 1.692em;
      color: #b6b5b5;

      a {
        color: #b6b5b5;
        text-decoration: none;

        &:hover {
          color: #8d8170;
        }
      }
    }
  }

  &__block {
    position: relative;
  }
}
</style>
