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
  },
  /**同步修改state中的值 */
  mutations: {
  },
  /**异步方法,调用同步的方法修改state值 */
  actions: {
    increment(state,deplay) {
      console.log('---------');
      console.log(state,deplay);
      console.log('+++++++++');
      
    }
  },
  /**模块 */
  modules: {
  }
})
