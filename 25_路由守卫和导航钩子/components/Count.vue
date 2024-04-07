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
       
    },
    // 需求: 
    //我有一个定时器,进入当前页面的时候开启  setInterval, 
    //实时更新页面上的数字,每一秒+1,离开的时候,关闭,在访问别的组件的时候不触发
    beforeRouteEnter(to, from, next) {
        console.log('进入当前组件');
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
        next(vm => {
            // 通过 `vm` 访问组件实例
        })
    },
    beforeRouteUpdate(to, from, next) {
        console.log('更新当前组件');
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
    },
    beforeRouteLeave(to, from, next) {
        console.log('离开当前组件');
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
    }
}
</script>
<style>
</style>