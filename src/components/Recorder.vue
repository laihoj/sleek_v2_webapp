<template>
	<div class="container">
		<!-- <p>hello {{recordings.length}}</p> -->
		<p>Recorder is a tool for creating, editing, and otherwise manage gesture data recordings in real-time and afterwards. Make annotations and select data using this tool.
			<br>
		Use:
		<ol>
			<li>Give yourself a username (Header top right corner)</li>
			<li>Load your recordings (Header top right corner)</li>
			<li>Select a previous recording or start new (Below 'Recordings' section)</li>
			<li>Start recording if connected to local device node</li>
			<li>Add annotations: enter the X (as in index) of a sample, and label of a sample</li>
			<li>Don't forget to save (Header top right corner) to preserve state between sessions</li>
		</ol>


		</p>
		<br>
		<button @click="toggleDebug" class="btn btn-info">Toggle Debug</button>
		<div v-if="debugging">
		<p v-if="connected">
			 connected to base node server {{node_server}}
			 <br>
			 currently recording: {{activelyRecording}}
			 <br>
			 <!-- <span v-if="typeof mostRecentUDPMessage !== 'undefined' && mostRecentUDPMessage.length > 0"> -->
		 	<span v-if="mostRecentUDPMessage.length > 0">
			 	Most recent message from devices: {{message}}
			 </span>
			 <br>
			 <!-- <span v-if="mostRecentUDPMessage.length > 0">
			 	buffer length: {{messageBuffer}}
			 </span> -->
			 
		</p>
		</div>
		<!-- <img src="../assets/recorder_dashboard_sketch.png" class="img-responsive img-thumbnail" style="max-width: 50%;">	 -->
		
		<!-- <b-img :src="img_src" fluid thumbnail alt="Recorder Dashboard Sketch"></b-img> -->
		
		<br>
		<br>
		<hr>
		<!-- <br>
		<button class="btn btn-success" @click="newRecording">New Recording</button>
		<br> -->
		<br>
		<router-view :recordings="recordings"></router-view>

		

	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		methods: {
			toggleDebug() {
				this.debugging = ! this.debugging
			}
		},
		data() {
			return {
				img_src: "../assets/recorder_dashboard_sketch.png",
				node_server: "node not found",
				mostRecentUDPMessage: "NO MESSAGE RECEIVED YET",
				debugging: false
			}
		},
		computed: {
			recordings() {
				return this.$store.getters.recordings
			},
			activelyRecording() {
				return this.$store.getters.recording
			},
			connected() {
				let connection = this.$store.getters.connection
				return connection !== null;
			},
			message() {
				return this.mostRecentUDPMessage
			},
			messageBuffer() {
				return this.$store.getters.messageBuffer
			}
		},
		created() {

			let url = "https://sleek-v2-firebase.herokuapp.com/api/node";
			
			axios.get(url)
				.then(response => { 
					let vm = this
					this.node_server = response.data 
					let ws_address = 'ws://'+response.data.ip+':9090'
					console.log(ws_address)
					let connection = new WebSocket(ws_address, "echo-protocol")
					this.$store.dispatch('connect', connection);
					connection.onopen = function(event) {
					      console.log(event)
					      console.log("Successfully connected to the echo websocket server...")
				    }
				    connection.onmessage = function(message) {
				    	vm.mostRecentUDPMessage = message.data;//{data:message.data, origin:message.origin}

				    	vm.$store.dispatch('pushMessage', message);
				    	// console.log(message.data);
				    }
				    connection.close = function() {
				    	this.$store.dispatch('disconnect');
				    	console.log('connection closed');

				    }
				})
				
				.catch(error => { 
					console.log(error) 
				})
				// .bind(this)

			// connection = new WebSocket('ws://localhost:9090', "echo-protocol")
		}
		


	}
</script>