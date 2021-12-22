<template>
	<div id="signUpForm" class="card mt-4">
		<form>
			<div class="card-header bg-primary text-light">Sign Up</div>
			<div class="card-body">
				<div class="row">
					<div class="col">
						<div class="mb-3">
							<label for="username" class="form-label">Full Name: </label>
							<input
								type="text"
								class="form-control"
								id="username"
								v-model="userData.username"
							/>
						</div>

						<div class="mb-3">
							<label for="id" class="form-label">Provided Id: </label>
							<input
								type="number"
								class="form-control"
								id="id"
								v-model="userData.id"
							/>
						</div>

						<div class="mb-3">
							<label for="universityId" class="form-label"
								>University Id:
							</label>
							<input
								type="number"
								class="form-control"
								id="universityId"
								v-model="userData.universityId"
							/>
						</div>

						<div class="mb-3">
							<input type="checkbox" v-model="isStartFrom" class="mb-3" />
							Start From a particular level
							<br />
							<template v-if="isStartFrom">
								<label for="startFrom" class="form-label">Start from: </label>
								<input
									type="number"
									class="form-control"
									id="startFrom"
									v-model="userData.startFrom"
								/>
							</template>
							<button class="btn btn-primary w-50 mt-4" @click.prevent="signIn">SignIn</button>
						</div>
					</div>
					<div class="col mic">
						<img src="../assets/mic.png" alt="mic" class="micImg" />
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
    name: 'signUpForm',
	data() {
		return {
			isStartFrom: false,
			userData: {
				username: "",
				id: 0,
				universityId: 0,
				startFrom: 0,
			},
		};
	},

    methods: {
        signIn() {
            localStorage.setItem('semnanUserId', this.userData.id);
            localStorage.setItem('semnanUsername', this.userData.username);
            localStorage.setItem('semnanUserlevel', this.userData.startFrom);
            localStorage.setItem('semnanUniversityId', this.userData.universityId);
			this.$store.dispatch('setUserId', this.userData.id);
			this.$store.dispatch('setUserLevel', this.userData.startFrom);
			this.$store.dispatch('setUsername', this.userData.username);
			this.$store.dispatch('setUniversityId', this.userData.universityId);
        }
    },
};
</script>

<style scoped>
.micImg {
	height: 350px;
	position: absolute;
	top: 10%;
	left: 50%;

	transform: translateX(-50%);
}

.mic {
	position: relative;
	justify-content: center;
}

.card {
	height: 57vh;
}
</style>

