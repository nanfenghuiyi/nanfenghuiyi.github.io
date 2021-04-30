// getters: {
//   isLogin: state => state.isLogin,
// },
// mutations: {
//   updateLoading(state, payload) {
//     state.axiosLoading = payload
//   },
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const defaultNote = {
  id: +new Date(),
  title: '新建笔记' + new Date().getMilliseconds(),       // 加时间是为了做一下区分
  content: '笔记内容',
  fav: false
}

//  可以理解为一个状态的仓库    
const state = {
  axiosLoading: false, // 网络请求时的loading页
  isLogin: false,
  notes: [defaultNote],           //  以数组方式存放所有的笔记
  activeNote: defaultNote,        //  用来记录当前笔记    
  show: 'all'                     //  用于切换 全部 / 已收藏 两种不同列表的标识
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
