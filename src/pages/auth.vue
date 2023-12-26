<template>
  <div class="auth">
    <div class="auth__wrapper maxwidth-theme d-flex flex-column justify-content-center">
      <h1 class="auth__title text-center">Авторизация</h1>

      <nav class="auth__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb d-flex justify-content-center">
          <li class="breadcrumb-item"><a href="#">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Авторизация</li>
        </ol>
      </nav>

      <div class="auth__description text-center">
        Авторизировавшись, вы сможете управлять своими личными данными, следить за состоянием заказов.
      </div>

      <form class="auth__form">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Логин</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="d-flex justify-content-between">
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
          </div>
          <div>Забыли пароль?</div>
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-primary">Войти</button>
          <router-link to="/auth/registration">
            <button type="submit" class="btn btn-primary">Регистрация</button>
          </router-link>
        </div>
      </form>
      <div class="text-center">Быстрый вход через соцсети</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth"
}
</script>

<style scoped lang="scss">
  .auth {
    &__wrapper {
      padding-top: 42px;
      padding-bottom: 50px;
      max-width: 1408px;
      box-sizing: border-box;
    }

    &__breadcrumbs {
      padding: 15px 0 40px;
    }

    &__description {
      margin-bottom: 58px;
    }

    &__form {
      width: 560px;
      margin: 0 auto 25px
    }
  }
</style>
