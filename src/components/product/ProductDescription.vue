<template>
  <div class="product-description" v-html="product.description"></div>
</template>

<script>
export default {
  name: "ProductDescription",
  props: {
    product: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped lang="scss">
  .product-description {
    p {
      color: #777777;
      margin: 1.666rem 0;
    }
  }
</style>
