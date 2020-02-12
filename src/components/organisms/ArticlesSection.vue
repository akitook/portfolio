<template>
  <section class="articles">
    <h1>記事一覧</h1>
    <article v-for="work in works" class="article">
      <nuxt-link :to="`/works/${work.id}`">
        <img
          :src="require(`~/assets/images/works/${work.id}/1@2x.jpg`)"
          :alt="work.title"
        />
      </nuxt-link>
      <h2>{{ work.title }}</h2>
      <p>{{ work.role.join(', ') }}</p>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import worksData from '~/assets/json/works.json'
@Component
export default class Index extends Vue {
  private isOpen: boolean = false
  works: object = worksData
  public onClick() {
    this.isOpen = !this.isOpen
  }
}
</script>

<style lang="scss" scoped>
.articles {
  position: relative;
  width: 80vw;
  margin: 0 auto;
}
.article {
  margin: 4vw auto;
  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    box-shadow: 0 0 6vw $black-012;
    filter: grayscale(100%);
    transition: all 0.2s;
    &:hover {
      filter: grayscale(0%);
    }
  }
  h2 {
    font-size: 3vw;
    font-weight: bold;
    font-style: italic;
  }
  p {
    font-size: 2.3vw;
    font-style: italic;
  }
}

h1 {
  display: none;
}
@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .article {
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .articles {
    max-width: 800px;
  }
}
</style>
