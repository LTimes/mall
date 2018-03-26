<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Droidsansfallback','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  margin: 0;
  padding: 0;
  
}
* {
  margin: 0;
  padding: 0;
}
ul {
    margin: 0;
    padding: 0;
  }
</style>
