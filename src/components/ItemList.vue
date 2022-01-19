<template>
  <div class="itemlist" v-if="list">
    <div class="item" v-for="item in list" :key="item._id">
      <div id="id">{{ item._id }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, prop } from "vue-class-component";

class Props {
  list = prop({
    type: String,
    required: true,
  });
}

export default class ItemList extends Vue.with(Props) {}
</script>

<style scoped lang="scss"></style>
