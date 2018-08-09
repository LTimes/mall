<template>
  <div class="footer">
      <ul id="tabUl" class="tabUl">
          <li>
            <router-link to="/index">
                <i class="iconfont icon_footer icon-shouye"></i>
                <span class="name">首页</span>
            </router-link>
          </li>
          <li>
          <router-link to="/category">
                <i class="iconfont icon_footer icon-fenlei"></i>
              <span class="name">分类</span>
            </router-link>
          </li>
          
          <li>
          <router-link to="/cart">
                <i class="iconfont icon_footer icon-gouwuche"></i>
              <span class="name">购物车</span>
            </router-link>
          </li>
          <li>
          <router-link to="/home">
                <i class="iconfont icon_footer icon-wode"></i>
              <span class="name">我的</span>
            </router-link>
              
          </li>
      </ul>
  </div>
</template>
<script>
import "@/assets/font/demo.css";
import "@/assets/font/iconfont.css";
export default {
  data() {
    return {};
  },
  methods: {
    init() {},
    footShow() {},
    goAdress(path) {
      this.$router.push(path);
    }
  },
  mounted() {
    this.footShow();
  }
};
</script>

<style scoped>
.tabUl span.name {
  font-size: .6rem;
}
a {
  text-decoration: none;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 4px 0 4px #eee;
}
.footer ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  height: 55px;
  background: #f6f6f6;
}
.foot ul li {
  width: 20%;
}
.footer li a {
  display: block;
  text-align: center;
  /* color: #666; */
}
.icon_footer {
  font-size: 1rem;
  display: block;
  text-align: center;
  /* color: #666; */
}
.router-link-active .iconfont, .router-link-active span {
  color: #f19 !important;
}
.router-link-active span.name {
  font-size: .6rem;
}
</style>

