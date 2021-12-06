<template>
  <div class="contact">
    <h1>Kontakt</h1>
    <input type="text" placeholder="Vorname" />
    <input type="text" placeholder="Nachname" />
    <input
      type="email"
      placeholder="E-Mail"
      required="required"
      spellcheck="true"
    />
    <textarea placeholder="Nachricht hier..." />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Contact extends Vue {}
</script>

<style scoped lang="scss"></style>
