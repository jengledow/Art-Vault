<script setup lang="ts">
	import Button from 'primevue/button';
	import FileUpload from 'primevue/fileupload';
	import InputText from 'primevue/inputtext';

	let projectName = "";
</script>

<template>
	<h2>New Project</h2>
	<InputText type="text" v-model="projectName" />
	<Button label="+ Create" />
</template>

<style lang="scss" scoped></style>