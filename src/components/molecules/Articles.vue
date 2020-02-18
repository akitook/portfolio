<template>
  <transition-group tag="div" class="articles" name="article">
    <article
      v-for="item in data"
      :key="item.id"
      :class="{ 'is-grid': isGrid }"
      class="article"
    >
      <ArticleItem :data="item" />
    </article>
  </transition-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ArticleItem from '~/components/atoms/ArticleItem'
@Component({
  components: { ArticleItem }
})
export default class Index extends Vue {
  @Prop({ default: {} })
  data!: Object

  @Prop({ default: false })
  isGrid: boolean
}
</script>

<style lang="scss" scoped>
.articles {
  position: relative;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
}
.article {
  position: relative;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4vw auto;
  backface-visibility: hidden;
  transform-origin: 50% 50%;
  &-move {
    transition: all 300ms ease-out;
  }
  &-leave-action {
    transition: all 400ms ease-in;
    position: absolute;
    z-index: 0;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter {
    transform: scale(0.9);
  }
  &.is-grid {
    width: calc(100% / 2 - 2vw);
    margin: 2vw 1vw;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .article {
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
}
</style>
