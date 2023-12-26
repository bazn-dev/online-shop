<template>
  <div class="personal">
    <div class="personal__wrapper maxwidth-theme">
      <h1 class="personal__title">Личный кабинет</h1>

      <nav class="personal__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Личный кабинет</li>
        </ol>
      </nav>

      <div class="personal__block d-flex justify-content-between">
        <PersonalSidebar />
<!--        <PersonalOrders />-->
<!--        <PersonalMain />-->
        <PersonalPrivate />
      </div>
    </div>

  </div>
</template>

<script>
import PersonalSidebar from '../components/personal/PersonalSidebar'
// import PersonalMain from '../components/personal/PersonalMain'
// import PersonalOrders from '../components/personal/PersonalOrders'
import PersonalPrivate from '../components/personal/PersonalPrivate'

export default {
  name: "personal",
  components: {
    PersonalSidebar,
    // PersonalMain,
    // PersonalOrders,
    PersonalPrivate
  }
}
</script>

<style scoped lang="scss">
.personal {
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
