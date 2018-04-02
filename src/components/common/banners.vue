<template>
  <div class="banner-box" @mouseover="clearRunInv" @mouseout="runInv">
    <div class="banner">
      <a href="javascript:;">
        <transition name="slide-fade">
          <img :src="banners[nowIndex].ImgUrl" v-if="isShow" :alt="banners[nowIndex].Text">
        </transition>
        <transition name="slide-fade-old">
          <img :src="banners[nowIndex].ImgUrl" v-if="!isShow" :alt="banners[nowIndex].Text">
        </transition>
      </a>
    </div>
    <div class="page">
      <ul>
        <!-- <li>
          <span @click="goto(prevIndex)">&lt;</span>
        </li> -->
        <li v-for="(item,index) in banners.length" :key="index">
          <a @click="goto(index)" :class="{'on': index === nowIndex}" href="javascript:;"></a>
        </li>
        <!-- <li>
          <span @click="goto(nextIndex)">&gt;</span>
        </li> -->
      </ul>
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
        default: []
      },
      inv: {
        type: Number,
        default: 2000
      }
    },
    computed: {
      prevIndex() {
        if (this.nowIndex === 0) {
          return this.banners.length - 1;
        } else {
          return this.nowIndex - 1;
        }
      },
      nextIndex() {
        if (this.nowIndex === this.banners.length - 1) {
          return 0;
        } else {
          return this.nowIndex + 1;
        }
      }
    },
    methods: {
      //   下一步点击
      goto(index) {
        if (this.nowIndex != index) {
          this.isShow = false;
          setTimeout(() => {
            this.isShow = true;
            this.nowIndex = index;
          }, 10);
        }
      },
      //   开启定时器
      runInv() {
        this.InvId = setInterval(() => {
          this.goto(this.nextIndex);
        }, this.inv);
      },
      //   清楚定时器
      clearRunInv() {
        clearInterval(this.InvId);
      }
    },
    mounted() {
      this.runInv();
    }
  };
</script>

<style scoped>
  .banner-box {
    position: relative;
    margin: 0 auto;
    width: 375px;
    height: 176px;
    overflow: hidden;
  }

  .banner {
    width: 100%;
  }

  .banner a img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .page {
    position: absolute;
    top: 7rem;
    left: 5.6rem;
  }
  .page ul li {
    float: left;
    list-style: none;
    text-align: center;
    line-height: 24px;
    background: #ddd;
    width: 10px;
    margin: 0 5px;
    height: 10px;
    border-radius: 50%;
  }
  .page ul li a {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .on {
    background:#f19;
  }
  /* 可以设置不同的进入和离开动画 */

  /* 设置持续时间和动画函数 */

  .slide-fade-enter-active {
    transition: all 0.5s;
  }

  .slide-fade-enter {
    transform: translateX(375px);
  }

  .slide-fade-old-leave-active {
    transition: all 0.5s;
    transform: translateX(-375px);
  }
</style>