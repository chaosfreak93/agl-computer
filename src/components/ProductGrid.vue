<template>
  <div class="productlist">
    <div id="listing" v-if="allProducts">
      <div
        id="productbox"
        v-for="product in allProducts.products"
        :key="product._id"
      >
        <div id="content">
          <div id="info">
            <div id="image">
              <span id="image--element">
                <span id="image--media">
                  <img
                    v-if="product.image"
                    :src="
                      this.$store.state.cdnUrl + 'products/' + product.image
                    "
                  />
                </span>
              </span>
            </div>
            <div id="name">{{ product.name }}</div>
            <div id="price">{{ product.price }}€</div>
          </div>
        </div>
      </div>
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
  overflow: hidden;

  #listing {
    transition: opacity 0.5s ease-out;
    opacity: 1;
    padding: 0 0 2% 0;
    margin: -1% 0 0 -2%;

    &::after {
      content: "";
      display: table;
      clear: both;
    }

    #productbox {
      display: block;
      width: 33.33%;
      padding: 1% 0 0 2%;
      float: left;

      &::after {
        content: "";
        display: table;
        clear: both;
      }

      #content {
        border-radius: 3px;
        background-clip: padding-box;
        padding: 1.25rem 0.625rem;
        height: 100%;
        border: 1px solid white;
        position: relative;

        #info {
          padding: 0;
          position: relative;

          #image {
            width: unset;
            height: 200px;
            margin: 0;
            display: block;
            text-align: center;
            position: inherit;

            #image--element {
              height: 100%;
              width: 100%;
              display: block;
              margin: 0 auto;
              position: relative;

              img {
                border: 0;

                display: block;
                max-width: 100%;
                max-height: 100%;
                height: auto;

                border: none;

                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                display: inline-block;
                vertical-align: middle;
                z-index: 500;

                position: unset;
              }
            }
          }

          #name {
            height: 2.5rem;
            margin: 0rem 0rem 0.3125rem 0rem;
            font-size: 1rem;
            line-height: 1.25rem;
            display: block;
            width: 100%;
            color: $color2;
            font-weight: 700;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
