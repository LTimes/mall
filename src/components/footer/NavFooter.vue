<template>
  <div class="footer">
      <ul>
          <li v-for="(item,index) in tabs" :key="item.id">
              <span>{{index}}</span>
              <a href="javascript:;">{{item.name}}</a>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
           tabs: [
               {
                   name:" 首页",
                   active: true
               },
               {
                   name:" 分类",
                   active: false
               },
               {
                   name:"盟主喵喵",
                   active: false
               },
               {
                   name:" 购物车",
                   active: false
               },
               {
                   name:" 我的",
                   active: false
               }
           ] 
        }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .footer {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .footer ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        justify-content: space-around;
        align-items: center;
        height: 4rem;
        background: #ddd;
    }
    .footer li span {
        display: block;
        text-align: center;
    }

</style>

