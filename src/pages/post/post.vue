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
        <li class="label_txt" v-for='(item, index) in labelList' :key='index'>
          <span class="txt" @click="selectLabel(index)">{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="post_content">
      <mavon-editor v-model="md" style='height: 762px;' />
    </div>
  </div>
</template>
<script>
import { httpAddPost } from '@/api/post'
export default {
  data() {
    return {
      title: '',
      label: [],
      md: '',
      labelList: [
        'javascript',
        'html',
        'css',
        'sass',
        'less',
        'nodejs',
        'vue',
        'react',
        'canvas'
      ]
    }
  },
  methods: {
    selectLabel(index) {
      console.log(index)
      this.label.push(index)
    },
    addPost() {
      let data = {
        title: this.title,
        label: this.label,
        md: this.md
      }
      httpAddPost(data).then( res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped src='./post.scss'>

</style>


