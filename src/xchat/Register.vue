<template>
  <div id="view-login">
    <div class="login-box">
      <div class="username-line">
        <input v-model="loginConfig.username" type="text" placeholder="请输入用户名" name="xbr-username">
      </div>
      <div class="password-line">
        <input  v-model="loginConfig.password" type="password" placeholder="请输入密码" name="xbr-password">
      </div>
      <div class="submit-line">
        <input type="submit" value="登录" @click="login($index)">
        <input type="submit" value="注册" v-on:click="goRegister($event)">
      </div>
    </div>
  </div>
</template>

<script lang='babel'>
export default {
  data () {
    return {
      loginConfig: {
        username: '',
        password: ''
      }
    }
  },
  ready () {
    console.log('ready')
  },
  methods: {
    login () {
      console.log('login')
    },
    goRegister () {
      console.log('goRegister')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  
</style>
