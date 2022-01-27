<template>
  <Header title="Unsere Produkte."></Header>
  <div class="products">
    <ProductGrid></ProductGrid>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import ProductGrid from "@/components/ProductGrid.vue";

@Options({
  components: {
    Header,
    ProductGrid,
  },
})
export default class Products extends Vue {}
</script>

<style lang="scss">
@import "@/assets/theme";

.products {
  background: $color3;
  width: 100%;
}
</style>
