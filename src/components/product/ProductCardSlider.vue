<template>
  <div class="product-card-slider">
    <div class="product-card-slider__header d-flex align-items-center">
      <div class="product-card-slider__info-rating d-flex align-items-center">
        <Icon name="star-fill" />
        <Icon name="star-fill" />
        <Icon name="star-fill" />
        <Icon name="star-fill" />
        <Icon name="star-fill" />
        <span class="product-card-slider__info-rating-value">{{ product.totalRating }}/5</span>
      </div>
      <div class="product-card-slider__code">Артикул: {{ product.vendorCode }}</div>
    </div>
    <div class="product-card-slider__carousel-wrapper d-flex justify-content-center">
      <div id="carouselExampleIndicators" class="product-card-slider__carousel carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/img/catalog/product.webp" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/catalog/product.webp" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Предыдущий</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/common/Icon';

export default {
  name: "ProductCardSlider",
  components: {
    Icon
  },
  props: {
    product: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped lang="scss">
  .product-card-slider {

    padding: 27px 39px 39px;
    border: 1px solid #ececec;

    @media (max-width: 991px) {
      border: none;
    }

    &__header {
      margin-bottom: 20px;
    }

    &__info-rating {
      margin-bottom: 5px;

      i:not(:last-child) {
        margin-right: 2px;
      }

      &-value {
        padding-top: 5px;
        font-size: .8em;
        line-height: 1.692em;
        font-weight: bold;
        color: #777;
        margin-left: 10px;
      }
    }

    &__code {
      font-size: .867em;
      line-height: 1.692em;
      color: #999;
      margin-left: 40px;
    }

    &__carousel-wrapper {

    }

    &__carousel {
      .carousel-inner,
      .carousel-item {
        width: 450px;
        height: 450px;
      }
    }
  }
</style>
