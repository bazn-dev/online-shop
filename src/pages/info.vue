<template>
  <div class="info">
    <div class="info__wrapper maxwidth-theme">
      <h1 class="info__title">Вопрос-ответ</h1>

      <nav class="info__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Справочная информация</li>
        </ol>
      </nav>

      <div class="info__block d-flex justify-content-between">
        <InfoSidebar />
        <InfoFaq />
<!--        <InfoDiscountSystem />-->
<!--        <InfoPayment />-->
<!--        <InfoDelivery />-->
<!--        <InfoWarranty />-->
<!--        <InfoHelp />-->
<!--        <InfoLicensesDetail />-->
      </div>
    </div>

  </div>
</template>

<script>
import InfoSidebar from '../components/info/InfoSidebar'
import InfoFaq from '../components/info/InfoFaq'
// import InfoDiscountSystem from '../components/info/InfoDiscountSystem'
// import InfoPayment from '../components/info/InfoPayment'
// import InfoDelivery from '../components/info/InfoDelivery'
// import InfoWarranty from '../components/info/InfoWarranty'
// import InfoHelp from '../components/info/InfoHelp'
// import InfoLicensesDetail from '../components/info/InfoLicensesDetail'

export default {
  name: "info",
  components: {
    InfoSidebar,
    InfoFaq,
    // InfoDiscountSystem,
    // InfoPayment,
    // InfoDelivery,
    // InfoWarranty,
    // InfoHelp,
    // InfoLicensesDetail
  }
}
</script>

<style scoped lang="scss">
.info {
  padding: 60px 0;
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
  }
}
</style>
