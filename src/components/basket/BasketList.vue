<template>
  <div class="basket-list">
    <div class="basket-list__header d-md-flex justify-content-between">
      <div>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Фильтр">
      </div>
      <div class="basket-list__info-wrapper d-flex align-items-center">
        <div class="basket-list__total-price">В корзине 2 товара</div>
        <button class="basket-list__clear-button btn btn-link">Очистить</button>
      </div>
    </div>
    <ul class="basket-list__items">
      <li class="basket-list__item row">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <img src="@/assets/img/catalog/product.webp" class="basket-list__item-image img-fluid"  alt="">
            </div>
            <div class="basket-list__item-title col-lg-8 col-md-8">
              Матча (Маття) Изумруд
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-3 col-md-3">
              <div class="basket-list__item-price">
                15.50 руб.
              </div>
              <div class="basket-list__item-price-notion">
                цена за 1 шт
              </div>
            </div>
            <div class="col-lg-5 col-md-5">
              <div class="basket-list__item-change-count-wrapper">
                <div class="basket-list__item-change-count col-sm-6 row">
                  <div class="col-sm-4 d-flex justify-content-center align-items-center">-</div>
                  <div class="col-sm-4 d-flex justify-content-center align-items-center">1</div>
                  <div class="col-sm-4 d-flex justify-content-center align-items-center">+</div>
                </div>
                <div class="basket-list__item-change-count-notion">шт</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="basket-list__item-price">15.50 руб.</div>
            </div>
            <div class="col-lg-1 col-md-1">
              <div class="basket-list__item-clear">X</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BasketList",
}
</script>

<style scoped lang="scss">
.basket-list {
  border-radius: 3px;
  border: 1px solid #ececec;
  background: #ffffff;
  box-sizing: border-box;

  &__header {
    padding: 24px 29px;
    background: #fafafa;
    border-bottom: 1px solid #ececec;
    box-sizing: border-box;
  }

  &__clear-button {
    margin-left: 70px;

    @media (max-width: 450px) {
      margin-left: 0;
      margin-top: 15px;
    }
  }

  &__total-price {
    position: relative;
    font-size: 13px;
    font-weight: 400;
    color: #222;

    &:before {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      height: 2px;
      background: #978d7f;
    }
  }

  &__info-wrapper {
    @media (max-width: 767px) {
      margin-top: 20px;
      justify-content: space-around;
    }

    @media (max-width: 450px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__items {
    padding: 24px 29px !important;
  }

  &__item {
    &:not(:last-child) {
      border-bottom: 1px solid #f2f2f2;
    }
  }

  &__item-title {
    font-size: 1em;
    color: #2f3435;
  }

  &__item-price {
    font-size: 17px;
    font-weight: 700;
    color: #333;
    letter-spacing: -.33px;
  }

  &__item-price-notion {
    font-size: 11px;
    color: #999;
  }

  &__item-change-count-wrapper {
    width: 100px;
  }

  &__item-change-count {
    width: 100%;
    height: 32px;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    background: #f8f8f8;

    div:nth-child(1),
    div:nth-child(3) {
      font-size: 15px;
      color: #777;
      cursor: pointer;
    }
  }

  &__item-change-count-notion {
    font-size: 12px;
    line-height: 14px;
    color: #a1a1a1;
    text-align: center;
  }
}
</style>
