<template>
  <div v-if="order" class="personal-order">
    <div class="personal-order__wrapper d-flex flex-column">
      <h3 class="personal-order__title">Мой заказ №{{ order.id }}, создан {{ formatDate(order.creationDate) }}</h3>
      <div
        class="personal-order__link"
        @click="toOrders"
      >
        ← Вернуться в список заказов
      </div>

      <div class="personal-order__content">
        <div class="personal-order__content-header">Заказ №{{ order.id }} от {{ formatDate(order.creationDate) }}, {{ order.entries.length }} товар на сумму {{ order.totalAmountWithDiscount }} руб.</div>
        <div class="personal-order__content-body">
          <div class="personal-order__content-title">Информация о заказе</div>
          <div class="row">
<!--            <div class="col-md-4 col-sm-6">-->
<!--              <div class="personal-order__content-subtitle">Ф.И.О.:</div>-->
<!--              <div class="personal-order__content-text">Evgeniy Bazhin</div>-->
<!--            </div>-->
            <div class="col-md-6 col-sm-6">
              <div class="personal-order__content-subtitle">Текущий статус:</div>
              <div class="personal-order__content-text">Заказ доставлен в пункт самовывоза</div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="personal-order__content-subtitle">Сумма:</div>
              <div class="personal-order__content-text">
                <strong>{{ order.totalAmountWithDiscount }} руб.</strong>
              </div>
            </div>
<!--            <div class="col-md-2 col-sm-6">
              <button class="personal-order__content-btn btn btn-lg">Повторить заказ</button>
            </div>-->
          </div>
        </div>
        <div class="personal-order__content-header">Параметры оплаты</div>
        <div class="personal-order__content-body">
          <div class="d-flex">
            <div class="personal-order__content-subtitle">Способ оплаты:</div>
            <div class="personal-order__content-text --ml-5">{{ order?.paymentMode?.option }}</div>
          </div>
          <div class="d-flex">
            <div class="personal-order__content-subtitle">Сумма заказа:</div>
            <div class="personal-order__content-text --ml-5">{{ order.totalAmountWithDiscount }} руб.</div>
          </div>
        </div>
        <div class="personal-order__content-header">Параметры доставки</div>
        <div class="personal-order__content-body">
          <div class="d-flex">
            <div class="personal-order__content-subtitle">Способ доставки:</div>
            <div class="personal-order__content-text --ml-5">{{ order?.deliveryMode?.option }}</div>
          </div>
          <div class="d-flex">
            <div class="personal-order__content-subtitle">Адрес доставки/самовывоза:</div>
            <div class="personal-order__content-text --ml-5">{{ deliveryAddress }}</div>
          </div>
        </div>
        <div class="personal-order__content-header">Содержимое заказа</div>
        <div class="personal-order__content-body --pa-0">
          <div class="personal-order__content-table">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Наименование</th>
                  <th scope="col">Цена</th>
                  <th scope="col">Количество</th>
                  <th scope="col">Сумма</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(entry, index) in order.entries"
                  :key="`entry.${index}`"
                >
                  <td>
                    <div class="row">
                      <div class="col-lg-4 col-md-4">
                        <img :src="getImage(entry.productDto.smallImageUrl)" class="personal-order__item-image img-fluid"  alt="">
                      </div>
                      <div class="basket-list__item-title col-lg-8 col-md-8 d-flex align-items-center">
                        {{ entry.productDto.name }}
                      </div>
                    </div>
                  </td>
                  <td class="--price"><b>{{ entry.productDto.price }} руб.</b></td>
                  <td>{{ entry.qty }} шт</td>
                  <td class="--price"><b>{{ entry.totalPrice }} руб.</b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="personal-order__content-body d-flex flex-column align-items-end">
          <div class="personal-order__total-row d-flex">
            <div>Стоимость доставки:</div>
            <div>{{ order?.deliveryMode?.deliveryCost }} руб.</div>
          </div>
          <div class="personal-order__total-row d-flex">
            <div><b>Итого:</b></div>
            <div><b>{{ order.totalAmountWithDiscount }} руб.</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "PersonalOrder",
  props: {
    order: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    deliveryAddress() {
      if (!this.order) {
        return ''
      }
      if (this.order.deliveryMode.code === 'Самовывоз') {
        return this.order.deliveryMode.description
      } else {
        const { city, street, buildingNumber, apartmentNumber } = this.order.deliveryAddress
        return `${city}, ул. ${street}, д. ${buildingNumber} / ${apartmentNumber}`
      }
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format('DD.MM.YYYY')
    },
    getImage(link) {
      return link === 'ссылка'
        ? require('@/assets/img/catalog/product.webp')
        : `http://178.172.201.242${link}`
    },
    async toOrders() {
      await this.$router.push({
        path: `/personal?tab=orders-history`
      })
      await this.$router.go(0)
    }
  }
}
</script>

<style scoped lang="scss">
  .personal-order {
    width: calc(100% - 284px);

    @media (max-width: 991px) {
      width: 100%;
    }

    &__link {
      font-size: 15px;
      font-weight: 700;
      color: #d6810b;
      margin-bottom: 18px;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #333;
      }
    }

    &__title {
      font-size: 1.6em;
      font-weight: 400;
      line-height: 1.126em;
      margin-bottom: 25px;
    }

    &__content {
      border: 1px solid #f2f2f2;
      margin-bottom: 35px;
    }

    &__content-header {
      font-size: 16px;
      font-weight: 700;
      color: #383838;
      padding: 20px;
      background: #f7f7f7;
    }

    &__content-body {
      padding: 20px;

      &.--pa-0 {
        padding: 0 !important;
      }
    }

    &__content-title {
      font-size: 16px;
      font-weight: 700;
      color: #333;
      margin-bottom: 15px;
    }

    &__content-subtitle {
      font-size: 14px;
      color: #888;
    }

    &__content-text {
      font-size: 15px;
      font-weight: 400;
      color: #333;

      &.--ml-5 {
        margin-left: 5px;
      }
    }

    &__content-btn {
      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
      margin: 0;
      border-radius: 3px;
      padding: 7px 12px 8px;
      cursor: pointer;
      background-color: #d6810b;
      border: 1px solid #d6810b;
      color: #ffffff;

      &:hover {
        background: #a59c90;
      }
    }

    &__content-table {
      th, td {
        padding-left: 20px;
        padding-right: 20px;
        vertical-align: middle;
      }

      th {
        font-size: 13px;
        font-weight: 400;
        color: #999;
      }
    }

    &__item-image {
      width: 60px;
    }

    &__total-row {
      &:first-child {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #777;
        margin-top: 30px;
      }

      &:last-child {
        font-size: 16px;
        color: #333;
        margin-top: 10px;
      }

      div {
        &:first-child {
          margin-right: 30px;
        }

        &:last-child {
          width: 150px !important;
          text-align: right;
        }
      }
    }
  }
</style>
