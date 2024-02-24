<template>
  <div class="order-product-list">
    <div class="order-product-list__header d-flex justify-content-between align-items-center">
      <div class="order-product-list__title">Товары в заказе</div>
<!--      <button class="btn btn-link">Подробнее</button>-->
    </div>
    <div class="order-product-list__body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Наименование</th>
            <th scope="col">Скидка</th>
            <th scope="col">Цена</th>
            <th scope="col">Количество</th>
            <th scope="col">Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="entry in entries"
            :key="`entry.${entry.productDto.vendorCode}`"
          >
            <td>
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <img :src="getImage(entry.productDto.smallImageUrl)" class="order-product-list__item-image img-fluid"  alt="">
                </div>
                <div class="order-product-list__item-title d-flex align-items-center col-lg-8 col-md-8">
                  {{ entry.productDto.name }}
                </div>
              </div>
            </td>
            <td>0%</td>
            <td class="--price">
              <div>{{ entry.productDto.price }} руб.</div>
              <div class="--old-price">{{ entry.productDto.price }} руб.</div>
            </td>
            <td>{{ entry.qty }} шт</td>
            <td class="--price">
              <div>{{ entry.totalPrice }} руб.</div>
              <div class="--old-price">{{ entry.totalPrice }} руб.</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="order-product-list__footer">
      <label for="promoInput" class="form-label">Применить купон:</label>
      <div class="input-group">
        <input
            v-model="promoCode"
            type="text"
            id="promoInput"
            class="order-product-list__promo-input form-control"
            aria-describedby="promo-button"
            :disabled="order?.promoCode"
        />
        <button
            type="button"
            id="promo-button"
            class="order-product-list__promo-btn btn"
            :disabled="order?.promoCode"
            @click="addPromo"
        >
          <Icon name="arrow-left" class="order-product-list__promo-icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  addPromo as addPromoRequest
} from '@/api/orders'
import Icon from '../common/Icon.vue'

export default {
  name: "OrderProductList",
  components: {
    Icon
  },
  props: {
    order: {
      type: Object,
      default: () => null
    },
    entries: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      promoCode: ''
    }
  },
  watch: {
    order(val) {
      this.promoCode = val.promoCode ?? ''
    }
  },
  beforeMount() {
    this.promoCode = this.order?.promoCode ?? ''
  },
  methods: {
    async addPromo() {
      if (this.promoCode) {
        await addPromoRequest({
          orderId: this.order.id,
          promoCode: this.promoCode
        })
        this.$emit('updateOrder')
      }
    },
    getImage(link) {
      return link === 'ссылка'
        ? require('@/assets/img/catalog/product.webp')
        : `http://178.172.201.242${link}`
    }
  }
}
</script>

<style scoped lang="scss">
  .order-product-list {
    margin-bottom: 20px;
    border: 1px solid #ececec;
    border-radius: 3px;

    &__header {
      padding: 31px 19px 32px 84px;
      border-bottom: 1px solid #ececec;
    }

    &__title {
      position: relative;
      font-size: 1.466em;
      line-height: 1.2em;
      color: #333;

      &:before {
        content: "";
        position: absolute;
        left: -50px;
        top: -3px;
        margin: 0;
        width: 30px;
        height: 30px;
        background-image: url(../../assets/img/checkout_icons_white.png);
        background-position: -30px -30px;
        background-color: #d6810b;
      }
    }

    &__body {
      .table {
        margin-bottom: 0;
      }

      .table thead tr th {
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        color: #999;

        &:first-child {
          padding-left: 30px;
        }

        &:last-child {
          padding-right: 24px;
        }
      }

      .table tbody tr:last-child td {
        border-bottom: none;
      }

      .table tbody tr td {
        padding: 33px 10px 25px;
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
        color: #333;
        vertical-align: middle;

        &:first-child {
          padding-left: 30px;
        }

        &:last-child {
          padding-right: 24px;
        }

        &:nth-child(3),
        &:nth-child(5) {
          min-width: 120px;
        }

        &.--price {
          font-size: 18px;
          font-weight: 700;
          line-height: 16px;
          color: #333;
        }

        & .--old-price {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          color: #777;
          text-decoration: line-through;
        }
      }
    }

    &__item-image {
      width: 100px;
    }

    &__footer {
      padding: 25px 33px 42px;
      border-top: 1px solid #ececec;

      label {
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        color: #777;
      }
    }

    &__promo-input {
      border-right: none;

      &:focus,
      &:visited,
      &:active {
        border-right: none !important;
      }
    }

    &__promo-btn {
      border: 1px solid #dee2e6;
      border-left: none;
    }

    &__promo-icon {
      position: relative;
      top: -2px;

      ::v-deep svg {
        transform: rotate(180deg);
      }

      &:hover {
        ::v-deep svg path {
          fill: #333;
        }
      }
    }
  }
</style>
