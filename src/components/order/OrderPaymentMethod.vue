<template>
  <div class="order-payment-method">
    <div
      class="order-payment-method__title"
      :class="{ '--error': !activePaymentMode }"
    >
      Способ оплаты
    </div>
    <div
      v-if="!activePaymentMode"
      class="order-payment-method__alert alert alert-danger"
      role="alert"
    >
      Выберите способ оплаты
    </div>
    <div
      v-for="(paymentMode, index) in paymentModes"
      :key="`payment-mode.${index}`"
      class="form-check"
    >
      <input
        v-model="activePaymentMode"
        :value="paymentMode.code"
        type="radio"
        :id="`${paymentMode.code}Radio`"
        class="form-check-input"
      />
      <label
        :for="`${paymentMode.code}Radio`"
        class="form-check-label"
        @click="setActivePaymentMode(paymentMode.code)"
      >
        {{ paymentMode.option }}
      </label>
    </div>
    <div class="form-check-notion">{{ descriptionActivePaymentMode }}</div>
  </div>
</template>

<script>
export default {
  name: "OrderPaymentMethod",
  props: {
    paymentModes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activePaymentMode: ''
    }
  },
  computed: {
    descriptionActivePaymentMode() {
      return this.activePaymentMode
        ? this.paymentModes.find(mode => mode.code === this.activePaymentMode)?.description
        : ''
    }
  },
  methods: {
    setActivePaymentMode(code) {
      this.activePaymentMode = code
    }
  }
}
</script>

<style scoped lang="scss">
  .order-payment-method {
    height: calc(100% - 20px);
    padding: 31px 33px 25px 84px;
    margin-bottom: 20px;
    border: 1px solid #ececec;
    border-radius: 3px;

    @media (min-width: 768px) {
      margin-left: 15px;
    }

    &__title {
      position: relative;
      margin-bottom: 25px;
      font-size: 1.466em;
      line-height: 1.2em;
      color: #333;

      &.--error {
        &:before {
          background-position: -90px -30px;
          background-color: #e93233;
        }
      }

      &:before {
        content: "";
        position: absolute;
        left: -50px;
        top: -3px;
        margin: 0;
        width: 30px;
        height: 30px;
        background-image: url(../../assets/img/checkout_icons_white.png);
        background-position: -60px 0;
        background-color: #978d7f;
      }
    }

    &__title {
      margin-bottom: 25px;
      font-size: 1.466em;
      line-height: 1.2em;
      color: #333;
    }

    &__alert {
      font-size: 14px;
      line-height: 20px;
      border-radius: 0;
      padding: 15px 29px;
      border: none !important;
      color: #e83333 !important;
      background: #fee;
    }

    .form-check {
      margin-bottom: 15px;
    }

    .form-check-label {
      font-size: 1em;
      line-height: 20px;
      color: #333;
      cursor: pointer;
    }

    .form-check-input:checked {
      background-color: #978d7f;
      border-color: #978d7f;
    }

    .form-check-notion {
      margin-top: 32px;
      font-size: 13px;
      line-height: 20px;
      color: #777;
    }
  }
</style>
