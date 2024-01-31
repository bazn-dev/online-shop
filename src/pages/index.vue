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

      const response = await fetch('http://178.172.201.242:8081/api/v1/users', {
        method: 'GET',
        headers: {
          // 'Access-Control-Allow-Headers': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      });
      console.log('user', response)

      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://178.172.201.242:8081/api/v1/users');
      xhr.setRequestHeader("Authorization", localStorage.getItem('token'));
      xhr.setRequestHeader("Access-Control-Allow-Headers", '*');
      xhr.send();
      xhr.onload = function() {};
    }
  }
}
</script>

<style scoped lang="scss">

</style>
