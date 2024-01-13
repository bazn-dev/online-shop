<template>
  <div class="order-main">
    <OrderProductList :entries="order.entries" />
    <OrderCustomerTypeRegion />
    <div class="row d-flex align-items-stretch">
      <div class="col-md-6">
        <OrderDeliveryMethod :deliveryModes="deliveryModes" />
      </div>
      <div class="col-md-6">
        <OrderPaymentMethod :paymentModes="paymentModes" />
      </div>
    </div>
    <OrderCustomerInfo />

    <div class="order-main__footer">
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Я согласен на <router-link to="license" target="_blank">обработку персональных данных</router-link></label>
      </div>

      <button class="order-main__submit-button btn btn-primary btn-lg">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import OrderProductList from "@/components/order/OrderProductList"
import OrderCustomerTypeRegion from "@/components/order/OrderCustomerTypeRegion";
import OrderDeliveryMethod from "@/components/order/OrderDeliveryMethod";
import OrderPaymentMethod from "@/components/order/OrderPaymentMethod";
import OrderCustomerInfo from "@/components/order/OrderCustomerInfo";

export default {
  name: "OrderMain",
  components: {
    OrderProductList,
    OrderCustomerTypeRegion,
    OrderDeliveryMethod,
    OrderPaymentMethod,
    OrderCustomerInfo,
  },
  props: {
    order: {
      type: Object,
      default: () => null
    },
    deliveryModes: {
      type: Array,
      default: () => []
    },
    paymentModes: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
  .order-main {
    &__footer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__submit-button {
      margin-top: 25px;
      padding: 16px 26px;
      font-size: 11px;
      letter-spacing: .8px;
      color: #fff;
      background: #978d7f;
      border-color: #978d7f;
      border-radius: 3px;
      text-transform: uppercase;
    }
  }
</style>
