<template>
  <div class="navheader">
    <div class="search-box">
      <span slot="region">北京
        <i class="iconfont icon-shouhuodizhi"></i>
      </span>
      <input type="text" class="search" placeholder="搜索名称、类目、关键字">
      <i class="iconfont icon-xiaoxi xiaoxi"></i>
    </div>
  </div>
</template>

<script>
 import '@/assets/font/demo.css';
  import '@/assets/font/iconfont.css';

export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navheader {
  padding: 5px 10px;
}
.search-box {
  width: 100%;
  padding: 10px 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.search {
  background: #eee;
  border: 1px solid #eee;
  padding: 6px;
  border-radius: 4px;
  width: 72%;
  margin: 0 auto;
}
.search:focus {
  border:1px solid #eee;
  border-radius: 4px;
  outline: 0;
}
.xiaoxi {
  font-size: 20px;
  color: #666;
  padding-left: 6px;
}
</style>
