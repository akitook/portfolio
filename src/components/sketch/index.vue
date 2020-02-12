<template>
  <div class="sketch">
    <canvas ref="canvas" class="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'nuxt-property-decorator'
import SketchGL from './js/sketchGL'
import EventBus from '~/utils/event-bus'

@Component({
  components: {}
})
export default class Index extends Vue {
  @Prop({ default: null })
  mounted() {
    if (!this.sketch)
      this.sketch = new SketchGL({
        $canvas: this.$refs.canvas
      })
    EventBus.$emit('TRANSITION', this.$route.name)
  }

  destroyed() {}
  @Watch('$route.name')
  onRouteChanged(_new, _old) {
    console.log('change')
    EventBus.$emit('TRANSITION', _new)
  }
}
</script>

<style lang="scss" scoped>
.sketch {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
@media screen and (min-width: $layout-breakpoint--is-small-up) {
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
}
</style>
