import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'
import device from './modules/device' //is this even in use?

import devices from './modules/devices'
import recordings from './modules/recordings'
import recorder from './modules/recorder'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user,
		// device,
		devices,
		recordings,
		recorder
	},
});