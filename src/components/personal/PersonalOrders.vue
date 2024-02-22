<template>
  <div class="personal-orders">
    <div class="personal-orders__wrapper d-flex flex-column">
      <h3 class="personal-orders__title">Заказы в статусе «{{ orders?.[0]?.orderStatus }}»</h3>

      <div
          v-for="order in orders"
          :key="`order.${order.id}`"
          class="personal-orders__order"
      >
        <div class="personal-orders__order-header d-flex justify-content-between">
          <div class="personal-orders__order-title">Заказ № {{ order.id }} от {{ formatDateTime(order.creationDate) }}, {{ order.entries.length }} товар на сумму
            {{ order.totalAmountWithDiscount }} руб.</div>
<!--          <div class="personal-orders__order-status">-->
<!--            <span>Заказ выполнен</span>-->
<!--            <span>23.01.2024</span>-->
<!--          </div>-->
        </div>
        <div class="personal-orders__order-footer d-flex justify-content-between">
          <button
            class="personal-orders__order-footer-btn --covered btn btn-lg"
            @click="toOrder(order.id)"
          >
            Подробнее о заказе
          </button>
          <button class="personal-orders__order-footer-btn --outlined btn btn-lg">Повторить заказ</button>
        </div>
      </div>

      <a href="#" class="personal-orders__link">Перейти в каталог</a>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "PersonalOrders",
  props: {
    orders: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatDateTime(dateTime) {
      return moment(dateTime).format('DD.MM.YYYY HH:mm:ss')
    },
    async toOrder(id) {
      await this.$router.push({
        path: `/personal?tab=orders-history&orderId=${id}`
      })
      await this.$router.go(0)
    }
  }
}
</script>

<style scoped lang="scss">
  .personal-orders {
    width: calc(100% - 284px);

    &__title {
      font-size: 1.6em;
      font-weight: 400;
      line-height: 1.126em;
      margin-bottom: 25px;
    }

    &__order {
      border: 1px solid #f2f2f2;
      margin-bottom: 35px;
    }

    &__order-header {
      padding: 20px;
      background: #f7f7f7;
    }

    &__order-title {
      font-size: 16px;
      font-weight: 700;
      color: #383838;
    }

    &__order-status {
      font-size: 14px;
      font-weight: 400;
      color: #777;

      span:first-child {
        padding-right: 10px;
      }
    }

    &__order-footer {
      padding: 20px;
    }

    &__order-footer-btn {
      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
      margin: 0;
      border-radius: 3px;
      padding: 7px 18px 9px;
      cursor: pointer;

      &.--covered {
        background-color: #978d7f;
        border: 1px solid #978d7f;
        color: #ffffff;

        &:hover {
          background: #a59c90;
        }
      }

      &.--outlined {
        border: 1px solid #978d7f;
        color: #978d7f;

        &:hover {
          background-color: #978d7f;
          border-color: #978d7f;
          color: #ffffff;
        }
      }
    }

    &__link {
      font-size: 13px;
      font-weight: 700;
      color: #978d7f;
      margin-bottom: 18px;
      text-decoration: none;
    }
  }
</style>
