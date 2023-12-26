<template>
  <div class="catalog">
    <div class="catalog__wrapper maxwidth-theme">
      <h1 class="catalog__title">Чай</h1>

      <nav class="catalog__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Главная</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Чай</li>
        </ol>
      </nav>

      <CatalogCategories />

      <div class="catalog__block d-flex justify-content-between">
        <CatalogSidebar />
        <CatalogMain
          :products="products"
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
      activeSort: [],
      categories: [],
      products: []
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
      const data = await getCategoriesRequest();
      console.log('getCategories', data)
    },
    async getProductsByCategory() {
      const data = await getProductsByCategoryRequest({
        categoryName: this.$route.params.category,
        pageable: {
          page: this.activePage,
          size: this.maxSize,
          sort: this.activeSort
        }
      });
      this.products = data.productsDto.content;
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

  &__title {
    font-size: 2.133em;
    font-weight: 400;
    color: #333333;
    line-height: 1.126em;
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
