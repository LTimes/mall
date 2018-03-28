<template>
  <div class="footer">
      <ul>
          <li v-for="(item,index) in tabs" :key="item.id" @click="footShow(index)">
              <i class="iconfont icon_footer" v-bind:class="[item.icon,item.active? 'on': '']" ></i>
              <a href="javascript:;" :class="{'on': item.active}">{{item.name}}</a>
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
    },
    methods: {
        footShow(index) {
           this.tabs.forEach((item) => {
               item.active = false;
           }) 
           this.tabs[index].active = true;
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
        color: #666;
    }
    .icon_footer {
        font-size: 20px;
    display: block;
    text-align: center;
    color: #666;
    }
    .on {
        color: #f19 !important;
    }

</style>

