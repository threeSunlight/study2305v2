<template>
	<div>
		<!-- 需求: 通过router-link跳转到个人和求两个页面
		    第一步: 先配置路由表
			第二步: 在配置router-link
		-->
		<!-- 路由跳转 -->
		<router-link :to="{path: 'count'}">跳转到求和页面</router-link>
		<!-- 命名路由 -->
		<router-link :to="{name: 'word'}">跳转到求和页面</router-link>
		<router-link to="/person">跳转到个人信息页面</router-link>
		<router-view></router-view>
	</div>
	
</template>

<script>

	export default {
		
	}
</script>

<style>
	
</style>
