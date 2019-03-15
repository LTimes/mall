<!-- 结构 -->
<template>
    <div class="apps">
      <nav-header></nav-header>
      <main>
        <router-view v-wechat-title="$route.meta.title" />
      </main>
      <nav-footer></nav-footer>
    </div>  
</template>

<script>
  import NavHeader from "@/components/header/NavHeader";
  import NavFooter from "@/components/footer/NavFooter";
  export default {
    data () {
      return {

      };
    },

    components: {
      NavHeader,
      NavFooter
    },

    computed: {},

    created() {},

    mounted() {},

    methods: {}
  }
</script>
<style lang="scss" scoped>
main {
  min-width: 720px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
}
</style>