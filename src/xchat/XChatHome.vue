<template>
	<div id="view-xChatHome" class="fill-parent">
		<header class="xChat-header">
			<div class="left">&nbsp;</div>
			<div class="center single-line-ellipsis">xChat聊天室</div>
			<div class="right single-line-ellipsis">
				<div class="x-name">
					{{$route.params.userName}}
				</div>
				<div class="x-logout single-line-ellipsis">&nbsp;|&nbsp;退出</div>
			</div>
		</header>
		
		<!--
			@after-enter="transitionComplete"
			name="fade" mode="out-in" appear
			enter-class="slideInLeft" leave-class="slideOutRight"
			enter-active-class="slideInLeft" leave-active-class="slideOutRight"
		-->
		<div id="tab-content-wrapper">
			<transition name="xbr"
				@before-enter="tBeforeEnter"
				@after-enter="tAfterEnter"
				@before-leave="tBeforeLeave"
				@after-leave="tAfterLeave"
				>
				<router-view></router-view>
			</transition>
		</div>

		<footer id="xChat-footer" class="xChat-footer">
			<div class="model-prevent-click"></div>

			<div class="footer-item flex-center c-left">
				<router-link :to="{ name: 'chatList', params: {from: $route.name, userId: $route.params.userName, userName: $route.params.userName} }">聊天</router-link>
			</div>
			<div class="footer-item-gap"></div>

			<div class="footer-item flex-center c-left">
				<router-link :to="{ name: 'groupChatList', params: {from: $route.name, userId: $route.params.userName, userName: $route.params.userName} }">群聊</router-link>
			</div>
			<div class="footer-item-gap"></div>

			<div class="footer-item flex-center c-add flex-center">
				<span class="flex-center"><div class="flex-center fill-parent plus-inner">+</div></span>
			</div>
			<div class="footer-item-gap"></div>

			<div class="footer-item flex-center c-right">
				<router-link :to="{ name: 'friendList', params: {from: $route.name, userId: $route.params.userName, userName: $route.params.userName} }">好友</router-link>
			</div>
			<div class="footer-item-gap"></div>

			<div class="footer-item flex-center c-right">
				<router-link :to="{ name: 'profile', params: {from: $route.name, userId: $route.params.userName, userName: $route.params.userName} }">我的</router-link>
			</div>

		</footer>
	</div>
</template>

<script lang="babel">
export default {
  data () {
    return {
      transitionPrefixStr: 'xbrSlide',
      wrapperActiveClass: 'wrapper-active',
      footerActiveClass: 'prevent-click'
    }
  },
  methods: {
    _initWrapper () {
      var wrapperEle = document.getElementById('tab-content-wrapper')
      // let classStr = wrapperEle.getAttribute('class') || ''
      this._addClass(wrapperEle, this.wrapperActiveClass)
      const footerEle = document.getElementById('xChat-footer')
      // let classStrFooter = footerEle.getAttribute('class') || ''
      this._addClass(footerEle, this.footerActiveClass)
    },
    _uninstallWrapperActive () {
      debugger
      var wrapperEle = document.getElementById('tab-content-wrapper')
      this._removeClass(wrapperEle, this.wrapperActiveClass)
      const footerEle = document.getElementById('xChat-footer')
      this._removeClass(footerEle, this.footerActiveClass)
    },
    _getAllCalcClasses () {
      return ['center-to-left', 'left-to-center', 'center-to-right', 'right-to-center']
    },
    _getCalcClass (type) {
      // type: leave enter
      // center-to-left_center left-to-center_right center-to-right_center right-to-center_right
      // chatList groupChatList friendList profile
      const enter = type === 'enter'
      let resultClass = ''
      const vm = this
      const from = vm.$route.params.from
      const to = vm.$route.name
      // console.log(vm.$route)
      // console.log(from + '   ' + to)
      // left
      if (from === 'chatList') {
        resultClass = !enter ? 'center-to-left' : 'right-to-center'
      }
      // else if (to === 'chatList') {
      //   resultClass = enter ? 'left-to-center' : 'center-to-right'
      // }
      // center
      if (from === 'groupChatList') {
        if (to === 'chatList') {
          resultClass = !enter ? 'center-to-right' : 'left-to-center'
        } else {
          resultClass = !enter ? 'center-to-left' : 'right-to-center'
        }
      }
      if (from === 'friendList') {
        if (to === 'profile') {
          resultClass = !enter ? 'center-to-left' : 'right-to-center'
        } else {
          resultClass = !enter ? 'center-to-right' : 'left-to-center'
        }
      }
      // right
      if (from === 'profile') {
        resultClass = enter ? 'left-to-center' : 'center-to-right'
      }
      // else if (to === 'profile') {
      //   resultClass = enter ? 'right-to-center' : 'center-to-left'
      // }
      return resultClass
    },
    _getDynaticClass () {
      console.log(this.$route.name)
    },
    tBeforeEnter (ele) {
      // this._clearAllCalcClasses(ele)
      this._initWrapper()
      // const prefix = this.transitionPrefixStr
      this._addClass(ele, this._getCalcClass('enter'))
      // if (!this._hasClass(ele, prefix + '-enter-active')) {
      //   this._addClass(ele, prefix + '-enter-active')
      // }
    },
    tAfterEnter (ele) {
      this._clearAllCalcClasses(ele)
      // const prefix = this.transitionPrefixStr
      // if (this._hasClass(ele, prefix + '-enter-active')) {
      //   this._removeClass(ele, prefix + '-enter-active')
      // }
      this._uninstallWrapperActive()
    },
    tBeforeLeave (ele) {
      // this._clearAllCalcClasses(ele)
      this._addClass(ele, this._getCalcClass('leave'))
      // const prefix = this.transitionPrefixStr
      // window.xbrEle = ele
      // if (!this._hasClass(ele, prefix + '-leave-active')) {
      //   this._addClass(ele, prefix + '-leave-active')
      // }
    },
    tAfterLeave (ele) {
      // if (this._hasClass(ele, prefix + '-leave-active')) {
      //   this._removeClass(ele, prefix + '-leave-active')
      // }
      // this._uninstallWrapperActive()
      // this._clearAllCalcClasses(ele)
    },
    _clearAllCalcClasses (ele) {
      const self = this
      // self._getAllCalcClasses().forEach((one) => {
      //   self._removeClass(ele, one)
      // })
      const ids = ['xchart-view-chatlist', 'xchart-view-groupchatlist', 'xchart-view-friendlist', 'xchart-view-profile']
      ids.forEach((id) => {
        var idEle = document.getElementById(id)
        if (idEle) {
          const classes = self._getAllCalcClasses()
          classes.forEach((one) => {
            self._removeClass(idEle, one)
          })
        }
      })
    },
    _hasClass (element, className) {
      if (!element || !className) return false
      let attrStr = element.getAttribute('class')
      return !attrStr ? false : attrStr.indexOf(className) >= 0
    },
    _addClass (element, className) {
      if (!element || !className) return
      if (!this._hasClass(element, className)) {
        let oldCssStr = element.getAttribute('class')
        oldCssStr = oldCssStr || ''
        let cssStr = oldCssStr + ' ' + className
        cssStr = cssStr || ''
        cssStr = cssStr.replace(/\s+/g, ' ')
        element.setAttribute('class', cssStr)
      }
    },
    _removeClass (element, className) {
      // if (!element || !className) return
      if (this._hasClass(element, className)) {
        let cssStr = element.getAttribute('class')
        cssStr = cssStr || ''
        cssStr = cssStr.replace(new RegExp(className, 'g'), '')
        element.setAttribute('class', cssStr)
        // console.log('remote::::: ' + className + '     ' + cssStr)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.xbrSlide-enter-active {
  -webkit-animation-name:slideInLeftX;
}
.xbrSlide-leave-active {
  -webkit-animation-name:slideOutRightX;
}
.wrapper-active{
	width: 200%;
	/*-webkit-animation-name:slideOutLeftXbr;*/
}


/**
 * center-to-left left-to-center center-to-right right-to-center 
 */

/*1:*/
/*.center-to-left	: center*/
.center-to-left {
  -webkit-animation-name: centerToLeft_center;
}
/*.left-to-center	: right*/
.left-to-center {
  -webkit-animation-name: leftToCenter_right;
}
/*2:*/
/*.center-to-right : center*/
.center-to-right {
  -webkit-animation-name: centerToRight_center;
}
/*.center-to-left  : center*/
/*.right-to-center : right*/
.right-to-center {
  -webkit-animation-name: rightToCenter_right;
}
/*.left-to-center  : right*/
/*4:*/
/*.center-to-right : center*/
/*.right-to-center : right*/


div[id^=xchart-view-]{
	/*width: 100%;*/
	-webkit-animation-duration:300ms;
	/*transition: 1s linear width;*/
	/*animation-duration:1s;*/
	/*-webkit-animation-fill-mode:both;*/
	/*animation-fill-mode:both;*/
}
.xbr-enter-f-left{

}
.xbr-enter-f-left{

}
.xbr-leave-t-left{

}
.xbr-leave-t-right{

}

/*.xbr-enter-active, .xbr-leave-active, .xbr-leave, .xbr-leave{
	-webkit-animation-duration:1s;
	animation-duration:1s;
	-webkit-animation-fill-mode:both;
	animation-fill-mode:both;
}
.xbr-enter-active {
  -webkit-animation-name:slideInLeft;
  animation-name:slideInLeft
}
.xbr-leave-active {
  -webkit-animation-name:slideOutRight;
  animation-name:slideOutRight
}
*/









#view-xChatHome{
	display: flex;
	flex-direction: column;
}
#tab-content-wrapper{
	flex: 1;
	display: flex;
}
#tab-content-wrapper > div[id~=xChat-view-]{
	flex: 1;
}

.xChat-header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 10px;
	height: 2.5rem;
    background: white;
}
.left, .center, .right{
	flex: 1;
}
.right{
	display: flex;
	justify-content: flex-end;
}

.xChat-footer{
	display: flex;
	justify-content: center;
	align-items: center;
	/*position: absolute;
	bottom: 0px;
	left: 0px;
	right: 0px;*/
	background: white;
	height: 3rem;
}
.xChat-footer > div.footer-item{
	flex: 1;
    height: 2rem;
    line-height: 2rem;
    height: 100%;
}
.xChat-footer > div.footer-item:hover, .xChat-footer > div.footer-item:active{
	background: rgba(0, 0, 0, 0.08);
}
.xChat-footer > div.footer-item:active{
	background: rgba(0, 0, 0, 0.12);
}
.xChat-footer > div.c-add:hover, .xChat-footer > div.c-add:active{
	background: none;
}

.footer-item-gap{
	width: 1px;
	height: 70%;
	background: rgba(6, 6, 6, 0.12);
}
.xChat-footer > div.c-left{
	/*border-right: 1px solid rgba(6, 6, 6, 0.12);*/
}
.xChat-footer > div.c-right{
	/*border-left: 1px solid rgba(6, 6, 6, 0.12);*/
}
.xChat-footer > div.c-add{
    position: relative;
    top: -40%;
    transform: rotate(45deg);
    transition: 200ms linear transform;
}
.xChat-footer > div.c-add:hover{
	transform: rotate(0deg);
}

.xChat-footer a{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.xChat-footer.prevent-click{
	pointer-events: none;
}
.xChat-footer > div.c-add > span{
    width: 50px;
    height: 50px;
    border-radius: 40px;
    background: red;
    font-size: 3rem;
    line-height: 100%;
    box-shadow: 0px 0px 15px rgba(241, 6, 49, 0.59);
    transition: 200ms linear box-shadow;
    -webkit-user-select: none;
}
.xChat-footer > div.c-add:active span{
	box-shadow: 0px 0px 5px rgba(241, 6, 49, 0.59);
}
.plus-inner{
	position: relative;
    top: 3px;
}

.xChat-footer a{
	text-decoration: none;
	color: black;
}
</style>