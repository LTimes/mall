<template>
  <div class="tab-div">
      <ul class="tab_list">
          <li v-for="(item, index) in tabs" :key="item.tabId" v-bind:class="{'active':item.active}" @click="tabsShow(index)">
          <a href="javascript:;"><span>{{item.Text}}</span></a>
          </li>
      </ul>
  </div>
</template>

<script>
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
        }
    }
}
</script>

<style scoped>
#app a:hover {
    text-decoration: none !important;
}
ul.tab_list {
     list-style: none;
     width: 150%;
 }
 ul.tab_list li {
     float: left;
 }
 .tab_list li a {
     display: block;
     width: 74px;
     height: 36px;
     color: #666;
     text-align: center;
     line-height: 36px;

 }
 .active {
     border-bottom: 2px solid #f12;
 }
 .tab_list li.active a{
     color: #f12;
 }
</style>
