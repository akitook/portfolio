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
      <li
        @click="clickFilter('sketch')"
        :class="{ 'is-active': activeFilter === 'sketch' }"
      >
        Sketch
      </li>
      <li @click="changeLayout">layout</li>
    </ul>
    <Articles :data="filterData" :is-grid="isGrid" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import projectData from '~/assets/json/projects.json'
import Articles from '~/components/molecules/Articles'
@Component({
  components: { Articles }
})
export default class Index extends Vue {
  filterData: object = projectData
  activeFilter: string = 'all'
  isGrid: boolean = false
  clickFilter(filterName) {
    this.activeFilter = filterName
    if (filterName !== 'all') {
      const projectArray = Object.keys(projectData).map(k => projectData[k])
      const filtering = projectArray.filter(project => {
        return project.category === filterName
      })
      this.filterData = filtering.reduce(
        (o, c) => Object.assign(o, { [c.id]: c }),
        {}
      )
    } else {
      this.filterData = projectData
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
@media screen and (min-width: $layout-breakpoint--is-small-up) {
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .articlesSection {
    max-width: 800px;
  }
}
</style>
