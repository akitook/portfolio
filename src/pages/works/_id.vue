<template>
  <main class="work">
    <div class="work__container">
      <div class="information">
        <h1>{{ data.title }}</h1>
        <p class="description">{{ data.description }}</p>
        <h2>role</h2>
        <p class="list">{{ data.role.join(', ') }}</p>
        <h2>tags</h2>
        <p class="list">{{ data.tag.join(', ') }}</p>
        <h2>link</h2>
        <p>
          <a :href="data.link" target="_blank">{{ data.link }}</a>
        </p>
      </div>
      <div class="visual">
        <div v-for="n of data.images" class="image">
          <img
            :src="require(`~/assets/images/works/${data.id}/${n}@2x.jpg`)"
            :alt="`${data.title}_${n}`"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import worksData from '~/assets/json/works.json'

@Component({
  components: {}
})
export default class Index extends Vue {
  transition: 'page'
  async asyncData(context: Context): Promise<> {
    const { params } = context
    const id: string = await params.id
    return { data: worksData[id] }
  }
}
</script>

<style lang="scss" scoped>
.work {
  padding: $page-container-padding;
}
.information {
  margin-bottom: 4vw;
}
h1 {
  font-size: 4vw;
  font-weight: bold;
  margin-bottom: 2vw;
}
h2 {
  font-weight: bold;
  font-style: italic;
  color: $black-026;
}
.description {
  margin-bottom: 1vw;
}
p {
}
.list {
  font-style: italic;
}
.image {
  margin: 0 0 8vw;
  box-shadow: 0 0 2vw $black-012;
  line-height: 0;
}
.visual {
}
@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .work {
    padding: 40px;
  }
  h1 {
    font-size: 20px;
    margin-bottom: 40px;
  }
  h2 {
    font-size: 16px;
  }
  .description {
    margin-bottom: 16px;
  }
  p {
    font-size: 13px;
  }
  .list {
    margin-bottom: 8px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .work {
    max-width: $page-container-max-width;
    margin: 160px auto;
    &__container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  .information {
    max-width: 300px;
    padding-right: 30px;
  }
  .visual {
    max-width: calc(#{$page-container-max-width} - 360px);
  }
}
</style>
