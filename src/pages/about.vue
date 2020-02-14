<template>
  <main class="about">
    <h1><GlitchText text="Akito Okubo / 大久保 明翔" /></h1>
    <p>金沢にてWebサイト制作、アプリケーションの開発をしています。</p>
    <h2>skills</h2>
    <p>
      HTML / CSS / Sass / Javascript / TypeScript / Node.js / React / React
      Native / Vue.js / Three.js / WordPress / AWS / Firebase / Photoshop /
      Illustrator / Adobe XD
    </p>
    <h2>contact</h2>
    <a href="https://www.instagram.com/akito.okubo/" target="_blank"
      ><img src="~/assets/images/instagram.svg" alt="Instagram" class="icon"
    /></a>
    <div class="back"><nuxt-link to="/">Back to home</nuxt-link></div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import GlitchText from '~/components/atoms/GlitchText'
@Component({
  components: { GlitchText }
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about {
  padding: 85px $page-container-padding;
}
h1 {
  font-size: 4vw;
  font-weight: bold;
  margin-bottom: 2vw;
  font-style: italic;
}
h2 {
  font-weight: bold;
  font-style: italic;
  color: $black-026;
}
.icon {
  width: 24px;
  height: 24px;
  margin: 8px;
  margin-left: 0;
}
.back {
  position: relative;
  margin-top: 40px;
  padding-left: 16px;
  &::before {
    position: absolute;
    top: calc(50% - 2px);
    content: '';
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    transition: all 0.2s;
    left: 4px;
    border: 1px solid;
    border-color: transparent transparent $black-054 $black-054;
  }
  a {
    color: $black-054;
    text-decoration: none;
  }
  &:hover {
    &::before {
      left: 0;
    }
  }
}
@media screen and (min-width: $layout-breakpoint--is-small-up) {
  h1 {
    font-size: 20px;
    margin-bottom: 24px;
  }
  h2 {
    font-size: 16px;
  }
}
@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .about {
    max-width: 640px;
  }
}
</style>
