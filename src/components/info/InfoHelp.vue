<template>
  <div class="info-help">
    <div
      v-if="content"
      v-html="content.value[0]"
    ></div>
  </div>
</template>

<script>
export default {
  name: "InfoHelp",
  props: {
    content: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped lang="scss">
  .info-help {
    width: calc(100% - 284px);

    @media (max-width: 767px) {
      width: 100%;
    }

    &::v-deep ul li,
    &::v-deep ol li {
      margin: 0 0 10px 21px;
    }
  }
</style>
