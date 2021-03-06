import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRecord from "@codekraft-studio/vue-record";

export const eventbus = new Vue();

Vue.use(VueRecord);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");

