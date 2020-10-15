<template>
	<div>
		<div class="container" >
			<h3>Chart</h3>
			<!-- <app-realtime-chart :id="id"></app-realtime-chart> -->
			<!-- TODO Consider what to do when series data contains all devices-->
			<div v-if="!actively_recording">
				<label for="deviceSelect">Select a device</label>
				<input name="deviceSelect" type="text" class="form-control" v-model.lazy="selectedDevice">
				<br>
				<app-realtime-chart :id="id" :series="series" :key="selectedDevice"></app-realtime-chart>
			</div>
			<div v-else>
				<p>Buggy, disabled</p>
			</div>
			
		</div>
		<hr>
		<div class="container">
			<h3>Connection</h3>
			<span v-if="allowedToStartRecording">
				connected
				<br>
				<!-- most recent message: {{JSON.parse(bufferMessage.data).sample}} | {{JSON.parse(bufferMessage.data).device}} -->
			</span>
		</div>
		<hr>
	

	<div class="container">
	<div class="row">

		<div v-if="actively_recording">
			<p>
				<button class="btn btn-danger" @click="toggleActivelyRecording">Stop recording</button>
			</p>
		</div>
		<div v-else>
			<p>
				<button class="btn btn-warning" @click="toggleActivelyRecording" :disabled="!allowedToStartRecording">Start recording</button>
				<button class="btn btn-danger" @click="deleteRecording">Delete recording</button>
				<button class="btn btn-secondary" @click="exportRecording">Export recording</button>
			</p>
		</div>
	</div>
		<br>
		<div class="row">
			<div class="col-6">
				<b-card no-body :header="taglineAnnotation">
					<b-card-body>
						<h6>Description</h6>
						<!-- <input type="text" name="description" class="form-control" placeholder="description" :value="description" @change="descriptionUpdate"> -->
						<input type="text" name="description" class="form-control" placeholder="description" v-model="recording.metadata.description">
						<!-- <p>{{recording.metadata.description}}</p> -->

					</b-card-body>
					<b-list-group flush>
						<b-table striped bordered small hover :fields="annotationFields" :items="recording.annotations"></b-table>
						<div class="form-inline">
							<input type="number" name="index" class="form-control" placeholder="X" v-model="newAnnotationIndex">
							<input type="text" name="label" class="form-control" placeholder="label" v-model="newAnnotationLabel">
							<button @click="addAnnotation" class="btn btn-primary">Annotate</button>
						</div>
					</b-list-group>


				</b-card>
			</b-card-group>
		</div>


		<div class="col-6">
			<b-pagination
		      v-model="sampleTablePage"
		      :total-rows="recording.samples.length"
		      :per-page="samplesPerPage"
		      aria-controls="samplesTable"
		    ></b-pagination>
			<b-card no-body :header="taglineSamples">


				<b-list-group flush>
					<b-table 
						id="samplesTable"
						striped 
						bordered 
						small 
						hover 
						:fields="fields" 
						:items="recording.samples"
						:per-page="samplesPerPage"
						:current-page="sampleTablePage"
						>
							
					</b-table>
				</b-list-group>


			</b-card>
		</b-card-group>
	</div>


</div>

</div>
</div>
</template>

<script>
	import RealtimeChart from "./RealtimeChart.vue"
	export default {
		// props: ['recording'],
		data() {
			return {
				sampleTablePage: 1,
				samplesPerPage: 25,
				// actively_recording: false,
		        fields: [
		        	{ key: 'index', label: 'X' },
		        	{ key: 'data.ax', label: 'ax' },
		        	{ key: 'data.ay', label: 'ay'},
		        	{ key: 'data.az', label: 'az'},
		        	{ key: 'data.gx', label: 'gx'},
		        	{ key: 'data.gy', label: 'gy'},
		        	{ key: 'data.gz', label: 'gz'},
		        	{ key: 'device', label: 'Device'}
	        	],
	        	annotationFields: [
		        	{ key: 'id', label: 'Id' },
		        	{ key: 'x', label: 'X' },
		        	{ key: 'label.text', label: 'Label'},
	        	],

				id: this.$route.params.id,
				newAnnotationIndex: 0,
				newAnnotationLabel: "",
				bufferMessage: "NO MESSAGE READ YET",
				selectedDevice: "192.168.2.24",
				// description: "",
			}
		},
		computed: {
			taglineAnnotation() {
				return "Recording "+this.recording.id+" Annotations"
			},
			taglineSamples() {
				return "Recording "+this.recording.id+" Samples"
			},
			recording() { 
				return this.$store.getters.recordings.find(element => element.id == this.id)
			},
			description() {
				return this.recording.metadata.description;
			},
			actively_recording() {
				return this.$store.getters.recording;
			},
			allowedToStartRecording() {
				//allowed to start recording only if connected to websocket
				let connection = this.$store.getters.connection;
				return connection !== null
			},
			series() {
				let samples = this.recording.samples.filter(sample => sample.device === this.selectedDevice);

				let ax = samples.map((sample) => {
					return [sample.index, sample.data['ax']];
				})
				let ay = samples.map((sample) => {
					return [sample.index, sample.data['ay']];
				})
				let az = samples.map((sample) => {
					return [sample.index, sample.data['az']];
				})
				let gx = samples.map((sample) => {
					return [sample.index, sample.data['gx']];
				})
				let gy = samples.map((sample) => {
					return [sample.index, sample.data['gy']];
				})
				let gz = samples.map((sample) => {
					return [sample.index, sample.data['gz']];
				})
				// let ax = this.recording.samples.map((sample) => {
				// 	return [sample.index, sample.data['ax']];
				// })
				// let ay = this.recording.samples.map((sample) => {
				// 	return [sample.index, sample.data['ay']];
				// })
				// let az = this.recording.samples.map((sample) => {
				// 	return [sample.index, sample.data['az']];
				// })
				// let gx = this.recording.samples.map((sample) => {
				// 	return [sample.index, sample.data['gx']];
				// })
				// let gy = this.recording.samples.map((sample) => {
				// 	return [sample.index, sample.data['gy']];
				// })
				// let gz = this.recording.samples.map((sample) => {
				// 	return [sample.index, sample.data['gz']];
				// })
				return [
					{name: 'ax', data: ax},
					{name: 'ay', data: ay},
					{name: 'az', data: az},
					{name: 'gx', data: gx},
					{name: 'gy', data: gy},
					{name: 'gz', data: gz}
				];
			},
			// connection() {
			// 	let connection = this.$store.getters.connection;
			// 	if (connection !== null) {
			// 		connection.onmessage((message) => {
			// 			console.log(message)
			// 		})
			// 	}
			// 	return connection;
			// // 	connection.onmessage((message) => {
			// // 		console.log(message)
			// // 	})
			// }
		},
		components: {
			appRealtimeChart: RealtimeChart
		},
		methods: {
			toggleActivelyRecording() {
				this.$store.dispatch("toggleRecording")
				// this.actively_recording = !this.actively_recording;
			},
			deleteRecording() {
				if(confirm("Are you sure you want to delete this recording?")) {
					this.$store.dispatch("deleteRecording", this.id)
					alert("Recording deleted. Remember to save!")
					this.$router.push({name: 'recordings'});
				} else {
					alert("Recording not deleted")
				}
				
				// this.actively_recording = !this.actively_recording;
			},
			addAnnotation() {
				// let i = Number(this.newAnnotationIndex);	//attempt to remove reference
				// let text = String(this.newAnnotationLabel);

				const order = {
					recordingId: this.id,
					annotation: {
							x: this.newAnnotationIndex,
							label: {
								text: this.newAnnotationLabel,
							}
					}
				}
				this.$store.dispatch('addAnnotation', order);
				this.newAnnotationIndex = -1;
				this.newAnnotationLabel = "";
			},
			descriptionUpdate(event) {
				// alert(event.target.value)
				const order = {
					recordingId: this.id,
					description: event.target.value,
				}
				// console.log(event.target.value)
				this.$store.dispatch('updateDescription', order);
			},
			addSample(sample) {
				const order = {
					recordingId: this.id,
					sample
				}
				// console.log(sample.sample)
				this.$store.dispatch('addSample', order)

			},
			exportRecording() {
				console.log(this.recording.id)
				console.log(this.recording.metadata)
				console.log(this.recording.annotations)
				console.log(this.recording.samples)
				alert("exported")
			}
		},
		created() {
			if ( ! this.$store.getters.recordings.some((element) => {return element.id == this.$route.params.id}) ) {
				this.$router.push({name: 'recordings'});
			} else {
			let vm = this;
			setInterval(() => {

				if(vm.actively_recording) {
					let msgbuffer = vm.$store.getters.messageBuffer
					if(msgbuffer.length > 0) {
						let msg = msgbuffer[msgbuffer.length-1]
						vm.$store.dispatch("shiftMessageBuffer")
						// vm.$store.getters.messageBuffer
						if (msg !== undefined) {
						
							let data = JSON.parse(msg.data)
							let sample = {
								data: data.sample,
								device: data.device
							}
							vm.addSample(sample)
						}
						vm.bufferMessage = msg
						// console.log(msg)
					} else {
						// console.log("got undefined")
					}
				}
			}, 2)
		}
		},
		// beforeMount() {
		// 	if ( ! this.$store.getters.recordings.some((element) => {return element.id == this.$route.params.id}) ) {
		// 		this.$router.push({name: 'recordings'});
		// 	}
			
			
		// },
		beforeRouteLeave(to, from, next) {
			if(this.actively_recording) {
				if (confirm('Can\'t leave, recording. Stop recording?')) {
					this.$store.dispatch("stopRecording")
					next();
				} else {
					next(false);
				}
			} else {
				next();
			}
		}
	}

</script>
