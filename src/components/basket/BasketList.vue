<template>
  <div class="basket-list">
    <div class="basket-list__header d-md-flex justify-content-between">
      <div>
        <input
          v-model="search"
          type="text"
          class="form-control"
          placeholder="Фильтр"
        >
      </div>
      <div class="basket-list__info-wrapper d-flex align-items-center">
        <div class="basket-list__total-price">В корзине {{ entries.length }} товар</div>
        <button
          class="basket-list__clear-button btn btn-link"
          @click="deleteAllProductsFromOrder"
        >
          Очистить
        </button>
      </div>
    </div>
    <ul class="basket-list__items">
      <li
        v-for="entry in displayedEntries"
        :key="`entry.${entry.productDto.vendorCode}`"
        class="basket-list__item row"
      >
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <img :src="getImage(entry.productDto.smallImageUrl)" class="basket-list__item-image img-fluid"  alt="">
            </div>
            <div class="basket-list__item-title col-lg-8 col-md-8">
              {{ entry.productDto.name }}
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-3 col-md-3">
              <div class="basket-list__item-price">
                {{ entry.productDto.price !== entry.priceWithDiscount ? entry.priceWithDiscount : entry.productDto.price }} руб.
              </div>
              <div v-if="entry.productDto.price !== entry.priceWithDiscount" class="basket-list__item-price --old-price">
                {{ entry.productDto.price }} руб.
              </div>
              <div class="basket-list__item-price-notion">
                цена за 1 шт
              </div>
            </div>
            <div class="col-lg-5 col-md-5">
              <div class="basket-list__item-change-count-wrapper">
                <div class="basket-list__item-change-count col-sm-6 row">
                  <div
                    class="col-sm-4 d-flex justify-content-center align-items-center"
                    @click="decrementCount(entry.productDto.vendorCode)"
                  >
                    -
                  </div>
                  <div
                    class="col-sm-4 d-flex justify-content-center align-items-center"
                  >
                    {{ entry.qty }}
                  </div>
                  <div
                    class="col-sm-4 d-flex justify-content-center align-items-center"
                    @click="incrementCount(entry.productDto.vendorCode)"
                  >
                    +
                  </div>
                </div>
                <div class="basket-list__item-change-count-notion">шт</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="basket-list__item-price">{{ entry.totalPriceWithDiscount }} руб.</div>
              <template v-if="entry.totalPriceWithDiscount !== entry.totalPrice">
                <div class="basket-list__item-price --old-price">{{ entry.totalPrice }} руб.</div>
                <div class="basket-list__item-price --discount">Экономия {{ entry.totalPrice - entry.totalPriceWithDiscount }} руб.</div>
              </template>
            </div>
            <div class="col-lg-1 col-md-1">
              <div
                class="basket-list__item-clear"
                @click="deleteProductFromOrder(entry.productDto.vendorCode)"
              >
                <Icon name="close" />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  addProductToOrder as addProductToOrderRequest,
  deleteProductFromOrder as deleteProductFromOrderRequest,
  deleteAllProductsFromOrder as deleteAllProductsFromOrderRequest,
} from '@/api/orders'
import Icon from '@/components/common/Icon'

export default {
  name: "BasketList",
  components: {
    Icon
  },
  props: {
    entries: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      search: '',
      isLoadingChangeCount: false
    }
  },
  computed: {
    displayedEntries() {
      return this.entries.filter(entry => entry.productDto.name.includes(this.search))
    }
  },
  methods: {
    async incrementCount(vendorCode) {
      if (this.isLoadingChangeCount) {
        return
      }
      this.isLoadingChangeCount = true
      const currentCount = this.entries.find(entry => entry.productDto.vendorCode === vendorCode).qty
      await addProductToOrderRequest({
        orderId: Number(localStorage.getItem('orderId')),
        productVendorCode: vendorCode,
        qty: currentCount + 1
      })
      this.$emit('updateOrder')
      this.isLoadingChangeCount = false
    },
    async decrementCount(vendorCode) {
      if (this.isLoadingChangeCount) {
        return
      }
      const currentCount = this.entries.find(entry => entry.productDto.vendorCode === vendorCode).qty
      if (currentCount > 1) {
        this.isLoadingChangeCount = true
        await addProductToOrderRequest({
          orderId: Number(localStorage.getItem('orderId')),
          productVendorCode: vendorCode,
          qty: currentCount - 1
        })
        this.$emit('updateOrder')
      }
      this.isLoadingChangeCount = false
    },
    async deleteProductFromOrder(vendorCode) {
      if (this.isLoadingChangeCount) {
        return
      }
      this.isLoadingChangeCount = true
      await deleteProductFromOrderRequest({
        orderId: Number(localStorage.getItem('orderId')),
        productVendorCode: vendorCode
      })
      this.$emit('updateOrder')
      this.isLoadingChangeCount = false
    },
    async deleteAllProductsFromOrder() {
      if (this.isLoadingChangeCount) {
        return
      }
      this.isLoadingChangeCount = true
      await deleteAllProductsFromOrderRequest({
        orderId: Number(localStorage.getItem('orderId'))
      })
      this.$emit('updateOrder')
      this.isLoadingChangeCount = false
    },
    getImage(link) {
      return link === 'ссылка'
        ? require('@/assets/img/catalog/product.webp')
        : `http://178.172.201.242${link}`
    }
  }
}
</script>

<style scoped lang="scss">
.basket-list {
  border-radius: 3px;
  border: 1px solid #ececec;
  background: #ffffff;
  box-sizing: border-box;

  &__header {
    padding: 24px 29px;
    background: #fafafa;
    border-bottom: 1px solid #ececec;
    box-sizing: border-box;
  }

  &__clear-button {
    margin-left: 70px;

    @media (max-width: 450px) {
      margin-left: 0;
      margin-top: 15px;
    }
  }

  &__total-price {
    position: relative;
    font-size: 13px;
    font-weight: 400;
    color: #222;

    &:before {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      height: 2px;
      background: #d6810b;
    }
  }

  &__info-wrapper {
    @media (max-width: 767px) {
      margin-top: 20px;
      justify-content: space-around;
    }

    @media (max-width: 450px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__item {
    padding: 24px 29px !important;

    &:not(:last-child) {
      border-bottom: 1px solid #f2f2f2;
    }
  }

  &__item-title {
    font-size: 1em;
    color: #2f3435;
  }

  &__item-price {
    font-size: 17px;
    font-weight: 700;
    color: #333;
    letter-spacing: -.33px;

    &.--old-price {
      font-size: 13px;
      font-weight: 400;
      color: #999;
      text-decoration: line-through;
    }

    &.--discount {
      font-size: 11px;
      font-weight: 400;
      line-height: 12px;
      color: #333;
      padding: 2px 4px;
      background: #fff8db;
      border: 1px solid #ffd83a;
      border-radius: 3px;
      white-space: nowrap;
      margin: 7px 0 0;
      width: max-content;
    }
  }

  &__item-price-notion {
    font-size: 11px;
    color: #999;
  }

  &__item-change-count-wrapper {
    width: 100px;
  }

  &__item-change-count {
    width: 100%;
    height: 32px;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    background: #f8f8f8;

    div:nth-child(1),
    div:nth-child(3) {
      font-size: 15px;
      color: #777;
      cursor: pointer;
    }
  }

  &__item-change-count-notion {
    font-size: 12px;
    line-height: 14px;
    color: #a1a1a1;
    text-align: center;
  }

  &__item-clear {
    position: relative;
    top: -15px;
    cursor: pointer;

    ::v-deep .icon svg {
      width: 8px;
      height: 8px;
    }

    ::v-deep .icon svg path {
      fill: #b8b8b8;
    }

    &:hover {
      ::v-deep .icon svg path {
        fill: #d6810b;
      }
    }
  }
}
</style>
