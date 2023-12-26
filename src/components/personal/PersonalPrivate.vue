<template>
  <div class="personal-private">
    <div class="personal-private__wrapper">
      <form class="personal-private__form">
        <div class="d-flex mb-3">
          <div class="w-50">
            <label for="name" class="form-label">Фамилия Имя Отчество</label>
            <input type="email" class="form-control" id="name" aria-describedby="emailHelp">
          </div>
          <div class="personal-private__input-note w-50">Заполните, чтобы мы знали, как к вам обращаться</div>
        </div>
        <div class="d-flex mb-3">
          <div class="w-50">
            <label for="email" class="form-label">E-mail</label>
            <input type="password" class="form-control" id="email">
          </div>
          <div class="personal-private__input-note w-50">
            <p>Для отправки уведомлений о статусе заказа.</p>
            <p>Используйте как логин для входа в личный кабинет</p>
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="w-50">
            <label for="phone" class="form-label">Телефон</label>
            <input type="password" class="form-control" id="phone">
          </div>
          <div class="personal-private__input-note w-50">Необходим для уточнения деталей заказа</div>
        </div>
        <div class="mb-3">
          <div class="w-50">
            <label for="password" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="password">
          </div>
        </div>
        <div class="mb-3">
          <div class="w-50">
            <label for="confirmPassword" class="form-label">Подтверждение пароля</label>
            <input type="password" class="form-control" id="confirmPassword">
          </div>
        </div>
        <div class="d-flex justify-content-start">
          <button type="submit" class="personal-private__submit btn btn-lg btn-primary">Сохранить изменения</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalPrivate"
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
      background-color: #978d7f;
      border: 1px solid #978d7f;
      color: #ffffff;
      padding: 16px 26px;
      margin-top: 30px;
    }
  }
</style>
