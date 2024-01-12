<template>
  <div class="catalog-sidebar d-none d-lg-block">
    <div class="catalog-sidebar__title">Каталог</div>

    <div class="accordion" id="accordion">
      <div
          v-for="category in categories"
          :key="`category.${category.name}`"
          class="accordion-item"
      >
        <h2 class="accordion-header" :id="`heading-${category.name}`">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse-${category.name}`"
            aria-expanded="true"
            :aria-controls="`#collapse-${category.name}`"
          >
            {{ category.displayName }}
          </button>
        </h2>
        <div :id="`collapse-${category.name}`" class="accordion-collapse collapse" :aria-labelledby="`#heading-${category.name}`" data-bs-parent="#accordion">
          <div class="accordion-body">
            <div
              class="accordion accordion-flush"
              :id="`accordionSubCategory-${category.name}`"
            >
              <div
                  v-for="subcategory in category.childCategories"
                  :key="`subcategory.${subcategory.name}`"
                  class="accordion-item"
              >
                <h2 class="accordion-header" :id="`heading-${subcategory.name}`">
                  <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse-${subcategory.name}`"
                      aria-expanded="true"
                      :aria-controls="`#collapse-${subcategory.name}`"
                  >
                    {{ subcategory.displayName }}
                  </button>
                </h2>
                <div :id="`collapse-${subcategory.name}`" class="accordion-collapse collapse" :aria-labelledby="`#heading-${subcategory.name}`" :data-bs-parent="`#accordionSubCategory-${category.name}`">
                  <div class="accordion-body">
                    <ul class="list-group">
                      <li
                        v-for="subsubcategory in subcategory.childCategories"
                        :key="`subsubcategory.${subsubcategory.name}`"
                        class="list-group-item"
                      >
                        {{ subsubcategory.displayName }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogSidebar",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
  .catalog-sidebar {
    width: 244px;

    &__title {
      font-size: .733em;
      line-height: 1.3em;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .8px;
      color: #333333;
      padding: 23px 0;
    }

    .accordion-item {
      border-radius: 0 !important;
    }

    .accordion-body {
      padding: 0;
    }

    .accordion-button {
      font-size: 13px;
      line-height: 20px;

      &::after {
        width: 10px;
        height: 10px;
        background-size: 10px;
      }
    }

    .accordion-button:not(.collapsed) {
      background-color: transparent;
      font-weight: 700;
      color: #333333;
    }

    .list-group-item {
      font-size: 13px;
      line-height: 20px;
      border-color: #ececec !important;
      border-radius: 0 !important;
      padding: 15px 30px 17px 15px !important;
      cursor: pointer;
      transition: padding .2s ease;

      &:hover {
        background: #fafafa;
      }
    }
  }
</style>
