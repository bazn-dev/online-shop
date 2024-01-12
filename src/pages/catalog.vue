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
<!--            <router-link v-if="index < breadcrumbs.length - 1" :to="breadcrumb.link">{{ breadcrumb.title }}</router-link>-->
            <span v-else>{{ breadcrumb.title }}</span>
          </li>
        </ol>
      </nav>

      <CatalogCategories :categories="currentCategoryData?.childCategories || []" />

      <div class="catalog__block d-flex justify-content-between">
        <CatalogSidebar :categories="categories" />
        <CatalogMain
          :products="products"
          @sort="sort"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
      maxSize: 20,
      activePage: 0,
      activeSort: '',
      categories: [],
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
      return this.categories.length > 0 ? this.currentCategoryData.displayName : '';
    },
    productsCount() {
      return this.categories.length > 0 ? this.currentCategoryData.productsCount : '';
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
          lastLink += `/${data.name}`
          breadcrumbs.push({
            link: lastLink,
            title: data.displayName
          })
          categories = data.childCategories
        }
      }
      return breadcrumbs;
    }
  },
  async beforeMount() {
    await this.initData();
  },
  methods: {
    async initData() {
      await this.getCategories();
      await this.getProductsByCategory();
    },
    async getCategories() {
      this.categories = await getCategoriesRequest();
    },
    async getProductsByCategory() {
      const data = await getProductsByCategoryRequest(this.$route.fullPath, {
        userId: localStorage.getItem("userId"),
        page: this.activePage,
        size: this.maxSize,
        sort: this.activeSort
      });
      this.products = data.productsDto.content;
    },
    async sort(sort) {
      this.activeSort = sort;
      this.activePage = 0;
      await this.getProductsByCategory();
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

  }
}
</style>
