<template>
  <div class="tab-div">
      <ul>
<<<<<<< HEAD
          <li v-for="(item) in tabs" :key="item.Id">{{item.text}}</li>
=======
          <li v-for="(item) in tabs" :key="item.tabId" v-bind:class="{'active':item.active}">{{item.Text}}</li>
>>>>>>> 50b58bdd3359793d0e3a4c1a5fab5d6c8eed9784
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
 ul {
     list-style: none;
     width: 1000px;
 }
    .tab-div ul li {
        float: left;
        padding: 0 20px;
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
