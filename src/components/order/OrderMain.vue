<template>
  <div class="order-main">
    <OrderProductList
      :order="order"
      :entries="order?.entries"
      @updateOrder="updateOrder"
    />
<!--    <OrderCustomerTypeRegion />-->
    <div class="row d-flex align-items-stretch">
      <div class="col-md-6">
        <OrderDeliveryMethod
          ref="deliveryInfo"
          :deliveryModes="deliveryModes"
        />
      </div>
      <div class="col-md-6">
        <OrderPaymentMethod
          ref="paymentMethodInfo"
          :paymentModes="paymentModes"
        />
      </div>
    </div>
    <OrderCustomerInfo
      ref="customerInfo"
      @order="orderPlace"
    />

    <div class="order-main__footer">
      <div class="form-check form-switch">
        <input
          v-model="agree"
          class="form-check-input"
          type="checkbox"
          id="entityAgreeCheckbox"
        />
        <label class="form-check-label" for="entityAgreeCheckbox">Я согласен на <router-link to="license" target="_blank">обработку персональных данных</router-link></label>
      </div>
      <div v-if="!agree" class="invalid-feedback text-center">
        Согласитесь с условиями
      </div>

      <button
        class="order-main__submit-button btn btn-primary btn-lg"
        @click="orderPlace"
        :disabled="!agree"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script>
import {
  orderPlace as orderPlaceRequest,
} from '@/api/orders'
import OrderProductList from "@/components/order/OrderProductList"
// import OrderCustomerTypeRegion from "@/components/order/OrderCustomerTypeRegion";
import OrderDeliveryMethod from "@/components/order/OrderDeliveryMethod";
import OrderPaymentMethod from "@/components/order/OrderPaymentMethod";
import OrderCustomerInfo from "@/components/order/OrderCustomerInfo";
import { Events } from "../../events";

export default {
  name: "OrderMain",
  components: {
    OrderProductList,
    // OrderCustomerTypeRegion,
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
  },
  data() {
    return {
      agree: true
    }
  },
  methods: {
    async orderPlace() {
      if (!this.agree) {
        return
      }

      const activeDeliveryMode = this.$refs.deliveryInfo.$data.activeDeliveryMode
      const activePaymentMode = this.$refs.paymentMethodInfo.$data.activePaymentMode
      const isValidCustomerInfo = await this.$refs.customerInfo.$refs.validator.validate()

      if (isValidCustomerInfo && activeDeliveryMode && activePaymentMode) {
        const {
          newOrderId,
          placedOrderId,
          placedOrderDateTime
        } = await orderPlaceRequest({
          orderId: this.order.id,
          deliveryMode: this.$refs.deliveryInfo.$data.activeDeliveryMode,
          paymentMode: this.$refs.paymentMethodInfo.$data.activePaymentMode,
          deliveryAddress: {
            city: this.$refs.customerInfo.$data.model.city,
            street: this.$refs.customerInfo.$data.model.street,
            buildingNumber: this.$refs.customerInfo.$data.model.buildingNumber,
            apartmentNumber: Number(this.$refs.customerInfo.$data.model.apartmentNumber),
            postalCode: this.$refs.customerInfo.$data.model.postalCode,
          },
          name: this.$refs.customerInfo.$data.model.name,
          phone: '+375' + this.$refs.customerInfo.$data.model.phone,
          email: this.$refs.customerInfo.$data.model.email,
          contactlessDelivery: this.$refs.customerInfo.$data.model.contactlessDelivery,
          noApproveCall: this.$refs.customerInfo.$data.model.noApproveCall,
          comment: this.$refs.customerInfo.$data.model.comment
        })
        localStorage.setItem('orderId', newOrderId)
        Events.emit('updateBasket')
        await this.$router.push({
          path: `/order/success?orderId=${placedOrderId}&placedOrderDateTime=${placedOrderDateTime}`
        })
      }
    },
    updateOrder() {
      this.$emit('updateOrder')
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

      .form-check-label {
        a {
          color: #8d8170;
          text-decoration: none;

          &:hover {
            color: #333;
          }
        }
      }
    }

    &__submit-button {
      margin-top: 25px;
      padding: 16px 26px;
      font-size: 11px;
      letter-spacing: .8px;
      color: #fff;
      background: #d6810b;
      border-color: #d6810b;
      border-radius: 3px;
      text-transform: uppercase;
    }
  }
</style>
