<template>
  <div class="order-delivery-method">
    <div
      class="order-delivery-method__title"
      :class="{ '--error': !activeDeliveryMode }"
    >
      Способ доставки
    </div>
    <div
      v-if="!activeDeliveryMode"
      class="order-delivery-method__alert alert alert-danger"
      role="alert"
    >
      Выберите способ доставки
    </div>
    <div
      v-for="(deliveryMode, index) in deliveryModes"
      :key="`delivery-mode.${index}`"
      class="form-check"
    >
      <input
        v-model="activeDeliveryMode"
        :value="deliveryMode.code"
        type="radio"
        :id="`${deliveryMode.code}Radio`"
        class="form-check-input"
      />
      <label
        class="form-check-label"
        :for="`${deliveryMode.code}Radio`"
        @click="setActiveDeliveryMode(deliveryMode.code)"
      >
        {{ deliveryMode.option }}
      </label>
      <div class="form-check-notion">{{ deliveryMode.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDeliveryMethod",
  props: {
    deliveryModes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeDeliveryMode: ''
    }
  },
  methods: {
    setActiveDeliveryMode(code) {
      this.activeDeliveryMode = code
    }
  }
}
</script>

<style scoped lang="scss">
  .order-delivery-method {
    height: calc(100% - 20px);
    padding: 31px 33px 25px 84px;
    margin-bottom: 20px;
    border: 1px solid #ececec;
    border-radius: 3px;

    @media (min-width: 768px) {
      margin-right: 15px;
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
        background-position: -30px 0;
        background-color: #978d7f;
      }
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
      font-size: 13px;
      line-height: 20px;
      color: #777;
    }
  }
</style>
