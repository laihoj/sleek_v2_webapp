<template>
	<div class="container">
			<!-- subscriptions list -->
		<h2>Subscriptions</h2>
		<ul class="list-group" v-show="display_sub_list">
			<app-mqtt-topic v-for="sub in subscriptions" :topic="sub.topic" :message="sub.message"></app-mqtt-topic>
		</ul>

		<!-- subscribe -->
		<h2>Subscribe
			<button class="btn btn-info" @click="display_subscribe = !display_subscribe"> <span v-if="display_subscribe">-</span> <span v-else>+</span></button> 
		</h2>
		<div v-show="display_subscribe">
			<hr>
			
			
		

			<!-- add new subscription button -->
			<div class="form-inline">
				<div class="form-group mx-sm-3 mb-2">
					<label for="subscribeTopic">Subscribe</label>
					<input type="text" class="form-control" id="subscribeTopic" placeholder="topic" v-model="subtopictemp">
				</div>
				<button class="btn btn-primary mb-2" @click="subscribe">Subscribe</button>
			</div>
		</div>


		<!-- instance name -->
		<h2>Name
			<button class="btn btn-info" @click="display_name = !display_name"> <span v-if="display_name">-</span> <span v-else>+</span></button> 
		</h2>
		<div v-show="display_name">
			<div class="form-group">
			
			<input type="text" class="form-control" v-model="name" value="test-app" placeholder="test-app" name="console_name">
			</div>
			<br>
		</div>

		<!-- publish -->
		<h2>Publish 
				<button class="btn btn-info" @click="display_publish = !display_publish"> <span v-if="display_publish">-</span> <span v-else>+</span></button> 
			</h2>
			<div v-show="display_publish">
			<div class="form-group">
				<label for="topic">Topic</label>
				<input type="text" class="form-control" id="topic" placeholder="/helloworld" v-model="topic">
			</div>
			<div class="form-group">
				<label for="message">Message</label>
				<textarea class="form-control" id="message" rows="3" v-model="message"></textarea>
			</div>
			<button class="btn-primary btn" @click="publish">Publish</button>
			<br><br>
		</div>

		<!-- publish -->
		<h2>Debug 
		<button class="btn btn-info" @click="display_debug = !display_debug"> <span v-if="display_debug">-</span> <span v-else>+</span></button> 
		</h2>
		<div v-show="display_debug">
			<br><br>
			<p>Recent events: {{ recent_event }}</p>
		</div>


		

		<!-- selected output - radio control (append or clear) -->
		<!-- TODO -->
	</div>
</template>

<script>
// import {mqtt} from 'mqtt'
// import VueMqtt from 'vue-mqtt';
import MQTTTopic from './MQTTTopic.vue'
export default {
	data() {
		return {
			topic: '',
			message: '',
			subtopictemp: '',
			subscriptions: [],
			recent_event: {},
			connection: null,
			name: "test-app",
			display_name: false,
			display_publish:false,
			display_subscribe:true,
			display_sub_list:true,
			display_debug: false,
		}
	},
	methods: {
		publish() {
		    console.log(this.connection);
		    this.connection.send(JSON.stringify({
				method: 'publish', 
				topic: this.topic, 
				message: this.message, 
				name: this.name}));

		},
		subscribe() {			
			//subscribe can only work if topic len > 0
			if (this.subtopictemp.length <= 0 ) { 
				console.log("entered topic too short")
			//subscribe only if not already subbed
			} else if (! this.subscriptions.some((sub) => {
				return sub.topic === this.subtopictemp
				})) 
			{
				this.subscriptions.push({topic: this.subtopictemp, message: ''})
				this.connection.send(JSON.stringify({
					method: 'subscribe', 
					topic: this.subtopictemp, 
					name: this.name}));
				this.subtopictemp = ''
			}
			
		},
	},
	created() {
		let vm = this;
		// let subscriptions = this.subscriptions
		this.connection = new WebSocket('ws://localhost:9090', "echo-protocol")
		this.connection.onopen = function(event) {
	      console.log(event)
	      console.log("Successfully connected to the echo websocket server...")
	      // this.connection.send(JSON.stringify({method: 'identify', name: this.name}));
	    }
	    this.connection.onmessage = function(event) {
	    	// console.log(event.data)
	    	vm.recent_event = JSON.parse(event.data)
	    	const data = JSON.parse(event.data)
	    	// console.log("vm.subs: " + JSON.stringify(vm.subscriptions))
	    	for (const [i, subscription] of vm.subscriptions.entries()) {
	    		if (subscription.topic === data.topic) {
	    			subscription.message = data.message
	    		}
	    	}
	    }
	},
	watch: {
		subscriptions: () => {
			console.log("subs changed")
		}
	},
	components: {
		'app-mqtt-topic': MQTTTopic
	}

}
	</script>