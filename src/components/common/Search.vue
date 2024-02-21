<template>
  <div class="search">
    <div class="search__block">
      <div class="maxwidth-theme d-flex align-items-center">
        <input
          v-model="search"
          type="text"
          placeholder="Поиск"
          class="search__input"
          @keyup.enter="searchProducts"
        />
        <div class="d-flex align-items-center">
          <button
            class="search__btn btn btn-primary btn-lg"
            @click="searchProducts"
          >
            Найти
          </button>
          <div class="search__btn-close" @click="$emit('hideSearch')">
            <Icon name="close"/>
          </div>
        </div>
      </div>
    </div>
    <ul class="search__results">
      <li
        v-for="result in results"
        :key="`search-result.${result.vendorCode}`"
        class="search__result"
        @click="goToProduct(result.vendorCode)"
      >
        <div class="maxwidth-theme d-flex align-items-center">
          <div class="search__result-image-wrapper">
            <img :src="getImage(result.smallImageUrl)"  alt=""/>
          </div>
          <div class="search__result-info">
            <div>{{ result.name }}</div>
            <b>{{ result.price }} руб.</b>
          </div>
        </div>
      </li>
    </ul>
    <div class="search__overlay" @click="$emit('hideSearch')"></div>
  </div>
</template>

<script>
import { searchProducts as searchProductsRequest } from '@/api/products'
import Icon from './Icon'

export default {
  name: "Search",
  components: {
    Icon
  },
  data() {
    return {
      search: '',
      results: []
    }
  },
  methods: {
    async searchProducts() {
      this.results = (await searchProductsRequest({
        params: {
          query: this.search
        }
      }))?.content || []
    },
    goToProduct(vendorCode) {
      this.$emit('hideSearch')
      this.$router.push({
        name: 'product',
        params: {
          vendorCode: vendorCode
        },
      })
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
  .search {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2999;

    &__block {
      background: #ffffff;
      z-index: 3000;
    }

    &__input {
      width: 100%;
      font-size: 28px;
      height: 134px;
      background: none;
      border: none;
      border-radius: 0;
      line-height: 36px;
      color: #444;
      margin-right: 20px;

      &:focus {
        border: none;
        box-shadow: none;
        outline: none;
      }

      &::placeholder {
        color: #b8b8b8;
      }
    }

    &__btn {
      font-size: .7333em;
      font-weight: 400;
      color: #fff;
      letter-spacing: .8px;
      text-transform: uppercase;
      text-decoration: none;
      border: 1px solid #978d7f;
      border-radius: 3px;
      background-color: #978d7f;
      padding: 16px 26px;
      margin: 0 40px 0 0;
    }

    &__btn-close {
      cursor: pointer;
    }

    &__results {
      max-height: 70vh;
      overflow-y: auto;
      z-index: 3000;
    }

    &__result {
      border-top: 1px solid #ececec;
      background: #ffffff;
      cursor: pointer;

      & .maxwidth-theme {
        height: 100px;
      }

      &:hover {
        background: #fafafa;
      }
    }

    &__result-image-wrapper {
      margin-right: 40px;

      img {
        height: 80px;
      }
    }

    &__result-info {
      color: #333333;
    }

    &__overlay {
      width: 100%;
      height: 100%;
      background: #3a3f44;
      opacity: .7;
    }
  }
</style>
