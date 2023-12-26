<template>
  <div class="home-main-offers row align-items-start w-100">
    <div class="home-main-offers__item col-lg-3 col-sm-6 col-12">
      <div class="home-main-offers__description">
        <div class="home-main-offers__subtitle">Гарантия на кофе</div>
        <div class="home-main-offers__title">30 дней</div>
      </div>
      <div class="home-main-offers__background"></div>
      <div class="home-main-offers__darken-background"></div>
    </div>
    <div class="home-main-offers__item col-lg-3 col-sm-6 col-12">
      <div class="home-main-offers__description">
        <div class="home-main-offers__subtitle">Гарантия на кофе</div>
        <div class="home-main-offers__title">30 дней</div>
      </div>
      <div class="home-main-offers__background"></div>
      <div class="home-main-offers__darken-background"></div>
    </div>
    <div class="home-main-offers__item col-lg-6 col-sm-12">
      <div class="home-main-offers__description">
        <div class="home-main-offers__subtitle">Гарантия на кофе</div>
        <div class="home-main-offers__title">30 дней</div>
      </div>
      <div class="home-main-offers__background"></div>
      <div class="home-main-offers__darken-background"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMainOffers"
}
</script>

<style scoped lang="scss">
  .home-main-offers {
    box-sizing: border-box;

    &__item {
      position: relative;
      height: 275px;
      overflow: hidden;
      box-sizing: border-box;
      cursor: pointer;

      &:hover {
        .home-main-offers__background {
          transform: scale(1.05);
        }

        .home-main-offers__darken-background {
          opacity: 1;
        }
      }
    }

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(../../assets/img/1.webp);
      background-size: cover;
      background-position: center center;
      transition: transform .6s ease;
      z-index: 0;
    }

    &__darken-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      opacity: 0;
      transition: opacity .3s ease;
      z-index: 1;
    }

    &__description {
      position: absolute;
      bottom: 0;
      padding: 33px 40px 34px;
      width: 100%;
      z-index: 2;
    }

    &__subtitle {
      margin-bottom: 11px;
      font-size: .667em;
      line-height: 1.3em;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: .8px;
    }

    &__title {
      font-size: 1.3333em;
      line-height: 1.4em;
      color: #ffffff;
    }
  }
</style>
