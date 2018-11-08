<template>
  <div class="navheader">
    <ul id="tabUl" class="tabUl">
          <li>
            <router-link to="/index">
                <span class="name">首页</span>
            </router-link>
          </li>
          <li>
          <router-link to="/category">
              <span class="name">分类</span>
            </router-link>
          </li>
          
          <li>
          <router-link to="/label">
            <span class="name">标签</span>
            </router-link>
          </li>
          <li>
          <router-link to="/about">
              <span class="name">关于</span>
            </router-link>
              
          </li>
      </ul>
  </div>
</template>

<script>
// import "./header.scss"

export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.state)
  },
  methods: {
    goAdress(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped src='./header.scss'>

</style>
