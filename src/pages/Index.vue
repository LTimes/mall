<template>
  <div class="index">
    <nav-header></nav-header>
    <tabs :tabs="tabsArr"></tabs>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/header/NavHeader'
import NavFooter from '@/components/footer/NavFooter'
import Tabs from '@/components/common/tabs'

export default {
  data() {
      return {
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
          }
        ]
      }
  },
  components: {
      NavHeader,
      NavFooter,
      Tabs
  }
}
</script>

