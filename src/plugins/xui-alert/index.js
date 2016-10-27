function install(Vue) {
  var AlertConstructor = Vue.extend(require('./Alert.vue'))
  var alertInstance = null

  Object.defineProperty(Vue.prototype, '$alert', {
    get: function () {
      return (message, position) => {

        if (alertInstance) return
        alertInstance = new AlertConstructor({
          el: document.createElement('div'),
          data () {
            return {
              message,
              position
            }
          }
        })

      }
    }
  })

}

if (window && window.Vue) {
  Vue.use(install)
}

module.exports = install;