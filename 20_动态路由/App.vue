<template>
	<!-- 动态路由
		一个“路径参数”使用冒号 : 标记。
		当匹配到一个路由时，
		参数值会被设置到 this.$route.params，
		可以在每个组件内使用 -->
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
