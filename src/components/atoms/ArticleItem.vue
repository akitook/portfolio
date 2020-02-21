<template>
  <nuxt-link :to="`/${data.category}/${data.id}`">
    <img :src="data.thumbnail[0].url" :alt="data.title" />
    <h2>{{ data.title }}</h2>
    <p>{{ data.role.join(', ') }}</p>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class Index extends Vue {
  @Prop({ default: {} })
  data!: Object
}
</script>

<style lang="scss" scoped>
a {
  display: block;
  width: 100%;
  text-decoration: none;
  color: $black-087;
}

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
@media screen and (min-width: $layout-breakpoint--is-small-up) {
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
}
</style>
