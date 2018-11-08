<template>
  <header>
    <div class="inner_header">
      <div class="logo">
        <a href="javascript:;">
          <img src="" alt="logo">
        </a>
      </div>
      <div class="header">
        <ul class="header_ul">
          <li class="header_ul_li">
            <router-link class="header_ul_li_a" to="/index">
                <span class="header_ul_li_name">首页</span>
            </router-link>
          </li>
          <li class="header_ul_li">
          <router-link class="header_ul_li_a" to="/category">
              <span class="header_ul_li_name">分类</span>
            </router-link>
          </li>
          <li class="header_ul_li">
          <router-link class="header_ul_li_a" to="/label">
            <span class="header_ul_li_name">标签</span>
            </router-link>
          </li>
          <li class="header_ul_li">
          <router-link class="header_ul_li_a" to="/about">
              <span class="header_ul_li_name">关于</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="search">
        <input type="text" class="search_input">
        <span class="search_txt">搜索</span>
      </div>
      <div class="login_box">
        <div class="login_box_inner">
          <a class="login_box_inner_sign" href="javascript:;">登录</a>
          <a class="login_box_inner_sign login_box_inner_register" href="javascript:;">注册</a>
        </div>
      </div>
    </div>
  </header>
  
</template>

<script>
// import "./header.scss"

export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.state)
  },
  methods: {
    goAdress(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped src='./header.scss'>

</style>
