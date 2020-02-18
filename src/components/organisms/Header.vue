<template>
  <div class="header">
    <nav class="menu">
      <ul>
        <li><nuxt-link to="/">home</nuxt-link></li>
        <li><nuxt-link to="/about">about</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
}
.menu {
  ul {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 8vw;
    font-size: 14px;
    li {
      padding: 1vw;
      a {
        color: $black-087;
        text-decoration: none;
        &.nuxt-link-exact-active {
          font-weight: bold;
        }
      }
    }
  }
}

.close-button {
  position: absolute;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .menu {
    ul {
      padding: 40px;
    }
  }
}
@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .header {
    padding: 0;
  }
}
</style>
