<template>
    <div>
        <h1>求和的值放大10倍: {{ $store.getters.bigSum }}</h1>
        <h1>求和的值放大100倍: {{ langBigSum }}</h1>
        <h1>当前求和为：{{sum}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select><br/>
		<button @click="increments">+</button><br/>
		<button @click="decrement">-</button><br/>
		<button @click="incrementOdd">当前求和为奇数再加</button><br/>
		<button @click="incrementWait">等一等再加</button>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations} from 'vuex';
export default {
    name: 'Count',
    data() {
        return{
        }
    },
    computed:{
        ...mapState(['sum', 'n']),
        ...mapGetters(['langBigSum'])
    },  
    methods: {
        // ...mapActions(['increment']),
        //  ...mapActions({
        //     add: 'increment'
        //  }),
        //  ...mapMutations(['UPDATE_SUM']),
        /***
         * 加一
         */
        // increment() {
        //     console.log('+11111');
        //     // this.sum = this.sum + this.n
        //     // this.sum += this.n
        //    this.add()
        // },
        ...mapActions({increments: 'increment'}),
        /**
         * 减一
         */
        decrement() {
            this.$store.commit('JIAN_SUM')
        },
        /**奇数时候在进行加 */
        incrementOdd() {
            if(this.sum % 2 !=0) {
                this.sum += this.n
            }
        },
        // /**延时调用 */
        // incrementWait() {
        //  setTimeout(() => {
        //     this.UPDATE_SUM()
        //  })
        // //  $nextTick
        // }
        ...mapMutations({incrementWait: 'UPDATE_SUM'})
    }
}
</script>
<style>
</style>