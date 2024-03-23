<template>
  <div class="info-sidebar">
    <ul class="list-group">
      <li
        v-for="(item, index) in items"
        :key="`info.${index}`"
        class="list-group-item"
        :class="{'--active': active === index}"
        @click="setActiveTab(index)"
      >
        {{ item.groupItemName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InfoSidebar",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    active: {
      type: Number,
      default: 0
    }
  },
  methods: {
    setActiveTab(index) {
      this.$emit('setActive', index)
    }
  }
}
</script>

<style scoped lang="scss">
  .info-sidebar {
    width: 244px;

    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 40px;
    }

    .list-group {
      border-radius: 3px !important;
    }

    .list-group-item {
      font-size: 13px;
      line-height: 20px;
      border-color: #ececec !important;
      padding: 15px 30px 17px 15px !important;
      cursor: pointer;
      transition: padding .2s ease;

      &.--active {
        font-weight: bold;
      }

      &:hover {
        background: #fafafa;
      }
    }
  }
</style>
