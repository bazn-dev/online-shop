<template>
  <div class="success">
    <div class="success__wrapper maxwidth-theme">
      <h1 class="success__title">Заказ сформирован</h1>

      <nav class="success__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Главная</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Оформление заказа</li>
        </ol>
      </nav>

      <div class="d-flex justify-content-center">
        <div class="success__block row">
          <div class="d-flex justify-content-center">
            <Icon name="check" class="success__check-icon"/>
          </div>
          <p>Ваш заказ <b>№{{ orderId }}</b> от {{ placedOrderDateTime }} успешно создан. Номер вашей оплаты: <b>№{{ orderId }}</b></p>
          <p>Вы можете следить за выполнением заказа в Персональном разделе сайта. Обратите внимание, что для входа в этот раздел вам необходимо ввести логин и пароль пользователя сайта. Как только заказ будет отправлен, мы вышлем Вам письмо с трек-номером.</p>

<!--          <div class="success__order-details">-->
<!--            <div class="success__order-details-title">-->
<!--              Оплата заказа-->
<!--            </div>-->
<!--            <div class="success__order-details-info d-flex align-items-center">-->
<!--              <div class="success__order-details-wrapper-image">-->
<!--                <img src="@/assets/img/payment/bepaid.png.webp" />-->
<!--              </div>-->
<!--              <div>-->
<!--                Оплата банковской картой онлайн (Google Pay)-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../components/common/Icon.vue'
import moment from 'moment';

export default {
  name: "success",
  components: {
    Icon
  },
  data() {
    return {
      orderId: '',
      placedOrderDateTime: ''
    }
  },
  beforeMount() {
    this.orderId = this.$route.query.orderId
    this.placedOrderDateTime = moment().format('DD.MM.YYYY HH:mm')
  }
}
</script>

<style scoped lang="scss">
.success {
  padding: 60px 0;
  background-color: #ffffff;
  box-sizing: border-box;

  &__wrapper {
    max-width: 1408px;
    box-sizing: border-box;
  }

  &__title {
    font-size: 2.133em;
    font-weight: 400;
    color: #333333;
    line-height: 1.126em;
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
    max-width: 700px;

    p {
      text-align: center;
    }
  }

  &__check-icon {
    border-radius: 50%;
    border: 3px solid #d6810b;
    padding: 15px;
    margin-bottom: 40px;

    ::v-deep svg {
      width: 40px;
      height: 40px;
    }

    ::v-deep svg path {
      fill: #d6810b;
    }
  }

  &__order-details {
    padding: 20px 30px !important;
    border-radius: 3px;
    border: 1px solid #ececec;
  }

  &__order-details-title {
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 15px;
  }

  &__order-details-wrapper-image {
    border-radius: 3px;
    border: 1px solid #ececec;
    margin-right: 20px;

    img {
      max-width: 100px;
    }
  }
}
</style>
