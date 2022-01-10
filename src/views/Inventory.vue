<template>
  <div class="inventory">
      <ul v-if="data">
        <li v-for="product in data.products" :key="product.name">
            {{ product.name }}, {{ product.price }}
        </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { useQuery } from "villus";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const { data } = useQuery({
      query:
        "{ products { name, price } }",
    });
    return { data };
  },
};
</script>

<style lang="scss">
@import "src/assets/colorpalette";
</style>
