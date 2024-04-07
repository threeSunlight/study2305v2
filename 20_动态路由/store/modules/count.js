
// 求和模块


/**存放数据 */
const state = {
    n:1,
    sum: 0
}

const mutations = {
    UPDATE_SUM(state,deplay) {
        state.sum += state.n
      },
      /***让sum值减一 */
      JIAN_SUM(state,deplay) {
        state.sum -= state.n
      }
}

const actions = {
    increment(context,deplay) {
      console.log(deplay,'触发参数');
        console.log('触发了actions');
        const {commit} = context
        commit('UPDATE_SUM')
      }
}


export default{
  namespaced: true,
  state,
  mutations,
  actions
}


