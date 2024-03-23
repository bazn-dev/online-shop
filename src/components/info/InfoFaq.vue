<template>
  <div class="info-faq">
    <h3>В данном разделе приведены ответы на часто задаваемые вопросы посетителей сайта.</h3>

    <div v-if="content" class="accordion" id="accordionPanels">
      <div
          v-for="(question, index) in content.question"
          :key="`question.${index}`"
          class="accordion-item"
      >
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#panelsStayOpen-collapse-${index}`"
            aria-expanded="true"
            :aria-controls="`panelsStayOpen-collapse-${index}`"
          >
            {{ question }}
          </button>
        </h2>
        <div
          :id="`panelsStayOpen-collapse-${index}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`panelsStayOpen-heading-${index}`"
        >
          <div v-html="content.value[index]" class="accordion-body"></div>
        </div>
      </div>
<!--      <div class="accordion-item">-->
<!--        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">-->
<!--          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">-->
<!--            Аккордеонный элемент #2-->
<!--          </button>-->
<!--        </h2>-->
<!--        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">-->
<!--          <div class="accordion-body">-->
<!--            <strong>Это тело аккордеона второго элемента.</strong> По умолчанию он скрыт, пока плагин свертывания не добавит соответствующие классы, которые мы используем для стилизации каждого элемента. Эти классы управляют общим внешним видом, а также отображением и скрытием с помощью переходов CSS. Вы можете изменить все это с помощью собственного CSS или переопределить наши переменные по умолчанию. Также стоит отметить, что практически любой HTML может быть помещен в <code>.accordion-body</code>, хотя переход ограничивает переполнение.-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="accordion-item">-->
<!--        <h2 class="accordion-header" id="panelsStayOpen-headingThree">-->
<!--          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">-->
<!--            Аккордеонный элемент #3-->
<!--          </button>-->
<!--        </h2>-->
<!--        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">-->
<!--          <div class="accordion-body">-->
<!--            <strong>Это тело аккордеона третьего элемента.</strong> По умолчанию он скрыт, пока плагин свертывания не добавит соответствующие классы, которые мы используем для стилизации каждого элемента. Эти классы управляют общим внешним видом, а также отображением и скрытием с помощью переходов CSS. Вы можете изменить все это с помощью собственного CSS или переопределить наши переменные по умолчанию. Также стоит отметить, что практически любой HTML может быть помещен в <code>.accordion-body</code>, хотя переход ограничивает переполнение.-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoFaq",
  props: {
    content: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped lang="scss">
  .info-faq {
    width: calc(100% - 284px);

    @media (max-width: 767px) {
      width: 100%;
    }

    .accordion-button:not(.collapsed) {
      color: #333;
      background-color: #fff !important;
      box-shadow: none !important;
    }

    .accordion-item:first-of-type {
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    }

    .accordion-item:last-of-type {
      border-bottom-right-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }

    .accordion-item:hover {
      @media (min-width: 992px) {
        border-color: #fff;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
        transform: translateY(-1px);
        background-color: #fff;
        z-index: 10;
      }
    }

    ul {
      margin: 26px 0 36px !important;
    }

    ul > li {
      margin: 8px 0 0 21px;
    }
  }
</style>
