<template>
  <div class="tab-div" ref="wrapper">
      <ul class="tab_list">
          <li v-for="(item, index) in tabs" :key="item.tabId" v-bind:class="{'active':item.active}" @click="tabsShow(index)">
          <a href="javascript:;"><span>{{item.Text}}</span></a>
          </li>
      </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    data() {
        return {

        }
    },
    props: {
        tabs: {
            type: Array,
            default: [],
            required: true
        }
    },
    methods: {
        tabsShow(index){
            this.tabs.forEach((item) => {
                item.active = false;
            })
            this.tabs[index].active = true;
        },
        _initWidth() {

        }
    },
    created() {
        this._initWidth()
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {scrollX: true,click: true})
        })
    }
}
</script>

<style scoped>
.tab-div {
    overflow: hidden;
}
#app a:hover {
    text-decoration: none !important;
}
ul.tab_list {
     list-style: none;
     width: 520px;
 }
 ul.tab_list li {
     float: left;
 }
 .tab_list li a {
     display: block;
     font-size: .7rem;
     width: 74px;
     height: 1.8rem;
     color: #666;
     text-align: center;
     line-height: 1.8rem;

 }
 .active {
     border-bottom: 2px solid #f12;
 }
 .tab_list li.active a span{
     color: #f12;
 }
</style>
