import devices from '../../data/devices'

const state = {
	devices: []
}


const mutations = {
	'SET_DEVICES' (state, devices) {
		state.devices = devices;
	}
};

const actions = {
	initDevices: ({commit}) => {
		commit('SET_DEVICES', devices)
	}
};

const getters = {
	devices: state => {
		return state.devices;
	}
};


export default {
	state, 
	mutations, 
	actions, 
	getters
}