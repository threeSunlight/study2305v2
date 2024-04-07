<template>
	<!-- 嵌套路由
	   children子路由	
	-->
	<div>
		<!-- 路由跳转 -->
		<button @click="handlerCount">跳转到求和页面</button>
		<button @click="handlerWord">跳转到你好页面</button>
		<router-view></router-view>
	</div>
	
</template>

<script>

	export default {
		methods: {
			handlerCount() {
				this.$router.push({
					name: 'count',
					params: {
						userId: 1234
					}
				})
			},
			handlerWord() {
				// 替换当前路径
				this.$router.push({
					path: '/word',
					query: {
						name: '小李飞刀'
					}
				})
			}
		},
	}
</script>

<style>
	
</style>
