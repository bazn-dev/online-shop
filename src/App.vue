<template>
  <div id="app">
    <Header
      @showSearch="showSearch"
    />
    <Search
      v-if="displaySearch"
      @hideSearch="hideSearch"
    />
    <Drawer />
    <main>
      <router-view />
      <div class="up-button d-none d-lg-flex">
        <Icon name="arrow-left" />
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import { createOrder } from '@/api/orders'
import Header from './components/common/Header.vue'
import Search from './components/common/Search.vue'
import Drawer from './components/common/Drawer.vue'
import Footer from './components/common/Footer.vue'
import Icon from './components/common/Icon.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Drawer,
    Footer,
    Icon
  },
  data() {
    return {
      displaySearch: false
    }
  },
  async beforeMount() {
    if (!localStorage.getItem('userId') && !localStorage.getItem('orderId'))
    await this.createEmptyOrder();
  },
  methods: {
    async createEmptyOrder() {
      const { orderId, userId } = await createOrder();
      if (orderId && userId) {
        localStorage.setItem('orderId', orderId);
        localStorage.setItem('userId', userId);
      }
    },
    showSearch() {
      this.displaySearch = true
    },
    hideSearch() {
      this.displaySearch = false
    }
  }
}
</script>

<style scoped lang="scss">
.up-button {
  position: fixed;
  right: 75px;
  bottom: 55px;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  background-color: #978d7f;
  border-radius: 50%;
  opacity: 1;
  transition: opacity .3s;

  ::v-deep(.icon) {
    margin-bottom: 2px;
  }

  ::v-deep(.icon svg) {
    transform: rotate(90deg);
  }

  ::v-deep(.icon svg path) {
    fill: #ffffff !important;
  }
}
</style>
