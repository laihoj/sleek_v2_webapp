<template>
	<div>
		
    <h1>The Device Page</h1>

    <img src="../../assets/device_sleek2.jpg" class="img-responsive img-thumbnail"  style="max-width: 50%;">	
    <br>
    <!-- <b-img src="../../assets/device_sleek2.jpg" fluid thumbnail alt="Recorder Dashboard Sketch"></b-img> -->



    TOOD: enable config in runtime: 
    <ul>
    	<li>change sampling rate in real time</li>
    	<li>power saving mode?</li>
    	<li>Device name?</li>
    	<li>Wifi creds?</li>
    	<li>UDP target?</li>
    </ul>

    Need to update state management, add new state. How to trigger config state? Config state need to be reachable from every state?
    want to be able to config in access point mode: Benefit, can update all settings at once
    want to be able to config in normal operation mode: Benefit, can send update request from web app
    - OK, very handy would be to use AWS IoT shadows or Arduino cloud, but AWS IoT would take long to figure. Arduino cloud has a limited number of devices for free. Make own system device manager, or switch to paid arduino cloud?
    
	TODO: combine AP first time wifi credential, flash storage, and wifi connection on reboot

    <p>
    	First time setup routine: Upload Arduino program using programmer (Arduino IDE)
    </p>
    <p>
    	Provide wifi credentials by connecting to personal access point, enter in input form. Press reboot button
    </p>
    <p>
    	wifi credentials get stored in flash (eeprom not present) [StoreNameAndSurname]
    </p>
    <p>
    	upon reboot connect to internet automatically
    </p>
    <p>
    	go thru new device registration procedure
    	<ul>
    		<li>give name, record ID, store IP addresses, etc</li>
    	</ul>
    </p>
    <p>
    	connect device to application???
    </p>
		<hr>

		<p>
			Device firmware implementation as a finite state machine using FreeRTOS would be nice:
			<ol>
				<li>Implement state transitions first</li>
				<li>Implement tasks last</li>
			</ol>
			Setup: create and delete tasks as they complete? control flow with semaphores? Keep program flow under control using states and execution stuck in while loop until state appropriate?
			<br>
			need to protect resources like serial. Wifi need mutex also?
		</p>
		<p>Tasks</p>
		<ul>
			<li>wifi connect: self-destructive task</li>
		</ul>

		<hr>

		<p>Getting WiFi credentials and connecting is performed followingly. After checking the wifi module HW is operational, look for wifi credentials. (first activation, those wont be there). If no wifi credentials present, try to get them. this is done by opening an access point on a new local network. Connect to that network on some other device, and navigate to http://192.168.4.1/ on that device, and enter wifi credentials. (try to fill it in correctly, fixing is slow). Once wifi credentials are stored in FLASH memory, device tries connecting to wifi.</p>
		<br>
		<h3>WiFi Operation Flow</h3>
		<img src="../../assets/wifi_connection_semaphores.jpg" class="img-responsive">	
		<br>
		<hr>
		<h3>UDP Operation Flow</h3>

		<img src="../../assets/udp_connection_semaphores.jpg" class="img-responsive">	
		<p>however, udp flow in current form will fail if base device changes ip without sensor changing network (sensor incorrectly believes udp target is still valid)</p>
		<br>
		<hr>
		<h3>Normal Operation Flow</h3>
		<img src="../../assets/normal_operation_flow_semaphores.jpg" class="img-responsive">	
		<hr>
		<!-- <p>Loaded ID: {{id}}</p> -->
		<!-- <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
		<hr> -->
		<router-view></router-view>
	</div>

</template>

<style>
	body {
		padding: 30px;
	}
</style>

<script>
	export default {
		// data() {
		// 	return {
		// 		id: this.$route.params.id
		// 	}
		// },
		// watch: {
		// 	'$route'(to, from) {
		// 		this.id = to.params.id;
		// 	}
		// },
		methods: {
			navigateToHome(){
				this.$router.push({name: 'home'});
			}
		}
	}
</script>

