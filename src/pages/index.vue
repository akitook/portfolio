<template>
  <main class="home">
    <MainVisual />
    <ArticlesSection :data="projectData" />
  </main>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import MainVisual from '~/components/organisms/MainVisual.vue'
import ArticlesSection from '~/components/organisms/ArticlesSection'
@Component({
  components: {
    MainVisual,
    ArticlesSection
  }
})
export default class Index extends Vue {
  async asyncData(context: Context): Promise<> {
    const { app } = context
    const url =
      process.env.NODE_ENV === 'development' ? '' : process.env.BASE_URL
    const fetchData = await app.$axios.get(`${url}/_nuxt/json/project.json`)
    return { projectData: fetchData.data }
  }
}
</script>

<style lang="scss" scoped></style>
