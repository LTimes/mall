<template>
  <div class="post">
    <div class="post_btn" @click="addPost">
      <span>发布</span>
    </div>
    <div class="post_title">
      <input type="text" class="post_title_input" v-model="title" placeholder="请输入标题...">
    </div>
    <div class="post_label">
      <div class="post_label_title">选择标签：</div>
      <ul class="clear">
        <li :class="['label_txt']" v-for='(item, index) in labelList' :ref="'label_'+item.id" :key='index' @click="selectLabel($event,item.id, item.name)">
          <span class="txt" >{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="post_content">
      <mavon-editor v-model="md" style='height: 762px;' />
    </div>
  </div>
</template>
<script>
import { httpAddPost, httpPostDetail, httpEditPost } from '@/api/post'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      postId: '',  // 文章id
      // postDetail: {},  // 文章详情

      title: '',
      label: [],
      md: '',
      active: -1,
      labelList: [
        {
          id: 1,
          name:'javascript'
        },
        {
          id: 2,
          name:'html'
        },
        {
          id: 3,
          name:'css'
        },
        {
          id: 4,
          name:'sass'
        },
        {
          id: 5,
          name:'less'
        },
        {
          id: 6,
          name:'nodejs'
        },
        {
          id: 7,
          name:'react'
        },
        {
          id: 8,
          name:'canvas'
        }
      ]
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    this.postId = this.$router.history.current.params.id
  },
  mounted() {
    if (this.postId) {
      this.getPostDetail()
    }
  },
  methods: {
    // 选择标签
    selectLabel(e,labelId,name) {
      if (e.currentTarget.classList.value.includes('active')) {
        e.currentTarget.classList.remove('active')
        this.label.forEach((ele,index) => {
          if (ele.labelId === labelId) {
            this.label.splice(index,1)
          }
        });
      } else {
        e.currentTarget.classList.add('active')
        this.label.push({
          labelId,
          name
        })
      }
    },
    // 提交文章
    addPost() {
      let data = {
        userId: this.user.userId,
        title: this.title,
        label: this.label,
        md: this.md
      }
      if (this.postId) {
        data.postId = this.postId;
        httpEditPost(data).then( res => {
          console.log(res)
          if (res.data.success) {
            this.$router.push('../index')
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        httpAddPost(data).then( res => {
          console.log(res)
          if (res.data.success) {
            this.$router.push('index')
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    // 
    // 获取文章详情
    getPostDetail() {
        let type = 1;
        httpPostDetail(this.postId,type).then( res => {
          if (res.data.success) {
            this.md = res.data.data.md;
            this.title = res.data.data.title;
            this.label = res.data.data.label;
            this.label.forEach(item => {
              this.$refs['label_'+item.labelId][0].className = "label_txt active"
            })
          } else {
            console.log('500了')
          }
        })
      }
  }
}
</script>
<style lang="scss" scoped src='./post.scss'>

</style>


