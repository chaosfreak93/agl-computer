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
  gap: 15px;
  grid-template-columns: 200px 200px 200px 200px 200px 200px;
  grid-auto-rows: 280px;
  justify-content: center;
}

#product {
  background: white;
  position: relative;
  border: 1px $color3 solid;
  border-radius: 5px;
  box-shadow: 2px 2px 4px change-color($color1, $alpha: 0.5);
  align-content: center;

  #image {
    position: absolute;
    width: 160px;
    height: 160px;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  #name {
    position: absolute;
    width: 180px;
    height: 40px;
    @include multiline-wrap;
    text-align: center;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  #price {
    position: absolute;
    text-align: center;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
}
</style>
