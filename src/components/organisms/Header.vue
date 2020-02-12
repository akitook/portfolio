<template>
  <div class="header">
    <nuxt-link to="/">home</nuxt-link>
    <CloseButton :is-show="isShow" @click="onClick" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CloseButton from '~/components/atoms/CloseButton'
@Component({
  components: {
    CloseButton
  }
})
export default class Index extends Vue {
  private onClick() {
    this.$router.push('/')
  }

  get isShow() {
    return this.$route.name === 'works-id'
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .header {
    max-width: $page-container-max-width;
    padding: 0 40px;
  }
}
</style>
