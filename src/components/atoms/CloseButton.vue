<template>
  <button
    v-show="isShow"
    @click="onClick"
    type="button"
    class="button"
    title="Close"
  >
    <span class="top" />
    <span class="bottom" />
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class MouseStalker extends Vue {
  @Prop({ default: false })
  isShow!: boolean

  @Emit('click')
  private onClick() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  width: 25px;
  height: 25px;
  display: block;
  background: transparent;
  z-index: 999;
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 25px;
    height: 1px;
    display: block;
    background: $black-087;
    margin-left: -12.5px;
    -webkit-transition: 0.3s opacity;
    transition: 0.3s opacity;
    &.top {
      animation: top 0.5s;
      animation-fill-mode: forwards;
    }
    &.bottom {
      animation: bottom 0.5s;
      animation-fill-mode: forwards;
    }
  }
  @keyframes top {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
    }
    100% {
      transform: translateY(0px) rotate(-45deg);
    }
  }

  @keyframes bottom {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
    }
    100% {
      transform: translateY(-0.5px) rotate(45deg);
    }
  }
}
@media screen and (min-width: $layout-breakpoint--is-small-up) {
}
</style>
