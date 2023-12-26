<template>
  <div class="product-info">
    <div class="product-info__price">{{ product.price }} руб.</div>
    <div v-if="product.inStock" class="product-info__count">
      <div class="product-info__count-indicator"></div>
      <div class="product-info__count-text">Много</div>
    </div>
    <div class="d-flex align-items-center">
      <div class="product-info__change-count col-sm-6 row">
        <div class="col-sm-4 d-flex justify-content-center align-items-center">
          <Icon name="minus" />
        </div>
        <div class="col-sm-4 d-flex justify-content-center align-items-center">1</div>
        <div class="col-sm-4 d-flex justify-content-center align-items-center">
          <Icon name="plus" />
        </div>
      </div>
      <button type="button" class="product-info__basket-btn btn btn-lg">В корзину</button>
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

    &__count {
      display: flex;
      align-items: center;
      margin-top: 5px;
      margin-bottom: 18px;
    }

    &__count-indicator {
      width: 6px;
      height: 6px;
      background-color: #5fa800;
      border-radius: 100%;
      margin-right: 8px;
    }

    &__count-text {
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
    }

    &__characteristics {
      margin-top: 25px;
      margin-bottom: 30px;
    }

    &__characteristics-title {
      margin-bottom: 10px;
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
