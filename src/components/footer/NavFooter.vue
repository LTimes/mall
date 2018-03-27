<template>
  <div class="footer">
      <ul>
          <li v-for="(item) in tabs" :key="item.id" @click="foot">
              <i class="iconfont icon_footer" :class="item.icon"></i>
              <a href="javascript:;">{{item.name}}</a>
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
           tabs: [
               {
                   name:" 首页",
                   icon: 'icon-shouye',
                   active: true
               },
               {
                   name:" 分类",
                   icon: 'icon-fenlei',
                   active: false
               },
               {
                   name:"盟主喵喵",
                   icon: 'icon-jushoucang',
                   active: false
               },
               {
                   name:" 购物车",
                   icon: 'icon-gouwuche',
                   active: false
               },
               {
                   name:" 我的",
                   icon: 'icon-wode',
                   active: false
               }
           ] 
        }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .footer {
        width: 100%;
        position: absolute;
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
        color: #666;
    }
    .icon_footer {
        font-size: 20px;
    display: block;
    text-align: center;
    color: #666;
    }
    .on {
        color: #f19;
    }

</style>

