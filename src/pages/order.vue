<template>
  <div class="order">
    <div class="order__wrapper maxwidth-theme">
      <h1 class="order__title">Оформление заказа</h1>

      <nav class="order__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Главная</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Оформление заказа</li>
        </ol>
      </nav>

      <div class="order__block row">
        <div class="order__main-block col-lg-9 col-md-12 order-lg-1 order-md-2 order-sm-2 order-xs-2">
          <OrderMain
            :order="order"
            :deliveryModes="deliveryModes"
            :paymentModes="paymentModes"
          />
        </div>
        <div class="order__sidebar-block col-lg-3 col-md-12 order-lg-2 order-md-1 order-sm-1 order-xs-1">
          <OrderTotalSidebar :order="order" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getOrderById as getOrderByIdRequest,
  getDeliveryModes as getDeliveryModesRequest,
  getPaymentModes as getPaymentModesRequest,
} from '@/api/orders'
import OrderMain from '../components/order/OrderMain'
import OrderTotalSidebar from '../components/order/OrderTotalSidebar'

export default {
  name: "order",
  components: {
    OrderMain,
    OrderTotalSidebar
  },
  data() {
    return {
      order: null,
      deliveryModes: [],
      paymentModes: []
    }
  },
  async beforeMount() {
    await this.getOrderById()
    await this.getDeliveryModes()
    await this.getPaymentModes()
  },
  methods: {
    async getOrderById() {
      this.order = await getOrderByIdRequest(localStorage.getItem('orderId'))
    },
    async getDeliveryModes() {
      this.deliveryModes = await getDeliveryModesRequest()
    },
    async getPaymentModes() {
      this.paymentModes = await getPaymentModesRequest()
    },
  }
}
</script>

<style scoped lang="scss">
.order {
  padding: 60px 0;
  background-color: #ffffff;
  box-sizing: border-box;

  &__wrapper {
    max-width: 1408px;
    box-sizing: border-box;
  }

  &__title {
    font-size: 2.133em;
    font-weight: 400;
    color: #333333;
    line-height: 1.126em;
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

  }

  &__main-block {
    padding-right: 16px !important;

    @media (max-width: 991px) {
      padding-right: 0 !important;
    }
  }

  &__sidebar-block {
    padding-left: 16px !important;

    @media (max-width: 991px) {
      padding-left: 0 !important;
      margin-bottom: 20px;
    }
  }
}
</style>
