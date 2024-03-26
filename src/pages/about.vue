<template>
  <div class="about">
    <div class="about__wrapper maxwidth-theme">
      <h1 class="about__title">О компании</h1>

      <nav class="about__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Главная</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">О компании</li>
        </ol>
      </nav>

      <div v-html="info" class="about__block"></div>
    </div>
  </div>
</template>

<script>
import {
  getCompanyDataByCode as getCompanyDataByCodeRequest
} from '@/api/company'

export default {
  name: "about",
  data() {
    return {
      info: null
    }
  },
  beforeCreate() {
    document.title = 'О нас';
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
    async initData() {
      this.info = (await getCompanyDataByCodeRequest(['about-us']))?.[0]?.value || null
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  padding: 60px 30px;
  background-color: #ffffff;
  box-sizing: border-box;

  &__wrapper {
    max-width: 1408px;
    box-sizing: border-box;
  }

  &__breadcrumbs {
    padding: 15px 0 40px;

    .breadcrumb-item {
      font-size: .867em;
      line-height: 1.692em;
      color: #b6b5b5;

      a {
        color: #b6b5b5;
        text-decoration: none;

        &:hover {
          color: #8d8170;
        }
      }
    }
  }

  &__block {
    &::v-deep ul li {
      margin: 0 0 10px 21px;
    }
  }
}
</style>
