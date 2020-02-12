<template>
  <main class="home">
    <MainVisual />
    <ArticlesSection />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MainVisual from '~/components/organisms/MainVisual.vue'
import ArticlesSection from '~/components/organisms/ArticlesSection'
@Component({
  components: {
    MainVisual,
    ArticlesSection
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped></style>
