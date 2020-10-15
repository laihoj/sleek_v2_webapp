<template>
    <div class="container">
        <h1>Home Page</h1>
        <hr>
        
        	<h2>A platform for projects using MCUs to track body part movement.</h2> 
        	<p style="text-align: left">
<br>
<hr>
<p>TODO: fierbase for context server: follow <a href="https://firebase.google.com/docs/admin/setup">firebase admin setup</a> and <a href="https://github.com/firebase/quickstart-nodejs/blob/master/database/README.md">firebase tutorial</a></p>
<hr>
<div class="row">
	<h3>Overall Architecture</h3>
	<img style="float:right;"  src="../assets/overall_architecture.jpg" class="img-responsive">	
</div>
<hr>
<div class="row">
	<p>Data stream to be handled using <a href="https://searchnetworking.techtarget.com/definition/UDP-User-Datagram-Protocol#:~:text=UDP%20(User%20Datagram%20Protocol)%20is,provided%20by%20the%20receiving%20party.">UDP</a> (User Datagram Protocol) which is a low-latency and loss-tolerating connections between applications on the internet. Its alternative TCP (Transmission Control Protocol) is perhaps inappropriate to a real-time datastream</p>
</div>

<hr>

<div class="row">
	<p>Would be nice for sensor stream devices to be able to be low power -> perhaps instead of putting wifi on the fingertips, use some protocol [P] (lorawan?) talking with a 'base station' with a wifi/BT/lorawan/other comms. The base station then perhaps performs edge computation and connects directly to IoT applicances, or streams data to a 'central intelligence'</p>

	<img src="../assets/IoT_diagram.jpg" class="img-responsive">	

<br>
	<p>For example, see below image</p>
	<br>
	<img src="../assets/IoT_diagram_example.jpg" class="img-responsive">	
	<br>
	<p>
		<ul>
			Base server could be anything
			<li>Arduino</li>
			<li>Raspi</li>
			<li>Android</li>
			<li>Linux</li>
			<li>Nodejs</li>
			AI server could be anything
			<li>Desktop Nodejs</li>
			<li>AWS cloud</li>
		</ul>
	</p>
	<p>
		For now the network looks like this
	<img src="../assets/network_diagram.jpg" class="img-responsive">	
	</p>
		
	
	<p>
		Would be nice if AI lives in buffer is in a browser (vue?). Then what can be done is that button press records current buffer state, buffer length variable can be adjusted with a slider?
	</p>
	<p>
		Vue isn't a server and doesn't have ports, so UDP in vue doesn't make sense. 
	</p>
	<p>
		Base server receives direct data streams from all related devices and provides a data API. Internally, a FIFO buffer of length x is maintained for each device. A data request might be such: "give me data from each sensor in the past 2 seconds" -> node forms a nicely packaged data and responds to the request with it.
		<ul>
			<p>Possible requests</p>
			<li>Continuous data stream (pass-thru)</li>
			<li>time-limited streams</li>
		</ul>
	</p>
</div>

<hr>

<div class="row">
<br>
<br>
<p>Device configuration can be handled in the following ways:</p>
<ul>
 <li>Send restful requests to specific MQTT topics. Send correctly formatted messages and parse messages for correct format, wrapped to make these API calls. Store values in EEPROM?</li>	
 <li>Run small web server on device exposing local variables. </li>	
</ul>

<br>
<br>
</div>

<hr>


<div class="row">
<p>Improvement idea with less custom elements: Arduino IoT Cloud for maintaining device connections, and changing </p>
</div>
						
<div class="row">
	


Set up a MQTT service running locally.
<br>
Pro tip, assign static ip to your machine: https://www.macinstruct.com/node/550. 
<br>
Also, to connect to the internet while having a static IP. reserve the ip address on the main router: 
<br>
https://kb.netgear.com/25722/How-do-I-reserve-an-IP-address-on-my-NETGEAR-router
<br>
Setting up static IP is not easy at home network bc router set up as access point
<br>
<br>
This dynamic IP address is used by my machine:
<br>
192.168.2.24
<br>
Give it to arduinos
<br>
<br>
Question: how much computation to offload to edge devices?
<br>
- Answering depends on computational efficiency and is a research engineer question
<br>
<br>
Question: where to run service?
- Answering depends on traffic amounts
- Have multiple nodes that can be run locally and in the cloud, user can decide which to use. Cloud for easier setup, local for free service
<br>
<br>


Look into UDP protocol for sensor data stream in place of the regular TCP
<br>
<br>
Arduinos communicate in MQTT over WiFi
<ul>
	<li class="list-group-item">Generic comms needs</li>
	<li class="list-group-item">Sensor stream</li>

</ul>

</div>

<div class="row">

<hr>
App server talks over websocket with MQTT
<br>
<ul>
	<li class="list-group-item">socket per device or socket per user?</li>
	
</ul>

<div class="col-xs-12">
Diagram of "comms stack"
<img src="../assets/dashboard_diagram.jpg" class="img-responsive">	
</div>

</div>
<!-- <img > -->

<hr>
Virtual devices have REST API
<ul>
	
	<li class="list-group-item">properties: name, context</li>
	<li class="list-group-item">state: outputting on/off</li>
</ul>
<br>
<hr>
Views:
<ul>
	<li class="list-group-item">Connected devices view -> centerered interactable list</li>
	<li class="list-group-item">Device view: edit properties, look at raw data output (keep updating most recent IMU readings)</li>
	<li class="list-group-item">MQTT console (text areas topic and message, wrapped in socket method)</li>
	<li class="list-group-item">Data science platform dashboard
		<ul>
			<li class="list-group-item">multi-device data stream</li>
			<li class="list-group-item">recording, folder naming</li>
			<li class="list-group-item">data selection from recorded stream</li>
			<li class="list-group-item">labeling selections</li>
			<li class="list-group-item">file navigation interface</li>
		</ul>
	</li>
	<li class="list-group-item">Recognition API (clarify classification correctness)</li>
</ul>
<br>
</p>
<br>

    </div>
</template>

<style>
	p {
 	 text-align: left; 
	}
	li {
	text-align: left;	
	}
</style>