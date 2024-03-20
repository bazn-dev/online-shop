<template>
  <div class="product-reviews">
    <div class="product-reviews__header">
      <div class="product-reviews__title">Отзывы</div>
      <button
        type="button"
        class="product-reviews__btn btn btn-lg"
        @click="toggleReviewForm"
      >
        Оставить отзыв
      </button>
    </div>

    <div v-if="displayReviewForm" class="product-reviews__review-form">
      <validation-observer
        ref="validator"
        tag="div"
      >
        <div class="row">
          <validation-provider
            rules="required"
            v-slot="{ errors }"
            name="username"
            class="col-sm-6 col-12 mb-3 pr-3"
            tag="div"
          >
            <label for="username" class="product-reviews__review-form-label form-label">Ваше имя <span class="--required">*</span></label>
            <input
              v-model="model.username"
              type="text"
              class="form-control"
              id="username"
            />
            <div v-if="errors.length > 0" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
          <validation-provider
            rules="required|email"
            v-slot="{ errors }"
            name="individualEmail"
            class="col-sm-6 col-12 mb-3 pl-3"
            tag="div"
          >
            <label for="individualEmail" class="product-reviews__review-form-label form-label">E-mail <span class="--required">*</span></label>
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
        </div>
        <div class="mb-3">
          <label class="product-reviews__review-form-label form-label mb-0">Ваша оценка</label>
          <div class="product-reviews__review-form-rating">
            <span
              v-for="item in 5"
              :key="`review-form.stars.${item}`"
              @mouseenter="onHoverRating(item)"
              @mouseleave="onLeaveRating(item)"
              @click="setRating(item)"
            >
              <Icon
                :name="item <= hoverRatingIndex || item <= model.rating ? 'star-fill' : 'star-empty'"
              />
            </span>
            <span class="product-reviews__review-form-rating-text">&mdash; &nbsp;&nbsp;{{ ratingText }}</span>
          </div>
        </div>
        <validation-provider
          rules="required"
          v-slot="{ errors }"
          name="comment"
          class="mb-3"
          tag="div"
        >
          <label for="comment" class="product-reviews__review-form-label form-label">Комментарий <span class="--required">*</span></label>
          <textarea
            v-model="model.comment"
            class="form-control"
            id="comment"
            rows="3"
          />
          <div v-if="errors.length > 0" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </validation-provider>
      </validation-observer>
      <div class="d-flex">
        <button type="submit" class="product-reviews__review-form-btn btn btn-lg" @click="addReview">Опубликовать отзыв</button>
      </div>
    </div>

    <div v-if="reviews.length === 0" class="product-reviews__empty">
      Помогите другим пользователям с выбором - будьте первым, кто поделится своим мнением об этом товаре
    </div>

    <div
      v-else
      class="product-reviews__list"
    >
      <div
        v-for="(review, index) in reviews"
        :key="`review.${index}`"
        class="product-reviews__item"
      >
        <div class="product-reviews__item-header">
          <div class="product-reviews__item-comment-info">
            <div class="product-reviews__item-comment-user">{{ review.username }}</div>
            <div class="product-reviews__item-comment-date-time">{{ formatCreatedDateTime(review.creationDate) }}</div>
          </div>
          <div class="product-reviews__item-rating">
            <Icon
              v-for="item in 5"
              :key="`review.${index}.stars.${item}`"
              :name="item <= review.rating ? 'star-fill' : 'star-empty'"
            />
          </div>
        </div>
        <div class="product-reviews__item-content-wrapper">
          <div class="product-reviews__item-content">
            <div class="product-reviews__item-content-text">
              {{ review.comment }}
            </div>
          </div>
<!--          <div class="product-reviews__item-content"></div>-->
<!--          <div class="product-reviews__item-content"></div>-->
        </div>
<!--        <div class="product-reviews__item-actions">-->
<!--          <div class="product-reviews__btn-answer">Ответить</div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import Icon from '@/components/common/Icon';
import moment from 'moment'

export default {
  name: "ProductReviews",
  components: {
    ValidationObserver,
    ValidationProvider,
    Icon
  },
  props: {
    reviews: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      displayReviewForm: false,
      hoverRatingIndex: 0,
      model: {
        username: '',
        email: '',
        rating: 0,
        comment: '',
      }
    }
  },
  computed: {
    ratingText() {
      switch (this.hoverRatingIndex) {
        case 0:
          return 'Без оценки'
        case 1:
          return 'Очень плохо'
        case 2:
          return 'Плохо'
        case 3:
          return 'Нормально'
        case 4:
          return 'Хорошо'
        case 5:
          return 'Отлично'
      }
      return 'Без оценки'
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
  methods: {
    formatCreatedDateTime(dateTime) {
      return moment(dateTime).format('DD.MM.YYYY hh:mm:ss')
    },
    async addReview() {
      const isValid = await this.$refs.validator.validate()

      if (isValid) {
        await this.$emit('addReview', this.model)
        this.toggleReviewForm()
      }
    },
    toggleReviewForm() {
      if (this.displayReviewForm) {
        this.model.username = ''
        this.model.email = ''
        this.model.rating = 0
        this.model.comment = ''
      }
      this.displayReviewForm = !this.displayReviewForm
    },
    onHoverRating(index) {
      this.hoverRatingIndex = index
    },
    onLeaveRating(index) {
      this.hoverRatingIndex = index
    },
    setRating(index) {
      this.model.rating = index
    }
  }
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
      background-color: #d6810b;
      border-color: #d6810b;
      color: #ffffff;
      text-transform: uppercase;
    }

    &__review-form {
      padding: 34px;
      margin-bottom: 50px;
      border: 1px solid #ececec;
      border-radius: 3px;

      .pr-3 {
        @media (max-width: 575px) {
          padding-right: 0 !important;
        }
      }

      .pl-3 {
        @media (max-width: 575px) {
          padding-left: 0 !important;
        }
      }

      .d-flex {
        @media (max-width: 575px) {
          justify-content: center;
        }
      }
    }

    &__review-form-label {
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

    &__review-form-rating {
      ::v-deep svg {
        width: 25px;
        height: 25px;
        margin-right: 3px;
        cursor: pointer;
      }
    }

    &__review-form-rating-text {
      margin-left: 10px;
      line-height: 24px;
      vertical-align: middle;
    }

    &__review-form-btn {
      font-size: .7333em;
      font-weight: 400;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: .8px;
      border-radius: 3px;
      padding: 16px 26px;
      margin: 10px 0 0;
      background-color: #d6810b;
      border: 1px solid #d6810b;
      color: #ffffff;
    }

    &__empty {
      border-radius: 3px;
      border: 1px solid #ececec;
      padding: 27px 35px 30px;
      margin-top: 20px;
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

    &__item-rating {
      i:not(:last-child) {
        margin-right: 2px;
      }
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
      color: #d6810b;
      border-bottom: 1px dotted;
      cursor: pointer;

      &:hover {
        color: #777;
      }
    }
  }

  .pl-3 {
    padding-left: 16px !important;
  }

  .pr-3 {
    padding-right: 16px !important;
  }
</style>
