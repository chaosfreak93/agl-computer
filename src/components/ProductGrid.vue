<template>
  <div class="productlist" v-if="allProducts">
    <div
      id="productbox"
      v-for="product in allProducts.products"
      :key="product._id"
    >
      <img
        id="image"
        v-if="product.image"
        :src="this.$store.state.cdnUrl + 'products/' + product.image"
      />
      <div id="name">{{ product.name }}</div>
      <div id="price">{{ product.price }}€</div>
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
  gap: 10px;
  grid-template-columns: 25% 25% 25%;
  grid-auto-rows: 300px;
  justify-content: center;

  #productbox {
    #image {
      height: 50px;
    }

    #name {
    }

    #price {
    }
  }
}
</style>
