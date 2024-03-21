<template>
  <div id="app">
    <Header
      :order="order"
      @showSearch="showSearch"
    />
    <Search
      v-if="displaySearch"
      @hideSearch="hideSearch"
    />
    <Drawer />
    <main>
      <router-view />
      <div
        v-if="scY > 300"
        class="up-button d-none d-lg-flex"
        @click="toTop"
      >
        <Icon name="arrow-left" />
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import { Events } from "./events";
import {
  createOrder as createOrderRequest,
  getOrderById as getOrderByIdRequest
} from '@/api/orders'
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
      order: null,
      displaySearch: false,
      scTimer: 0,
      scY: 0,
    }
  },
  created() {
    Events.on('updateBasket', async () => {
      await this.getOrderById()
    })
  },
  async beforeMount() {
    if (!localStorage.getItem('userId') || !localStorage.getItem('orderId')) {
      await this.createEmptyOrder()
    }
    await this.getOrderById()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    async createEmptyOrder() {
      const { orderId, userId } = await createOrderRequest()
      if (orderId && userId) {
        localStorage.setItem('orderId', orderId)
        localStorage.setItem('userId', userId)
      }
    },
    async getOrderById() {
      this.order = await getOrderByIdRequest(localStorage.getItem('orderId'))
    },
    showSearch() {
      this.displaySearch = true
    },
    hideSearch() {
      this.displaySearch = false
    },
    handleScroll() {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop() {
      window.scrollTo(0, 0)
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
  background-color: #d6810b;
  border-radius: 50%;
  opacity: 1;
  transition: opacity .3s;
  z-index: 10;
  cursor: pointer;

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
