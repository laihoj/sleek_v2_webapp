import * as types from '../types';

const state = {
	username: 'legolas',
	firstname: 'bob',
	lastname: 'sinclair',
	email: 'bob.sinclair@yahoo.com'
};

const getters = {
	[types.EMAIL]: state => {
		return state.email;
	},
	[types.FIRST_NAME]: state => {
		return state.firstname;
	},
	[types.LAST_NAME]: state => {
		return state.lastname;
	},
	[types.FULL_NAME]: state => {
		return state.firstname + ' ' + state.lastname;
	},
	[types.USER_NAME]: state => {
		return state.username;
	},
};

const mutations = {
	
	[types.SET_USER_NAME]: (state, payload) => {
		state.username = payload;
	},

	[types.SET_FIRST_NAME]: (state, payload) => {
		state.firstname = payload;
	},

	[types.SET_LAST_NAME]: (state, payload) => {
		state.lastname = payload;
	},

	[types.SET_EMAIL]: (state, payload) => {
		state.email = payload;
	},
};

const actions = {
	[types.SET_USER_NAME]: ({ commit }, payload) => {
		commit(types.SET_USER_NAME, payload);
	},

	[types.SET_FIRST_NAME]: ({ commit }, payload) => {
		commit(types.SET_FIRST_NAME, payload);
	},

	[types.SET_LAST_NAME]: ({ commit }, payload) => {
		commit(types.SET_LAST_NAME, payload);
	},

	[types.SET_EMAIL]: ({ commit }, payload) => {
		commit(types.SET_EMAIL, payload);
	},
};

export default {
	state,
	getters,
	mutations,
	actions
}