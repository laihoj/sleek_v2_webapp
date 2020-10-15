import recordings from '../../data/recordings'

const state = {
	recordings: []
};

const mutations = {
	'SET_RECORDINGS' (state, recordings) {
		//firebase does not store empty arrays, so check for case with empty arrays
		if (recordings !== null && recordings !== undefined && recordings.length > 0) {
			recordings.forEach(element => {
				if (element !== null) {
					if (element.annotations === undefined) {
						element.annotations = []
					}
					if (element.samples === undefined) {
						element.samples = []
					}
				}

			})

			state.recordings = recordings;
		} else {
			alert("Load failed, try a different name")
		}
	},
	'ADD_SAMPLE' (state, {recordingId, sample}) {
        const recording = state.recordings.find(element => element.id == recordingId);

        if(recording.samples.length == 0) {
			sample.index = 0
        	recording.samples.unshift(sample);
        } else {
        	sample.index = recording.samples[0].index + 1
        	recording.samples.unshift(sample);
        }


        // sample.index = recording.samples[0].index + 1
        // recording.samples.unshift(sample);
	},
	'ADD_ANNOTATION' (state, {recordingId, annotation}) {

        const recording = state.recordings.find(element => element.id == recordingId);
        if(recording.annotations.length == 0) {
			annotation.id = 0
        	recording.annotations.unshift(annotation);
        } else {
        	annotation.id = recording.annotations[0].id + 1
        	recording.annotations.unshift(annotation);
        }
        
	},
	'NEW_RECORDING' (state) {
		let id;
		if(state.recordings.length > 0) {
			id = state.recordings[0].id + 1;
		} else {
			id = 0
		}
		const newRecording = {
			id: id,
			// id: state.recordings[0].id + 1,
			samples: [],
			annotations: [],
			metadata: {
				description: "",
				date: new Date()
			},
		};
		state.recordings.unshift(newRecording);
	},
	'UPDATE_DESCRIPTION' (state, {recordingId, description}) {
		const recording = state.recordings.find(element => element.id == recordingId);
		recording.metadata.description = description;
	},
	'DELETE_RECORDING' (state, recordingId) {
		// console.log("recording id to delete " + recordingId)
		let toDeleteId = state.recordings.findIndex((element)=>{
			return element.id == recordingId
		})
		// console.log("index of recording to delete is " + toDeleteId)
		state.recordings.splice(toDeleteId, 1);

		// delete state.recordings[toDeleteId]
	},
};

const actions = {
	initRecordings: ({commit}, recordings) => {
		commit('SET_RECORDINGS', recordings);
	},
	deleteRecording: ({commit}, recordingId) => {
		commit('DELETE_RECORDING', recordingId);
	},
	addSample: ({commit}, order) => {
		commit('ADD_SAMPLE', order);
	},
	addAnnotation: ({commit}, order) => {
		commit('ADD_ANNOTATION', order);
	},
	startNewRecording: ({commit}) => {
		commit('NEW_RECORDING')
	},
	updateDescription: ({commit}, order) => {
		commit('UPDATE_DESCRIPTION', order);
	}
};

const getters = {
	recordings: state => {
		return state.recordings;
	}
};

export default {
    state,
    mutations,
    actions,
    getters
};