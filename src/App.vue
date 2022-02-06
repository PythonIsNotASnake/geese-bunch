<template>
<html>
<head>
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
  </head>
  <body>
    <div id="app">
        <router-view></router-view>    
    </div>
  </body>
</html>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial)

export default {
  name: "App",
  data() {
    return {
      
    };
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #d8d8d8;
}
body {
  margin: 0;
}
html {
  scroll-behavior: smooth;
}
</style>
