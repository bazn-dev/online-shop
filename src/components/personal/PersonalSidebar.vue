<template>
  <div class="personal-sidebar d-none d-lg-block">
    <ul class="list-group">
      <li
        v-for="item in menuItems"
        :key="`personal-sidebar-menu-item.${item.name}`"
        class="list-group-item"
        :class="{ '--active': active === item.name }"
        @click="setActive(item.name)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonalSidebar",
  props: {
    active: {
      type: String,
      default: ''
    },
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    setActive(name) {
      this.$emit('setActive', name)
    }
  }
}
</script>

<style scoped lang="scss">
  .personal-sidebar {
    width: 244px;

    .list-group {
      border-radius: 3px !important;
    }

    .list-group-item {
      font-size: 13px;
      color: #333;
      padding: 15px 30px 17px 15px;
      border-color: #ececec !important;
      cursor: pointer;

      &.--active {
        font-weight: 700;
        background: #fafafa;
      }
    }
  }
</style>
