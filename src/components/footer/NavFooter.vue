<template>
  <div class="footer">
      <ul id="tabUl">
          <li class="on" @click="goAdress('/')">
              <i class="iconfont icon_footer icon-shouye"></i>
              <span>首页</span>
          </li>
          <li @click="goAdress('/category')">
              <i class="iconfont icon_footer icon-fenlei"></i>
              <span>分类</span>
          </li>
          <li @click="goAdress('/theme')">
              <i class="iconfont icon_footer icon-jushoucang"></i>
              <span>盟主</span>
          </li>
          <li @click="goAdress('/cart')">
              <i class="iconfont icon_footer icon-gouwuche"></i>
              <span>购物车</span>
          </li>
          <li @click="goAdress('/home')">
              <i class="iconfont icon_footer icon-wode"></i>
              <span>我的</span>
          </li>
      </ul>
  </div>
</template>
<script>
import '@/assets/font/demo.css';
  import '@/assets/font/iconfont.css';
export default {
    data() {
        return {
          
        }
    },
    methods: {
        footShow() {
           
          
        },
        goAdress(path) {
            this.$router.push(path);
        }
    },
    mounted() {
        this.footShow();
    }
}
</script>

<style scoped>
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
        font-size: 20px;
    display: block;
    text-align: center;
    /* color: #666; */
    }
    .on {
        color: #f19 !important;
    }

</style>

