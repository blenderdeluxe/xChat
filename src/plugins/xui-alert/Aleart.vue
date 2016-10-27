<template>
	<div class="xui-alert-plugin" transition="fadeIn">
		<div class="alert-box">
			{{message}}
		</div>		
	</div>
</template>

<script type="text/ecmascript-6" lang="babel">
  export default {
    computed: {
      positionClass () {
        return this.position ? `alert-${this.position}` : ''
      }
    }
  }
</script>

<style scope>
  .xui-alert-plugin {
    position: absolute;
    top: 50%;
    left: 0;
    text-align: center;
    width: 100%;
    transform: translate(0, -50%);
    z-index: 99999;
  }
  .xui-alert-plugin.alert-bottom {
    bottom: 10%;
    top: auto;
    transform: translate(0, 0);
  }
  .xui-alert-plugin.alert-top {
    top: 10%;
    bottom: auto;
    transform: translate(0, 0);
  }
  .alert-box {
    -webkit-user-select: none;
    padding: 15px 20px;
    display: inline-block;
    background-color: rgba(0,0,0,0.75);
    border-radius: 3px;
    font-size: 0.9em;
    color: #fff;
    max-width: 80%;
  }
  .fadeIn-transition {
    opacity: 1;
  }
  .fadeIn-leave,
  .fadeIn-enter {
    opacity: 0;
  }
</style>