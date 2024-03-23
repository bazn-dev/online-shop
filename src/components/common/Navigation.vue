<template>
  <div class="navigation container-fluid">
    <div class="navigation__wrapper maxwidth-theme d-flex justify-content-start align-items-center">
      <ul class="navigation__items">
        <li class="navigation__item">
          <router-link to="/catalog/tea">
            Чай
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/catalog/accessories">
            Аксессуары
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/info">
            Скидки, оплата, доставка
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/about">
            Компания
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped lang="scss">
  .navigation {
    padding: 0 30px;
    box-sizing: border-box;

    &__wrapper {
      max-width: 1408px;
      box-sizing: border-box;
    }

    &__items {
      width: 100%;
      display: flex;
      justify-content: space-between;
      list-style-type: none;
    }

    &__item {
      line-height: 1.33em;
      letter-spacing: 1.2px;
      color: #333333;
      font-size: .867em;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;

      a {
        color: #333333;
        padding: 18px;
        text-decoration: none;
      }
    }
  }
</style>
