<template>
	<div>
		<!-- 需求: 通过router-link跳转到个人和求两个页面
		    第一步: 先配置路由表
			第二步: 在配置router-link
		-->
		<!-- 总结: 
		 1. params传参,只能放在命名路由后面,参数不会出现在路径,刷新会丢失
		 2. query传参,放在path路径后面,参数出现在路由上,刷新不会丢失
		
		-->
		<!-- 路由跳转 -->
		<router-link :to="{path: 'count', query:{name: '小徐'}}">跳转到求和页面</router-link><br/>
		<!-- 命名路由 -->
		<router-link :to="{name: 'word', params: {userId: '1233'}}">跳转到hello页面</router-link><br/>
		<router-link to="/person">跳转到个人信息页面</router-link><br/>
		<router-view></router-view>
	</div>
	
</template>

<script>

	export default {
		
	}
</script>

<style>
	
</style>
