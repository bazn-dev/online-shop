<template>
  <div class="personal-main">
    <div class="personal-main__menu row">
      <div class="personal-main__menu-item-wrapper col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="personal-main__menu-item d-flex justify-content-center">
          Текущие заказы
        </div>
      </div>
      <div class="personal-main__menu-item-wrapper col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="personal-main__menu-item d-flex justify-content-center">
          Личные данные
        </div>
      </div>
      <div class="personal-main__menu-item-wrapper col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="personal-main__menu-item d-flex justify-content-center">
          История заказов
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalMain"
}
</script>

<style scoped lang="scss">
  .personal-main {
    width: calc(100% - 284px);

    &__menu-item-wrapper {
      padding: 0 10px !important;
      margin-bottom: 20px;
    }

    &__menu-item {
      padding: 25px 15px;
      background-color: #fbfbfb;
      border: 1px solid #f2f2f2;
    }
  }
</style>
