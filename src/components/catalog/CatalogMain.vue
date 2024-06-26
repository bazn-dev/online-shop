<template>
  <div class="catalog-main">
    <template v-if="productsData">
      <div class="catalog-main__sort-wrapper d-flex justify-content-between">
        <div v-if="activeSortItem" class="dropdown">
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
        <div class="form-check form-switch">
          <input
            v-model="inStockFilter"
            type="checkbox"
            id="inStockCheckbox"
            class="form-check-input"
            role="switch"
            @change="toggleInStockFilter"
          />
          <label class="form-check-label" for="inStockCheckbox">В наличии</label>
        </div>
      </div>
      <div class="catalog-main__products row">
        <CatalogCard
          v-for="product in products"
          :key="`product.${product.vendorCode}`"
          :product="product"
          :alreadyInBasket="alreadyInBasket(product.vendorCode)"
          @addToOrder="addToOrderRequest"
        />
      </div>
      <nav v-if="productsData?.totalPages > 1" aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li
            v-if="!productsData.first"
            class="page-item"
            @click="setActivePage(activePage)"
          >
            <div class="page-link" aria-label="Previous">
              <span aria-hidden="true">
                <Icon name="arrow-up" class="pagination__prev-icon" />
              </span>
            </div>
          </li>
          <li
            v-for="page in productsData?.totalPages"
            :key="`page.${page}`"
            class="page-item"
            :class="{ 'active': page === activePage + 1 }"
            @click="setActivePage(page)"
          >
            <div class="page-link">{{ page }}</div>
          </li>
          <li
            v-if="!productsData.last"
            class="page-item"
            @click="setActivePage(activePage + 2)"
          >
            <div class="page-link" aria-label="Next">
              <span aria-hidden="true">
                <Icon name="arrow-up" class="pagination__next-icon" />
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </template>
    <div v-else class="catalog-main__not-found">На данный момент товары для данной категории не найдены</div>
  </div>
</template>

<script>
import { Events } from '../../events'
import CatalogCard from './CatalogCard'
import Icon from '@/components/common/Icon'
import { addProductToOrder as addProductToOrderRequest } from '@/api/orders'

export default {
  name: "CatalogMain",
  components: {
    CatalogCard,
    Icon
  },
  props: {
    order: {
      type: Object,
      default: () => null
    },
    productsData: {
      type: Object,
      default: () => null
    },
    activePage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeSortItem: {
        title: 'По популярности (убывание)',
        name: 'totalRating,asc'
      },
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
      ],
      inStockFilter: false
    }
  },
  computed: {
    products() {
      return this.productsData?.content ? this.productsData.content : []
    }
  },
  methods: {
    setActiveSortItem(item) {
      this.activeSortItem = item;
      this.$emit('sort', this.activeSortItem.name)
    },
    setActivePage(page) {
      this.$emit('sort', this.activeSortItem.name, this.inStockFilter, page - 1)
    },
    async addToOrderRequest(data) {
      try {
        await addProductToOrderRequest({
          orderId: Number(localStorage.getItem('orderId')),
          productVendorCode: data.productVendorCode,
          qty: data.count
        })
        this.$emit('updateOrder')
        Events.emit('updateBasket')
      } catch (e) {
        this.$toasted.show(e.response.data.message, { type: 'error', duration: 3000 })
      }
    },
    alreadyInBasket(vendorCode) {
      return this.order?.entries
        .map(product => product.productDto.vendorCode)
        .find(item => Number(item) === Number(vendorCode)) !== undefined;
    },
    toggleInStockFilter() {
      this.$emit('sort', this.activeSortItem.name, this.inStockFilter)
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

    &__not-found {
      margin-top: 60px;

      @media (max-width: 991px) {
        margin-top: 0;
      }
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
