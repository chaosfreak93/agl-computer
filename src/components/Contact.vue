<template>
  <div class="contact">
    <h1>Kontakt</h1>
    <form>
      <input type="text" placeholder="Vorname" required="required" />
      <input type="text" placeholder="Nachname" required="required" />
      <input
        type="email"
        placeholder="E-Mail"
        required="required"
        spellcheck="true"
      />
      <textarea placeholder="Ihre Nachricht hier..." required="required" />
      <button type="submit"></button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Contact extends Vue {}
</script>

<style scoped lang="scss"></style>
