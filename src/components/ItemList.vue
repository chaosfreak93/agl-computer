<template>
  <div class="itemlist" v-if="list">
    <div class="item" v-for="item in list" :key="item._id">
      <div id="id">{{ item._id }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ItemList extends Vue {
    data() {
        return {
            list: {}
        }
    }
}
</script>

<style scoped lang="scss"></style>
