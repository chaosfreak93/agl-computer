<template>
  <div class="home">
    <div id="box">
      <h2>Herzlich Willkommen auf AGL-Computer</h2>
      <p>
        <b>Wir sind Ihr kompetenter Ansprechpartner rund um die EDV.</b><br />
        Wir wünschen Ihnen viel Spass auf unserer Hompage und freuen uns über
        jeden gelungen <b>DEAL</b>.
      </p>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@import "src/assets/colorpalette";

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-flow: column;
}

#box {
  background: white;
  width: 500px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  transform: translateY(-25px);
  margin-bottom: 25px;
  padding: 5px 10px;

  h2 {
    color: $color123456789;
  }

  p {
    color: black;
  }
}
</style>
