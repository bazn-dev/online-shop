<template>
  <div class="info-sidebar d-none d-lg-block">
    <ul class="list-group">
      <li class="list-group-item">FAQ</li>
      <li class="list-group-item">Система скидок</li>
      <li class="list-group-item">Условия оплаты</li>
      <li class="list-group-item">Условия доставки</li>
      <li class="list-group-item">Гарантия на товар</li>
      <li class="list-group-item">Как оформить заказ</li>
      <li class="list-group-item">Политика</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InfoSidebar"
}
</script>

<style scoped lang="scss">
  .info-sidebar {
    width: 244px;

    .list-group {
      border-radius: 3px !important;
    }

    .list-group-item {
      font-size: 13px;
      line-height: 20px;
      border-color: #ececec !important;
      padding: 15px 30px 17px 15px !important;
      cursor: pointer;
      transition: padding .2s ease;

      &:hover {
        background: #fafafa;
      }
    }
  }
</style>
