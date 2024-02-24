<template>
  <div class="order-customer-info">
    <div class="order-customer-info__title">Покупатель</div>

    <validation-observer
      ref="validator"
      tag="div"
    >
      <validation-provider
        rules="required"
        v-slot="{ errors }"
        name="name"
        tag="div"
        class="mb-3"
      >
        <label for="customerName" class="form-label">ФИО <span>*</span></label>
        <input
          v-model="model.name"
          id="customerName"
          class="form-control"
        />
        <div v-if="errors.length > 0" class="invalid-feedback">
          {{ errors[0] }}
        </div>
      </validation-provider>

      <validation-provider
        rules="required"
        v-slot="{ errors }"
        name="email"
        tag="div"
        class="mb-3"
      >
        <label for="customerEmail" class="form-label">E-mail <span>*</span></label>
        <input
          v-model="model.email"
          type="email"
          class="form-control"
          id="customerEmail"
          aria-describedby="emailHelp"
        />
        <div v-if="errors.length > 0" class="invalid-feedback">
          {{ errors[0] }}
        </div>
      </validation-provider>

      <validation-provider
        rules="required"
        v-slot="{ errors }"
        name="phone"
        tag="div"
        class="mb-3"
      >
        <label for="customerPhone" class="form-label">Телефон <span>*</span></label>
        <input
          v-model="model.phone"
          id="customerPhone"
          class="form-control"
        />
        <div v-if="errors.length > 0" class="invalid-feedback">
          {{ errors[0] }}
        </div>
      </validation-provider>

      <div>
        <validation-provider
          rules="required"
          v-slot="{ errors }"
          name="city"
          tag="div"
          class="mb-3"
        >
          <label for="customerCity" class="form-label">Город <span>*</span></label>
          <input
            v-model="model.city"
            id="customerCity"
            class="form-control"
          />
          <div v-if="errors.length > 0" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </validation-provider>

        <validation-provider
          rules="required"
          v-slot="{ errors }"
          name="street"
          tag="div"
          class="mb-3"
        >
          <label for="customerStreet" class="form-label">Улица <span>*</span></label>
          <input
            v-model="model.street"
            id="customerStreet"
            class="form-control"
          />
          <div v-if="errors.length > 0" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </validation-provider>

        <validation-provider
          rules="required"
          v-slot="{ errors }"
          name="buildingNumber"
          tag="div"
          class="mb-3"
        >
          <label for="customerBuildingNumber" class="form-label">Дом <span>*</span></label>
          <input
            v-model="model.buildingNumber"
            id="customerBuildingNumber"
            class="form-control"
          />
          <div v-if="errors.length > 0" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </validation-provider>

        <validation-provider
          rules="required"
          v-slot="{ errors }"
          name="apartmentNumber"
          tag="div"
          class="mb-3"
        >
          <label for="customerApartmentNumber" class="form-label">Квартира <span>*</span></label>
          <input
            v-model="model.apartmentNumber"
            id="customerApartmentNumber"
            class="form-control"
          />
          <div v-if="errors.length > 0" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </validation-provider>

        <validation-provider
          rules="required"
          v-slot="{ errors }"
          name="postalCode"
          tag="div"
          class="mb-3"
        >
          <label for="customerPostalCode" class="form-label">Индекс <span>*</span></label>
          <input
            v-model="model.postalCode"
            id="customerPostalCode"
            class="form-control"
          />
          <div v-if="errors.length > 0" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </validation-provider>
      </div>

      <div class="form-check mb-3">
        <input
          v-model="model.contactlessDelivery"
          type="checkbox"
          id="customerContactlessDelivery"
          class="form-check-input"
        />
        <label class="form-check-label" for="customerContactlessDelivery">
          Бесконтактная доставка
        </label>
      </div>

      <div class="form-check mb-3">
        <input
          v-model="model.noApproveCall"
          type="checkbox"
          id="customerNoApproveCall"
          class="form-check-input"
        />
        <label class="form-check-label" for="customerNoApproveCall">
          Не перезванивать для подтверждения заказа
        </label>
      </div>

      <label for="customerComment" class="form-label">Комментарии к заказу (укажите желаемое время доставки, особые пожелания к заказу):</label>
      <textarea
        v-model="model.comment"
        id="customerComment"
        class="form-control"
        style="height: 100px"
      ></textarea>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

export default {
  name: "OrderCustomerInfo",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      model: {
        name: '',
        phone: '',
        email: '',
        contactlessDelivery: false,
        noApproveCall: false,
        comment: '',
        city: '',
        street: '',
        buildingNumber: '',
        apartmentNumber: '',
        postalCode: '',
      }
    }
  },
  beforeMount() {
    extend('required', {
      ...required,
      message: 'Это поле обязательное'
    })
    extend('email', {
      ...email,
      message: 'Введите корректный E-mail'
    })
  },
}
</script>

<style scoped lang="scss">
  .order-customer-info {
    margin-bottom: 20px;
    padding: 28px 33px 25px 84px;
    border: 1px solid #ececec;
    border-radius: 3px;

    &__title {
      position: relative;
      margin-bottom: 25px;
      font-size: 1.466em;
      line-height: 1.2em;
      color: #333;

      &:before {
        content: "";
        position: absolute;
        left: -50px;
        top: -3px;
        margin: 0;
        width: 30px;
        height: 30px;
        background-image: url(../../assets/img/checkout_icons_white.png);
        background-position: 0 -30px;
        background-color: #d6810b;
      }
    }

    .form-label {
      font-size: .928em;
      line-height: 20px;
      color: #777;

      span {
        font-size: 12px;
        font-weight: 400;
        color: red;
      }
    }
  }
</style>
