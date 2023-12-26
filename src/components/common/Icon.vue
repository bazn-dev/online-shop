<template>
  <i class="icon" v-html="iconSrc" />
</template>

<script>
import ICONS from '@/config/icons';

export default {
  name: "Icon",
  props: {
    name: {
      type: String
    },
    color: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      icons: ICONS
    }
  },
  computed: {
    iconSrc() {
      if (this.color === 'default') {
        return this.icons[this.name];
      } else {
        return this.icons[this.name + '-' + this.color];
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .icon {
  }
</style>
