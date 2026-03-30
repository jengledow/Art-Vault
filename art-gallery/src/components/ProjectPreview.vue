<script setup lang="ts">
	import Panel from 'primevue/panel'

	const props = defineProps<{
		name: string,
		referencePhoto?: string,
		timeAdded: number
	}>();
	console.log(props);
</script>

<template>
	<Panel>
		<h2>{{ props.name }}</h2>
		<img :src="props.referencePhoto" alt="Reference Photo not defined" />
		<p>{{ props.timeAdded }}</p>
	</Panel>
</template>

<style lang="scss" scoped>
</style>