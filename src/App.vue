<template>
  <div id="app">
    <Header />
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
import Cookie from 'js-cookie';
import { createOrder } from '@/api/orders'
import Header from './components/common/Header.vue'
import Drawer from './components/common/Drawer.vue'
import Footer from './components/common/Footer.vue'
import Icon from './components/common/Icon.vue'

export default {
  name: 'App',
  components: {
    Header,
    Drawer,
    Footer,
    Icon
  },
  async beforeMount() {
    if (!Cookie.get('userId') && !Cookie.get('orderId'))
    await this.createEmptyOrder();
  },
  methods: {
    async createEmptyOrder() {
      const { orderId, userId } = await createOrder();
      if (orderId && userId) {
        Cookie.set('orderId', orderId, { expires: 30 });
        Cookie.set('userId', userId, { expires: 30 });
      }
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
