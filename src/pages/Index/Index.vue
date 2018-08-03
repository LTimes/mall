<template>
  <div class="index">
    <div class="mains" :class="{'float_header': headerFlag}">
      <nav-header></nav-header>
      <tabs :tabs='tabs'></tabs>
    </div>
    
    <banners :banners="banner"></banners>
    <!-- 菜单 -->
    <div class="menu">
      <div class="recomend">
        <ul class="menu_ul clearfloat">
          <li v-for="item in 10" :key="item">
            <a href="javascript:;"></a>
          </li>
        </ul>
      </div>
      <div class="list-box">
        
      </div>
    </div>
    


    <nav-footer></nav-footer>
  </div>
</template>

<script>
import '@/assets/css/index.css'
import NavHeader from '@/components/header/NavHeader'
import NavFooter from '@/components/footer/NavFooter'
import Tabs from '@/components/common/tabs'
import Banners from '@/components/common/banners'

export default {
  data() {
      return {
        tabs: [
          {
            tabId: 10,
            Text: '首页',
            active: true
          },
          {
            tabId: 11,
            Text: '主粮',
            active: false
          },
          {
            tabId: 12,
            Text: '罐头超市',
            active: false
          },
          {
            tabId: 13,
            Text: '猫砂',
            active: false
          },
          {
            tabId: 14,
            Text: '医疗保健',
            active: false
          },
          {
            tabId: 15,
            Text: '美容香波',
            active: false
          },
          {
            tabId: 16,
            Text: '零食玩具',
            active: false
          }
        ],
        banner: [
          {
            bannerId: 0,
            Text: '首页',
            ImgUrl: 'https://img2.epetbar.com/nowater/2018-03/14/19/cd0a34fcace082161e6e96cd0c9b14bf.jpg@!water'
          },
          {
            bannerId: 1,
            Text: '主粮',
            ImgUrl: 'https://img2.epetbar.com/nowater/2018-03/23/23/3f85d10dcc84b76df654e1e1d31703ff.png@!water'
          },
          {
            bannerId: 2,
            Text: '超市',
            ImgUrl: 'https://img2.epetbar.com/nowater/2018-03/16/17/b3634b4ac278485397c92ced758f790d.jpg@!water'
          },
          {
            bannerId: 3,
            Text: '超市',
            ImgUrl: 'https://img2.epetbar.com/nowater/2018-03/23/19/d424d8087bf9ed4a35ae1f86339e6a23.jpg@!water'
          },
          {
            bannerId: 4,
            Text: '超市',
            ImgUrl: 'https://img2.epetbar.com/nowater/2018-03/23/22/1a15c21f751372982c5628a211dd570c.jpg@!water'
          }
        ],
        supriseData: 4,
        headerFlag: false, // 判断是否吸顶
      }
  },
  components: {
      NavHeader,
      NavFooter,
      Banners,
      Tabs
  },
  methods: {
    init() {
      var _this = this;
      document.onscroll = function () {
        var scrolls = document.documentElement.scrollTop;
        if (scrolls > 1) {
        _this.headerFlag = true;
      } else {
        _this.headerFlag = false;
      }
      }
      
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>
  
</style>

