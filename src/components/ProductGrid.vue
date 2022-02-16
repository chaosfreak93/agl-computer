<template>
  <div class="productlist" v-if="allProducts">
    <div
      id="productbox"
      v-for="product in allProducts.products"
      :key="product._id"
    >
      <div id="image">
        <img v-if="product.image" :src="cdnUrl + product.image" />
      </div>
      <div id="details">
        <h3 id="name">{{ product.name }}</h3>
      </div>
      <h2 id="price">{{ product.price }}€</h2>
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
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      cdnUrl: process.env.BASE_URL + "cdn/products/",
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/theme";

.productlist {
  display: grid;
  gap: 15px;
  grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
  grid-auto-rows: 300px;
  text-align: center;

  #productbox {
    position: relative;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 20px;
    overflow: hidden;

    #image {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 20px;

      img {
        max-width: 30%;
      }
    }

    #details {
      position: relative;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      #name {
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    #price {
      position: absolute;
      bottom: 5px;
      right: 20px;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
}
</style>
