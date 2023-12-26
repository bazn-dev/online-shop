<template>
  <div class="product-reviews">
    <div class="product-reviews__header">
      <div class="product-reviews__title">Отзывы</div>
      <button type="button" class="product-reviews__btn btn btn-lg">Оставить отзыв</button>
    </div>
    <div class="product-reviews__list">
      <div class="product-reviews__item">
        <div class="product-reviews__item-header">
          <div class="product-reviews__item-comment-info">
            <div class="product-reviews__item-comment-user">Ольга Кузнецова</div>
            <div class="product-reviews__item-comment-date-time">16.05.2022 22:49:33</div>
          </div>
          <div class="product-reviews__item-rating"></div>
        </div>
        <div class="product-reviews__item-content-wrapper">
          <div class="product-reviews__item-content">
            <div class="product-reviews__item-content-title">
              Достоинства
            </div>
            <div class="product-reviews__item-content-text">
              Матча хороший чай, готовим с кокосовым молоком. Нам нравится с мужем, получается дешевле, чем в кафешке.
            </div>
          </div>
<!--          <div class="product-reviews__item-content"></div>-->
<!--          <div class="product-reviews__item-content"></div>-->
        </div>
        <div class="product-reviews__item-actions">
          <div class="product-reviews__btn-answer">Ответить</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductReviews",
}
</script>

<style scoped lang="scss">
  .product-reviews {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    &__title {
      font-size: 1.3333em;
      line-height: 1.4em;
      color: #000000;
    }

    &__btn {
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      border-radius: 3px;
      padding: 10px 14px 8px;
      background-color: #978d7f;
      border-color: #978d7f;
      color: #ffffff;
      text-transform: uppercase;
    }

    &__item {
      padding: 24px 32px 24px;
      border-radius: 3px;
      border: 1px solid #ececec;
    }

    &__item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__item-comment-info {
      display: flex;
      align-items: flex-end;
    }

    &__item-comment-user {
      font-size: 1.0667em;
      line-height: 1.0667em;
      font-weight: 400;
      color: #333;
      margin-right: 25px;
    }

    &__item-comment-date-time {
      font-size: .7333em;
      line-height: 1em;
      color: #999;
    }

    &__item-content {
      margin-top: 15px;
    }

    &__item-content-title {
      font-size: .8667em;
      color: #333;
    }

    &__item-content-text {
      font-size: 1em;
      color: #777;
    }

    &__item-actions {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }

    &__btn-answer {
      font-size: .8667em;
      line-height: 25px;
      letter-spacing: 0;
      color: #978d7f;
      border-bottom: 1px dotted;
      cursor: pointer;

      &:hover {
        color: #777;
      }
    }
  }
</style>
