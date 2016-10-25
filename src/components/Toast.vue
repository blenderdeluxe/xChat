<template>
  <div v-show="show" class="xui_toast_compentent">
      <div class="xui_mask_transparent"></div>
      <div class="xui_toast">
          <i class="xui_toast_icon"></i>
          <p class="xui_toast_content"><slot>已完成</slot></p>
      </div>
  </div>
</template>

<script>

export default {

  name: 'XUI-Toast',
  // data: {
  // 	defaultDuration: 3000,
  // 	defaultShow: false,
  // 	defaultType: 'normal' //normal、success、error、custom
  // },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
      twoWay: true
    },
    type: {
    	type: String,
    	required: false,
    	default: 'normal' //normal、success、error、custom
    },
    duration: {
      type: Number,
      required: false,
      default: 3000
    }
  },
  watch: {
    toast(val) {
      if (this._timeout) clearTimeout(this._timeout)
      if (val && !!this.duration) {
        this._timeout = setTimeout(()=> this.show = false, this.duration)
      }
    }
  }
}
</script>

<style lang="css">
.xui_toast_compentent{
	
}
</style>