<template>
  <div class="inventory">
    <ul v-if="data">
      <li v-for="product in data.products" :key="product._id">
        <img
          v-if="product.image"
          id="image"
          :src="this.$store.state.cdnUrl + 'products/' + product.image"
          height="64"
          width="64"
        />
        <div id="name">{{ product.name }}</div>
        <div id="price">{{ product.price }}€</div>
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
      query: "{ products { _id, name, price, image } }",
    });
    return { data };
  },
};
</script>

<style lang="scss">
@import "src/assets/colorpalette";
</style>
