<template>
    <div>
        <h1>求和的值放大10倍: {{ $store.getters.bigSum }}</h1>
        <h1>求和的值放大100倍: {{ $store.getters.langBigSum }}</h1>
        <h1>当前求和为：{{$store.state.count.sum}}</h1>
		<select v-model.number="$store.state.count.n">
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

export default {
    name: 'Count',
    data() {
        return{
        }
    },
    created() {
        console.log('--------created--------');
        console.log(this.$route);
        console.log('--------created--------');
    },
 
    methods: {
      
        /***
         * 加一
         */
        increments() {
            this.$store.dispatch('count/increment', 'dddddd')
        },
      
        /**
         * 减一
         */
        decrement() {
            this.$store.commit('count/JIAN_SUM')
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
       
    }
}
</script>
<style>
</style>