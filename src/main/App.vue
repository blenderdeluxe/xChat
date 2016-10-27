<template>
  <div id="app">
    <Hello></Hello>
    <!-- <LoginView></LoginView> -->
    <!-- <WelcomeView></WelcomeView> -->
  </div>
</template>

<script lang='babel'>
import Hello from './Hello'
// import LoginView from './components/Login'
// import WelcomeView from './components/Welcome'

export default {
  name: 'app',
  components: {
    Hello
    // LoginView,
    // WelcomeView
  }
}
</script>

<style lang="scss">
@import "../sass_helper/sass_helper.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  &:before{
    color: red;
  }
}
</style>
