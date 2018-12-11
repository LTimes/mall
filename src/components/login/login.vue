<!-- login -->
<template>
  <div class="login" v-if="isLogin">
    <Dialog :isModal='true' :isBtn='false' :isClose='false'>
      
      <span slot='title'>登录
        <span class="l-close" @click="btnCancel"><i class="close-img">&times;</i></span>
      </span>
      
      <div slot='content'>
        <form class="login-form" action="" method="post">
          <!-- <label for="name">昵称</label> -->
          <input class='name' type="text" v-model="form.name" placeholder="请输入昵称">
          <input class='password' v-model="form.pwd" type="password" placeholder="请输入密码">
          <div class="btn" @click="handleSubmit">登录</div>
        </form>
      </div>
    </Dialog>
  </div>
</template>

<script>
  import Dialog from '_/dialog/dialog'
  import { mapState ,mapActions } from 'vuex'

  export default {
    data () {
      return {
        form: {
          name: '',
          pwd: ''
        }
      }
    },
    props: {
      // isModalLogin: {
      //   type: Boolean,
      //   default: false
      // }
    },
    components: {
      Dialog
    },

    computed: {
      ...mapState(['isLogin'])
    },

    created() {},

    mounted() {
      
    },

    methods: {
      btnCancel() {
            this.$emit('btnCancel',{})
      },
      ...mapActions([
        'handleLogin',
        'handleIsLogin'
      ]),
      handleSubmit() {
        let data = this.form;
        this.handleLogin(data).then( res => {
          // console.log(res.data)
          this.handleIsLogin(false)
          this.$router.push('./index')
        })
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
  .login-form {
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
      text-align: center;
      line-height: 2.125rem;
    }
  }
</style>
