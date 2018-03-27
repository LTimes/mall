<template>
  <div class="tab-div">
      <ul class="tab_list">
          <li v-for="(item) in tabs" :key="item.tabId" v-bind:class="{'active':item.active}">{{item.Text}}</li>
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

    }
}
</script>
 
 <style>
 ul.tab_list {
     list-style: none;
     width: 1000px;
 }
    .tab-div ul li {
        float: left;
        padding: 8px 20px;
    }
 </style>
 

<style scoped>
 .tabs ul li {
     float: left;
     list-style: none;
     padding: 4px 10px;
 }
 .active {
     border-bottom: 2px solid #f12;
 }
</style>
