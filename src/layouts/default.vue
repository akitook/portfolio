<template>
  <div>
    <Header />
    <nuxt />
    <Sketch />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/organisms/Header.vue'
import Sketch from '~/components/sketch'

@Component({
  components: {
    Header,
    Sketch
  }
})
export default class Index extends Vue {}
</script>
<style></style>
