<template>
	<div id="VoiceRecorder">
		<vue-record-audio mode="press" @stream="onStream" @result="onResult" />
	</div>
</template>

<script>
export default {
	methods: {
		onStream(data) {},

		onResult(data) {},
	},
};
</script>

<style></style>
