<template>
  <div class="productlist" v-if="allProducts">
    <div
      id="product"
      v-for="product in allProducts.products"
      :key="product._id"
    >
      <img
        v-if="product.image"
        id="image"
        :src="this.$store.state.cdnUrl + 'products/' + product.image"
      />
      <div id="name">{{ product.name }}</div>
      <div id="price">{{ product.price }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { useQuery } from "villus";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const { data: allProducts } = useQuery({
      query: "{ products { _id, name, price, image } }",
    });
    return { allProducts };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/theme";

.productlist {
  display: grid;
  gap: 15px;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 160px 160px 160px 160px;
}

#product {
  background: white;
  position: relative;
  border: 1px $color3 solid;
  border-radius: 5px;
  box-shadow: 2px 3px 3px change-color($color1, $alpha: 0.6);
  padding: 10px;

  #image {
    width: 64px;
    height: 64px;
    position: absolute;
  }

  #name {
    position: absolute;
  }

  #price {
    position: absolute;
  }
}
</style>
