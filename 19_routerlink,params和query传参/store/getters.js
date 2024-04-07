
const getters = {
    bigSum: (state) => state.count.sum * 10,
    langBigSum: (state) => state.count.sum *100,
    bigAge: (state) =>  state.person.age * 10
}


export default getters