<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <h2>示例</h2>
    <ul>
      <li>
        <router-link :to="{ path: '/xchat/welcome' }">xChat 聊天室</router-link>
      </li>
    </ul>

    <footer>
      <h2>感谢</h2>
      <ul>
        <li><a href="http://vuejs.org/api/index.html" target="_blank">Vue.js 2</a></li>
        <li><a href="http://router.vuejs.org/en/index.html" target="_blank">Vue Router 2</a></li>
        <li><a href="http://webpack.github.io/docs/index.html" target="_blank">webpack</a></li>
        <li><a href="https://jsfiddle.net" target="_blank">JSFiddle</a></li>
      </ul>
    </footer>

    <!-- <footer>
      <h2>感谢</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </ul>
    </footer> -->
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue.js 2 练习Demo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
footer{
  position: fixed;
  bottom: 0px;
}
</style>
