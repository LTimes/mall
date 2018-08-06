<template>
  <div class="navheader">
    <div class="search-box">
      <span class="region-name" slot="region">北京
        <i class="iconfont icon-shouhuodizhi"></i>
      </span>
      <input type="text" class="search" placeholder="搜索名称、类目、关键字">
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
  padding: .25rem .5rem 0;
}
.search-box {
  width: 100%;
  padding: .3rem 0;
  display: flex;
  justify-content: space-between;
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
  font-size: .7rem;
  padding: 6px;
  border-radius: 4px;
  width: 14.3rem;
}
.region-name {
  font-size: .875rem;
  line-height: 1.75rem;
}
.search:focus {
  border:1px solid #eee;
  border-radius: 4px;
  outline: 0;
}

</style>
