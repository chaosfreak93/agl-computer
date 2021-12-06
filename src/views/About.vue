<template>
  <div class="about">
    <Contact></Contact>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Contact from "@/components/Contact.vue";

@Options({
  components: {
    Contact,
  },
})
export default class About extends Vue {}
</script>
