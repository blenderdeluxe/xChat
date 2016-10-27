<template>
  <div id="xchat-view-login" class="fill-parent">
  <div class="xchat-view-login-inner">
    <div class="login-box">
      <div class="username-line">
        <input v-model="loginConfig.username" type="text" placeholder="请输入用户名" name="xbr-username" class="input">
      </div>
      <div class="password-line">
        <input  v-model="loginConfig.password" type="password" placeholder="请输入密码" name="xbr-password" class="input">
      </div>
      <div class="submit-line">
        <button class="login" @click="login()">登录</button>
        <button class="register" v-on:click="goRegister()">注册</button>
      </div>
    </div>
    <Loading :showObj.sync="loginConfig.isloggingObj" :content='loginConfig.isloggingObj.content' :autoHide="false"></Loading>
  </div>
  </div>
</template>

<script lang='babel'>
import Loading from '../components/Loading'

export default {
  components: {
    Loading
  },
  data () {
    return {
      loginConfig: {
        username: '',
        password: '',
        isloggingObj: { show: false, content: '' },
        loginTimer: null
      }
    }
  },
  ready () {
    console.log('ready')
  },
  created () {
    console.log('login view create ...')
  },
  methods: {
    login () {
      if (!this.chekValid()) {
        return
      }
      // console.log('loginView login :::: isloggingObj.show: ' + this.loginConfig.isloggingObj.show)
      let self = this
      self.loginConfig.isloggingObj.content = '登录中, 请稍候 ...... '
      self.loginConfig.isloggingObj.show = true
      self.loginConfig.loginTimer = setTimeout(function () {
        clearTimeout(self.loginConfig.loginTimer)
        self.loginConfig.loginTimer = null
        self.loginConfig.isloggingObj.show = false
        setTimeout(function () {
          self.$router.push({ name: 'chatList', params: { userName: self.loginConfig.username, userId: self.loginConfig.username } })
        }, 450)
      }, 2000)
    },
    goRegister () {
      // console.log('goRegister')
      this.$router.push('register')
    },
    chekValid () {
      if (this.loginConfig.username.trim() === '') {
        console.log(' 请先输入用户名! ')
        return false
      }
      if (this.loginConfig.password.trim() === '') {
        console.log(' 请先输入密码! ')
        return false
      }
      return true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../sass_helper/sass_helper.scss";
#xchat-view-login{
  display: flex;
  align-items: center;
  justify-content: center;
}
.xchat-view-login-inner{
  margin-bottom: 45%;
}
.login-box{
    /*min-width: 200px;*/
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.input{
  height: 2rem;
  border: 0px;
  border-radius: 5px;
  padding-left: 10px;
}
.input:hover, .input:focus{
  outline: none;
}
.input:focus{
  box-shadow: 0px 0px 8px #cdcdd1;
}
.submit-line{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
button{
  height: 1.6rem;
  background: rgba(60, 58, 58, 0.19);
  border: 0px;
  border-radius: 3px;
  padding: 5px 0px 5px 9px;
  word-spacing: 10px;
  letter-spacing: 10px;
  text-align: center;
  position: relative;
  top: 0px;
  left: 0px;
}
button.login{
  margin-left: 2.5px;
}
button.register{
  margin-right: 2.5px;
}
button:hover, button:focus, button:active{
  outline: none;
  background: rgba(60, 58, 58, 0.28);
}
button:active{
  box-shadow: inset 0px 0px 8px #cdcdd1;
  top: 1px;
  left: 1px;
}
</style>