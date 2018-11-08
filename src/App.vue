<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view/>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "@/components/header/NavHeader"
import NavFooter from '@/components/footer/NavFooter'
  
export default {
  name: 'App',
  components: {
    NavHeader,
    NavFooter
  },
}
</script>

<style>

</style>
