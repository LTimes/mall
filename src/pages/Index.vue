<template>
  <div class="index">
    <nav-header></nav-header>
<<<<<<< HEAD
    <tabs :tabs="tabsArr"></tabs>
=======
    <tabs :tabs='tabs'></tabs>
    <banners :banners="banner"></banners>
>>>>>>> 50b58bdd3359793d0e3a4c1a5fab5d6c8eed9784
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/header/NavHeader'
import NavFooter from '@/components/footer/NavFooter'
import Tabs from '@/components/common/tabs'
import Banners from '@/components/common/banners'

export default {
  data() {
      return {
<<<<<<< HEAD
        tabsArr: [
          {
            Id: '1',
            text: '首页'
          },
          {
            Id: '2',
            text: '粮食'
          },
          {
            Id: '3',
            text: '罐头超市'
          },
          {
            Id: '4',
            text: '猫砂'
          },
          {
            Id: '5',
            text: '医疗保健'
=======
        tabs: [
          {
            tabId: 0,
            Text: '首页',
            active: true
          },
          {
            tabId: 1,
            Text: '主粮',
            active: false
          },
          {
            tabId: 2,
            Text: '超市',
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
>>>>>>> 50b58bdd3359793d0e3a4c1a5fab5d6c8eed9784
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

