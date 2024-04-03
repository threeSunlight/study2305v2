<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
		<select v-model.number="n">
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
import { mapState, mapActions} from 'vuex';
export default {
    name: 'Count',
    data() {
        return{
        }
    },
    computed:{
        ...mapState(['sum', 'n'])
    },  
    methods: {
        // ...mapActions(['increment']),
         ...mapActions({
            add: 'increment'
         }),
        /***
         * 加一
         */
        increment() {
            console.log('+11111');
            // this.sum = this.sum + this.n
            // this.sum += this.n
           this.add()
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