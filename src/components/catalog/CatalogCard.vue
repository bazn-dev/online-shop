<template>
  <div class="catalog-card col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6">
    <div
        class="catalog-card__content card"
        @click="goToProductPage"
    >
      <div class="catalog-card__card-image-wrapper">
        <div class="catalog-card__card-labels">
          <div
            v-for="(sticker, index) in product.stickers"
            :key="`product.sticker.${index}`"
            class="catalog-card__card-label"
          >
            {{ sticker.name }}
          </div>
        </div>
        <img :src="image" class="catalog-card__card-image img-fluid"  alt="">
      </div>
      <div class="catalog-card__card-info">
        <div class="catalog-card__card-info-rating d-flex align-items-center">
          <Icon
            v-for="item in 5"
            :key="`catalog-product-stars.${item}`"
            :name="item <= product.totalRating ? 'star-fill' : 'star-empty'"
          />
          <span
            v-if="product.totalRating > 0"
            class="catalog-card__card-info-rating-value"
          >
            {{ product.totalRating }}/5
          </span>
        </div>
        <div class="catalog-card__card-info-title">{{ product.name }}</div>
        <div class="catalog-card__card-info-additional">
          <div class="catalog-card__card-info-count">
            <div
              class="catalog-card__card-info-count-indicator"
              :class="{'--danger': !product.inStock}"
            ></div>
            <div v-if="product.inStock">Много</div>
            <div v-else>Нет в наличии</div>
          </div>
          <div class="catalog-card__card-info-additional-text">
            Арт.: {{ product.vendorCode }}
          </div>
        </div>
        <div class="catalog-card__card-info-price">
          {{ product.priceWithDiscount > 0 ? product.priceWithDiscount : product.price }} руб.
        </div>
        <div class="catalog-card__card-info-price --old-price">
          {{ product.priceWithDiscount > 0 ? product.price + ' руб.' : '' }}
        </div>
      </div>
    </div>
    <div class="catalog-card__card-more">
      <div v-if="alreadyInBasket">
        <div class="catalog-card__card-more-btn col-sm-12" @click="goToBasket">
          <Icon name="check" /> В корзинe
        </div>
      </div>
      <div v-else class="row">
        <div
          class="catalog-card__card-more-count col-sm-6 row"
          :class="{'--disabled': !product.inStock}"
        >
          <div
            class="col-sm-4 d-flex justify-content-center align-items-center"
            @click="decrementCount"
          >
            <Icon name="minus" />
          </div>
          <div class="col-sm-4 d-flex justify-content-center align-items-center">{{ count }}</div>
          <div
            class="col-sm-4 d-flex justify-content-center align-items-center"
            @click="incrementCount"
          >
            <Icon name="plus" />
          </div>
        </div>
        <div
          class="catalog-card__card-more-btn col-sm-6"
          :class="{'--disabled': !product.inStock}"
          @click="addProductToOrder"
        >
          В корзину
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/common/Icon';

export default {
  name: "CatalogCard",
  components: {
    Icon
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    },
    alreadyInBasket: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      count: 1
    }
  },
  computed: {
    image() {
      return this.product.smallImageUrl === 'ссылка'
          ? require('@/assets/img/catalog/product.webp')
          : `http://178.172.201.242${this.product.smallImageUrl}`
    }
  },
  methods: {
    incrementCount() {
      if (!this.product.inStock) {
        return
      }
      this.count++;
    },
    decrementCount() {
      if (!this.product.inStock) {
        return
      }
      if (this.count > 1) {
        this.count--;
      }
    },
    goToProductPage() {
      this.$router.push({
        name: 'product',
        params: {
          vendorCode: this.product.vendorCode
        },
        query: {
          from: this.$route.path
        }
      });
    },
    addProductToOrder() {
      if (!this.product.inStock) {
        return
      }
      this.$emit("addToOrder", {
        productVendorCode: this.product.vendorCode,
        count: this.count
      });
    },
    goToBasket() {
      this.$router.push({
        name: 'basket'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .catalog-card {
    position: relative;
    transition: box-shadow ease-out .2s;

    @media (min-width: 992px) {
      &:hover {
        box-shadow: 0 0 20px 0 rgba(0,0,0,.15);
        z-index: 2;

        .catalog-card__card-more {
          visibility: visible;
          box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.1);
        }
      }
    }

    &__content {
      padding-top: 25px;
      padding-bottom: 10px;
      margin: 0 0 -1px -1px;
      border-radius: 0;
      border: 1px solid #ececec;
      cursor: pointer;
    }

    &__card {
      &-image-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        padding-left: 25px;
        padding-right: 25px;
      }

      &-labels {
        position: absolute;
        left: 25px;
        display: flex;
        flex-wrap: wrap;
        width: calc(100% - 30px);
      }

      &-label {
        position: relative;
        font-size: .8em;
        line-height: 1.692em;
        color: #ffffff;
        margin: 0 5px 10px 2px;
        padding: 2px 7px;
        background: #716f6e;
        border-radius: 2px;
        white-space: nowrap;

        &:after {
          position: absolute;
          left: -2px;
          top: calc(100% + 4px);
          content: "";
          width: 10px;
          height: 10px;
          display: block;
          margin: -7px 2px 4px;
          border: 10px solid transparent;
          border-left: 12px solid #716f6e;
          border-top: 0 solid #716f6e;
        }
      }

      &-info {
        padding-left: 25px;
        padding-right: 25px
      }

      &-info-rating {
        margin-bottom: 5px;

        i:not(:last-child) {
          margin-right: 2px;
        }

        &-value {
          padding-top: 5px;
          font-size: .8em;
          line-height: 1.692em;
          font-weight: bold;
          color: #777;
          margin-left: 10px;
        }
      }

      &-info-title {
        font-size: .933em;
        line-height: 1.5em;
        color: #333333;
        height: 65px;
        margin-bottom: 7px;
      }

      &-info-additional {
        display: flex;
        font-size: .8em;
        line-height: .8em;
      }

      &-info-count {
        display: flex;
        align-items: center;
      }

      &-info-count-indicator {
        width: 5px;
        height: 5px;
        background-color: #5fa800;
        border-radius: 100%;
        margin-right: 8px;

        &.--danger {
          background-color: #e10000;
        }
      }

      &-info-additional-text {
        margin-left: 16px;
      }

      &-info-price {
        font-size: 1.133em;
        line-height: 1.454em;
        font-weight: 700;
        color: #333333;
        margin-top: 7px;

        &.--old-price {
          height: 20px;
          font-size: 12px;
          line-height: 20px;
          color: #777;
          text-decoration: line-through;
          margin-top: 0;
        }
      }

      &-more {
        visibility: hidden;
        position: absolute;
        top: 100%;
        width: 100%;
        transition: display ease-out .2s;
      }

      &-more-btn {
        padding: 20px 30px 19px;
        background: #d6810b;
        font-size: .7333em;
        font-weight: 400;
        letter-spacing: .8px;
        color: #ffffff;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;

        &.--disabled {
          background: #e8c7a1;
          cursor: default;
        }

        ::v-deep .icon {
          position: relative;
          bottom: 1px;
          margin-right: 10px;
        }

        ::v-deep .icon path {
          fill: #ffffff !important;
        }
      }

      &-more-count {
        font-size: 13px;
        color: #333333;
        background: #ffffff;

        &.--disabled {
          div:nth-child(1),
          div:nth-child(3) {
            opacity: 0.8;
            cursor: default;
          }
        }

        div:nth-child(1),
        div:nth-child(3) {
          cursor: pointer;
        }
      }
    }
  }
</style>
