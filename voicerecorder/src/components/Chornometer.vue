<template>
	<div id="clock">
		<div class="chornometer">
			<span class="timerText"
				><strong>{{ time }}</strong></span
			>
		</div>
	</div>
</template>

<script>
import { eventbus } from "../main";
export default {
	created() {
		eventbus.$on("startChrono", this.start);
		eventbus.$on("stopChrono", this.stop);
		eventbus.$on("resetChrono", this.reset);
	},
	data() {
		return {
			time: "00:00.000",
			timeBegan: null,
			timeStopped: null,
			stoppedDuration: 0,
			started: null,
			running: false,
		};
	},

	methods: {
		start() {
			if (this.running) return;

			if (this.timeBegan === null) {
				this.reset();
				this.timeBegan = new Date();
			}

			if (this.timeStopped !== null) {
				this.stoppedDuration += new Date() - this.timeStopped;
			}

			this.started = setInterval(this.clockRunning, 10);
			this.running = true;
		},

		stop() {
			this.running = false;
			this.timeStopped = new Date();
			clearInterval(this.started);
		},

		reset() {
			this.running = false;
			clearInterval(this.started);
			this.stoppedDuration = 0;
			this.timeBegan = null;
			this.timeStopped = null;
			this.time = "00:00.000";
		},

		clockRunning() {
			let currentTime = new Date(),
				timeElapsed = new Date(
					currentTime - this.timeBegan - this.stoppedDuration
				),
				min = timeElapsed.getUTCMinutes(),
				sec = timeElapsed.getUTCSeconds(),
				ms = timeElapsed.getUTCMilliseconds();

			this.time =
				this.zeroPrefix(min, 2) +
				":" +
				this.zeroPrefix(sec, 2) +
				"." +
				this.zeroPrefix(ms, 3);
		},

		zeroPrefix(num, digit) {
			let zero = "";
			for (let i = 0; i < digit; i++) {
				zero += "0";
			}
			return (zero + num).slice(-digit);
		},
	},
};
</script>

<style scoped>
.chornometer {
	border: 3px solid rgb(197, 170, 16);
	height: 200px;
	width: 200px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.timerText {
	font-size: 20px;
}
</style>
