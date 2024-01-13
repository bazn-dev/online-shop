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
              <ProductInfo
                :product="product"
                :alreadyInBasket="alreadyInBasket"
                @addToCart="addProductToOrder"
              />
            </div>
          </div>

          <ul class="product__block__main__tabs nav nav-pills">
            <li
              v-for="tab in tabs"
              :key="`tab.${tab.name}`"
              class="nav-item"
              @click="setActiveTab(tab.name)"
            >
              <div
                class="nav-link"
                :class="{ 'active': isActiveTab(tab.name) }"
              >
                {{ tab.title }}
              </div>
            </li>
          </ul>

          <ProductDescription v-if="isActiveTab('description')" :product="product" />
          <ProductReviews  v-else-if="isActiveTab('reviews')"/>
        </div>
        <div class="product__block__sidebar d-none d-lg-block">
          <ProductInfo
            :product="product"
            :alreadyInBasket="alreadyInBasket"
            @addToBasket="addProductToOrder"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductByVendorCode as getProductByVendorCodeRequest } from '@/api/products'
import {
  addProductToOrder as addProductToOrderRequest,
  getOrderById as getOrderByIdRequest,
} from '@/api/orders'
import ProductCardSlider from '../components/product/ProductCardSlider'
import ProductDescription from '../components/product/ProductDescription'
import ProductReviews from '../components/product/ProductReviews'
import ProductInfo from '../components/product/ProductInfo'

export default {
  name: "product",
  components: {
    ProductCardSlider,
    ProductDescription,
    ProductReviews,
    ProductInfo
  },
  data() {
    return {
      order: null,
      product: null,
      tabs: [
        {
          name: 'description',
          title: 'Описание'
        },
        {
          name: 'reviews',
          title: 'Отзывы(4)'
        }
      ],
      activeTab: 'description'
    }
  },
  computed: {
    alreadyInBasket() {
      return this.order?.entries
        .map(product => product.productDto.vendorCode)
        .find(item => item === this.$route.params.vendorCode) !== undefined;
    }
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
    async initData() {
      this.order = await getOrderByIdRequest(localStorage.getItem('orderId'))
      this.product = await getProductByVendorCodeRequest(this.$route.params.vendorCode)
    },
    async addProductToOrder(count) {
      await addProductToOrderRequest({
        order: localStorage.getItem('orderId'),
        productVendorCode: this.$route.params.vendorCode,
        qty: count
      })
    },

    isActiveTab(tab) {
      return this.activeTab === tab
    },
    setActiveTab(tab) {
      this.activeTab = tab
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

          .nav-item {
            cursor: pointer;
          }

          .nav-link {
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
