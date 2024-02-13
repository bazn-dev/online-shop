<template>
  <div>
    <HomeSlider :banners="banners" />
<!--    <HomeMainOffers />-->
    <HomeBestOffers />
    <HomeAboutCompany
      :about="about"
    />
    <HomeAdvantages />
  </div>
</template>

<script>
import {
  getBanners as getBannersRequest
} from '@/api/banners'
import {
  getCompanyCodes as getCompanyCodesRequest,
  getCompanyDataByCode as getCompanyDataByCodeRequest
} from '@/api/company'
import HomeSlider from '../components/home/HomeSlider'
// import HomeMainOffers from '../components/home/HomeMainOffers'
import HomeBestOffers from '../components/home/HomeBestOffers'
import HomeAboutCompany from '../components/home/HomeAboutCompany'
import HomeAdvantages from '../components/home/HomeAdvantages'

export default {
  name: "index",
  components: {
    HomeSlider,
    // HomeMainOffers,
    HomeBestOffers,
    HomeAboutCompany,
    HomeAdvantages
  },
  data() {
    return {
      banners: [],
      info: []
    }
  },
  beforeCreate() {
    document.title = 'Интернет-магазин чая';
  },
  computed: {
    about() {
      return this.info.find(item => item.code === 'about')
    }
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
    async initData() {
      this.banners = await getBannersRequest()
      const codes = await getCompanyCodesRequest(true)
      this.info = await getCompanyDataByCodeRequest(
        codes.map(item => item.code)
      )
    }
  }
}
</script>

<style scoped lang="scss">

</style>
