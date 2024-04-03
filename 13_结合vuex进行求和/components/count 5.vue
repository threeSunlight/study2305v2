<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
		<select v-model.number="$store.state.n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select><br/>
		<button @click="increment">+</button><br/>
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
    methods: {
        /***
         * 加一
         */
        increment() {
            console.log('+11111');
            // this.sum = this.sum + this.n
            // this.sum += this.n
            this.$store.dispatch('increment', "我是传递的参数")
        },
        /**
         * 减一
         */
        decrement() {
            // this.sum = this.sum - this.n
            this.sum -= this.n
        },
        /**奇数时候在进行加 */
        incrementOdd() {
            if(this.sum % 2 !=0) {
                this.sum += this.n
            }
        },
        /**延时调用 */
        incrementWait() {
         setTimeout(() => {
            this.sum += this.n
         })
        //  $nextTick
        }
    }
}
</script>
<style>
</style>