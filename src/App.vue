<template>
  <div id="app">
    <div id="nav"></div>
    <background id="canvasbg"></background>
    <aplayer
    id="aplayer"
    mini="true"
      autoplay="true"
      :music="{
    title: '敬具',
    artist: '花と水飴、最終電車',
    src: 'https://raw.githubusercontent.com/parz1/webfronthw/build/src/assets/music.mp3',
    pic: 'http://p2.music.126.net/MLoChdXEUHXrpZSwsFPqYw==/7814229139683634.jpg?param=130y130'
  }"
    />
    <router-view/>
  </div>
</template>

<script>
import Background from "./components/Background";
import Aplayer from "vue-aplayer";
export default {
  name: "App",
  components: {
    Background,
    Aplayer
  },
  data() {}
};
</script>

<style>
ul,
li {
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
#nav {
  width: 100%;
  height: 60px;
  position: fixed;
  margin-top: -100px;
  background-color: #fff;
  box-shadow: #bbb 0px 0px 3px;
  opacity: 0.8;
  z-index: 9;
}
#aplayer {
  position: fixed;
  right: 3px;
  top: 63px;
}
</style>
