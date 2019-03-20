<template>
  <div class="main">
    <article class="index">
      <div class="index_inner">
        <ul class="index_inner_ul">
          <li class="index_inner_ul_item" v-for="(item,index) in postList" :key="index">
            <a href="javascript:;" @click="handerDetail(item.postid)">
              <div class="content">
                <div class="content_left">
                  <h2 class="title">{{item.title}}</h2>
                  <!-- <div class="txt" v-html="item.md"></div> -->
                  <div class="info">
                    <span class="space author">{{item.name}}</span>
                    <span class="space time">{{item.moment | time}}</span>
                    <span class="space labels" v-for="(label,index) in item.label" :key="index">{{label.name}}</span>
                  </div>
                  <div class="edit" v-if="item.uid == user.userId" @click.stop="editPost(item.postid)">编辑</div>
                  <div class="edit delete" v-if="item.uid == user.userId" @click.stop="deleteModal(item.postid)">删除</div>
                </div>
                <div class="content_right"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </article>
    <Page :total="9" :pageSize="this.params.pageSize" :currentPage="this.params.page" v-on:handlerPage="handlerPage" show-sizer></Page>
  </div>
</template>

<script>
import { httpPost, httpDeletePost } from '@/api/post'
import {mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      params: {
        search: '',
        page: 1,
        pageSize: 2,
      },
      postList:[],
      listTotal: 0
    }
  },
  computed: {
    ...mapState(['user'])
  },
  components: {
    
  },
  filters: {
    time: function (data) {
      return data.slice(0, 10)
    }
  },
  methods: {
    // 文章跳转
    handerDetail(id) {
      // 新页面打开
      window.open(`/postDetail/${id}`, '_blank');
      // this.$router.push({path: `/postDetail/${id}`})
    },
    // 获取列表
    getPostList() {
      httpPost(this.params).then(res => {
        if (res.data.success) {
          
          this.postList = res.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 编辑跳转
    editPost(id) {
      this.$router.push({path: `/post/${id}`})
    },
    // 删除文章
    deleteModal(postId) {
      httpDeletePost(postId).then(res => {
        if (res.data.success) {
          alert(res.data.data)
        } else {
          alert(res.data.data)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 翻页事件
    handlerPage(data) {
      this.params.page = data.index;
      this.getPostList();
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
