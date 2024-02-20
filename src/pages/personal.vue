<template>
  <div class="personal">
    <div class="personal__wrapper maxwidth-theme">
      <h1 class="personal__title">Личный кабинет</h1>

      <nav class="personal__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Личный кабинет</li>
        </ol>
      </nav>

      <div class="personal__block d-flex justify-content-between">
        <PersonalSidebar
          :active="activeMenuItem"
          :menuItems="menuItems"
          @setActive="setActiveMenuItem"
        />
        <PersonalMain
          v-if="activeMenuItem === 'my-cabinet'"
          @setActive="setActiveMenuItem"
        />
        <PersonalPrivate
          v-else-if="activeMenuItem === 'personal-data'"
          :user="user"
        />
<!--        <PersonalOrders v-else-if="activeMenuItem === 'orders-history'" />-->
        <PersonalOrder v-else-if="activeMenuItem === 'orders-history'" />
      </div>
    </div>

  </div>
</template>

<script>
import { logout as logoutRequest} from '@/api/auth'
import {
  getUser as getUserRequest,
  getAllOrdersByUser as getAllOrdersByUserRequest
} from '@/api/users'
import PersonalSidebar from '../components/personal/PersonalSidebar'
import PersonalMain from '../components/personal/PersonalMain'
// import PersonalOrders from '../components/personal/PersonalOrders'
import PersonalOrder from '../components/personal/PersonalOrder'
import PersonalPrivate from '../components/personal/PersonalPrivate'

export default {
  name: "personal",
  components: {
    PersonalSidebar,
    PersonalMain,
    // PersonalOrders,
    PersonalOrder,
    PersonalPrivate
  },
  data() {
    return {
      activeMenuItem: 'my-cabinet',
      menuItems: [
        {
          name: 'my-cabinet',
          title: 'Мой кабинет'
        },
        {
          name: 'personal-data',
          title: 'Личные данные'
        },
        {
          name: 'orders-history',
          title: 'История заказов'
        },
        {
          name: 'basket',
          title: 'Корзина'
        },
        {
          name: 'sign-out',
          title: 'Выйти'
        }
      ],
      user: null,
      orders: []
    }
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
    async initData() {
      if (this.$route.query.tab) {
        this.activeMenuItem = this.$route.query.tab
      } else {
        this.activeMenuItem = 'my-cabinet'
      }
      document.title = this.menuItems.find(item => item.name === this.activeMenuItem)?.title ?? 'Мой кабинет';
      this.user = await getUserRequest(localStorage.getItem('token'))
      this.orders = await getAllOrdersByUserRequest(localStorage.getItem('token'))
    },
    async setActiveMenuItem(name) {
      if (name === 'basket') {
        this.goToBasket()
        return
      }
      if (name === 'sign-out') {
        await this.signOut()
        return
      }

      await this.$router.push({
        name: 'personal',
        query: {
          tab: name
        }
      })
      this.activeMenuItem = name
      document.title = this.menuItems.find(item => item.name === this.activeMenuItem)?.title ?? 'Мой кабинет';
    },
    goToBasket() {
      this.$router.push({
        name: 'basket'
      })
    },
    async signOut() {
      await logoutRequest(localStorage.getItem('token'))
      localStorage.removeItem('token');
      await this.$router.push({
        name: '/'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.personal {
  padding: 60px 0;
  background-color: #ffffff;
  box-sizing: border-box;

  &__wrapper {
    max-width: 1408px;
    box-sizing: border-box;
  }

  &__breadcrumbs {
    padding: 15px 0 40px;

    .breadcrumb-item {
      font-size: .867em;
      line-height: 1.692em;
      color: #b6b5b5;

      a {
        color: #b6b5b5;
        text-decoration: none;

        &:hover {
          color: #8d8170;
        }
      }
    }
  }

  &__block {

  }

}
</style>
