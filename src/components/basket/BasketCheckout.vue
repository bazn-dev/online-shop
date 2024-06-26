<template>
  <div class="basket-checkout">
    <div class="basket-checkout__wrapper d-lg-flex justify-content-between">
      <div>
        <label for="promoInput" class="form-label">Введите код купона для скидки:</label>
        <div class="input-group">
          <input
            v-model="promoCode"
            type="text"
            id="promoInput"
            class="basket-checkout__promo-input form-control"
            aria-describedby="promo-button"
            :disabled="order?.promotionInfo?.promocode"
            @keydown.enter="addPromo"
          />
          <button
            type="button"
            id="promo-button"
            class="basket-checkout__promo-btn btn"
            :disabled="order?.promotionInfo?.promocode"
            @click="addPromo"
          >
            <Icon name="arrow-left" class="basket-checkout__promo-icon" />
          </button>
        </div>
        <div v-if="order?.promotionInfo?.discountPercentage" class="d-flex justify-content-between align-items-center">
          <div>Скидка: <b>{{ order?.promotionInfo?.discountPercentage }}</b></div>
          <div
            class="basket-checkout__promo-remove"
            @click="deletePromo"
          >
            Удалить промокод
          </div>
        </div>
      </div>
      <div class="basket-checkout__total-wrapper d-md-flex align-items-center">
        <div class="d-flex align-items-center">
          <div class="basket-checkout__total">
            <div class="basket-checkout__total-title">Итого:</div>
          </div>
          <div class="basket-checkout__total-price-wrapper">
            <div class="--total">
              {{ order?.promotionInfo?.promocode || order?.totalAmount !== order?.totalAmountWithDiscount ? order?.totalAmountWithDiscount : order?.totalAmount || 0 }} руб.
            </div>
            <div v-if="order?.promotionInfo?.promocode || order?.totalAmount !== order?.totalAmountWithDiscount" class="--old-price">
              {{ order?.totalAmount || 0 }} руб.
            </div>
            <div v-if="order?.promotionInfo?.promocode || order?.totalAmount !== order?.totalAmountWithDiscount" class="--discount">
              Экономия {{ (order.totalAmount - order.totalAmountWithDiscount).toFixed(1) || 0 }} руб.
            </div>
          </div>
        </div>
        <button
          class="basket-checkout__button btn btn-primary btn-lg"
          @click="goToOrder"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  addPromo as addPromoRequest,
  deletePromo as deletePromoRequest,
} from '@/api/orders'
import Icon from '../common/Icon.vue'

export default {
  name: "BasketCheckout",
  components: {
    Icon
  },
  props: {
    order: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      promoCode: ''
    }
  },
  watch: {
    order(val) {
      this.promoCode = val?.promotionInfo?.promocode ?? ''
    }
  },
  beforeMount() {
    this.promoCode = this.order?.promotionInfo?.promocode ?? ''
  },
  methods: {
    async addPromo() {
      if (this.order?.promotionInfo?.promocode) {
        return
      }

      if (this.promoCode) {
        try {
          await addPromoRequest({
            orderId: this.order.id,
            promoCode: this.promoCode
          })
        } catch (e) {
          this.$toasted.show(e.response.data.promoCode, { type: 'error', duration: 3000 })
        }
        this.$emit('updateOrder')
      }
    },
    async deletePromo() {
      await deletePromoRequest({
        orderId: this.order.id,
        promoCode: this.promoCode
      })
      this.promoCode = ''
      this.$emit('updateOrder')
    },
    goToOrder() {
      this.$router.push({
        name: 'order'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .basket-checkout {
    padding: 24px 29px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #ececec;
    margin-bottom: 20px;
    box-sizing: border-box;

    &__wrapper {
      box-sizing: border-box;
    }

    &__promo-input {
      border-right: none;

      &:focus,
      &:visited,
      &:active {
        border-right: none !important;
      }
    }

    &__promo-btn {
      border: 1px solid #dee2e6;
      border-left: none;
    }

    &__promo-icon {
      position: relative;
      top: -2px;

      ::v-deep svg {
        transform: rotate(180deg);
      }

      &:hover {
        ::v-deep svg path {
          fill: #333;
        }
      }
    }

    &__promo-remove {
      font-size: 12px;
      color: #cb0000;
      margin-top: 5px;
      text-decoration: underline;
      cursor: pointer;
    }

    &__total-wrapper {
      @media (max-width: 991px) {
        margin-top: 20px;
      }
    }

    &__total-title {
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      color: #2f3435;
    }

    &__total-text {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: #a1a1a1;
    }

    &__total-price-wrapper {
      margin-left: 37px;
      margin-right: 60px;

      @media (max-width: 767px) {
        font-size: 20px;
        margin-right: 0;
      }

      & .--total {
        font-size: 26px;
        font-weight: 700;
        line-height: 36px;
        color: #2f3435;
      }

      & .--old-price {
        font-size: 16px;
        color: #999;
        text-decoration: line-through;
      }

      & .--discount {
        font-size: 11px;
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

    &__button {
      font-size: .733em;
      line-height: 1.3em;
      text-transform: uppercase;
      letter-spacing: .8px;
      padding: 16px 26px;
      background-color: #d6810b;
      border-color: #d6810b;
      border-radius: 3px;

      @media (max-width: 767px) {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
</style>
