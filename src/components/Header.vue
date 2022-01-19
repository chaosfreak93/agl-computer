<template>
  <div class="header">
    <div id="box_left"></div>
    <div id="line_left"></div>
    <div id="box_right"></div>
    <div id="line_right"></div>
    <h1 id="title">{{ title }}</h1>
    <div id="down">≫</div>
  </div>
</template>

<script lang="ts">
import { Vue, prop } from "vue-class-component";

class Props {
  title = prop({
    type: String,
    required: true,
  });
}

export default class Header extends Vue.with(Props) {}
</script>

<style scoped lang="scss">
@import "@/assets/colorpalette";

.header {
  position: relative;
  background: $color3;
  min-height: 100%;

  overflow: hidden;
  text-align: center;
}

#box_left {
  position: absolute;
  background: $color2;
  height: 50vh;
  width: 50vh;
  float: left;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%) rotate(45deg);
}

#line_left {
  position: absolute;
  background: $color2;
  height: 100vh;
  width: 1vh;
  float: left;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%) rotate(45deg);
  border-radius: 5px;
}

#box_right {
  position: absolute;
  background: $color2;
  height: 50vh;
  width: 50vh;
  float: right;
  top: 50%;
  right: 0%;
  transform: translate(50%, -50%) rotate(45deg);
}

#line_right {
  position: absolute;
  background: $color2;
  height: 100vh;
  width: 1vh;
  float: right;
  top: 50%;
  right: 20%;
  transform: translate(50%, -50%) rotate(45deg);
  border-radius: 5px;
}

#title {
  position: absolute;
  color: $color2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#down {
  position: absolute;
  color: $color2;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  font-size: 40px;
}
</style>
