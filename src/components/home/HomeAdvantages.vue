<template>
  <div class="home-advantages container-fluid">
    <div class="home-advantages__wrapper maxwidth-theme">
      <div class="home-advantages__list row flexbox justify-center">
        <div
          v-for="(advantage, index) in advantages"
          :key="`advantage.${index}`"
          class="home-advantages__item-wrapper col-md-3 col-sm-4 col-xs-6 clearfix"
        >
          <div class="home-advantages__item">
            <Icon :name="advantage.iconName" />
            <div class="home-advantages__item-title">{{ advantage.title }}</div>
            <div v-html="advantage.description" class="home-advantages__item-text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../common/Icon'

export default {
  name: "HomeAdvantages",
  components: {
    Icon
  },
  data() {
    return {
      advantages: [
        {
          iconName: 'delivery',
          title: 'Бесплатная доставка',
          description: 'Курьером по Минску, транспортной компанией и почтой по РБ'
        },
        {
          iconName: 'discount-system',
          title: 'Накопительная система',
          description: 'Постоянная скидка за покупки <b>до 20%</b>'
        },
        {
          iconName: 'quality-guarantee',
          title: 'Гарантия качества',
          description: 'Вернем деньги или заменим кофе, если вам не понравится'
        },
        {
          iconName: 'bonuses',
          title: 'Бонусы за покупки',
          description: 'При покупке 5 пачек — <b>подарок!</b>'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .home-advantages {
    padding: 60px 0;
    background-color: #ffffff;
    box-sizing: border-box;

    &__wrapper {
      box-sizing: border-box;
    }

    &__list {
      box-sizing: border-box;
    }

    &__item-wrapper {
      padding-left: 16px !important;
      padding-right: 16px !important;
      margin-bottom: 15px;

      @media (max-width: 600px) {
        margin-bottom: 30px;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;

      &-title {
        font-size: 1.0667em;
        line-height: 1.5625em;
        color: #333333;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 6px;
      }

      &-text {
        font-size: .867em;
        line-height: 1.692em;
        color: #777777;
        text-align: center;
      }
    }
  }
</style>
