<template>
  <div class="tabs">
      <ul>
          <li v-for="(item, index) in tab" :key="item.Id">{{index}}</li>
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
        tab: {
            type: Array,
            default: '1'
        }
    },
    methods: {

    }
}
</script>

