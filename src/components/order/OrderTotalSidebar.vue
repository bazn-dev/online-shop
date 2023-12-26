<template>
  <div class="order-total-sidebar">
    <div class="order-total-sidebar__header d-flex justify-content-between align-items-center">
      <div class="order-total-sidebar__title">Ваш заказ</div>
      <button class="btn btn-link">Изменить</button>
    </div>
    <div class="order-total-sidebar__body">
      <div class="order-total-sidebar__total-line d-flex justify-content-between align-items-center">
        <div class="order-total-sidebar__total-line-text">Товаров на:</div>
        <div class="order-total-sidebar__total-line-value">26 руб.</div>
      </div>
      <div class="order-total-sidebar__total-line d-flex justify-content-between align-items-center">
        <div class="order-total-sidebar__total-line-text">Доставка:</div>
        <div class="order-total-sidebar__total-line-value">бесплатно</div>
      </div>
    </div>
    <div class="order-total-sidebar__footer d-flex justify-content-between align-items-center">
      <div class="order-total-sidebar__total-text">Итого:</div>
      <div class="order-total-sidebar__total-value">26 руб.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderTotalSidebar"
}
</script>

<style scoped lang="scss">
  .order-total-sidebar {
    top: 90px;
    border: 1px solid #ececec;
    border-radius: 3px;

    &__header {
      padding: 20px 30px 25px;
      border-bottom: 1px solid #eaebec;
    }

    &__title {
      font-size: 18px;
      color: #333;
    }

    &__body {
      padding: 20px 30px 25px;
    }

    &__total-line {
      position: relative;

      &:not(:last-child) {
        margin-bottom: 12px;
      }

      &:before {
        content: "";
        position: absolute;
        top: 10.5px;
        left: 30px;
        right: 0;
        height: 1px;
        background: url(../../assets/img/dots.png) 0 0 repeat-x;
      }
    }

    &__total-line-text {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #777;
      padding-right: 12px;
      background: #fff;
      z-index: 1;
    }

    &__total-line-value {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #333;
      padding-left: 12px;
      background: #fff;
      z-index: 1;
    }

    &__footer {
      padding: 20px 30px 25px;
      border-top: 1px solid #eaebec;
    }

    &__total-text {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }

    &__total-value {
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;
      color: #333;
    }
  }
</style>
