//is this even in use?

import * as types from '../types';
import Fifo from "circular-buffer"

const state = {
	id: "",
	ip: "",
	recentMessage: "",
	readings: new Fifo(10)
	// username: 'legolas',
	// firstname: 'bob',
	// lastname: 'sinclair',
	// email: 'bob.sinclair@yahoo.com'
};

const getters = {}
const mutations = {}
const actions = {}


export default {
	state,
	getters,
	mutations,
	actions
}