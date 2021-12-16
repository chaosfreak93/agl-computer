<template>
  <div class="home">
    <ul v-if="data">
      <li v-for="product in data.products" :key="product.name">
        {{ product._id }}, {{ product.name }}, {{ product.price }}
      </li>
    </ul>
    <ul v-if="data">
      <li v-for="rating in data.ratings" :key="rating.rating">
        {{ rating.name }}, {{ rating.description }}, {{ rating.rating }}
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
        "{ products { _id, name, price }, ratings { name, description, rating } }",
    });
    return { data };
  },
};
</script>

<style lang="scss">
@import "src/assets/colorpalette";
</style>
