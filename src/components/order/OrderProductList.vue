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
                  <img src="@/assets/img/catalog/product.webp" class="basket-list__item-image img-fluid"  alt="">
                </div>
                <div class="basket-list__item-title col-lg-8 col-md-8">
                  {{ entry.productDto.name }}
                </div>
              </div>
            </td>
            <td>0%</td>
            <td class="--price">{{ entry.productDto.price }} руб.</td>
            <td>{{ entry.qty }} шт</td>
            <td class="--price">{{ entry.totalPrice }} руб.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="order-product-list__footer">
      <label for="exampleInputEmail1" class="form-label">Применить купон:</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderProductList",
  props: {
    entries: {
      type: Array,
      default: () => []
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
      padding: 33px;
      border-bottom: 1px solid #ececec;
    }

    &__title {
      font-size: 1.466em;
      line-height: 1.2em;
      color: #333;
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
      }
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
  }
</style>
