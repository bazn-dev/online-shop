<template>
  <div class="not-found">
    <div class="not-found__wrapper d-flex flex-column align-items-center">
      <img src="@/assets/img/not-found.svg" class="not-found__image" />
      <h1 class="not-found__title">Страница не найдена</h1>
      <div class="not-found__description">Неправильно набран адрес или такой страницы не существует</div>
      <button class="not-found__button btn btn-primary btn-lg">На главную</button>
<!--      <span class="not-found__description">-->
<!--        или <a href="#">вернуться назад</a>-->
<!--      </span>-->
    </div>
  </div>
</template>

<script>

export default {
  name: "notFound"
}
</script>

<style scoped lang="scss">
.not-found {
  padding: 130px 30px 100px;
  background-color: #ffffff;
  box-sizing: border-box;

  &__wrapper {
    max-width: 1408px;
    box-sizing: border-box;
  }

  &__image {
    margin-bottom: 33px;
  }

  &__title {
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    color: #333;
    margin-bottom: 24px;
  }

  &__button {
    font-size: .7333em;
    font-weight: 400;
    letter-spacing: .8px;
    border-radius: 3px;
    padding: 12px 21px 11px;
    margin-top: 33px;
    margin-bottom: 15px;
    background-color: #978d7f;
    border-color: #978d7f;
    color: #ffffff;
    text-transform: uppercase;
  }

  &__description {
    font-size: 1em;
    line-height: 1.6em;
    text-align: center;

    a {
      font-size: 1em;
      text-decoration: none;
      cursor: pointer;
      color: #8d8170;
    }
  }
}
</style>
