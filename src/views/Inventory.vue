<template>
  <div class="inventory">
    <div id="product_slider" v-if="test.data">
      <div class="product" v-for="product in test.data.products" :key="product._id">
        <img
          v-if="product.image"
          id="image"
          :src="this.$store.state.cdnUrl + 'products/' + product.image"
        />
        <div id="name">{{ product.name }}</div>
        <div id="price">{{ product.price }}€</div>
      </div>

      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
  </div>
</template>

<script lang="ts">
import { useQuery } from "villus";
import { Options, Vue, setup } from "vue-class-component";

@Options({
  components: {
  },
})
export default class Inventory extends Vue {
  slideIndex = 1;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  test = setup(() => {
    const { data } = useQuery({
      query: "{ products { _id, name, price, image } }",
    });
    return { data };
  })
  plusSlides(n: number) {
    this.showSlides((this.slideIndex += n));
  }
  currentSlide(n: number) {
    this.showSlides((this.slideIndex = n));
  }
  showSlides(n: number) {
    var i;
    var slides = document.getElementsByClassName("product");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      // @ts-expect-error ttt
      slides[i].style.display = "none";
    }
    // @ts-expect-error ttt
    slides[this.slideIndex - 1].style.display = "block";
  }
}
</script>

<style lang="scss">
@import "src/assets/colorpalette";

.inventory {
  box-sizing: border-box;
}

#product_slider {
  max-width: 1000px;
  position: relative;
  margin: auto;

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .product {
    display: none;
    #image {
      width: 100%;
    }
    #name {
    }
    #price {
    }
  }
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}
</style>
