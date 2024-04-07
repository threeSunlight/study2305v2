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
					path: '/count/3'
				})
			},
			handlerWord() {
				this.$router.push({
					path: '/word/徐良/postId/32'
				})
			}
		},
	}
</script>

<style>
	
</style>
