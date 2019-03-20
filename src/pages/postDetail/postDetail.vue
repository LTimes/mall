<!--  -->
<template>
  <div class="post-detail">
    <div class="left">
      <div class="detail-box">
      <h1 class="title">{{postDetail.title}}</h1>
      
      <div class="post-content" v-html="postDetail.md"></div>
      <div class="labels">
        <span>所属标签：</span>
        <span class="label" v-for="(item,index) in postDetail.label" :key="index">{{item.name}}</span>
      </div>
    </div>
    </div>
    <div class="right">
      <div class="author">
        <img :src="postDetail.avator" alt="作者头像" class="author-img"> 
        <span class="author-name">{{postDetail.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { httpPostDetail } from '@/api/post'
  export default {
    data () {
      return {
        postId: '',
        postDetail: {}
      };
    },

    components: {},

    computed: {},
    beforeCreate() {
      // data 里面赋不上值
    },
    created() {
      this.postId = this.$router.history.current.params.id
    },

    mounted() {
      this.getPostDetail()
    },

    methods: {
      // 获取文章详情
      
      getPostDetail() {

        httpPostDetail(this.postId).then( res => {
          console.log(res, 'xiang1')
          if (res.data.success) {
            this.postDetail = res.data.data;
          } else {
            console.log('500了')
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped src='./postDetail.scss'>

</style>