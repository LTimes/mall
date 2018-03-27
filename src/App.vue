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
body {
    line-height: 1.6;
    font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
}
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
