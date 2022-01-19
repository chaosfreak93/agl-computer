<template>
  <Header title="Übers uns."></Header>
  <div class="about">
    <Contact></Contact>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Contact from "@/components/Contact.vue";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
    Contact,
  },
})
export default class About extends Vue {}
</script>
