<template>
  <div class="order-product-list">
    <div class="order-product-list__header d-flex justify-content-between align-items-center">
      <div class="order-product-list__title">Товары в заказе</div>
<!--      <button class="btn btn-link">Подробнее</button>-->
    </div>
    <div class="order-product-list__body d-none d-sm-block">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Наименование</th>
            <th scope="col">Цена</th>
            <th scope="col">Количество</th>
            <th scope="col">Масса</th>
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
            <td class="--price">
              <div>{{ entry.productDto.price !== entry.productDto.priceWithDiscount && entry.productDto.priceWithDiscount > 0 ? entry.productDto.priceWithDiscount : entry.productDto.price }} руб.</div>
              <div v-if="entry.productDto.price !== entry.productDto.priceWithDiscount && entry.productDto.priceWithDiscount > 0" class="--old-price">{{ entry.productDto.price }} руб.</div>
            </td>
            <td>{{ entry.qty }} шт</td>
            <td>{{ entry.grammAmount }} г</td>
            <td class="--price">
              <div>{{ entry.totalPrice !== entry.totalPriceWithDiscount ? entry.totalPriceWithDiscount : entry.totalPrice }} руб.</div>
              <div v-if="entry.totalPrice !== entry.totalPriceWithDiscount" class="--old-price">{{ entry.totalPrice }} руб.</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="order-product-list__body d-sm-none">
      <div
        v-for="entry in entries"
        :key="`entry.${entry.productDto.vendorCode}`"
        class="row"
      >
        <div class="col-sm-12">
          <div class="col-lg-4 col-md-4">
            <img :src="getImage(entry.productDto.smallImageUrl)" class="order-product-list__item-image img-fluid"  alt="">
          </div>
        </div>
        <div class="col-sm-12">
          {{ entry.productDto.name }}
        </div>
        <div class="col-4 --price">
          <div>
            <div class="--note">Цена:</div>
            <div>{{ entry.productDto.price !== entry.priceWithDiscount ? entry.priceWithDiscount : entry.productDto.price }} руб.</div>
            <div v-if="entry.productDto.price !== entry.priceWithDiscount" class="--old-price">{{ entry.productDto.price }} руб.</div>
          </div>
        </div>
        <div class="col-4 --price">
          <div>
            <div class="--note">Количество:</div>
            <div>{{ entry.qty }} шт</div>
          </div>
        </div>
        <div class="col-4 --price">
          <div>
            <div class="--note">Масса:</div>
            <div>{{ entry.grammAmount }} г</div>
          </div>
        </div>
        <div class="col-sm-12 --price">
          <div>
            <div class="--note">Сумма:</div>
            <div>{{ entry.totalPrice !== entry.totalPriceWithDiscount ? entry.totalPriceWithDiscount : entry.totalPrice }} руб.</div>
            <div v-if="entry.totalPrice !== entry.totalPriceWithDiscount" class="--old-price">{{ entry.totalPrice }} руб.</div>
          </div>
        </div>
      </div>
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
          :disabled="order?.promotionInfo?.promocode"
          @keydown.enter="addPromo"
        />
        <button
          type="button"
          id="promo-button"
          class="order-product-list__promo-btn btn"
          :disabled="order?.promotionInfo?.promocode"
          @click="addPromo"
        >
          <Icon name="arrow-left" class="order-product-list__promo-icon" />
        </button>
      </div>
      <div v-if="order?.promotionInfo?.discountPercentage" class="d-flex justify-content-between align-items-center">
        <div>Скидка: <b>{{ order?.promotionInfo?.discountPercentage }}</b></div>
        <div
          class="order-product-list__promo-remove"
          @click="deletePromo"
        >
          Удалить промокод
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  addPromo as addPromoRequest,
  deletePromo as deletePromoRequest,
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
      this.promoCode = val?.promotionInfo?.promocode ?? ''
    }
  },
  beforeMount() {
    this.promoCode = this.order?.promotionInfo?.promocode ?? ''
  },
  methods: {
    async addPromo() {
      if (this.order?.promotionInfo?.promocode) {
        return
      }

      if (this.promoCode) {
        try {
          await addPromoRequest({
            orderId: this.order.id,
            promoCode: this.promoCode
          })
          this.$emit('updateOrder')
        } catch (e) {
          this.$toasted.show(e.response.data.promoCode, { type: 'error', duration: 3000 })
        }
      }
    },
    async deletePromo() {
      await deletePromoRequest({
        orderId: this.order.id,
        promoCode: this.promoCode
      })
      this.promoCode = ''
      this.$emit('updateOrder')
    },
    getImage(link) {
      return link === 'ссылка'
        ? require('@/assets/img/catalog/product.webp')
        : `http://93.177.124.115${link}`
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

      &.d-sm-none .row {
        padding: 20px 30px 25px;

        &:not(:last-child) {
          border-bottom: 1px solid #ececec;
        }
      }

      .col-sm-12,
      .col-4 {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
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
        &:nth-child(6) {
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

    & .--note {
      font-size: 12px;
      line-height: 12px;
      color: #999;
      font-weight: normal;
      margin-bottom: 3px;
    }

    & .--count {
      font-size: 18px;
      line-height: 16px;
    }

    & .--price {
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

    &__promo-remove {
      font-size: 12px;
      color: #cb0000;
      margin-top: 5px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
