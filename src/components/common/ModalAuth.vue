<template>
  <div class="modal-auth">
    <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="modal-auth__btn">
      <Icon name="avatar" />
    </div>

    <div
      class="modal fade"
      id="staticBackdrop"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-auth__body modal-body">
            <h2 class="modal-auth__title">Личный кабинет</h2>
            <validation-observer
              ref="validator"
              tag="div"
            >
              <validation-provider
                rules="required"
                v-slot="{ errors }"
                name="login"
                class="mb-4"
                tag="div"
              >
                <label for="email" class="modal-auth__form-label form-label">Логин <span class="--required">*</span></label>
                <input
                  v-model="email"
                  type="text"
                  id="email"
                  class="form-control"
                >
                <div v-if="errors.length > 0" class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </validation-provider>
              <validation-provider
                rules="required"
                v-slot="{ errors }"
                name="password"
                class="mb-4"
                tag="div"
              >
                <label for="password" class="modal-auth__form-label form-label">Пароль <span class="--required">*</span></label>
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  class="form-control"
                >
                <div v-if="errors.length > 0" class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </validation-provider>
              <div class="d-flex justify-content-between mb-5">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Запомнить меня</label>
                </div>
                <div>Забыли пароль?</div>
              </div>
              <div class="d-flex justify-content-between">
                <button class="modal-auth__auth-btn btn btn-lg" @click="auth">Войти</button>
                <button class="modal-auth__register-btn btn btn-lg" @click="toRegister">Регистрация</button>
              </div>
            </validation-observer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import Icon from '@/components/common/Icon';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { login } from '@/api/auth';

export default {
  name: "ModalAuth",
  components: {
    ValidationObserver,
    ValidationProvider,
    Icon
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  beforeMount() {
    extend('required', {
      ...required,
      message: 'Это поле обязательное'
    });
  },
  mounted() {
    document.body.appendChild(document.getElementById('staticBackdrop'))
  },
  methods: {
    async auth() {
      const isValid = await this.$refs.validator.validate();

      if (isValid) {
        try {
          const { token } = await login({
            email: this.email,
            password: this.password
          })
          localStorage.setItem('token', token)
          this.closeModal();
        } catch (e) {
          this.$toasted.show(`Ошибка авторизации: ${e.message}`, { type: 'error', duration: 3000 })
        }
      }
    },
    toRegister() {
      this.closeModal();
      this.$router.push({
        path: '/auth/registration'
      });
    },
    closeModal() {
      let modal = document.getElementById('staticBackdrop');
      modal.style.display = 'none';
      modal.style.opacity = 0;
      let modalBackdrop = document.querySelector('.modal-backdrop.fade.show');
      modalBackdrop.classList.remove("show");
      modalBackdrop.style.display = 'none';
    }
  }
}
</script>

<style scoped lang="scss">
  .modal-auth {
    &__btn {
      cursor: pointer;
    }

    &__title {
      font-size: 24px;
      line-height: 1.126em;
      font-weight: 400;
      color: #333;
      margin-bottom: 30px;
    }

    &__body {
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

    &__auth-btn,
    &__register-btn {
      font-size: .7333em;
      font-weight: 400;
      text-transform: uppercase;
      text-decoration: none;
      margin: 0;
      letter-spacing: .8px;
      border-radius: 3px;
      padding: 16px 26px;
    }

    &__auth-btn {
      background-color: #978d7f;
      border: 1px solid #978d7f;
      color: #ffffff;
    }

    &__register-btn {
      border: 1px solid rgba(151, 141, 127, 0.35);
      color: #978d7f;
      background-color: transparent;
      padding: 16px 26px;
      transition: background-color .3s ease;

      &:hover {
        background-color: #978d7f;
        border-color: #978d7f;
        color: #ffffff;
      }
    }
  }
</style>
