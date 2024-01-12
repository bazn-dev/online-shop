<template>
  <div class="catalog-main">
    <div class="catalog-main__sort-wrapper d-flex justify-content-between">
      <div class="dropdown">
        <button class="catalog-main__dropdown-sort btn btn-link btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {{ activeSortItem.title }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li
            v-for="(sortItem, index) in sortItems"
            :key="`sortItem.${index}`"
            @click="setActiveSortItem(sortItem)"
          >
            <div class="dropdown-item">{{ sortItem.title }}</div>
          </li>
        </ul>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">В наличии</label>
      </div>
    </div>
    <div class="catalog-main__products row">
      <CatalogCard
        v-for="product in products"
        :key="`product.${product.vendorCode}`"
        :product="product"
        @addToOrder="addToOrderRequest"
      />
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <div class="page-link" aria-label="Previous">
            <span aria-hidden="true">
              <Icon name="arrow-up" class="pagination__prev-icon" />
            </span>
          </div>
        </li>
        <li class="page-item active">
          <div class="page-link">1</div>
        </li>
        <li class="page-item">
          <div class="page-link">2</div>
        </li>
        <li class="page-item">
          <div class="page-link">3</div>
        </li>
        <li class="page-item">
          <div class="page-link" aria-label="Next">
            <span aria-hidden="true">
              <Icon name="arrow-up" class="pagination__next-icon" />
            </span>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import CatalogCard from './CatalogCard'
import Icon from '@/components/common/Icon'
import { addProductToOrder } from '@/api/orders'

export default {
  name: "CatalogMain",
  components: {
    CatalogCard,
    Icon
  },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeSortItem: null,
      sortItems: [
        {
          title: 'По популярности (убывание)',
          name: 'totalRating,desc'
        },
        {
          title: 'По популярности (возрастание)',
          name: 'totalRating,asc'
        },
        {
          title: 'По алфавиту (убывание)',
          name: 'name,desc'
        },
        {
          title: 'По алфавиту (возрастание)',
          name: 'name,asc'
        },
        {
          title: 'По цене (убывание)',
          name: 'price,desc'
        },
        {
          title: 'По цене (возрастание)',
          name: 'price,asc'
        }
      ]
    }
  },
  beforeMount() {
    this.initData()
  },
  methods: {
    initData() {
      this.setActiveSortItem(this.sortItems[0])
    },
    setActiveSortItem(item) {
      this.activeSortItem = item;
      this.$emit('sort', this.activeSortItem.name)
    },
    async addToOrderRequest(data) {
      await addProductToOrder(data)
    }
  }
}
</script>

<style scoped lang="scss">
  .catalog-main {
    width: calc(100% - 277px);

    @media (max-width: 991px) {
      width: 100%;
    }

    &__sort-wrapper {
      padding-top: 23px;
      padding-bottom: 23px;

      .form-check .form-check-input {
        padding-top: 2px;
      }

      .form-check .form-check-label {
        font-size: 13px;
        font-weight: 400;
        color: #333;
        line-height: 14px;
      }

      .dropdown-menu {
        box-shadow: 0 1px 12px 1px rgba(0,0,0,.12);
        border: none;
        border-radius: 3px;

        li {
          cursor: pointer;

          .dropdown-item {
            font-size: .867em;
            line-height: 1.692em;
            padding: 11px 15px 10px !important;
          }
        }
      }
    }

    &__dropdown-sort {
      font-size: .867em;
      line-height: 1.692em;
      color: #333;
      text-transform: initial !important;
      letter-spacing: .1px !important;
    }

    &__products {
      margin-bottom: 30px;
    }
  }

  .pagination {
    &__prev-icon {
      ::v-deep(svg) {
        transform: rotate(-90deg);
      }

      ::v-deep(svg path) {
        fill: #333333 !important;
      }
    }

    &__next-icon {
      ::v-deep(svg) {
        transform: rotate(90deg);
      }

      ::v-deep(svg path) {
        fill: #333333 !important;
      }
    }

    .page-item {
      margin-left: 12px;
      margin-right: 12px;
      cursor: pointer;

      &.active {
        .page-link {
          color: #ffffff !important;
          background: #968b7b !important;
          border-radius: 2px;
          z-index: 1;
        }
      }
    }

    .page-link {
      font-size: 14px;
      font-weight: 700;
      color: #333 !important;
      border: none !important;
      z-index: 1 !important;
    }
  }
</style>
