<template>
  <div class="order-delivery-method">
    <div class="order-delivery-method__title">Способ доставки</div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
        Самовывоз
      </label>
      <div class="form-check-notion">Вы можете самостоятельно забрать заказ из нашего офиса-кофейни Blackmill в г. Минске</div>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
        Доставка курьером платно
      </label>
      <div class="form-check-notion">Доставка курьером по г. Минску. Бесплатно при заказе от 49 рублей. Укажите в комментарии желаемое время доставки.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDeliveryMethod"
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
      font-size: 13px;
      line-height: 20px;
      color: #777;
    }
  }
</style>
