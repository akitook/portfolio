<template>
  <main class="work">
    <div class="work__container">
      <div class="information">
        <CloseButton @click="onClick" class="close-button" />
        <div class="information__container">
          <p>{{ data.category }}</p>
          <h1>{{ data.title }}</h1>
          <p class="description">{{ data.summary }}</p>
          <h2>role</h2>
          <p class="list">{{ data.role.join(', ') }}</p>
          <h2>tags</h2>
          <p class="list">{{ data.tags.join(', ') }}</p>
          <h2>link</h2>
          <p>
            <a :href="data.link" target="_blank">{{ data.link }}</a>
          </p>
          <ul class="navigation">
            <li v-show="prevLink" class="prev">
              <nuxt-link :to="prevLink">prev</nuxt-link>
            </li>
            <li v-show="nextLink" class="next">
              <nuxt-link :to="nextLink">next</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="visual">
        <div class="image">
          <img
            :src="data.thumbnail[0].url"
            :alt="`${data.title}'s thumbnail`"
          />
        </div>
        <div v-for="n of data.imageDeck" class="image">
          <img :src="n.image[0].url" :alt="n.caption" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import CloseButton from '~/components/atoms/CloseButton'
@Component({
  components: {
    CloseButton
  }
})
export default class Index extends Vue {
  transition: 'page'
  projectData: object = {}
  data: object = {}
  keys: Array = []
  index: number = 0

  public head() {
    return {
      title: this.data.title + ' | Akito Okubo'
    }
  }

  async asyncData(context: Context): Promise<> {
    const { app, params } = context
    const id: string = await params.id
    const url =
      process.env.NODE_ENV === 'development' ? '' : process.env.BASE_URL
    try {
      const fetchData = await app.$axios.get(`${url}/_nuxt/json/project.json`)
      return {
        projectData: fetchData.data,
        data: fetchData.data[id],
        keys: Object.keys(fetchData.data),
        index: Object.keys(fetchData.data).indexOf(id)
      }
    } catch (err) {
      return {
        projectData: {},
        data: {},
        keys: [],
        index: null
      }
    }
  }

  private onClick() {
    this.$router.push('/')
  }

  get prevLink() {
    if (this.index === 0) return ''
    const prevId = this.keys[this.index - 1]
    return `/${this.projectData[prevId].category}/${prevId}`
  }

  get nextLink() {
    if (this.index === this.keys.length - 1) return ''
    const nextId = this.keys[this.index + 1]
    return `/${this.projectData[nextId].category}/${nextId}`
  }
}
</script>

<style lang="scss" scoped>
.work {
  padding: 80px $page-container-padding;
}
.information {
  position: relative;
  &__container {
    padding: 32px 0;
    border-top: 1px solid $black-026;
  }
}
.close-button {
  position: absolute;
  top: 8px;
  right: 0;
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

ul.navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  li {
    position: relative;
    &::before,
    &::after {
      position: absolute;
      top: calc(50% - 2px);
      content: '';
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      transition: all 0.2s;
    }
    &.prev {
      padding-left: 16px;
      &::before {
        left: 4px;
        border: 1px solid;
        border-color: transparent transparent $black-054 $black-054;
      }
    }
    &.next {
      padding-right: 16px;
      &::after {
        right: 4px;
        border: 1px solid;
        border-color: $black-054 $black-054 transparent transparent;
      }
    }
    a {
      color: $black-054;
      text-decoration: none;
    }
    &:hover {
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
  }
}
@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .work {
    padding: 40px;
  }
  h1 {
    font-size: 20px;
    margin-bottom: 24px;
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
    margin: 85px auto;
    &__container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  .information {
    max-width: 300px;
    margin-right: 30px;
  }
  .visual {
    max-width: calc(#{$page-container-max-width} - 360px);
  }
}
</style>
