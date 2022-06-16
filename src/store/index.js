// Vuex : store/index.js
// 역할 -> 모든 컴포넌트에서 공유할 수 있는 변수를 정의해 두는 곳(전역 변수)
import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from "./AuthModule"


Vue.use(Vuex)

export default new Vuex.Store({
  //공유 데이터 정의(전역변수)
  state: {
  },
  //getter 메소드들 정의
  getters: {
  },
  //setter 메소드들 정의
  mutations: {
  },
  //비동기 함수들 정의
  actions: {
  },
  //외부 자바스크립트를 정의해서 쓰는 곳
  modules: {
    auth
  }
})
