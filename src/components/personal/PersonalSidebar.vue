<template>
  <div class="personal-sidebar d-none d-lg-block">
    <ul class="list-group">
      <li class="list-group-item">Мой кабинет</li>
      <li class="list-group-item">Личные данные</li>
      <li class="list-group-item">История заказов</li>
      <li class="list-group-item">Корзина</li>
      <li class="list-group-item">Выйти</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonalSidebar"
}
</script>

<style scoped lang="scss">
  .personal-sidebar {
    width: 244px;

    .list-group {
      border-radius: 3px !important;
    }

    .list-group-item {
      border-color: #ececec !important;
      cursor: pointer;
    }
  }
</style>
