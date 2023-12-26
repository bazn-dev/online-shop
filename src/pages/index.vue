<template>
  <div>
    <HomeSlider />
<!--    <HomeMainOffers />-->
    <HomeBestOffers />
    <HomeAboutCompany />
    <HomeAdvantages />
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped lang="scss">

</style>
