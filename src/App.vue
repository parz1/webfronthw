<template>
  <div id="app">
    <img src="./assets/icon300X300.png">
    <ul>
      <li>
        1
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  icons: {
    home: {
      url: '/'
    }
  }
}
</script>

<style>
ul, li {
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
