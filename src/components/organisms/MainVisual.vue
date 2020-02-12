<template>
  <section class="main-visual">
    <div class="main-visual__contents">
      <h1 data-text="Akito Okubo">Akito Okubo</h1>
      <p>
        <span class="glitch" data-text="I'm a front-end engineer / web designer"
          >I'm a front-end engineer / web designer</span
        >
        <span class="glitch" data-text="working in Kanazawa."
          >working in Kanazawa.</span
        >
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  private isOpen: boolean = false
  public onClick() {
    this.isOpen = !this.isOpen
  }
}
</script>

<style lang="scss" scoped>
.main-visual {
  width: 100%;
  height: 100vh;
  padding: $page-container-padding;
}

.glitch {
  display: block;
  position: relative;
  width: 400px;
  &:after {
    content: attr(data-text);
    position: absolute;
    left: 1px;
    text-shadow: -1px 0 red;
    top: 0;
    color: $black-087;
    background: $white-100;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim 2s infinite linear alternate-reverse;
  }
  &:before {
    content: attr(data-text);
    position: absolute;
    left: -1px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: $black-087;
    background: $white-100;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim-2 3s infinite linear alternate-reverse;
  }
}
@keyframes noise-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}
@keyframes noise-anim-2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
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
