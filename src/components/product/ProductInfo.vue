<template>
  <div class="product-info">
    <div class="product-info__price">{{ product.price }} руб.</div>
    <div v-if="product.inStock" class="product-info__availability">
      <div class="product-info__availability-indicator"></div>
      <div class="product-info__availability-text">Много</div>
    </div>
    <div class="d-flex align-items-center">
      <button
        v-if="alreadyInBasket"
        type="button"
        class="product-info__basket-btn --full-width btn btn-lg"
        @click="goToCart"
      >
        <Icon name="check" /> В корзине
      </button>
      <template v-else>
        <div class="product-info__change-count col-sm-6 row">
          <div
            class="col-sm-4 d-flex justify-content-center align-items-center"
            @click="decrementCount"
          >
            <Icon name="minus" />
          </div>
          <div class="col-sm-4 d-flex justify-content-center align-items-center">
            {{ count }}
          </div>
          <div
            class="col-sm-4 d-flex justify-content-center align-items-center"
            @click="incrementCount"
          >
            <Icon name="plus" />
          </div>
        </div>
        <button
          type="button"
          class="product-info__basket-btn btn btn-lg"
          @click="addToBasket"
        >
          В корзину
        </button>
      </template>
    </div>

    <div class="product-info__characteristics">
      <div class="product-info__characteristics-title">Характеристики</div>
      <ul class="product-info__characteristics-list">
        <li v-for="charKey in Object.keys(product.characteristics)" :key="charKey" class="product-info__characteristics-item">
          <div class="product-info__characteristics-item-text">
            {{ charKey }} —
          </div>
          <div class="product-info__characteristics-item-value">
            {{ product.characteristics[charKey] }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/common/Icon'

export default {
  name: "ProductInfo",
  components: {
    Icon
  },
  props: {
    product: {
      type: Object,
      default: () => null
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
  methods: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addToBasket() {
      this.$emit('addToBasket', this.count)
    },
    goToCart() {
      this.$router.push({
        name: 'basket'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .product-info {
    &__price {
      font-size: 1.733em;
      line-height: 1.454em;
      font-weight: 700;
      color: #333333;
    }

    &__availability {
      display: flex;
      align-items: center;
      margin-top: 5px;
      margin-bottom: 18px;
    }

    &__availability-indicator {
      width: 6px;
      height: 6px;
      background-color: #5fa800;
      border-radius: 100%;
      margin-right: 8px;
    }

    &__availability-text {
      font-size: 12px;
      line-height: 14px;
      color: #5fa800;
      border-bottom: 1px dotted #5fa800;
    }

    &__change-count {
      height: 50px;
      font-size: 13px;
      color: #333333;
      background: #fafafa;
      border-radius: 3px;
      border: 1px solid #eee;
      margin-right: 12px !important;

      div:nth-child(2) {
        pointer-events: none;
      }

      div:nth-child(1),
      div:nth-child(3) {
        cursor: pointer;
      }
    }

    &__basket-btn {
      font-size: .7333em;
      font-weight: 400;
      letter-spacing: .8px;
      border-radius: 3px;
      padding: 16px 26px;
      background-color: #978d7f;
      border-color: #978d7f;
      color: #ffffff;
      text-transform: uppercase;

      &.--full-width {
        width: 100%;
      }

      ::v-deep .icon {
        margin-right: 10px;
      }

      ::v-deep .icon path {
        fill: #ffffff;
      }
    }

    &__characteristics {
      margin-top: 25px;
      margin-bottom: 30px;
    }

    &__characteristics-title {
      margin-bottom: 10px;
      pointer-events: none;
    }

    &__characteristics-list {
      list-style-type: none;
    }

    &__characteristics-item {
      display: flex;
      font-size: .867em;
      line-height: 1.692em;
    }

    &__characteristics-item-text {
      margin-right: 5px;
      color: #999999;
      white-space: nowrap;
    }

    &__characteristics-item-value {
      color: #333333;
    }
  }
</style>
