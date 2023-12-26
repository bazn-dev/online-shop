<template>
  <div class="catalog-sidebar d-none d-lg-block">
    <div class="catalog-sidebar__title">Каталог</div>
    <ul class="list-group">
      <li class="list-group-item">Чай</li>
      <li class="list-group-item">Аксессуары</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CatalogSidebar"
}
</script>

<style scoped lang="scss">
  .catalog-sidebar {
    width: 244px;

    &__title {
      font-size: .733em;
      line-height: 1.3em;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .8px;
      color: #333333;
      padding: 23px 0;
    }

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
