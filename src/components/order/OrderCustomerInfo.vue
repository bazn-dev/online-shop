<template>
  <div class="order-customer-info">
    <div class="order-customer-info__title">Покупатель</div>

    <label for="exampleInputEmail1" class="form-label">ФИО <span>*</span></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

    <label for="exampleInputEmail1" class="form-label">E-mail <span>*</span></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

    <label for="exampleInputEmail1" class="form-label">Телефон <span>*</span></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        Бесконтактная доставка
      </label>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        Не перезванивать для подтверждения заказа
      </label>
    </div>

    <label for="exampleInputEmail1" class="form-label">Комментарии к заказу (укажите желаемое время доставки, особые пожелания к заказу):</label>
    <textarea class="form-control" id="floatingTextarea2" style="height: 100px"></textarea>
  </div>
</template>

<script>
export default {
  name: "OrderCustomerInfo"
}
</script>

<style scoped lang="scss">
  .order-customer-info {
    margin-bottom: 20px;
    padding: 28px 33px 25px 84px;
    border: 1px solid #ececec;
    border-radius: 3px;

    &__title {
      margin-bottom: 25px;
      font-size: 1.466em;
      line-height: 1.2em;
      color: #333;
    }

    .form-label {
      font-size: 12px;
      line-height: 20px;
      color: #777;

      span {
        font-size: 12px;
        font-weight: 400;
        color: red;
      }
    }
  }
</style>
