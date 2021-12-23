<template>
	<div id="Recorder">
		<vue-record-audio
			:mode="recordMode"
			@stream="onStream"
			@result="onResult"
            class="recorder"
		/>
	</div>
</template>

<script>

import {mapState} from 'vuex'

export default {

    data() {
        return {
            recordMode: "press",
        }
    },
	methods: {
		onStream(data) {},

		onResult(data) {},
	},

    computed: {
        ...mapState(['userLevel', 'recordings'])
    }
};
</script>

<style scoped>

.recorder {}

</style>
