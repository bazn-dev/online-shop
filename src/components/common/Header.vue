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
        <div class="header__icon-wrapper">
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
  computed: {
    countProductInBasket() {
      return this.order ? this.order.entries.length : 0;
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
  }
</style>
