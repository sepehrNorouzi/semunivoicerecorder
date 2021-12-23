<template>
	<div id="Recorder" class="row">
		<div class="col recorderContainer">
			<vue-record-audio
                v-if="!curRecording"
				:mode="recordMode"
				@stream="onStream"
				@result="onResult"
				class="recorder"
			/>
			<template v-if="curRecording">
				<div class="resultContainer">
					<div class="audio-container">
						<audio :src="curRecording.src" controls />
					</div>
                    <div class="btns">
					    <button class="btn btn-dark w-25">Add</button>
					    <button class="btn btn-danger w-25" @click="deleteCur">Delete</button>
                    </div>
				</div>
			</template>
		</div>
		<div class="col clockContainer">
			<app-chornometer class="clock" />
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import ChornometerVue from "./Chornometer.vue";
import { eventbus } from "../main";

export default {
	data() {
		return {
			recordMode: "press",
			curRecording: null,
		};
	},
	methods: {
		onStream(data) {
			eventbus.$emit("startChrono");
		},

		onResult(data) {
			eventbus.$emit("stopChrono");
			this.curRecording = {
				src: window.URL.createObjectURL(data),
			};
		},

        deleteCur() {
            this.curRecording = null;
            eventbus.$emit('resetChrono');
        }
	},

	computed: {
		...mapState(["userLevel", "recordings"]),
	},

	components: {
		appChornometer: ChornometerVue,
	},
};
</script>

<style scoped>

.recorder {
    height: 200px;
    width: 200px;
}


.clockContainer {
	display: flex;
	justify-content: center;
	align-items: center;
}

.recorderContainer {
	display: flex;
	flex-direction: row;
	flex: 1;
    align-items: center;
    justify-content: space-around;
}

.resultContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    flex-direction: column;
}

.audio-container {
	display: flex;
	flex: 1;
	height: 54px;
	margin-right: 16px;
	align-items: center;
}

.btns {
    margin-top: 10px;
    display: flex;
    width: 80%;
    justify-content: space-around;
}

.btn {
	flex: 0.25;
}
</style>
