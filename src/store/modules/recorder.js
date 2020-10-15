// import recordings from '../../data/recordings'
import MyFIFO from '../fifo'

const state = {
	// recorder: []
	connection: null,
	recording: false,
	// messageBuffer: new MyFIFO(10)
	messageBuffer: []
};

const mutations = {
	'SET_RECORDING' (state, newState) {
		state.recording = newState;
	},
	'SET_CONNECTION' (state, newConnection) {
		state.connection = newConnection;
	},
	'PUSH_MESSAGE' (state, message) {
		state.messageBuffer.push(message);
		if(state.messageBuffer.length > 10) {
			state.messageBuffer.shift();
		}
		// state.messageBuffer.newMsg(message)
	},
	'SHIFT_MESSAGEBUFFER' (state) {
		state.messageBuffer.shift();
	},
	// 'DELETE_RECORDING' (state, recordingId) {
	// 	state.messageBuffer.shift();
	// },
};

const actions = {
	toggleRecording: ({commit}) => {
		const newstate = !state.recording;
		commit('SET_RECORDING', newstate);
	},
	// deleteRecording: ({commit}, recordingId) => {
	// 	// const newstate = !state.recording;
	// 	commit('SET_RECORDING', recordingId);
	// },
	stopRecording: ({commit}) => {
		// const newstate = !state.recording;
		commit('SET_RECORDING', false);
	},
	connect: ({commit}, newConnection) => {
		commit('SET_CONNECTION', newConnection)
	},
	disconnect: ({commit}) => {
		commit('SET_CONNECTION', null);
	},
	pushMessage: ({commit}, message) => {
		commit('PUSH_MESSAGE', message);
	},
	shiftMessage: ({commit}) => {
		commit('SHIFT_MESSAGEBUFFER');
	},
	shiftMessageBuffer: ({commit}) => {
		commit('SHIFT_MESSAGEBUFFER');
	}
};

const getters = {
	recording: state => {
		return state.recording;
	},
	connection: state => {
		return state.connection;
	},
	messageBuffer: state => {
		return state.messageBuffer;
	},
	shiftMessageBuffer: state => {
		return state.messageBuffer.shift();
		// if(state.messageBuffer.length > 0) {
		// 	const lastMessage = state.messageBuffer[state.messageBuffer.length-1]
		// 	// state.actions.shiftMessage();
		// 	state.messageBuffer.shift();
		// 	return lastMessage;
		// }
		// else return null

	}
};

export default {
    state,
    mutations,
    actions,
    getters
};