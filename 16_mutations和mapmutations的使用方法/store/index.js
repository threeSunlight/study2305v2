import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /**存储值 */
  state: {
    n:1,
    sum: 0
  },
  /***计算值 */
  getters: {
    bigSum(state) {
      console.log('---------------');
      console.log(state);
      console.log('---------------');
      return state.sum * 10
    },
    langBigSum(state) {
      return state.sum *100
    }
  },
  /**同步修改state中的值 */
  mutations: {
    UPDATE_SUM(state,deplay) {
      state.sum += state.n
    },
    /***让sum值减一 */
    JIAN_SUM(state,deplay) {
      state.sum -= state.n
    }
  },
  /**异步方法,调用同步的方法修改state值 
   * 有两个接口修改sum值,一个接口500毫秒有返回,一个接口800毫秒有返回,但是最终500毫秒需要去依赖800毫秒的值
   *
  */
  actions: {
    increment(context,deplay) {
      console.log('触发了actions');
      const {commit} = context
      commit('UPDATE_SUM')
    }
  },
  /**模块 */
  modules: {
  }
})
