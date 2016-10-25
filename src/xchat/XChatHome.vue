<template>
	<div id="view-xChatHome">
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
		
		<router-view></router-view>

		<footer class="xChat-footer">
			<div class="footer-item flex-center c-left">
				<router-link :to="{ name: 'chatList', params: {userId: $route.params.userName, userName: $route.params.userName} }">聊天</router-link>
			</div>
			<div class="footer-item-gap"></div>

			<div class="footer-item flex-center c-left">
				<router-link :to="{ name: 'groupChatList', params: {userId: $route.params.userName, userName: $route.params.userName} }">群聊</router-link>
			</div>
			<div class="footer-item-gap"></div>

			<div class="footer-item flex-center c-add flex-center">
				<span class="flex-center"><div class="flex-center fill-parent plus-inner">+</div></span>
			</div>
			<div class="footer-item-gap"></div>

			<div class="footer-item flex-center c-right">
				<router-link :to="{ name: 'friendList', params: {userId: $route.params.userName, userName: $route.params.userName} }">好友</router-link>
			</div>
			<div class="footer-item-gap"></div>

			<div class="footer-item flex-center c-right">
				<router-link :to="{ name: 'profile', params: {userId: $route.params.userName, userName: $route.params.userName} }">我的</router-link>
			</div>
		</footer>
	</div>
</template>

<style lang="css" scoped>
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
	position: absolute;
	bottom: 0px;
	left: 0px;
	right: 0px;
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
.xChat-footer > div.c-add:hover, .xChat-footer > div.c-add:active{
	background: none;
}
.xChat-footer > div.footer-item:active{
	background: rgba(0, 0, 0, 0.12);
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