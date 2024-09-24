<template>
  <div class="home-best-offers container-fluid">
    <div class="home-best-offers__wrapper maxwidth-theme">
      <div class="home-best-offers__header d-flex justify-content-between align-items-center">
        <h3 class="home-best-offers__title">Лучшие предложения</h3>
        <div class="d-flex justify-content-start">
          <div class="home-best-offers__tabs d-none d-lg-block">
            <ul class="nav nav-pills">
              <li
                v-for="(sticker, index) in stickers"
                :key="`sticker.${index}`"
                class="nav-item"
                @click="setActiveSticker(index)"
              >
                <div
                  class="nav-link"
                  :class="{ 'active': sticker.name === activeSticker.name }"
                >
                  {{ sticker.name }}
                </div>
              </li>
            </ul>
          </div>
          <router-link to="/catalog/tea" class="home-best-offers__all-products">Весь каталог</router-link>
        </div>
      </div>
      <div class="home-best-offers__tabs d-lg-none">
        <ul class="nav nav-pills">
          <li
            v-for="(sticker, index) in stickers"
            :key="`sticker.${index}`"
            class="nav-item"
            @click="setActiveSticker(index)"
          >
            <div
              class="nav-link"
              :class="{ 'active': sticker.name === activeSticker.name }"
            >
              {{ sticker.name }}
            </div>
          </li>
        </ul>
      </div>
      <div class="home-best-offers__catalog row">
        <div
          v-for="(product, index) in products"
          :key="`sticker-product.${index}`"
          class="home-best-offers__card col-lg-3 col-md-4 col-sm-6 col-xs-6 col-xxs-6"
          @click="goToProductPage(product.vendorCode)"
        >
          <div class="home-best-offers__card-image-wrapper">
<!--            <div class="home-best-offers__card-label">Хит</div>-->
            <div class="home-best-offers__card-labels">
              <div
                v-for="(sticker, index) in product.stickers"
                :key="`product.sticker.${index}`"
                class="home-best-offers__card-label"
              >
                {{ sticker.name }}
              </div>
            </div>

            <img :src="getImage(product.smallImageUrl)" class="home-best-offers__card-image img-fluid"  alt="">
          </div>
          <div class="home-best-offers__card-info">
            <div class="home-best-offers__card-info-rating"></div>
            <div class="home-best-offers__card-info-title">{{ product.name }}</div>
            <div class="home-best-offers__card-info-additional">
              <div class="home-best-offers__card-info-count">
                <div class="home-best-offers__card-info-count-indicator"></div>
                <div>Много</div>
              </div>
              <div class="home-best-offers__card-info-additional-text">
                Арт.: {{ product.vendorCode }}
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <div class="home-best-offers__card-info-price">
                  {{ product.priceWithDiscount > 0 ? product.priceWithDiscount : product.price }} руб.
                </div>
                <div class="home-best-offers__card-info-price --old-price">
                  {{ product.priceWithDiscount > 0 ? product.price + ' руб.' : '' }}
                </div>
              </div>
              <div class="home-best-offers__card-info-weight">
                {{ product.weightPerItem ? product.weightPerItem + ' г' : '' }}
              </div>
            </div>
          </div>
          <div class="home-best-offers__card-btn-details">Подробнее</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStickers } from '@/api/stickers';
import { getProductsBySticker } from '@/api/products';

export default {
  name: "HomeBestOffers",
  data() {
    return {
      activeSticker: null,
      stickers: [],
      products: []
    }
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
    async initData() {
      this.stickers = await getStickers();
      this.activeSticker = this.stickers[0];
      await this.getProductsByStickerRequest(this.activeSticker.name, localStorage.getItem('userId'))
    },
    async setActiveSticker(index) {
      this.activeSticker = this.stickers[index];
      await this.getProductsByStickerRequest(this.activeSticker.name, localStorage.getItem('userId'))
    },
    async getProductsByStickerRequest(sticker, userId) {
      this.products = await getProductsBySticker(sticker, userId);
    },
    getImage(link) {
      return link === 'ссылка'
        ? require('@/assets/img/catalog/product.webp')
        : `https://api.teahub.by${link}`
    },
    goToProductPage(vendorCode) {
      this.$router.push({
        name: 'product',
        params: {
          vendorCode
        },
      });
    },
  }
}
</script>

<style scoped lang="scss">
  .home-best-offers {
    padding: 60px 0;
    background-color: #ffffff;
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;

    &__wrapper {
      box-sizing: border-box;
    }

    &__header {
      margin-bottom: 36px;

      @media (max-width: 991px) {
        margin-bottom: 20px;
      }
    }

    &__title {
      font-size: 1.6em;
      font-weight: 400;
      line-height: 1.2;
      color: #333333;
      margin: 0;
    }

    &__tabs {
      margin-right: 65px;

      &.d-lg-none {
        margin-bottom: 10px;
        margin-right: 0;
      }

      .nav-item {
        cursor: pointer;
      }

      .nav-link {
        font-size: .867em;
        line-height: 1.692em;
        padding: 0 !important;
        padding-bottom: 4px !important;
        color: #777 !important;
        background-color: transparent !important;
        border-radius: 0 !important;
        margin-right: 26px;

        &.active {
          color: #222222 !important;
          border-bottom: 2px solid #d6810b;
        }
      }
    }

    &__all-products {
      font-size: .667em;
      text-transform: uppercase;
      letter-spacing: .8px;
      color: #999;
      text-decoration: none;

      &:hover {
        color: #8d8170;
      }
    }

    &__catalog {

    }

    &__card {
      position: relative;
      padding: 25px 25px 30px;
      border: 1px solid #ececec;
      margin-left: -1px;
      margin-right: -1px;
      cursor: pointer;

      @media (min-width: 992px) {
        &:hover {
          box-shadow: 0 0 20px 0 rgba(0,0,0,.15);
          z-index: 2;

          .home-best-offers__card-btn-details {
            display: block;
          }
        }
      }

      &-image-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        padding-left: 25px;
        padding-right: 25px;
      }

      &-labels {
        position: absolute;
        left: 25px;
        display: flex;
        flex-wrap: wrap;
        width: calc(100% - 50px);
      }

      &-label {
        position: relative;
        font-size: .8em;
        line-height: 1.692em;
        color: #ffffff;
        margin: 0 2px 10px;
        padding: 2px 7px;
        background: #716f6e;
        border-radius: 2px;
        white-space: nowrap;

        &:after {
          position: absolute;
          left: -2px;
          top: calc(100% + 4px);
          content: "";
          width: 10px;
          height: 10px;
          display: block;
          margin: -7px 2px 4px;
          border: 10px solid transparent;
          border-left: 12px solid #716f6e;
          border-top: 0 solid #716f6e;
        }
      }

      &-info {
        padding-left: 25px;
        padding-right: 25px
      }

      &-info-title {
        font-size: .933em;
        line-height: 1.5em;
        color: #333333;
        margin-bottom: 7px;
      }

      &-info-additional {
        display: flex;
        font-size: .8em;
        line-height: .8em;
      }

      &-info-count {
        display: flex;
        align-items: flex-end;
      }

      &-info-count-indicator {
        width: 5px;
        height: 5px;
        background-color: #5fa800;
        border-radius: 100%;
        margin-right: 8px;
      }

      &-info-additional-text {
        margin-left: 16px;
      }

      &-info-price {
        font-size: 1.133em;
        line-height: 1.454em;
        font-weight: 700;
        color: #333333;
        margin-top: 7px;

        &.--old-price {
          height: 20px;
          font-size: 12px;
          line-height: 20px;
          color: #777;
          text-decoration: line-through;
          margin-top: 0;
        }
      }

      &-info-weight {
        color: #777;
        margin-top: 7px;
      }

      &-btn-details {
        display: none;
        position: absolute;
        top: 100%;
        width: 100%;
        padding: 20px 30px 19px;
        background: #d6810b;
        font-size: .7333em;
        font-weight: 400;
        letter-spacing: .8px;
        color: #ffffff;
        text-align: center;
        text-transform: uppercase;
        transition: display ease-out .2s;
      }
    }
  }
</style>
