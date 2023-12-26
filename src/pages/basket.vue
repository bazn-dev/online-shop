<template>
  <div class="basket">
    <div class="basket__wrapper maxwidth-theme">
      <h1 class="basket__title">Корзина</h1>

      <nav class="basket__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Корзина</li>
        </ol>
      </nav>

      <div class="basket__block">
        <BasketCheckout />
        <BasketList />
      </div>
    </div>
  </div>
</template>

<script>
import BasketCheckout from '../components/basket/BasketCheckout'
import BasketList from '../components/basket/BasketList'

export default {
  name: "basket",
  components: {
    BasketCheckout,
    BasketList,
  }
}
</script>

<style scoped lang="scss">
.basket {
  padding: 60px 0;
  background-color: #ffffff;
  box-sizing: border-box;

  &__wrapper {
    max-width: 1408px;
    box-sizing: border-box;
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

  }
}
</style>
