<template>
  <div class="post">
    <div class="post_btn">
      <span>发布</span>
    </div>
    <div class="post_title">
      <input type="text" class="post_title_input" placeholder="请输入标题...">
    </div>
    <div class="post_label">
      <div class="post_label_title">选择标签：</div>
      <ul class="clear">
        <li class="label_txt" v-for='item in 16' :key='item'>
          <span class="txt">JavaScript</span>
        </li>
      </ul>
    </div>
    <div class="post_content">
      <mavon-editor v-model="content" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      label: [],
      content: ''
    }
  }
}
</script>
<style lang="scss" scoped src='./post.scss'>

</style>


