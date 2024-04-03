import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import person from './modules/person'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({

  /**模块 */
  modules: {
    count,
    person
  },
  getters
})
