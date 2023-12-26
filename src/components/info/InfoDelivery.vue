<template>
  <div class="info-delivery">

  </div>
</template>

<script>
export default {
  name: "InfoDelivery"
}
</script>

<style scoped lang="scss">
  .info-delivery {
    width: calc(100% - 284px);

    @media (max-width: 991px) {
      width: 100%;
    }

    ul {
      margin: 26px 0 36px !important;
    }

    ul > li {
      margin: 8px 0 0 21px;
    }
  }
</style>
