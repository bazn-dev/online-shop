<template>
  <div class="catalog-categories row flexbox">
    <div v-for="item in 13" :key="item" class="catalog-categories__item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
      <div class="catalog-categories__item-image-wrapper">
        <img src="@/assets/img/catalog/categories/flavored-tea.webp" class="catalog-categories__item-image img-fluid"  alt="">
      </div>
      <div class="catalog-categories__item-content">
        <div class="catalog-categories__item-title">Ароматизированный чай</div>
        <div class="catalog-categories__item-subtitle">6 товаров</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogCategories"
}
</script>

<style scoped lang="scss">
  .catalog-categories {
    margin-bottom: 45px;

    &__item {
      display: flex;
      align-items: center;
      padding: 24px 25px !important;
      margin: 0 0 -1px -1px;
      border: 1px solid #ececec;
      transition: transform ease 0.2s,box-shadow ease .2s;

      &:hover {
        border-color: #fff;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
        transform: translateY(-1px);
        background-color: #fff;
      }
    }

    &__item-image-wrapper {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }

    &__item-content {
      width: calc(100% - 60px);
    }

    &__item-title {
      color: #333;
      line-height: 20px;
      cursor: pointer;

      &:hover {
        color: #8d8170;
      }
    }

    &__item-subtitle {
      font-size: .667em;
      line-height: 1.3em;
      color: #999;
      text-transform: uppercase;
      letter-spacing: .8px;
    }
  }
</style>
