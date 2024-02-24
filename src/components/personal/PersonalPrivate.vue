<template>
  <div class="personal-private">
    <div class="personal-private__wrapper">
      <validation-observer
        ref="validator"
        tag="div"
        class="personal-private__form"
      >
        <div class="d-flex mb-3">
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="name"
            class="w-50"
            tag="div"
          >
            <label for="name" class="form-label">Фамилия Имя Отчество</label>
            <input
              v-model="model.name"
              type="text"
              class="form-control"
              id="name"
            />
            <div v-if="errorValidation?.name" class="invalid-feedback">
              {{ errorValidation.name }}
            </div>
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <div class="personal-private__input-note w-50">Заполните, чтобы мы знали, как к вам обращаться</div>
        </div>
        <div class="d-flex mb-3">
          <validation-provider
            rules="required|email"
            v-slot="{ errors }"
            name="individualEmail"
            class="w-50"
            tag="div"
          >
            <label for="individualEmail" class="form-label">E-mail</label>
            <input
              v-model="model.email"
              type="email"
              class="form-control"
              id="individualEmail"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
            <div v-if="errorValidation?.email" class="invalid-feedback">
              {{ errorValidation.email }}
            </div>
          </validation-provider>
          <div class="personal-private__input-note w-50">
            <p>Для отправки уведомлений о статусе заказа.</p>
            <p>Используйте как логин для входа в личный кабинет</p>
          </div>
        </div>
        <div class="d-flex mb-3">
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="individualPhone"
            class="w-50"
            tag="div"
          >
            <label for="individualPhone" class="form-label">Телефон</label>
            <input
              v-model="model.phone"
              type="text"
              class="form-control"
              id="individualPhone"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
            <div v-if="errorValidation?.phone" class="invalid-feedback">
              {{ errorValidation.phone }}
            </div>
          </validation-provider>
          <div class="personal-private__input-note w-50">Необходим для уточнения деталей заказа</div>
        </div>
        <div class="mb-3">
          <validation-provider
            rules=""
            v-slot="{ errors }"
            name="individualPassword"
            class="w-50"
            tag="div"
          >
            <label for="individualPassword" class="form-label">Пароль</label>
            <input
              v-model="model.password"
              type="password"
              class="form-control"
              id="individualPassword"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
            <div v-if="errorValidation?.password" class="invalid-feedback">
              {{ errorValidation.password }}
            </div>
          </validation-provider>
        </div>
        <div class="mb-3">
          <validation-provider
            v-model="model.passwordConfirmation"
            rules="password:@individualPassword"
            v-slot="{ errors }"
            name="individualConfirmPassword"
            class="w-50"
            tag="div"
          >
            <label for="individualConfirmPassword" class="form-label">Подтверждение пароля</label>
            <input
              v-model="model.passwordConfirmation"
              type="password"
              class="form-control"
              id="individualConfirmPassword"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors }}
            </div>
            <div v-if="errorValidation?.passwordConfirmation" class="invalid-feedback">
              {{ errorValidation.passwordConfirmation }}
            </div>
          </validation-provider>
        </div>
        <div class="d-flex justify-content-start">
          <button
            type="submit"
            class="personal-private__submit btn btn-lg btn-primary"
            @click="update"
          >
            Сохранить изменения
          </button>
        </div>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { updateUser as updateUserRequest } from '@/api/users';

export default {
  name: "PersonalPrivate",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    user: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      model: {
        name: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirmation: '',
      },
      errorValidation: null
    }
  },
  watch: {
    user(val) {
      if (val) {
        this.model.name = val.name
        this.model.email = val.email
        this.model.phone = val.phone
      }
    }
  },
  beforeMount() {
    extend('required', {
      ...required,
      message: 'Это поле обязательное'
    });
    extend('email', {
      ...email,
      message: 'Введите корректный E-mail'
    });
    extend('password', {
      params: ['target'],
      validate(value, { target }) {
        return value === target;
      },
      message: 'Пароли не совпадают'
    });
  },
  methods: {
    async update() {
      const isValid = await this.$refs.validator.validate()

      if (isValid) {
        const data = {
          userId: Number(localStorage.getItem('userId')),
          name: this.model.name,
          phone: this.model.phone,
          email: this.model.email,
          password: this.model.password,
          passwordConfirmation: this.model.passwordConfirmation
        }
        try {
          await updateUserRequest(data)
          this.$toasted.show(`Обновление данных прошло успешно!`, { type: 'success', duration: 3000 })
          this.model.password = ''
          this.model.passwordConfirmation = ''
        } catch (e) {
          this.errorValidation = e.response.data
          this.$toasted.show(`Ошибка обновления данных: ${e.message}`, { type: 'error', duration: 3000 })
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .personal-private {
    width: calc(100% - 284px);
    border: 1px solid #f2f2f2;

    @media (max-width: 991px) {
      width: 100%;
    }

    &__wrapper {
      padding: 38px 43px;
    }

    &__input-note {
      padding: 31px 0 0 25px;
      font-size: 12px;
      line-height: 16px;
      color: #b3b3b3;
      vertical-align: top;

      p {
        margin-bottom: 0 !important;
      }
    }

    &__submit {
      font-size: .7333em;
      font-weight: 400;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: .8px;
      border-radius: 3px;
      background-color: #d6810b;
      border: 1px solid #d6810b;
      color: #ffffff;
      padding: 16px 26px;
      margin-top: 30px;
    }
  }
</style>
