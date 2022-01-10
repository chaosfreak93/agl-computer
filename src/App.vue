<template>
  <div id="nav">
    <img id="logo" src="@/assets/logo.png" />
    <div id="nav-menu">
      <router-link to="/">Startseite</router-link>
      <router-link to="/inventory">Katalog</router-link>
      <router-link to="/about">Über uns</router-link>
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
@import "@/assets/colorpalette";

html,
body {
  margin: 0;
  padding: 0;
  height: 115%;
}

.app {
  font-family: Arvo, sans-serif;
  color: $color1;
}

#nav {
  background: adjust-color($color2, $alpha: -0.4);
  position: fixed;
  min-width: 100%;
  min-height: max-content;
  left: 0px;
  top: 0px;

  #logo {
    height: 60px;
    float: left;
  }

  #nav-menu {
    height: 20px;
    float: right;
    padding: 20px 40px;

    a {
      color: #ffffff;
      font-weight: 700;
      text-decoration: none;
      font-size: 14px;
      line-height: 17px;
      padding: 0px 10px;

      &.router-link-exact-active {
        color: $color2;
      }
    }
  }
}
</style>
