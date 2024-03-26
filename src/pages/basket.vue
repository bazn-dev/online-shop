<template>
  <div class="basket">
    <div class="basket__wrapper maxwidth-theme">
      <h1 class="basket__title">Корзина</h1>

      <nav class="basket__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Главная</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Корзина</li>
        </ol>
      </nav>

      <div class="basket__block">
        <div
          v-if="!order || (order && order.entries.length === 0)"
          class="basket__block-empty d-flex flex-column align-items-center"
        >
          <div class="basket__block-empty-title">Ваша корзина пуста</div>
          <div class="basket__block-empty-text">
            <router-link to="/catalog/tea">Нажмите здесь</router-link>, чтобы продолжить покупки
          </div>
        </div>
        <template v-else>
          <BasketCheckout
            :order="order"
            @updateOrder="getOrderById"
          />
          <BasketList
            :entries="order.entries"
            @updateOrder="getOrderById"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { Events } from '../events'
import { getOrderById as getOrderByIdRequest} from '@/api/orders'
import BasketCheckout from '../components/basket/BasketCheckout'
import BasketList from '../components/basket/BasketList'

export default {
  name: "basket",
  components: {
    BasketCheckout,
    BasketList,
  },
  data() {
    return {
      order: null
    }
  },
  beforeCreate() {
    document.title = 'Корзина';
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
    async initData() {
      await this.getOrderById()
      Events.emit('updateBasket')
    },
    async getOrderById() {
      this.order = await getOrderByIdRequest(localStorage.getItem('orderId'))
    },
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

  &__block-empty-title {
    font-size: 1.6em;
    margin: 2.2rem 0 1.2rem;
    color: #333;
  }

  &__block-empty-text {
    font-size: .933em;
    color: #777;
    line-height: 1.714em;
    margin-bottom: 42px;

    a {
      color: #8d8170;
      text-decoration: none;
      outline: none;

      &:hover,
      &:focus {
        color: #333;
      }
    }
  }
}
</style>
