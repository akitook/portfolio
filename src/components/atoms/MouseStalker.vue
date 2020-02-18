<template>
  <div
    :style="{ transform: `translate(${left}px, ${top}px)` }"
    class="mouse-stalker"
  ></div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MouseStalker extends Vue {
  top: number = 0
  left: number = 0
  mounted() {
    document.addEventListener('mousemove', e => {
      this.mouseMove(e)
    })
  }

  mouseMove(e): void {
    this.top = e.clientY
    this.left = e.clientX
  }
}
</script>

<style lang="scss" scoped>
.mouse-stalker {
  display: none;
  pointer-events: none;
  position: fixed;
  top: -1vw;
  left: -1vw;
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  border: 1px solid $black-026;
  transform: translate(0, 0);
  transition: transform 0.4s;
  transition-timing-function: ease-out;
}
@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .mouse-stalker {
    display: block;
  }
}
</style>
