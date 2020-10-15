<template>
	<div id="chart">
		<apexchart type="line" ref="chart" height="350" :options="chartOptions" :series="series"></apexchart>
	</div>
</template>

<script>



import VueApexCharts from 'vue-apexcharts'

export default {

	props: ['id', 'series'],
	components: {
		apexchart: VueApexCharts,
	},
	computed: {
		recording() { 
			return this.$store.getters.recordings.find(element => element.id == this.id)
		},
		// series() {
		// 	let ax = this.recording.samples.map((sample) => {
		// 		return [sample.index, sample.data['ax']];
		// 	})
		// 	let ay = this.recording.samples.map((sample) => {
		// 		return [sample.index, sample.data['ay']];
		// 	})
		// 	let az = this.recording.samples.map((sample) => {
		// 		return [sample.index, sample.data['az']];
		// 	})
		// 	let gx = this.recording.samples.map((sample) => {
		// 		return [sample.index, sample.data['gx']];
		// 	})
		// 	let gy = this.recording.samples.map((sample) => {
		// 		return [sample.index, sample.data['gy']];
		// 	})
		// 	let gz = this.recording.samples.map((sample) => {
		// 		return [sample.index, sample.data['gz']];
		// 	})
		// 	return [s
		// 	{name: 'ax', data: ax},
		// 	{name: 'ay', data: ay},
		// 	{name: 'az', data: az},
		// 	{name: 'gx', data: gx},
		// 	{name: 'gy', data: gy},
		// 	{name: 'gz', data: gz}
		// 	];
		// },
		
		
		chartOptions() {
			return {
				annotations: {xaxis: this.recording.annotations},
				chart: {
					height: 350,
					type: 'line',
					id: 'areachart-2',
					animations: {
						enabled:true,
						easing: 'linear',
						dynamicAnimation: {
							speed: 1000
						}
					}
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth'
				},
				grid: {
					padding: {
						right: 30,
						left: 20
					}
				},
				title: {
					text: 'Line with Annotations',
					align: 'left'
				},
				
				xaxis: {
					type: 'numeric',
				},


				yaxis: [
				{
					seriesName: 'ax',
					opposite: true,
				},
				{seriesName: 'ay',show: false},
				{seriesName: 'az',show: false},
				{seriesName: 'gx',show: false},
				{seriesName: 'gy',show: false},
				{
					seriesName: 'gyroscope',
					// opposite: true,
					axisTicks: {
						show: true,
					},
					axisBorder: {
						show: true,
						color: '#FEB019'
					},
					labels: {
						style: {
							colors: '#FEB019',
						},
					},
					title: {
						text: "Gyroscope",
						style: {
							color: '#FEB019',
						}
					}
				},
				],

			}
		}
	},

	data() {
		return {
		}
	}
}
</script>