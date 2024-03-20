<template>
  <div id="carouselIndicators" class="home-slider carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        v-for="(banner, index) in banners"
        :key="`indicator.${index}`"
        type="button"
        data-bs-target="#carouselIndicators"
        :data-bs-slide-to="index"
        :aria-current="index === 0"
        :class="{ 'active': index === 0 }"
        :aria-label="`Slide ${index + 1}`"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(banner, index) in banners"
        :key="`banner.${index}`"
        class="carousel-item"
        :class="{ 'active': index === 0 }"
      >
        <div class="home-slider__block d-block w-100" :style="{'background-image': 'url(' + getBackgroundLink(banner.imageUrl) + ')'}">
          <div class="home-slider__content">
            <div class="home-slider__content-title">{{ banner.header }}</div>
            <div class="home-slider__content-description">{{ banner.description }}</div>
            <button class="home-slider__button btn btn-primary" @click="toCatalog">Перейти в каталог</button>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators"  data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Предыдущий</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators"  data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Следующий</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "HomeSlider",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getBackgroundLink(link) {
      return `http://178.172.201.242${link}`
    },
    toCatalog() {
      this.$router.push({
        name: "catalog",
        params: {
          category: 'tea'
        },
      });
    }
  }
}
</script>

<style scoped lang="scss">
  .home-slider {
    box-sizing: border-box;

    &__block {
      height: 100%;
      background-position: bottom;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      padding-left: 150px;
      padding-right: 150px;

      @media (max-width: 991px) {
        padding-left: 120px;
        padding-right: 120px;
      }

      @media (max-width: 768px) {
        align-items: center;
      }
    }

    &__content-title {
      font-size: 2.2666em;
      line-height: 1.15em;
      color: #fff;

      @media (max-width: 991px) {
        font-size: 22px;
        line-height: 30px;
      }
    }

    &__content-description {
      color: #fff;
      margin-top: 23px;
      margin-bottom: 30px;

      @media (max-width: 767px) {
        text-align: center;
      }
    }

    &__button {
      font-size: .7333em;
      font-weight: 400;
      letter-spacing: .8px;
      border-radius: 3px;
      padding: 12px 21px 11px;
      background-color: #d6810b;
      border-color: #d6810b;
      color: #ffffff;
      text-transform: uppercase;

      @media (max-width: 576px) {
        font-size: .6333em;
        padding: 10px;
      }
    }
  }

  .carousel-inner,
  .carousel-item {
    height: 596px;

    @media (max-width: 991px) {
      height: 380px;
    }
  }
</style>
