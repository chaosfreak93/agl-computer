<template>
  <div id="nav">
    <h2 id="title">AGL-Computer</h2>
    <div id="nav-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/inventory">Products</router-link>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { useClient } from "villus";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    useClient({
      url: "http://162.55.3.93:4000/graphql",
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/theme";

* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 0px;
}

body,
html {
  height: 100%;
}

.app {
  font-family: Arvo, sans-serif;
  color: $color2;
  height: 100%;
  z-index: 0;
}

#nav {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
  padding: 20px;
  background: change-color($color3, $alpha: 0.6);

  #title {
    float: left;
  }

  #nav-menu {
    float: right;

    a {
      margin: 0px 29px;
      padding: 2px 1px;
      text-transform: uppercase;
      color: white;
      text-decoration: none;

      &.router-link-exact-active {
        color: $color2;
        border-bottom: 3px solid white;
      }

      &:hover {
        color: $color2;
      }
    }
  }
}
</style>
