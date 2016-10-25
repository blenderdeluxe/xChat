<template>
  <div id="view-welcome" class="flex-center fill-parent">
    欢迎来到 xChat 聊天室!
  </div>
</template>

<script lang='babel'>
import AppConfig from '../config.json'
const urlPrefix = AppConfig.urlPrefix
export default {
  data () {
    return {
      welcomeConfig: {
        timeout: 2000,
        timer: null,
        isLoaing: null
      }
    }
  },
  created () {
    console.log('created...')
    let self = this
    console.log(self.$route)
    console.log(self.$router)
    self.welcomeConfig.isLoaing = true
    self.welcomeConfig.timer = setTimeout(function () {
      self.welcomeConfig.isLoaing = false
      console.log(' timeouted ......')
      clearTimeout(self.welcomeConfig.timer)
      const loginPath = urlPrefix + 'xchat/login'
      self.$router.push(loginPath)
    }, self.welcomeConfig.timeout)
  },
  ready () {
    console.log('ready...')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  
</style>
