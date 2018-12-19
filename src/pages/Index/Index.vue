<template>
  <article class="index">
    <div class="index_inner">
      <ul class="index_inner_ul">
        <li class="index_inner_ul_item" v-for="item in 6" :key="item">
          <a href="javascript:;">
            <div class="content">
              <div class="content_left">
                <h2 class="title">前端对接微信分享功能完全指南</h2>
                <p class="txt">小编搜了一下掘金网站好像也很少这方面的分享（或许是太过简单，大神们都不屑于分享这类经验。当然也有客观原因，现在大多都做小程序了</p>
                <div class="info">
                  <span class="space author">德牧类似</span>
                  <span class="space time">2018.11.11</span>
                  <span class="space labels">JavaScript</span>
                </div>
              </div>
              <div class="content_right"></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import { httpPost } from '@/api/post'

export default {
  data() {
    return {
      params: {
        search: '',
        page: 1,
        pageSize: 20,
      }
    }
  },
  components: {
    
  },
  methods: {
    getPostList() {
      httpPost(this.params).then(res => {
        if (res) {
          console.log(res)
          alert('获取成功')
        }
      })
    }
  },
  mounted() {
    this.getPostList()
  },
  created() {
  },
};
</script>

<style lang="scss" scoped src='./index.scss'>

</style>
