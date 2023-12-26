<template>
  <div class="info-licenses-detail">

  </div>
</template>

<script>
export default {
  name: "InfoWarranty"
}
</script>

<style scoped lang="scss">
  .info-licenses-detail {
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
