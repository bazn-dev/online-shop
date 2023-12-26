<template>
  <div class="order-payment-method">
    <div class="order-payment-method__title">Способ оплаты</div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
        Оплата через ЕРИП (скидка 2%)
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
        Оплата наличными
      </label>
    </div>
    <div class="form-check-notion">В вашем интернет-банкинге в разделе "Платежи": Система Расчет ЕРИП -> Интернет-магазины и сервисы -> A-Z -> R -> Roast.by, введите ваш номер заказа и оплатите его.</div>
  </div>
</template>

<script>
export default {
  name: "OrderPaymentMethod"
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
      margin-bottom: 25px;
      font-size: 1.466em;
      line-height: 1.2em;
      color: #333;
    }

    &__title {
      margin-bottom: 25px;
      font-size: 1.466em;
      line-height: 1.2em;
      color: #333;
    }

    .form-check {
      margin-bottom: 15px;
    }

    .form-check-label {
      font-size: 1em;
      line-height: 20px;
      color: #333;
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
