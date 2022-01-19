<template>
  <Header title="Unsere Produkte."></Header>
  <div class="inventory">
    <div id="product_slider" v-if="test.data">
      <div
        class="product"
        v-for="product in test.data.products"
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
  </div>
</template>

<script lang="ts">
import { useQuery } from "villus";
import { Options, Vue, setup } from "vue-class-component";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class Inventory extends Vue {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  test = setup(() => {
    const { data } = useQuery({
      query: "{ products { _id, name, price, image } }",
    });
    return { data };
  });
}
</script>

<style scoped lang="scss">
@import "src/assets/colorpalette";

.inventory {
}
</style>
