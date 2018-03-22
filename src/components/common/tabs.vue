<template>
  <div class="tab-div">
      <ul>
          <li v-for="(item) in tabs" :key="item.Id">{{item.text}}</li>
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
 

