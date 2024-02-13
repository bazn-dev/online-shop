<template>
  <div class="personal-order">
    <div class="personal-order__wrapper d-flex flex-column">
      <h3 class="personal-order__title">Мой заказ №131546, создан 19.01.2024</h3>
      <a href="#" class="personal-order__link">← Вернуться в список заказов</a>

      <div class="personal-order__content">
        <div class="personal-order__content-header">Заказ №131546 от 19.01.2024, 1 товар на сумму 15.40 руб.</div>
        <div class="personal-order__content-body">
          <div class="personal-order__content-title">Информация о заказе</div>
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="personal-order__content-subtitle">Ф.И.О.:</div>
              <div class="personal-order__content-text">Evgeniy Bazhin</div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="personal-order__content-subtitle">Текущий статус:</div>
              <div class="personal-order__content-text">Заказ доставлен в пункт самовывоза</div>
            </div>
            <div class="col-md-2 col-sm-6">
              <div class="personal-order__content-subtitle">Сумма:</div>
              <div class="personal-order__content-text">
                <strong>15.40 руб.</strong>
              </div>
            </div>
            <div class="col-md-2 col-sm-6">
              <button class="personal-order__content-btn btn btn-lg">Повторить заказ</button>
            </div>
          </div>
        </div>
        <div class="personal-order__content-header">Параметры оплаты</div>
        <div class="personal-order__content-body">
          <div class="d-flex">
            <div class="personal-order__content-subtitle">Способ оплаты:</div>
            <div class="personal-order__content-text --ml-5">Наличные</div>
          </div>
          <div class="d-flex">
            <div class="personal-order__content-subtitle">Сумма заказа:</div>
            <div class="personal-order__content-text --ml-5">15.40 руб.</div>
          </div>
        </div>
        <div class="personal-order__content-header">Параметры доставки</div>
        <div class="personal-order__content-body">
          <div class="d-flex">
            <div class="personal-order__content-subtitle">Способ доставки:</div>
            <div class="personal-order__content-text --ml-5">Курьером</div>
          </div>
          <div class="d-flex">
            <div class="personal-order__content-subtitle">Адрес доставки/самовывоза:</div>
            <div class="personal-order__content-text --ml-5">15.40 руб.</div>
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
                <tr>
                  <td>
                    <div class="row">
                      <div class="col-lg-4 col-md-4">
                        <img src="@/assets/img/catalog/1.webp" class="personal-order__item-image img-fluid"  alt="">
                      </div>
                      <div class="basket-list__item-title col-lg-8 col-md-8 d-flex align-items-center">
                        Фирменная смесь Roast.by (200, Под чашку)
                      </div>
                    </div>
                  </td>
                  <td class="--price"><b>15.40 руб.</b></td>
                  <td>1 шт</td>
                  <td class="--price"><b>15.40 руб.</b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="personal-order__content-body d-flex flex-column align-items-end">
          <div class="personal-order__total-row d-flex">
            <div>Стоимость доставки:</div>
            <div>0 руб.</div>
          </div>
          <div class="personal-order__total-row d-flex">
            <div><b>Итого:</b></div>
            <div><b>15.40 руб.</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalOrder"
}
</script>

<style scoped lang="scss">
  .personal-order {
    width: calc(100% - 284px);

    &__link {
      font-size: 15px;
      font-weight: 700;
      color: #978d7f;
      margin-bottom: 18px;
      text-decoration: none;
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
      background-color: #978d7f;
      border: 1px solid #978d7f;
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
