const person = {
    namespaced: true,
    state: {
        name: '徐良',
        age: 32,
        habby: ['喝酒','挣钱','抽烟'],
    },
    mutations: {
        UPDATE_AGE(state,deplay) {
            state.age = state.age + deplay
        },
        UPDATE_HABBY(state,deplay) {
            state.habby = "好好挣钱"
        }
    },
    actions:{
        updateAges(state,deplay) {
             const {commit} = state
             commit('UPDATE_AGE',deplay )
        }
    }
}


export default person