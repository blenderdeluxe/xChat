<template>
  <div class="xui_loading-compentent" @click="autoDismiss()" v-bind:class="activeClasss"><!-- v-bind:class="activeClasss" -->
      <!-- <div class="xui_mask_transparent"></div> -->
      <div class="xui_info_wrapper" v-show="showObj.show">
          <div class="xui_loading">
              <div v-for="n in 12" class="weui_loading_leaf" :class="'weui_loading_leaf_' + n"></div>
          </div>
          <p class="weui_info_content">{{content}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'XUI-Loading',
  props: {
    autoHide: {
      type: Boolean,
      required: true,
      default: false,
      twoWay: true
    },
    autoHideSec: {
      type: Number,
      required: false,
      default: 500,
      twoWay: true
    },
    showObj: {
      type: Object,
      required: true,
      default: false,
      twoWay: true
    },
    content: {
      type: String,
      required: true,
      default: '',
      twoWay: true
    }
  },
  data () {
    return {
      activeClasss: '' // ''、'active'、//##'hide'
    }
  },
  created () {
    // this.show = true
    let self = this
    self.$watch('showObj.show', function (newVal, oldVal) {
      // console.log('watching :::::    newVal: ' + newVal + '     oldVal: ' + oldVal)
      let classs = ''
      if (newVal) {
        classs = 'active'
      } else {
        classs = ''
      }
      self.activeClasss = classs
    })
  },
  methods: {
    autoDismiss () {
      // this.activeClasss = 'hide'
      if (this.autoHide) {
        this.$set(this.showObj, 'show', false)
      }
    }
  }
}
</script>

<style lang="scss">
@import "../sass_helper/sass_helper.scss";
.xui_loading-compentent{
  background: transparent;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex !important;
  justify-content: center;
  align-items: center;
  transition: 500ms linear background;
}
/*.xui_loading-compentent.hide{
  background: transparent;
  pointer-events: none;
}*/
.xui_loading-compentent.active{
  background: rgba(2, 2, 2, 0.38);
  pointer-events: auto
}
/*.xui_loading-compentent .xui_mask_transparent{

}*/
.xui_loading-compentent .xui_info_wrapper{

}
.xui_loading-compentent .xui_info_wrapper .xui_loading{

}
.xui_loading-compentent .xui_info_wrapper .xui_loading{

}
.xui_loading-compentent .xui_info_wrapper .weui_info_content{

}
</style>
