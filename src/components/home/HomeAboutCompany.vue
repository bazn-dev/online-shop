<template>
  <div class="home-about-company container-fluid">
    <div class="home-about-company__wrapper maxwidth-theme">
      <div class="row">
        <div class="home-about-company__col-text col-lg-6 col-md-12">
          <div class="home-about-company__subtitle">О компании</div>
          <h3 class="home-about-company__title">{{ about.displayName }}</h3>
          <div v-html="about.value" class="home-about-company__text"></div>
          <button class="home-about-company__button btn btn-primary">Перейти в каталог</button>
        </div>
        <div class="home-about-company__col-image col-lg-6 col-md-12">
          <div class="home-about-company__image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAboutCompany",
  props: {
    about: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped lang="scss">
  .home-about-company {
    padding: 60px 0 0;
    background-color: #ffffff;
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;

    &__wrapper {
      box-sizing: border-box;
    }

    &__col-text {
      padding-bottom: 40px;
    }

    &__subtitle {
      font-size: .667em;
      line-height: 1.3em;
      text-transform: uppercase;
      letter-spacing: .8px;
      color: #999999;
    }

    &__title {
      font-size: 1.6em;
      line-height: 1.126em;
      font-weight: 400;
      color: #333333;
      margin: 20px 0 32px;
    }

    &__text {
      margin: 1.666rem 0;
      padding-right: 30px;
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

    &__col-image {
      color: #777777;
      padding-top: 20px;
    }

    &__image {
      min-height: 440px;
      background-image: url(../../assets/img/about/1.webp);
      background-size: auto;
    }
  }
</style>
