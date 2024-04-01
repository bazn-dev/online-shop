<template>
  <div class="home-about-company container-fluid">
    <div class="home-about-company__wrapper maxwidth-theme">
      <div class="row">
        <div class="home-about-company__col-text col-lg-6 col-md-12">
          <div class="home-about-company__subtitle">О компании</div>
          <h3 class="home-about-company__title">{{ about?.displayName }}</h3>
          <div v-html="about?.value" class="home-about-company__text"></div>
          <div class="home-about-company__button-wrapper">
            <button class="home-about-company__button btn btn-primary" @click="toCatalog">Перейти в каталог</button>
          </div>
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
  },
  methods: {
    toCatalog() {
      this.$router.push({
        name: "catalog",
        params: {
          category: 'tea'
        },
      })
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

      &::v-deep ul li {
        margin: 0 0 10px 21px;
      }
    }

    &__button-wrapper {
      @media (max-width: 767px) {
        display: flex;
        justify-content: center;
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
    }

    &__col-image {
      color: #777777;
      padding-top: 20px;
    }

    &__image {
      height: 100%;
      background-image: url(../../assets/img/about/about-us.jpg);
      background-position: 50% 50%;
      background-size: auto;
    }
  }
</style>
