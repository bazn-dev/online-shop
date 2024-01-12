<template>
  <div class="search">
    <div class="search__block">
      <div class="maxwidth-theme d-flex align-items-center">
        <input
          type="text"
          placeholder="Поиск"
          class="search__input"
        />
        <div class="d-flex align-items-center">
          <button class="search__btn btn btn-primary btn-lg">Найти</button>
          <div class="search__btn-close" @click="$emit('hideSearch')">
            <Icon name="close"/>
          </div>
        </div>
      </div>
    </div>
    <div class="search__overlay" @click="$emit('hideSearch')"></div>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  name: "Search",
  components: {
    Icon
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

    &__overlay {
      width: 100%;
      height: 100%;
      background: #3a3f44;
      opacity: .7;
    }
  }
</style>
