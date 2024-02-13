<template>
  <div id="carouselExampleIndicators" class="home-slider carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
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
<!--      <div class="carousel-item active">-->
<!--        <div class="home-slider__block d-block w-100" :style="{'background-image': 'url(' + require('@/assets/img/slider/2.webp') + ')'}">-->
<!--          <div class="home-slider__content">-->
<!--            <div class="home-slider__content-title">Кофе свежей обжарки</div>-->
<!--            <div class="home-slider__content-description">Самый большой выбор в Беларуси</div>-->
<!--            <button class="home-slider__button btn btn-primary" @click="toCatalog">Перейти в каталог</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="carousel-item">-->
<!--        <div class="home-slider__block d-block w-100" :style="{'background-image': 'url(' + require('@/assets/img/slider/3.webp') + ')'}">-->
<!--          <div class="home-slider__content">-->
<!--            <div class="home-slider__content-title">Кофе свежей обжарки</div>-->
<!--            <div class="home-slider__content-description">Самый большой выбор в Беларуси</div>-->
<!--            <button class="home-slider__button btn btn-primary" @click="toCatalog">Перейти в каталог</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="carousel-item">-->
<!--        <div class="home-slider__block d-block w-100" :style="{'background-image': 'url(' + require('@/assets/img/slider/4.webp') + ')'}">-->
<!--          <div class="home-slider__content">-->
<!--            <div class="home-slider__content-title">Кофе свежей обжарки</div>-->
<!--            <div class="home-slider__content-description">Самый большой выбор в Беларуси</div>-->
<!--            <button class="home-slider__button btn btn-primary" @click="toCatalog">Перейти в каталог</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="carousel-item">-->
<!--        <div class="home-slider__block d-block w-100" :style="{'background-image': 'url(' + require('@/assets/img/slider/5.webp') + ')'}">-->
<!--          <div class="home-slider__content">-->
<!--            <div class="home-slider__content-title">Кофе свежей обжарки</div>-->
<!--            <div class="home-slider__content-description">Самый большой выбор в Беларуси</div>-->
<!--            <button class="home-slider__button btn btn-primary" @click="toCatalog">Перейти в каталог</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="carousel-item">-->
<!--        <div class="home-slider__block d-block w-100" :style="{'background-image': 'url(' + require('@/assets/img/slider/6.webp') + ')'}">-->
<!--          <div class="home-slider__content">-->
<!--            <div class="home-slider__content-title">Кофе свежей обжарки</div>-->
<!--            <div class="home-slider__content-description">Самый большой выбор в Беларуси</div>-->
<!--            <button class="home-slider__button btn btn-primary" @click="toCatalog">Перейти в каталог</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="carousel-item">-->
<!--        <div class="home-slider__block d-block w-100" :style="{'background-image': 'url(' + require('@/assets/img/slider/7.webp') + ')'}">-->
<!--          <div class="home-slider__content">-->
<!--            <div class="home-slider__content-title">Кофе свежей обжарки</div>-->
<!--            <div class="home-slider__content-description">Самый большой выбор в Беларуси</div>-->
<!--            <button class="home-slider__button btn btn-primary" @click="toCatalog">Перейти в каталог</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
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
    }

    &__button {
      font-size: .7333em;
      font-weight: 400;
      letter-spacing: .8px;
      border-radius: 3px;
      padding: 12px 21px 11px;
      background-color: #978d7f;
      border-color: #978d7f;
      color: #ffffff;
      text-transform: uppercase;
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
