<template>
  <Header title="Herzlich Willkommen zu AGL-Computer."></Header>
  <div class="home"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "@/assets/theme";

.home {
  display: flex;
  background: $color3;
  width: 100%;
  justify-content: center;
}
</style>
