<template>
  <header class="header">
    <div class="header__wrapper maxwidth-theme d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <a
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
          class="d-lg-none"
        >
          <Icon name="menu" class="header__menu" />
        </a>
        <router-link to="/">
          <div class="header__wrapper-logo">
            <img src="@/assets/img/logo.png" alt="Roast.by" title="Roast.by">
          </div>
        </router-link>
      </div>

      <Navigation class="d-none d-lg-block" />

      <div class="header__icons-wrapper d-flex">
        <div
          class="header__icon-wrapper"
          @click="$emit('showSearch')"
        >
          <Icon name="search" />
        </div>
        <div v-if="isLoggedIn" class="header__icon-wrapper">
          <div class="dropdown">
            <Icon name="account" class="header__account-icon dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
            <ul class="header__account-menu-list dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li
                v-for="item in accountMenuItems"
                :key="`account-menu-item.${item.name}`"
                class="header__account-menu-item"
                @click="selectMenuItem(item.name)"
              >
                {{ item.title }}
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="header__icon-wrapper">
          <ModalAuth />
        </div>
        <div class="header__icon-wrapper">
          <router-link to="/basket" class="d-flex align-items-center">
            <Icon name="basket" />
            <div
              v-if="countProductInBasket > 0"
              class="header__icon-value"
            >
              {{ countProductInBasket }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { logout as logoutRequest} from '@/api/auth'
import Navigation from './Navigation'
import ModalAuth from './ModalAuth'
import Icon from './Icon'

export default {
  name: "Header",
  components: {
    ModalAuth,
    Navigation,
    Icon
  },
  props: {
    order: {
      type: Object,
      default: () => null
    },
  },
  data() {
    return {
      accountMenuItems: [
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
          name: 'sign-out',
          title: 'Выйти'
        }
      ]
    }
  },
  computed: {
    countProductInBasket() {
      return this.order ? this.order.entries.length : 0;
    },
    isLoggedIn() {
      return localStorage.getItem('token');
    }
  },
  methods: {
    async selectMenuItem(name) {
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
    },
    async signOut() {
      await logoutRequest(localStorage.getItem('token'))
      localStorage.removeItem('token');
      await this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    width: 100%;
    height: 83px;
    background: #ffffff;
    box-shadow: 0 1px 5px rgba(0,0,0,.136);
    box-sizing: border-box;
    z-index: 100;

    @media (max-width: 991px) {
      height: 63px;
    }

    &__wrapper {
      height: 100%;
      box-sizing: border-box;
    }

    &__menu {
      margin-right: 20px;
      cursor: pointer;
    }

    &__wrapper-logo {
      width: 83px;
      height: 83px;

      @media (max-width: 991px) {
        width: 63px;
        height: 63px;
      }

      img {
        max-height: 100%;
        max-width: 100%;
        z-index: 10;
      }
    }

    &__icon-wrapper {
      cursor: pointer;

      a {
        text-decoration: none;
      }

      &:not(:last-child) {
        margin-right: 30px;
      }
    }

    &__icon-value {
      width: 18px;
      height: 18px;
      margin-top: 2px;
      margin-left: 3px;
      background: #978d7f;
      font-size: .8em;
      line-height: 18px;
      color: #ffffff;
      text-align: center;
      border-radius: 100%;
    }

    &__account-icon {
      &::after {
        padding-bottom: 1px;
        margin-left: 7px !important;
        vertical-align: 0.1em !important;
      }
    }

    &__account-menu-list {
      width: 200px;
      border: none;
      margin: 10px 0 0 !important;
      padding: 0;
      border-radius: 0 0 3px 3px;
      box-shadow: 0 6px 12px rgba(0,0,0,.175);
    }

    &__account-menu-item {
      font-size: 13px;
      letter-spacing: 0;
      line-height: 25px;
      padding: 11px 43px 12px 19px !important;
      border-top: 1px solid #f0f0f0;

      &:first-child {
        border: none;
      }

      &:hover {
        background-color: #fafafa;
      }
    }
  }
</style>