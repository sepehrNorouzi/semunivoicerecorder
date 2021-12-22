<template>
	<div id="app">
		<app-navigation />
		<div class="container"><router-view /></div>
	</div>
</template>

<style lang="scss"></style>

<script>
import NavigationVue from "./components/Navigation.vue";
export default {
	components: {
		appNavigation: NavigationVue,
	},
};
</script>
