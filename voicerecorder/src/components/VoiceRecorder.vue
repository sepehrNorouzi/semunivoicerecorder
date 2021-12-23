<template>
	<div id="VoiceRecorder">
		<div class="progress mt-4">
			<div
				class="progress-bar bg-success"
				role="progressbar"
				style="width: 25%"
				aria-valuenow="25"
				aria-valuemin="0"
				aria-valuemax="100"
			>
				25%
			</div>
		</div>
		<div class="card mt-4">
			<div class="card-header">
				<ul class="nav nav-pills card-header-pills">
					<li class="nav-item">
						<a
							class="nav-link"
							@click="recordLink"
							:class="{ active: links.record }"
							>Record</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							@click="previewLink"
							:class="{ active: links.preview }"
							>Preview</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							@click="finilizeLink"
							:class="{ active: links.finilize }"
							>Finilize</a
						>
					</li>
				</ul>
			</div>
			<div class="card-body">
				<component :is="componentId"></component>
			</div>
		</div>
	</div>
</template>

<script>
import FinilizeVue from './Finilize.vue';
import PreviewVue from './Preview.vue';
import RecorderVue from './Recorder.vue';
export default {
	data() {
		return {
			links: {
				record: true,
				preview: false,
				finilize: false,
			},

			componentId: 'appRecorder' ,
		};
	},
	methods: {
		recordLink() {
			this.links.record = true;
			this.links.preview = false;
			this.links.finilize = false;
			this.componentId = "appRecorder";
		},

		previewLink() {
			this.links.record = false;
			this.links.preview = true;
			this.links.finilize = false;
			this.componentId = "appPreview";
		},

		finilizeLink() {
			this.links.record = false;
			this.links.preview = false;
			this.links.finilize = true;
			this.componentId = "appFinilize";
		},
	},

	components: {
		appRecorder: RecorderVue,
		appPreview: PreviewVue,
		appFinilize: FinilizeVue,
	}
};
</script>

<style scoped>
.nav-item:hover {
	background: rgba(66, 133, 244, 0.2);
	cursor: pointer;
}

.card-body {
	padding: 20px;
}
</style>
