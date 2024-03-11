<template>
  <div class="search">
    <div class="search__wrapper maxwidth-theme">
      <div class="search__title-wrapper">
        <h1 class="search__title">
          Поиск
        </h1>
      </div>
      <nav class="search__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Главная</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Поиск</li>
        </ol>
      </nav>

      <div class="search__block d-flex justify-content-between">
        <SearchSidebar :categories="categories" />
        <CatalogMain
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
  searchProducts as searchProductsRequest
} from '@/api/products'
import SearchSidebar from '../components/search/SearchSidebar'
import CatalogMain from '../components/catalog/CatalogMain'

export default {
  name: "search",
  components: {
    SearchSidebar,
    CatalogMain
  },
  data() {
    return {
      maxSize: 20,
      activePage: 0,
      activeSort: 'totalRating,asc',
      inStockFilter: undefined,
      order: null,
      categories: [],
      productsData: null
    }
  },
  watch:{
    async '$route'() {
      await this.initData()
    }
  },
  beforeCreate() {
    document.title = 'Поиск';
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
    async initData() {
      await this.setOrder()
      await this.searchProducts()
    },
    async setOrder() {
      this.order = await getOrderByIdRequest(localStorage.getItem('orderId'))
    },
    async searchProducts() {
      if (!this.$route.query?.query) {
        await this.$router.push({
          path: '/'
        })
      }
      const data = await searchProductsRequest({
        query: this.$route.query.query,
        userId: localStorage.getItem("userId"),
        page: this.activePage,
        size: this.maxSize,
        sort: this.activeSort,
        inStock: this.inStockFilter
      })
      this.categories = data.categories
      this.productsData = data.products
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
.search {
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
}
</style>
