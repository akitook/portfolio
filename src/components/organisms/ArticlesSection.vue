<template>
  <section class="articlesSection">
    <h1>記事一覧</h1>
    <ul class="filterList">
      <li
        @click="clickFilter('all')"
        :class="{ 'is-active': activeFilter === 'all' }"
      >
        All
      </li>
      <li
        @click="clickFilter('works')"
        :class="{ 'is-active': activeFilter === 'works' }"
      >
        Works
      </li>
      <li
        @click="clickFilter('private')"
        :class="{ 'is-active': activeFilter === 'private' }"
      >
        Private
      </li>
      <!--
      <li
        @click="clickFilter('sketch')"
        :class="{ 'is-active': activeFilter === 'sketch' }"
      >
        Sketch
      </li>
      -->
      <li @click="changeLayout" class="grid-button">
        <img
          v-if="isGrid"
          src="~/assets/images/onegrid.svg"
          class="grid-icon"
          alt="icon"
        />
        <img
          v-else
          src="~/assets/images/twogrid.svg"
          class="grid-icon"
          alt="icon"
        />
      </li>
    </ul>
    <Articles :data="filterData" :is-grid="isGrid" />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Articles from '~/components/molecules/Articles'
@Component({
  components: { Articles }
})
export default class Index extends Vue {
  @Prop({ default: {} })
  data!: Object

  filterData: object = this.data
  activeFilter: string = 'all'
  isGrid: boolean = false
  clickFilter(filterName) {
    this.activeFilter = filterName
    if (filterName !== 'all') {
      const projectArray = Object.keys(this.data).map(k => this.data[k])
      const filtering = projectArray.filter(project => {
        return project.category === filterName
      })
      this.filterData = filtering.reduce(
        (o, c) => Object.assign(o, { [c.id]: c }),
        {}
      )
    } else {
      this.filterData = this.data
    }
  }

  changeLayout() {
    this.isGrid = !this.isGrid
  }
}
</script>

<style lang="scss" scoped>
.articlesSection {
  position: relative;
  width: 80vw;
  margin: 0 auto;
}

h1 {
  display: none;
}

.filterList {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  li {
    padding: 3vw;
    color: $black-054;
    transition: all 0.2s;
    &.is-active {
      font-weight: bold;
      font-style: italic;
      color: $black-087;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
.grid-button {
  display: none;
  margin-left: auto;
  line-height: 1;
}
.grid-icon {
  width: 24px;
  height: 24px;
}
@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .grid-button {
    display: block;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .articlesSection {
    max-width: 800px;
  }
}
</style>
