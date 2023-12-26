<template>
  <div class="personal-orders">
    <div class="personal-orders__wrapper d-flex flex-column">
      <h3 class="personal-orders__title">Текущие заказы не найдены</h3>
      <a href="#" class="personal-orders__link">Посмотреть историю заказов</a>
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

    &__link {
      font-size: 13px;
      font-weight: 700;
      color: #978d7f;
      margin-bottom: 18px;
      text-decoration: none;
    }
  }
</style>
