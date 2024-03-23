<template>
  <div class="info">
    <div class="info__wrapper maxwidth-theme">
      <h1 class="info__title">{{ title }}</h1>

      <nav class="info__breadcrumbs" style="--bs-breadcrumb-divider: '—';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Справочная информация</li>
        </ol>
      </nav>

      <div class="info__block d-flex justify-content-between">
        <InfoSidebar
          :items="info"
          :active="activeTab"
          @setActive="setActiveTab"
        />
        <InfoFaq
          v-if="title === 'FAQ'"
          :content="info[activeTab]"
        />
        <InfoHelp
          v-else
          :content="info[activeTab]"
        />
      </div>
    </div>

  </div>
</template>

<script>
import { getCompanyFaq as getCompanyFaqRequest} from '@/api/company'
import InfoSidebar from '../components/info/InfoSidebar'
import InfoFaq from '../components/info/InfoFaq'
import InfoHelp from '../components/info/InfoHelp'

export default {
  name: "info",
  components: {
    InfoSidebar,
    InfoFaq,
    InfoHelp
  },
  data() {
    return {
      info: [],
      activeTab: 0
    }
  },
  computed: {
    title() {
      if (this.info.length > 0) {
        return this.info[this.activeTab]?.groupItemName ?? ''
      }
      return ''
    }
  },
  beforeCreate() {
    document.title = 'Вопросы и ответы';
  },
  async beforeMount() {
    await this.initData()
  },
  methods: {
    async initData() {
      this.info = await getCompanyFaqRequest()
      console.log(this.info)
    },
    setActiveTab(index) {
      this.activeTab = index
    }
  }
}
</script>

<style scoped lang="scss">
.info {
  padding: 60px 0;
  background-color: #ffffff;
  box-sizing: border-box;

  &__wrapper {
    max-width: 1408px;
    box-sizing: border-box;
  }

  &__breadcrumbs {
    padding: 15px 0 40px;

    .breadcrumb-item {
      font-size: .867em;
      line-height: 1.692em;
      color: #b6b5b5;

      a {
        color: #b6b5b5;
        text-decoration: none;

        &:hover {
          color: #8d8170;
        }
      }
    }
  }

  &__block {
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
}
</style>
