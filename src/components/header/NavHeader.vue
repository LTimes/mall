<template>
  <div class="navheader">
    <span slot="region">北京
      <span class="icon"></span>
    </span>
    <div class="input-box">
      <input type="text" class="search" placeholder="搜索名称、类目、关键字">
      <span class="message">消息</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navheader {
  padding: 4px 8px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.input-box {
  display: inline-block;
  height: 40px;
}
.search {
  background: #eee;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 4px;
  width: 16rem;
  margin: 0 auto;
}
.search:focus {
  border:1px solid #e74086;
  border-radius: 4px;
  outline: 0;
}
</style>
