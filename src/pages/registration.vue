<template>
  <div class="registration">
    <div class="registration__wrapper maxwidth-theme d-flex flex-column justify-content-center">
      <h1 class="registration__title text-center">Регистрация</h1>

      <nav class="registration__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb d-flex justify-content-center">
          <li class="breadcrumb-item"><a href="#">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Регистрация</li>
        </ol>
      </nav>

      <div class="registration__description text-center">
        Зарегистрируйтесь, чтобы использовать все возможности личного кабинета: отслеживание заказов, настройку подписки, связи с социальными сетями и другие. Мы никогда и ни при каких условиях не разглашаем личные данные клиентов. Контактная информация будет использована только для оформления заказов и более удобной работы с сайтом.
      </div>

      <div class="registration__body">
        <ul class="registration__tabs nav nav-pills d-flex justify-content-center">
          <li class="nav-item" @click="setType('individual')">
            <div
              class="nav-link"
              :class="{ 'active': type === 'individual' }"
            >Физ. лицо</div>
          </li>
          <li class="nav-item" @click="setType('entity')">
            <div
              class="nav-link"
              :class="{ 'active': type === 'entity' }"
            >Юр. лицо</div>
          </li>
        </ul>

        <validation-observer
          v-if="type === 'individual'"
          ref="validator"
          tag="div"
          class="registration__form"
        >
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="name"
            class="mb-3"
            tag="div"
          >
            <label for="name" class="registration__form-label form-label">Фамилия Имя Отчество <span class="--required">*</span></label>
            <input
              v-model="model.name"
              type="text"
              class="form-control"
              id="name"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required|email"
            v-slot="{ errors }"
            name="individualEmail"
            class="mb-3"
            tag="div"
          >
            <label for="individualEmail" class="registration__form-label form-label">E-mail <span class="--required">*</span></label>
            <input
              v-model="model.email"
              type="email"
              class="form-control"
              id="individualEmail"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required|numeric"
            v-slot="{ errors }"
            name="individualPhone"
            class="mb-3"
            tag="div"
          >
            <label for="individualPhone" class="registration__form-label form-label">Телефон <span class="--required">*</span></label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="phone-addon">+375</span>
              <input
                v-model="model.phone"
                type="text"
                class="form-control"
                id="individualPhone"
                aria-describedby="phone-addon"
              />
            </div>
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required|min:6"
            v-slot="{ errors }"
            name="individualPassword"
            class="mb-3"
            tag="div"
          >
            <label for="individualPassword" class="registration__form-label form-label">Пароль <span class="--required">*</span></label>
            <input
              v-model="model.password"
              type="password"
              class="form-control"
              id="individualPassword"
            />
            <small class="form-text text-muted">Длина пароля не менее 6 символов.</small>
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            v-model="model.passwordConfirmation"
            rules="required|min:6|password:@individualPassword"
            v-slot="{ errors }"
            name="individualConfirmPassword"
            class="mb-4"
            tag="div"
          >
            <label for="individualConfirmPassword" class="registration__form-label form-label">Подтверждение пароля <span class="--required">*</span></label>
            <input
              v-model="model.passwordConfirmation"
              type="password"
              class="form-control"
              id="individualConfirmPassword"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <div class="mb-3">
            <div class="form-check form-switch">
              <input
                  v-model="model.agree"
                  class="form-check-input"
                  type="checkbox"
                  id="fizEntityAgreeCheckbox"
              />
              <label class="form-check-label" for="fizEntityAgreeCheckbox">Я согласен на <router-link to="/license" target="_blank">обработку персональных данных</router-link></label>
            </div>
            <div v-if="!model.agree" class="invalid-feedback">
              Согласитесь с условиями
            </div>
          </div>
        </validation-observer>

        <validation-observer
          v-if="type === 'entity'"
          ref="validator"
          tag="div"
          class="registration__form"
        >
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="companyName"
            class="mb-3"
            tag="div"
          >
            <label for="companyName" class="registration__form-label form-label">Наименование компании <span class="--required">*</span></label>
            <input
              v-model="model.companyName"
              type="text"
              class="form-control"
              id="companyName"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="legalAddress"
            class="mb-3"
            tag="div"
          >
            <label for="legalAddress" class="registration__form-label form-label">Юридический адрес <span class="--required">*</span></label>
            <input
              v-model="model.legalAddress"
              type="text"
              class="form-control"
              id="legalAddress"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required|numeric"
            v-slot="{ errors }"
            name="unp"
            class="mb-3"
            tag="div"
          >
            <label for="unp" class="registration__form-label form-label">УНП <span class="--required">*</span></label>
            <input
              v-model="model.unp"
              type="text"
              class="form-control"
              id="unp"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="requisites"
            class="mb-3"
            tag="div"
          >
            <label for="requisites" class="registration__form-label form-label">Реквизиты <span class="--required">*</span></label>
            <textarea
              v-model="model.requisites"
              class="form-control"
              id="requisites"
              rows="5"
            ></textarea>
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="contact-person"
            class="mb-3"
            tag="div"
          >
            <label for="contact-person" class="registration__form-label form-label">Контактное лицо <span class="--required">*</span></label>
            <input
              v-model="model.name"
              type="text"
              class="form-control"
              id="contact-person"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="entityEmail"
            class="mb-3"
            tag="div"
          >
            <label for="entityEmail" class="registration__form-label form-label">E-mail <span class="--required">*</span></label>
            <input
              v-model="model.email"
              type="email"
              class="form-control"
              id="entityEmail"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="entityPhone"
            class="mb-3"
            tag="div"
          >
            <label for="entityPhone" class="registration__form-label form-label">Телефон <span class="--required">*</span></label>
            <input
              v-model="model.phone"
              type="text"
              class="form-control"
              id="entityPhone"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required|numeric"
            v-slot="{ errors }"
            name="postcode"
            class="mb-3"
            tag="div"
          >
            <label for="postcode" class="registration__form-label form-label">Индекс <span class="--required">*</span></label>
            <input
              v-model="model.postcode"
              type="text"
              class="form-control"
              id="postcode"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="city"
            class="mb-3"
            tag="div"
          >
            <label for="city" class="registration__form-label form-label">Город <span class="--required">*</span></label>
            <input
              v-model="model.city"
              type="text"
              class="form-control"
              id="city"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required|min:6"
            v-slot="{ errors }"
            name="entityPassword"
            class="mb-3"
            tag="div"
          >
            <label for="entityPassword" class="registration__form-label form-label">Пароль <span class="--required">*</span></label>
            <input
              v-model="model.password"
              type="password"
              class="form-control"
              id="entityPassword"
            />
            <small class="form-text text-muted">Длина пароля не менее 6 символов.</small>
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            v-model="model.passwordConfirmation"
            rules="required|min:6|password:@entityPassword"
            v-slot="{ errors }"
            name="entityConfirmPassword"
            class="mb-4"
            tag="div"
          >
            <label for="entityConfirmPassword" class="registration__form-label form-label">Подтверждение пароля <span class="--required">*</span></label>
            <input
              v-model="model.passwordConfirmation"
              type="password"
              class="form-control"
              id="entityConfirmPassword"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <div class="mb-3">
            <div class="form-check form-switch">
              <input
                v-model="model.agree"
                class="form-check-input"
                type="checkbox"
                id="entityAgreeCheckbox"
              />
              <label class="form-check-label" for="entityAgreeCheckbox">Я согласен на <router-link to="/license" target="_blank">обработку персональных данных</router-link></label>
            </div>
            <div v-if="!model.agree" class="invalid-feedback">
              Согласитесь с условиями
            </div>
          </div>
        </validation-observer>
        <div class="d-flex justify-content-center">
          <button
            type="submit"
            class="registration__btn btn btn-lg"
            :disabled="!model.agree"
            @click="register"
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
  extend
} from 'vee-validate';
import { required, email, min, numeric } from 'vee-validate/dist/rules';
import { registerUser } from '@/api/users';
import { login } from '@/api/auth';
import { Events } from "../events";

export default {
  name: "registration",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      type: 'individual',
      model: {
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        companyName: '',
        legalAddress: '',
        unp: '',
        requisites: '',
        postcode: '',
        city: '',
        agree: true
      }
    }
  },
  beforeCreate() {
    document.title = 'Регистрация';
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
    extend('min', {
      ...min,
      message: 'Длина пароля не менее 6 символов'
    });
    extend('numeric', {
      ...numeric,
      message: 'Поле может содержать только цифры'
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
    setType(value) {
      this.type = value;
    },
    async register() {
      const isValid = await this.$refs.validator.validate();

      if (isValid && this.model.agree) {
        const data = this.type === 'individual' ? {
          userId: Number(localStorage.getItem('userId')),
          name: this.model.name,
          phone: '+375' + this.model.phone,
          email: this.model.email,
          password: this.model.password,
          passwordConfirmation: this.model.passwordConfirmation,
          individual: true
        } : {
          userId: localStorage.getItem('userId'),
          ...this.model,
          individual: false
        };
        await this.registerRequest(data)
        if (this.type === 'individual') {
          await this.authRequest(this.model.email, this.model.password)
        }
      }
    },
    async registerRequest(data) {
      try {
        await registerUser(data)
        await this.$router.push({
          path: '/'
        })
        this.$toasted.show(`Регистрация прошла успешно!`, { type: 'success', duration: 3000 })
      } catch (e) {
        this.$toasted.show(`Ошибка регистрации: ${e.response.data.message}`, { type: 'error', duration: 3000 })
      }
    },
    async authRequest(email, password) {
      const { token, userId, orderId } = await login({
        email,
        password
      })
      localStorage.setItem('token', token)
      localStorage.setItem('orderId', orderId)
      localStorage.setItem('userId', userId)
      Events.emit('updateProfile')
    },
  }
}
</script>

<style scoped lang="scss">
.registration {
  &__wrapper {
    padding-top: 42px;
    padding-bottom: 50px;
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

  &__description {
    margin-bottom: 30px;
  }

  &__body {
    width: 560px;
    margin: 0 auto 25px;

    @media (max-width: 575px) {
      width: 100%;
    }
  }

  &__tabs {
    margin-top: 2.133rem;
    margin-bottom: 39px !important;

    .nav-item {
      width: 50%;
      cursor: pointer;
    }

    .nav-link {
      font-size: .733em;
      line-height: 1.3em;
      text-transform: uppercase;
      letter-spacing: .8px;
      text-align: center;
      color: #333333;
      padding: 16px 24px 15px;
      border-radius: 3px !important;
      background: #fafafa;
      border: 1px solid #ececec;
      margin: 3px;

      &.active {
        background: #ffffff;
        border-top: 2px solid #d6810b;
      }
    }
  }

  &__form {
    .form-text {
      font-size: 12px;
      color: #999 !important;
    }

    .form-check-label {
      font-size: 12px;
      color: #999;
    }
  }

  &__form-label {
    font-size: 13px;
    margin-bottom: 6px;
    font-weight: 400;
    color: #888;

    .--required {
      font-size: 12px;
      font-weight: 400;
      line-height: 0;
      margin: 0 0 0 4px;
      position: relative;
      color: red;
    }
  }

  &__btn {
    font-size: .7333em;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: .8px;
    border-radius: 3px;
    padding: 16px 26px;
    margin: 30px 0 0;
    background-color: #d6810b;
    border: 1px solid #d6810b;
    color: #ffffff;
  }
}

label[for="entityAgreeCheckbox"],
label[for="fizEntityAgreeCheckbox"] {
  a {
    color: #8d8170;
    text-decoration: none;

    &:hover {
      color: #333;
    }
  }
}
</style>
