<template>
  <div class="index">
    <div class="mains">
      <nav-header></nav-header>
      <tabs :tabs='tabs'></tabs>
    </div>
    
    <banners :banners="banner"></banners>
    <!-- 菜单 -->
    <div class="menu">
      <div>
        <ul class="menu_ul clearfloat">
          <li v-for="item in 10" :key="item">
            <a href="javascript:;"><img src="https://img1.epetbar.com/2018-02/02/14/de04450899226ab8d4f96b3f5a42d370.jpg@!water" alt=""></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新人广告 -->
    <div class="banner-advance">
      <div class="advance-img">
        <a href="javascript:;"><img src="https://img2.epetbar.com/nowater/2017-12/18/10/5a3f9a270c73b55bd2525b0578e47782.gif" style="height: 120px;"></a>
      </div>
    </div>
    <!-- 每日疯抢 -->
    <div class="suprise_day">
      <div class="suprise_day_title clearfloat">
        <div class="title">
          <img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03">
        </div>
        <div class="last_time">
          <span>下一场开始</span>
          <span>20</span>
          <span> : </span>
          <span>00</span>
        </div>
        <div class="more">
          <span>更多</span>
          <i class="icon iconfont icon-gengduo"></i>
        </div>
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
        ]
      }
  },
  components: {
      NavHeader,
      NavFooter,
      Banners,
      Tabs
  }
}
</script>

<style scoped>
  
</style>

