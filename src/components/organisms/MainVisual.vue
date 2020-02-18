<template>
  <section class="main-visual">
    <div class="main-visual__contents">
      <h1><GlitchText text="Akito Okubo" width="400" /></h1>
      <p>
        <GlitchText
          text="I'm a front-end engineer / web designer"
          width="400"
        />
        <GlitchText text="working in Kanazawa." width="400" />
      </p>
    </div>
    <ScrollArrow :class="{ 'is-scroll': scrollY > 0 }" class="scroll-arrow" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import GlitchText from '~/components/atoms/GlitchText'
import ScrollArrow from '~/components/atoms/ScrollArrow'

@Component({
  components: { GlitchText, ScrollArrow }
})
export default class Index extends Vue {
  scrollY: number = 0

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.scrollY = window.scrollY
  }
}
</script>

<style lang="scss" scoped>
.main-visual {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: $page-container-padding;
}

h1 {
  font-weight: bold;
  font-style: italic;
  font-size: 6vw;
}

p {
  font-style: italic;
  font-weight: bold;
}
.scroll-arrow {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  transition: opacity 0.5s;
  &.is-scroll {
    opacity: 0;
  }
}
@media screen and (min-width: $layout-breakpoint--is-small-up) {
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 16px;
  }
  .main-visual {
    padding: 40px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .main-visual {
  }
}
</style>
