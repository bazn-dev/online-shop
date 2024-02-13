<template>
  <div class="personal-orders">
    <div class="personal-orders__wrapper d-flex flex-column">
      <h3 class="personal-orders__title">Заказы в статусе «Заказ доставлен в пункт самовывоза»</h3>

      <div class="personal-orders__order">
        <div class="personal-orders__order-header d-flex justify-content-between">
          <div class="personal-orders__order-title">Заказ № 131546 от 19.01.2024 12:20:37, 1 товар на сумму 15.40 руб.</div>
          <div class="personal-orders__order-status">
            <span>Заказ выполнен</span>
            <span>23.01.2024</span>
          </div>
        </div>
        <div class="personal-orders__order-footer d-flex justify-content-between">
          <button class="personal-orders__order-footer-btn --covered btn btn-lg">Подробнее о заказе</button>
          <button class="personal-orders__order-footer-btn --outlined btn btn-lg">Повторить заказ</button>
        </div>
      </div>

      <a href="#" class="personal-orders__link">Перейти в каталог</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalOrders"
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
