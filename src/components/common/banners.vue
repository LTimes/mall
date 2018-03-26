<template>
  <div class="banner">
      <div class="banner">
          <ul>
              <li>
                  <a href="javascript:;">
                    <transition name="slide-fade">
                      <img :src="banners[nowIndex].ImgUrl" v-if="isShow" :alt="banners[nowIndex].Text">
                    </transition>
                    <transition name="slide-fade-old">
                      <img :src="banners[nowIndex].ImgUrl" v-if="!isShow" :alt="banners[nowIndex].Text">
                    </transition>  
                  </a>
              </li>
          </ul>
          <div class="page">
              <ul>
                  <li v-for="(item,index) in banners.length" :key="index">{{index}}</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        nowIndex: 0,
        isShow: true 
      }
  },
  props: {
      banners: {
          type: Array,
          default: [],
          required: true
      }
  },
  computed: {
      prevIndex() {
          this.banners.length--;
      },
      nextIndex() {
          index++;
      }
  },
  methods: {
      goto(index) {

      }
  },
  mounted() {

  }
}
</script>

<style scoped>
    .banner {
        height: 176px;
    }
    .banner ul li a img {
        width: 100%;
        height: 176px;
    }
    .page ul li {
        float: left;
        list-style: none;
        text-align: center;
        line-height: 24px;
        background: #ddd;
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-enter {
        transform: translateX(300px)
    }
    .slide-fade-old-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transform: translateX(-300px)
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
</style>


