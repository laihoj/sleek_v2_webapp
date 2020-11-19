<template>
	<div class="container">
	

<h2>Research Ideas / angles</h2>

<ul>
	<li>Edge computing with real-time time series data stream</li>
	<li>Detectible gesture granularity - Gesticulation vs sign language vs keyboard keys </li>
	<li>Application level research - form factors, use cases</li>
	<li>Business research</li>
</ul>



<h3>The basic gist</h3>
<p>
	
<br>
	Given a stream of time-series data consisting of raw accelerometer and gyroscope readings at some sampling rate from multiple devices in motion, can we perform real-time classification all activities measured by said devices?
</p>

<br>
<h3>Hypothesis</h3>
<br>

<ol>
	<li>An IoT infrastructure is suitable for achieving technical functionality</li>
	<li>Temporal convolutional networks are suitable for classifying inertial measurement time series data</li>
</ol>
	
<br>
<br>
	<p>The different gestures have different performance needs. Device interaction such as navigation between applications or windows must be near-instant and feel snappy. Sign language interpretation can perhaps afford to be some milliseconds slower if it benefits recognition accuracy. Detecting inactivity for power management purposes must does not need to be fast at all, so long as the device doesn't spontaneously trigger falling asleep. </p>
	<p>Because of how the device is worn, there may be device position variance between uses - the 'rings' may go on different fingers, the devices may be worn at slightly different angles and at different finger depths. This must not affect performance, and models should strive to be wearing-configuration agnostic. Either the models are tolerant to such transformations, or that there is a separate "synchronisation" (for lack of a better work) the user can easily perform to inform the device of faulty calibration </p>

	</div>
	



</template>