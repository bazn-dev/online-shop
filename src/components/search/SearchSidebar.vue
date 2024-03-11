<template>
  <div class="search-sidebar d-none d-lg-block">
    <div class="search-sidebar__title">Найдено в разделах</div>

    <ul class="list-group">
      <li
        v-for="(category, index) in categories"
        :key="`category.${index}`"
        class="search-sidebar__item list-group-item d-flex justify-content-between"

      >
        <div class="search-sidebar__item-title">{{ category.displayName }}</div>
        <div class="search-sidebar__item-count">{{ category.productsCount }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchSidebar",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
  .search-sidebar {
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

    &__item {
      padding: 15px;
    }

    &__item-title {
      font-size: 13px;
      color: #333;
    }

    &__item-count {
      font-size: 13px;
      color: #999;
      margin-left: 15px;
    }
  }
</style>
