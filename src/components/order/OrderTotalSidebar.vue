<template>
  <div class="order-total-sidebar">
    <div class="order-total-sidebar__header d-flex justify-content-between align-items-center">
      <div class="order-total-sidebar__title">Ваш заказ</div>
      <button
        class="btn btn-link"
        @click="goToBasket"
      >
        Изменить
      </button>
    </div>
    <div class="order-total-sidebar__body">
      <div class="order-total-sidebar__total-line d-flex justify-content-between">
        <div class="order-total-sidebar__total-line-text">Товаров на:</div>
        <div class="order-total-sidebar__total-line-value">
          <div>
            {{ order?.promotionInfo?.promocode || order?.totalAmount !== order?.totalAmountWithDiscount ? order?.totalAmountWithDiscount : order?.totalAmount || 0 }} руб.
          </div>
          <div
            v-if="order?.promotionInfo?.promocode || order?.totalAmount !== order?.totalAmountWithDiscount"
            class="--old-price"
          >
            {{ order?.totalAmount || 0 }} руб.
          </div>
        </div>
      </div>
      <div class="order-total-sidebar__total-line d-flex justify-content-between align-items-center">
        <div class="order-total-sidebar__total-line-text">Доставка:</div>
        <div
          class="order-total-sidebar__total-line-value"
          :class="{ '--free': !deliveryPrice }"
        >
          {{ deliveryPrice > 0 ? `${deliveryPrice} руб.` : 'бесплатно' }}
        </div>
      </div>
      <div v-if="discount" class="order-total-sidebar__total-line d-flex justify-content-between align-items-center">
        <div class="order-total-sidebar__total-line-text">Экономия:</div>
        <div class="order-total-sidebar__total-line-value">
          <span class="--discount">{{ discount }}</span>
        </div>
      </div>
    </div>
    <div class="order-total-sidebar__footer d-flex justify-content-between align-items-center">
      <div class="order-total-sidebar__total-text">Итого:</div>
      <div class="order-total-sidebar__total-value">
        {{ (order?.promotionInfo?.promocode || order?.totalAmount !== order?.totalAmountWithDiscount ? order?.totalAmountWithDiscount : order?.totalAmount || 0) + deliveryPrice }} руб.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderTotalSidebar",
  props: {
    order: {
      type: Object,
      default: () => null
    },
    deliveryPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    discount() {
      if (this.order?.promoCode || this.order.totalAmount !== this.order.totalAmountWithDiscount) {
        return `${(this.order.totalAmount - this.order.totalAmountWithDiscount).toFixed(1)} руб.`
      }
      return 0
    }
  },
  methods: {
    goToBasket() {
      this.$router.push({
        name: 'basket'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .order-total-sidebar {
    top: 90px;
    border: 1px solid #ececec;
    border-radius: 3px;

    &__header {
      padding: 20px 30px 25px;
      border-bottom: 1px solid #eaebec;
    }

    &__title {
      font-size: 18px;
      color: #333;
    }

    &__body {
      padding: 20px 30px 25px;
    }

    &__total-line {
      position: relative;

      &:not(:last-child) {
        margin-bottom: 12px;
      }

      &:before {
        content: "";
        position: absolute;
        top: 10.5px;
        left: 30px;
        right: 0;
        height: 1px;
        background: url(../../assets/img/dots.png) 0 0 repeat-x;
      }
    }

    &__total-line-text {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #777;
      padding-right: 12px;
      background: #fff;
      z-index: 1;
    }

    &__total-line-value {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #333;
      padding-left: 12px;
      background: #fff;
      z-index: 1;

      &.--free {
        color: #257210;
      }

      & .--discount {
        border: 1px solid #ffd83a;
        border-radius: 3px;
        background: #fff8db;
        padding: 0 5px;
      }

      & .--old-price {
        font-size: 12px;
        line-height: 20px;
        color: #777;
        text-decoration: line-through;
        text-align: right;
      }
    }

    &__footer {
      padding: 20px 30px 25px;
      border-top: 1px solid #eaebec;
    }

    &__total-text {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }

    &__total-value {
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;
      color: #333;
    }
  }
</style>
