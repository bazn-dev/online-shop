<template>
  <div class="product">
    <div v-if="product" class="product__wrapper maxwidth-theme">
      <h1 class="product__title">{{ product.name }}</h1>

      <nav class="product__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Главная</a></li>
          <li class="breadcrumb-item"><a href="#">Чай</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.name }}</li>
        </ol>
      </nav>

      <div class="product__block">
        <div class="product__block__main">
          <div class="product__block-content --mobile">
            <ProductCardSlider :product="product" />

            <div class="product__block__sidebar --mobile d-lg-none">
              <ProductInfo :product="product" />
            </div>
          </div>

          <ul class="product__block__main__tabs nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Описание</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Отзывы(4)</a>
            </li>
          </ul>

          <ProductDescription :product="product" />
<!--          <ProductReviews />-->
        </div>
        <div class="product__block__sidebar d-none d-lg-block">
          <ProductInfo :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductByVendorCode } from '@/api/products'
import ProductCardSlider from '../components/product/ProductCardSlider'
import ProductDescription from '../components/product/ProductDescription'
// import ProductReviews from '../components/product/ProductReviews'
import ProductInfo from '../components/product/ProductInfo'

export default {
  name: "product",
  components: {
    ProductCardSlider,
    ProductDescription,
    // ProductReviews,
    ProductInfo
  },
  data() {
    return {
      product: null
    }
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
    async initData() {
      this.product = await getProductByVendorCode(this.$route.params.vendorCode)
      console.log("product", this.product)
    }
  }
}
</script>

<style scoped lang="scss">
  .product {
    padding: 60px 0;
    background-color: #ffffff;
    box-sizing: border-box;

    &__wrapper {
      max-width: 1408px;
      box-sizing: border-box;
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
      display: flex;
      justify-content: space-between;

      @media (max-width: 991px) {
        display: block;
      }

      &__main {
        width: calc(100% - 345px);

        @media (max-width: 991px) {
          width: 100%;
        }

        &__tabs {
          margin-top: 2.133rem;
          margin-bottom: 39px !important;

          & .nav-link {
            font-size: .733em;
            line-height: 1.3em;
            text-transform: uppercase;
            letter-spacing: .8px;
            color: #333333;
            padding: 16px 24px 15px;
            border-radius: 3px !important;
            background: #fafafa;
            border: 1px solid #ececec;
            margin: 3px;

            &.active {
              background: #ffffff;
              border-top: 2px solid #978d7f;
            }
          }
        }
      }

      &__sidebar {
        width: 305px;

        &.--mobile {
          max-width: 300px;
          margin: 30px auto 0;
        }
      }
    }

    &__block-content {
      &.--mobile {
        @media (max-width: 991px) {
          border: 1px solid #ececec;
          border-radius: 3px;
        }
      }
    }
  }
</style>
