<template>
  <div class="order-customer-type-region">
    <div class="order-customer-type-region__title">Тип покупателя и регион доставки</div>
    <div class="order-customer-type-region__body">
      <div class="order-customer-type-region__customer-type">
        <div class="order-customer-type-region__customer-type-wrapper">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Физическое лицо</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">Юридическое лицо</label>
          </div>
        </div>
        <div class="order-customer-type-region__divider"></div>
      </div>
      <div class="order-customer-type-region__region-search">
        <label for="exampleInputEmail1" class="form-label">Местоположение <span>*</span></label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div class="order-customer-type-region__region-search-notion">Выберите свой город в списке. Если вы не нашли свой город, выберите "другое местоположение", а город впишите в поле "Город"</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCustomerTypeRegion"
}
</script>

<style scoped lang="scss">
  .order-customer-type-region {
    margin-bottom: 20px;
    border: 1px solid #ececec;
    border-radius: 3px;

    &__title {
      padding: 31px 19px 3px 84px;
      font-size: 1.466em;
      line-height: 1.2em;
      color: #333;
    }

    &__body {
      padding: 28px 33px 25px 84px;
    }

    &__customer-type {
      position: relative;
      margin-bottom: 15px;

      .form-check {
        padding-right: 40px;
        margin-right: 0 !important;
        z-index: 1;
      }

      .form-check-label {
        font-size: 1em;
        color: #333;
      }

      .form-check-input:checked {
        background-color: #978d7f;
        border-color: #978d7f;
      }
    }

    &__customer-type-wrapper {
      position: relative;
      width: fit-content;
      background: #ffffff;
      z-index: 2;
    }

    &__divider {
      position: absolute;
      top: 14px;
      left: 0;
      right: 0;
      height: 1px;
      background: #ececec;
      z-index: 0;
    }

    &__region-search {
      .form-label {
        font-size: 12px;
        line-height: 20px;
        color: #777;

        span {
          font-size: 12px;
          font-weight: 400;
          color: red;
        }
      }
    }

    &__region-search-notion {
      margin-top: 25px;
      font-size: 12px;
      line-height: 14px;
      color: #999;
    }
  }
</style>
