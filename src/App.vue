<template>
  <div id="app">
    <img src="./assets/icon300X300.png">
    <ul>
      <li>
        
      </li>
    </ul>
    <h1>{{ msg }}</h1>
    <h2>周磊 17181308</h2>
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
  },
  data () {
    return {
      msg: "WEB前端设计作业"
    }
  }
}
</script>

<style>
h1 {
  font-weight: 800;
  font-size: 2rem;
}
h2 {
  font-weight: normal;
  font-size: 1rem;
  margin-top: 0px;
}
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
