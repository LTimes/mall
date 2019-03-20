<!-- page 分页组件 -->
<template>
  <div class="page-box" v-show="true">
    <div class="page">
      <ul>
        <li
          @click="handlerPage(current - 1)"
          :class="['page-prev',current == 1 ? 'page-disabled': '']"
        >&lt;</li>
        <li
          @click="handlerPage(index+1)"
          v-for="(item,index) in page"
          :key="index"
          :class="['page-item', current == (index+1) ? 'page-item-active': '']"
        >{{index+1}}</li>
        <li
          @click="handlerPage(current + 1)"
          :class="['page-next',current == page ? 'page-disabled': '']"
        >&gt;</li>
        <div class="page-options-elevator">
          跳至
          <input
            type="text"
            v-model="jumpPage"
            autocomplete="off"
            @keyup.enter="handlerPage(jumpPage,true)"
            spellcheck="false"
            class="input"
          >
          页
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: this.currentPage,
      jumpPage: this.currentPage
    };
  },
  props: {
    // 总数量
    total: {
      type: Number,
      required: true
    },
    // 每页显示条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 当前页数
    currentPage: {
      type: Number,
      default: 1
    },
    // 显示分页，用来改变page-size
    showSizer: {
      type: Boolean,
      default: false
    },
    // 显示电梯，可以快速切换到某一页
    showElevator: {
      type: Boolean,
      default: false
    }
  },

  components: {},

  computed: {
    show() {
      // return this.page
    },
    // 获取页数
    page() {
      return Math.ceil(this.total / this.pageSize); // 向上取正
    },
    pageList() {
      let page = this.page
    }
  },

  created() {},

  mounted() {},

  methods: {
    // 翻页
    handlerPage(index, flag) {
      if (this.current != index && index > 0 && index < this.page + 1) {
        this.current = index;
        this.jumpPage = index;
      }
      if (flag && (index < 1 || index > this.page)) {
        this.current = 1;
        this.jumpPage = "1";
      }
      this.$emit('handlerPage',{index})
    }
  }
};
</script>
<style scoped src='./page.scss'>
</style>