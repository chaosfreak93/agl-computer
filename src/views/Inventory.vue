<template>
  <div class="inventory">
    <ul v-if="products">
      <li v-for="product in products" :key="product._id">
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
  data() {
    return {
      loading: false,
      error: null,
      products: null,
    };
  },
  methods: {
    fetchData() {
      useQuery({
        query: "{ products { _id, name, price, image } }",
      })
        .execute()
        .then((response) => {
          this.data.products = response.data;
        });
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/colorpalette";
</style>
