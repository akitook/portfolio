<template>
  <div class="arrows">
    <div class="arrow"></div>
    <div class="arrow"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MouseStalker extends Vue {}
</script>

<style lang="scss" scoped>
.arrows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.arrow {
  width: 40px;
  height: 40px;
  border-bottom: 1px solid $black-026;
  border-right: 1px solid $black-026;
  transform: rotate(45deg);
  animation: move 2s infinite;
  margin: -8px;
}
@for $i from 1 through 1 {
  .arrow:nth-child(#{$i + 1}) {
    animation-delay: 0.15 * $i + s;
  }
}

@keyframes move {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(20px) rotate(45deg);
  }
}
</style>
