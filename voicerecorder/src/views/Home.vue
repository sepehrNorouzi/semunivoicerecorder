<template>
    <div id="Home">
      <template v-if="!userId">
        <app-signup-form />
      </template>
      <template v-else>
          <app-voice-recorder />
      </template>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import SignInFormVue from '../components/SignInForm.vue';
import VoiceRecorderVue from '../components/VoiceRecorder.vue';

export default {
	name: "Home",

	computed: {
		...mapState(["userId", "userLevel"]),
	},

  components: {
    appSignupForm: SignInFormVue,
    appVoiceRecorder: VoiceRecorderVue,
  }
};
</script>

