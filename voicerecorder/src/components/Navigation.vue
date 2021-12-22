<template>
	<div id="Navigation">
		<nav class="navbar-expand-lg navbar navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img
						src="../assets/LOGO copy.png"
						alt=""
						width="40"
						height="40"
					/>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item" v-if="userId">
							<a class="nav-link" @click="logout" style="cursor: pointer">Logout</a>
						</li>
					</ul>

				</div>
			</div>
		</nav>
	</div>
</template>

<script>

import {mapState} from 'vuex'

export default {

    computed: {
        ...mapState(['userId', 'universityId'])
    },

	methods: {
		logout() {
			this.$store.dispatch('logout');
		}
	},
};
</script>

<style></style>
