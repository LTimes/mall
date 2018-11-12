<!-- login -->
<template>
  <div class="register" v-if="isModalRegister">
    <Dialog :isModal='true' :isBtn='false' :isClose='false'>
      <span slot='title'>注册
        <span class="l-close" @click="btnCancel"><i class="close-img">&times;</i></span>
      </span>
      <div slot='content'>
        <form class="register-form" action="" method="post">
          <!-- <label for="name">昵称</label> -->
          <input class='name' v-model="name" type="text" placeholder="请输入昵称">
          <input class='password' v-model="pwd" type="password" placeholder="请输入密码，至少6位数">
          <button class="btn" type='submit' @click.prevent="register">注册</button>
        </form>
      </div>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '_/dialog/dialog'
import {httpRegister} from '@/api/user'
  export default {
    data () {
      return {
        name: '',
        pwd: ''
      }
    },
    props: {
      isModalRegister: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Dialog
    },

    computed: {},

    created() {},

    mounted() {},

    methods: {
      register() {
        let data = {name: this.name, pwd: this.pwd}
        httpRegister(data).then( res => {
          console.log(res)
        })
        return false;
      },
      btnCancel() {
            this.$emit('btnCancel',{})
        }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/theme.scss';
  .l-close {
    position: absolute;
    top: .625rem;
    text-align: center;
    line-height: 1.875rem;
    font-size: 1rem;
    right: .375rem;
    cursor: pointer;
    width: 1.875rem;
    height: 1.875rem;
    &:hover {
      border-radius: 50%;
      background: $bg_color_e;
    }
  }
  .register-form {
    display: flex;
    flex-direction: column;
    padding: 1.625rem 2.25rem;
    .name, .password {
      border: .0625rem solid $bg_color_d;
      border-radius: .25rem;
      height: 2.125rem;
      padding: 0 .75rem;
      font-size: .875rem;
      margin-bottom: 1.625rem;
    }
    .name:focus, .password:focus {
      border: .0625rem solid $active_color;
      box-shadow: 0 0 .125rem $active_color;
    } 
    .btn {
      background: $active_color;
      height: 2.125rem;
      border-radius: .25rem;
      color: $f_color;
      cursor: pointer;
    }
  }
</style>
