<template>
  <div class="drawer offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <ul class="drawer__list list-group list-group-flush">
      <li class="drawer__item list-group-item" data-bs-dismiss="offcanvas">
        <router-link to="/catalog/tea">
          Чай
        </router-link>
      </li>
      <li class="drawer__item list-group-item" data-bs-dismiss="offcanvas">
        <router-link to="/catalog/accessories">
          Аксессуары
        </router-link>
      </li>
      <li class="drawer__item list-group-item" data-bs-dismiss="offcanvas">
        <router-link to="/info">
          Скидки, оплата, доставка
        </router-link>
      </li>
      <li class="drawer__item list-group-item" data-bs-dismiss="offcanvas">
        <router-link to="/about">
          Компания
        </router-link>
      </li>
      <li v-if="isLoggedIn" class="drawer__item list-group-item" data-bs-dismiss="offcanvas">
        <router-link to="/personal">
          Личный кабинет
        </router-link>
      </li>
      <li class="drawer__item list-group-item" data-bs-dismiss="offcanvas">
        <router-link to="/basket">
          Корзина
        </router-link>
      </li>
    </ul>
    <div class="drawer__footer">
      <div class="drawer__footer-title">Контактная информация</div>
      <div v-html="contacts" class="drawer__footer-list">
<!--        <div class="drawer__footer-item">-->
<!--          <div>-->
<!--            г. Минск, ул. Белинского 23 (вход в кофейню BlackMill)-->
<!--            Заказы через сайт — круглосуточно.-->
<!--            Кофейня (+375 29 344 33 34): пн-пт с 8:00 до 20:00, сб-вск с 9:00 до 21:00 (самовывоз)-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="drawer__footer-item">-->
<!--          <div>-->
<!--            info@roast.by-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import { getCompanyDataByCode as getCompanyDataByCodeRequest } from '@/api/company'

export default {
  name: "Drawer",
  data() {
    return {
      contacts: null,
      legalInfo: null
    }
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem('token')
    }
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
    async initData() {
      this.contacts = (await getCompanyDataByCodeRequest(['footer']))?.[0]?.value || null
    }
  }
}
</script>

<style scoped lang="scss">
  .drawer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px !important;
    height: 100vh;

    &__item {
      font-size: 15px;
      font-weight: 700;
      padding: 0 !important;

      a {
        display: block;
        width: 100%;
        color: #333333;
        text-decoration: none;
        padding: 20px;
      }
    }

    &__footer {
      padding: 20px 20px 35px;
    }

    &__footer-title {
      font-size: 15px;
      font-weight: 700;
    }

    &__footer-list {
      margin-top: 20px;

      &::v-deep p {
        font-size: 13px;
        line-height: 18px;
        color: #333;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .list-group-flush>.list-group-item:last-child {
    border-bottom-width: 1px;
  }
</style>
