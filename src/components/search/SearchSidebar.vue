<template>
  <div class="search-sidebar d-none d-lg-block">
    <div class="search-sidebar__title">Найдено в разделах</div>

    <ul class="list-group">
      <li class="search-sidebar__item list-group-item d-flex justify-content-between">
        <div class="search-sidebar__item-title">Ароматизированный чай</div>
        <div class="search-sidebar__item-count">2</div>
      </li>
      <li class="search-sidebar__item list-group-item d-flex justify-content-between">
        <div class="search-sidebar__item-title">Ароматизированный чай</div>
        <div class="search-sidebar__item-count">2</div>
      </li>
      <li class="search-sidebar__item list-group-item d-flex justify-content-between">
        <div class="search-sidebar__item-title">Ароматизированный чай</div>
        <div class="search-sidebar__item-count">2</div>
      </li>
      <li class="search-sidebar__item list-group-item d-flex justify-content-between">
        <div class="search-sidebar__item-title">Ароматизированный чай</div>
        <div class="search-sidebar__item-count">2</div>
      </li>
      <li class="search-sidebar__item list-group-item d-flex justify-content-between">
        <div class="search-sidebar__item-title">Ароматизированный чай</div>
        <div class="search-sidebar__item-count">2</div>
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
      cursor: pointer;

      &:hover {
        background: #fafafa;
      }
    }

    &__item-title {
      font-size: 13px;
      color: #333;
    }

    &__item-count {
      font-size: 13px;
      color: #999;
    }
  }
</style>
