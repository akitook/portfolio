<template>
  <button
    :class="{ 'is-open': isOpen }"
    @click="onClick"
    type="button"
    class="button"
    title="Open menu"
  >
    <span class="top" />
    <span class="middle" />
    <span class="bottom" />
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class MouseStalker extends Vue {
  @Prop({ default: false })
  isOpen!: boolean

  @Emit('click')
  private onClick() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.button {
  position: absolute;
  top: 8vw;
  right: 10px;
  width: 50px;
  height: 50px;
  display: block;
  background: transparent;
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 25px;
    height: 2px;
    display: block;
    background: $black-087;
    margin-left: -12.5px;
    -webkit-transition: 0.3s opacity;
    transition: 0.3s opacity;
    &.top {
      animation: top 0.5s;
      animation-fill-mode: forwards;
    }
    &.middle {
      transition: 0.5s opacity;
      transform: translateY(-1px);
      opacity: 1;
    }
    &.bottom {
      animation: bottom 0.5s;
      animation-fill-mode: forwards;
    }
  }
  &.is-open {
    .middle {
      opacity: 0;
      transition: 0.5s opacity;
    }
    .top {
      animation: top-close 0.5s;
      animation-fill-mode: forwards;
    }
    .bottom {
      animation: bottom-close 0.5s;
      animation-fill-mode: forwards;
    }
  }
  @keyframes top {
    0% {
      transform: translateY(0px) rotate(-45deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-9px) rotate(0deg);
    }
  }

  @keyframes bottom {
    0% {
      transform: translateY(-1px) rotate(45deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(7px) rotate(0deg);
    }
  }

  @keyframes top-close {
    0% {
      transform: translateY(-9px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(0px) rotate(-45deg);
    }
  }

  @keyframes bottom-close {
    0% {
      transform: translateY(7px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-1px) rotate(45deg);
    }
  }
}
@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .button {
    top: 40px;
    right: 40px;
    width: 100px;
    height: 100px;
    span {
      width: 50px;
      margin-left: -25px;
    }
  }
  @keyframes top {
    0% {
      transform: translateY(0px) rotate(-45deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-17px) rotate(0deg);
    }
  }

  @keyframes bottom {
    0% {
      transform: translateY(-1px) rotate(45deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(15px) rotate(0deg);
    }
  }

  @keyframes top-close {
    0% {
      transform: translateY(-17px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(0px) rotate(-45deg);
    }
  }

  @keyframes bottom-close {
    0% {
      transform: translateY(15px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-1px) rotate(45deg);
    }
  }
}
</style>
