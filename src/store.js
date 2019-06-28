import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    globalData: {
      comment: 'v-shop',
      desc: '一个前端基于vue,后端使用api工厂供的免费接口和云后台实现的实用商城!'
    },
    defaultAddress: {},
    userInfo:{
      avatarUrl: `${require('@/assets/avatar_default.png')}`,
      nick:'',
      province:'',
      city:'',
      mobile:'',
    },
  },
  mutations: {
    increment(state) {
      state.count++
    },
    updateDefaultAddress(state, address) {
      state.defaultAddress = address
    },
    updateUserInfo(state, userInfo) {
      state.userInfo = Object.assign(state.userInfo,userInfo)
    },
  }
})
export default store