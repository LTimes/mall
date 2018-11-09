<!-- 弹窗组件 -->
<template>
  <div class="toast-box" v-if="isModal">
      <div class="toast-content" ref='modal' :style="{width: width+'px',height: height+'px'}">
        <div class="toast-header">
        
            <div class="title">
              <!-- 传过来的头部 -->
              <slot name="title"></slot>
            </div>
          <div class="close" v-if="isClose" @click="btnCancel"><i class="close-img">&times;</i></div>
        </div>
        <!-- 传过来的内容 -->
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="toast-btn" v-if="isBtn">
            <span class="btn-cancel btn" @click="btnCancel">取消</span>
            <span class="btn-submit btn" @click="btnSubmit">确定</span>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      };
    },
    props: {
        // 是否显示tanchang
        isModal: {
            type: Boolean,
            default: false
        },
        // 宽是多少
        width: {
            type: Number,
            default: 400
        },
        // 高是多少
        height: {
            type: Number,
            default: 400
        },
        // 是否显示关闭按钮
        isClose: {
            type: Boolean,
            default: true
        },
        // 是否显示底部按钮
        isBtn: {
            type: Boolean,
            default: true
        }
    },
    components: {},

    computed: {},

    created() {},

    mounted() {
        this.init();
    },

    methods: {
        init() {
            // this.$refs.modal.style.height = this.height+'px';
        },
        btnSubmit() {
            this.$emit('btnSubmit',{})
        },
        btnCancel() {
            this.$emit('btnCancel',{})
        }
    }
  }
</script>
<style scoped lang="scss" src='./dialog.scss'>
    
</style>