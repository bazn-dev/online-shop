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
          />
          <button
            type="button"
            id="promo-button"
            class="basket-checkout__promo-btn btn"
            @click="addPromo"
          >
            <Icon name="arrow-left" class="basket-checkout__promo-icon" />
          </button>
        </div>
      </div>
      <div class="basket-checkout__total-wrapper d-md-flex align-items-center">
        <div class="d-flex align-items-center">
          <div class="basket-checkout__total">
            <div class="basket-checkout__total-title">Итого:</div>
            <div class="basket-checkout__total-text">Сумма НДС: 0 руб.</div>
          </div>
          <div class="basket-checkout__total-price">{{ order?.totalAmount || 0 }} руб.</div>
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
  addPromo as addPromoRequest
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
  methods: {
    async addPromo() {
      console.log(this.promoCode)
      if (this.promoCode) {
        await addPromoRequest({
          orderId: this.order.id,
          promoCode: this.promoCode
        })
      }
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

    &__total-wrapper {
      @media (max-width: 991px) {
        margin-top: 20px;
      }
    }

    &__total {
      padding-top: 25px;
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

    &__total-price {
      font-size: 26px;
      font-weight: 700;
      line-height: 36px;
      color: #2f3435;
      margin-left: 37px;
      margin-right: 60px;

      @media (max-width: 767px) {
        font-size: 20px;
        margin-right: 0;
      }
    }

    &__button {
      font-size: .733em;
      line-height: 1.3em;
      text-transform: uppercase;
      letter-spacing: .8px;
      padding: 16px 26px;
      background-color: #978d7f;
      border-color: #978d7f;
      border-radius: 3px;

      @media (max-width: 767px) {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
</style>
