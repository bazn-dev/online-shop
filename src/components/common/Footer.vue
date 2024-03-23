<template>
  <footer class="footer container-fluid">
    <div class="footer__wrapper maxwidth-theme">
      <div class="footer__navs row">
        <div class="footer__nav d-none d-md-flex justify-content-center col-md-3 col-sm-3">
          <router-link to="/catalog/tea">Каталог</router-link>
        </div>
        <div class="footer__nav d-none d-md-flex justify-content-center col-md-3 col-sm-3">
          <router-link to="/about">Компания</router-link>
        </div>
        <div class="footer__nav d-none d-md-flex justify-content-center col-md-3 col-sm-3">
          <router-link to="/info">Информация</router-link>
        </div>

        <ul class="footer__mobile-list d-md-none col-md-12 list-group list-group-flush">
          <router-link to="/catalog/tea">
            <li class="footer__mobile-item list-group-item">Чай</li>
          </router-link>
          <router-link to="/catalog/accessories">
            <li class="footer__mobile-item list-group-item">Аксессуары</li>
          </router-link>
          <router-link to="/info">
            <li class="footer__mobile-item list-group-item">Скидки, оплата, доставка</li>
          </router-link>
          <router-link to="/about">
            <li class="footer__mobile-item list-group-item">Компания</li>
          </router-link>
          <router-link to="/personal">
            <li class="footer__mobile-item list-group-item">Личный кабинет</li>
          </router-link>
          <router-link to="/basket">
            <li class="footer__mobile-item list-group-item">Корзина</li>
          </router-link>
        </ul>

        <div
          v-if="contacts"
          v-html="contacts"
          class="footer__nav col-md-12 col-sm-12"
        >
<!--          <div class="footer__nav-content">-->
<!--            +375 33 300-33-34-->
<!--          </div>-->
<!--          <div class="footer__nav-content">-->
<!--            info@roast.by-->
<!--          </div>-->
<!--          <div class="footer__nav-content">-->
<!--            г. Минск, ул. Белинского 23 (вход в кофейню BlackMill)-->
<!--            Заказы через сайт — круглосуточно.-->
<!--            Кофейня (+375 29 344 33 34): пн-пт с 8:00 до 20:00, сб-вск с 9:00 до 21:00 (самовывоз)-->
<!--          </div>-->
        </div>
      </div>
      <div class="footer__networks d-flex justify-content-center">
<!--        <div class="footer__networks__social-wrapper">-->
<!--            <div class="footer__networks__social d-flex justify-content-center align-items-center">-->
<!--              <Icon name="instagram" />-->
<!--            </div>-->
<!--        </div>-->
        <div class="footer__networks__separator"></div>
      </div>
      <div class="footer__info row">
        <div class="footer__description col-lg-6 col-md-12 col-sm-12 order-lg-1 order-md-2 order-sm-2 order-xs-2">
          {{ currentYear }} © Roast.by — магазин свежего кофе! Общество с ограниченной ответственностью «РоастБай» 220113, г. Минск, ул. Белинского д. 23, пом. 339 УНП 193647200, зарегистрирован 19.09.2022 Минским городским исполнительным комитетом Торговый реестр № 541971 от 28.09.2022
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-1 order-sm-1 order-xs-1">
          <div class="footer__payment d-flex justify-content-end align-items-center">
            <img src="@/assets/img/payment/BK_i.png.webp" />
            <img src="@/assets/img/payment/MC_SC.png.webp" />
            <img src="@/assets/img/payment/MC_Visa.png.webp" />
            <img src="@/assets/img/payment/VbV.png.webp" />
            <img src="@/assets/img/payment/bepaid.png.webp" />
            <img src="@/assets/img/payment/oplati.png.webp" />
            <img src="@/assets/img/payment/union_pay.png.webp" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { getCompanyDataByCode as getCompanyDataByCodeRequest } from '@/api/company'
// import Icon from '@/components/common/Icon.vue'
import moment from 'moment';

export default {
  name: "Footer",
  components: {
    // Icon
  },
  data() {
    return {
      contacts: null
    }
  },
  computed: {
    currentYear() {
      return moment().format('YYYY')
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
  .footer {
    color: #ffffff;
    background-color: #333333;
    box-sizing: border-box;

    @media (max-width: 767px) {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    &__wrapper {
      padding: 59px 30px 64px;
      box-sizing: border-box;

      @media (max-width: 767px) {
        padding-top: 0;
        padding-left: 0;
        padding-right: 0;
      }
    }

    &__navs {
      padding-bottom: 70px;
    }

    &__nav {
      margin: 0 auto;
      max-width: calc(100vw - 400px);

      @media (max-width: 767px) {
        margin: 0 auto;
        max-width: 380px;
        padding: 0 16px !important;
      }

      a {
        color: #ffffff;
        text-decoration: none;
      }

      &::v-deep p {
        text-align: center;

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        &:first-child {
          @media (min-width: 767px) {
            margin-top: 40px;
          }
        }
      }
    }

    &__mobile-list {
      margin-bottom: 40px !important;

      a {
        text-decoration: none;
      }
    }

    &__mobile-item {
      font-size: .867em;
      font-weight: 700;
      line-height: 1.5385em;
      text-transform: uppercase;
      letter-spacing: .8px;
      color: #fff;
      background-color: #333333;
      padding: 15px 16px;
      border: none;
      border-bottom: 1px solid #434343;
    }

    &__networks {
      position: relative;
      margin-bottom: 42px;

      @media (max-width: 767px) {
        margin-left: 16px;
        margin-right: 16px;
      }

      &__separator {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        border-top: 1px solid rgba(255,255,255,.08);
      }

      &__social-wrapper {
        padding: 0 32px;
        background-color: #333333;
        z-index: 2;
      }

      &__social {
        width: 43px;
        height: 43px;
        border: 1px solid rgba(255,255,255,.2);
        background-color: #333333;
        z-index: 2;
        cursor: pointer;

        .icon {
          padding-bottom: 2px;
        }

        ::v-deep .icon svg {
          width: 16px;
          height: 16px;
        }

        ::v-deep .icon svg path {
          fill: #999999;
        }
      }
    }

    &__info {
      @media (max-width: 767px) {
        padding-left: 16px;
        padding-right: 16px;
      }
    }

    &__description {
      font-size: .867em;
      line-height: 1.692em;
      color: #999;

      @media (max-width: 991px) {
        text-align: center;
      }
    }

    &__payment {
      @media (max-width: 991px) {
        justify-content: center !important;
        margin-bottom: 15px;
      }

      img {
        max-width: 52px;
        max-height: 25px;
        margin-left: 3px;
        margin-right: 3px;
      }
    }
  }

  .list-group-flush>.list-group-item:last-child {
    border-bottom-width: 1px;
  }
</style>
