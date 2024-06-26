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
    currentCategoryData() {
      if (this.categories.length > 0) {
        const categoryNames = this.$route.fullPath.split(`/${this.$route.name}/`)[1].split('/');
        let current = null;
        let categories = this.categories;
        for (let name of categoryNames) {
          if (categoryNames.indexOf(name) === categoryNames.length - 1) {
            current = categories?.find(item => item.name === name)
            break
          }
          categories = categories?.find(item => item.name === name).childCategories
        }
        return current;
      }
      return null;
    },
    title() {
      if (this.categories.length > 0 && this.currentCategoryData?.displayName) {
        return this.currentCategoryData?.displayName
      }
      return 'Аксессуары'
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
        const categoryNames = this.$route.fullPath.split(`/${this.$route.name}/`)[1].split('/');
        let lastLink = '/catalog';
        let categories = this.categories;
        for (let name of categoryNames) {
          let data = categories?.find(item => item.name === name)
          if (name === 'accessories') {
            breadcrumbs.push({
              link: lastLink,
              title: 'Аксессуары'
            })
          } else {
            lastLink += `/${data?.name}`
            breadcrumbs.push({
              link: lastLink,
              title: data?.displayName
            })
          }
          categories = data?.childCategories
        }
      }
      return breadcrumbs;
    }
  },
  watch:{
    async '$route'() {
      await this.initData()
    }
  },
  beforeCreate() {
    document.title = 'Каталог';
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
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
      const data = await getProductsByCategoryRequest(this.$route.fullPath, {
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
      await this.getProductsByCategory()
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
