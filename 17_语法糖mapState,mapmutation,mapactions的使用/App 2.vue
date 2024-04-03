<template>
	<div>
		<Count/>
	<hr/>
	<Person/>
	</div>
	
</template>

<script>
	import Count from '@/components/count.vue'
	import Person from './components/person.vue'
	export default {
		components: {
			Count,
			Person
		}
	}
</script>

<style>
	
</style>
