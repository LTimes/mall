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
          <a href="javascript:;" @click="post" class="login_box_inner_post">写文章</a>
          <template v-if="!user.token">
            <a class="login_box_inner_sign" href="javascript:;" @click="login">登录</a>
            <a class="login_box_inner_sign login_box_inner_register" @click="registers" href="javascript:;">注册</a>
          </template>
          <template v-else>
            <span class="names">{{user.userName}}</span>
            <span class="names"><img class="names-img" :src="user.avatorImg" alt=""></span>
          </template>
          
        </div>
      </div>
    </div>
    <Register :isModalRegister=isRegister @btnCancel="btnRModal"></Register>
    <Login @btnCancel="btnLModal"></Login>
  </header>
  
</template>

<script>
import Register from '_/register/register'
import Login from '_/login/login'
import {mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      isRegister: false,
    };
  },
  mounted() {
   
  },
  computed: {
    ...mapState({
      user: 'user'
    })
  },
  components:{
    Register,
    Login
  },
  methods: {
    goAdress(path) {
      this.$router.push(path);
    },
    registers() {
      this.isRegister = true
    },
    btnRModal() {
      this.isRegister = false
    },
    ...mapActions(['handleIsLogin']),
    login() {
      this.handleIsLogin(true)
    },
    btnLModal() {
      this.handleIsLogin(false)
    },
    post() {
      this.$router.push('/post')
    }
  }
};
</script>

<style lang="scss" scoped src='./header.scss'>

</style>
