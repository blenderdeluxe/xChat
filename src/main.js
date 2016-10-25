/**
 * The XbrChat APP entry js file.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import AppInitView from './main/App'

import AppConfig from './config.json'
import XChatAPP from './xchat/XChat'
import LoginView from './xchat/Login'
import RegisterView from './xchat/Register'
import WelcomeView from './xchat/Welcome'

import XChatHomeView from './xchat/XChatHome'
import ProfileView from './xchat/tabs/Profile'
import ChatListView from './xchat/tabs/ChatList'
import GroupChatListView from './xchat/tabs/GroupChatList'
import FriendListView from './xchat/tabs/FriendList'
import CreateChatView from './xchat/tabs/CreateChat'
// install the VueRouter plugin for Vue.
Vue.use(VueRouter)

/**
 *  Define XbrChat app's routers.
 *    default router: app home page.
 *    login router: login page's router.
 *    welcome router: Chat
 */
const urlPrefix = AppConfig.urlPrefix
const routes = [
  {
    path: urlPrefix + 'xchat',
    name: 'xchat',
    component: XChatAPP,
    children: [
      { path: urlPrefix + 'xchat/welcome', name: 'welcome', component: WelcomeView },
      { path: urlPrefix + 'xchat/login', name: 'login', component: LoginView },
      { path: urlPrefix + 'xchat/register', name: 'register', component: RegisterView },
      {
        path: urlPrefix + 'xchat/:userName',
        name: 'xChatHome',
        component: XChatHomeView,
        children: [
          {
            path: 'chatList',
            name: 'chatList',
            component: ChatListView
          },
          {
            path: 'groupChatList',
            name: 'groupChatList',
            component: GroupChatListView
          },
          {
            path: 'createChat',
            name: 'createChat',
            component: CreateChatView
          },
          {
            path: 'friendList',
            name: 'friendList',
            component: FriendListView
          },
          {
            path: 'profile',
            name: 'profile',
            component: ProfileView
          }
        ]
      }
    ]
  },
  { path: urlPrefix + '', name: 'default', component: AppInitView }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/**
 *  Mount Vue application instance that contain VueRouter plugin to the element[div#xbr-chat-app], and start it.
 */
new Vue({
  router
}).$mount('#xbr-chat-app')
