<template>
  <div>
    <Header />
    <nuxt />
    <Sketch />
    <MouseStalker />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/organisms/Header.vue'
import Sketch from '~/components/sketch'
import MouseStalker from '~/components/atoms/MouseStalker.vue'

@Component({
  components: {
    Header,
    Sketch,
    MouseStalker
  }
})
export default class Index extends Vue {}
</script>
<style></style>
