<template>
  <div class="index">
    <nav-header></nav-header>
    <tabs></tabs>
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

      }
  },
  components: {
      NavHeader,
      NavFooter,
      Tabs
  }
}
</script>

