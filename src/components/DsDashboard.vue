<template>
	<div class="container">
		<label for="input">Enter new number</label>
		<input type="number" name="input" v-model="input">
		<button @click="newData">Enter</button>
		<p>{{input}}</p>

		<ul>
			<li v-for="d in data">{{d}}</li>
		</ul>
		<app-chart :chartData="data"></app-chart>
	</div>
</template>

<script>
// import Vue from 'vue'	
import Linechart  from './Linechart.vue'

export default {
	components: {
		appChart: Linechart
	},
	data() {
		return {
			data: [40, 39, 10, 40, 39, 60, 40],
			// options: {},
			input: 0
		}
	},
	methods: {
		newData() {
			this.data.push(this.input);
			this.input = 0;
		}
	}
	// extends: Line,
	// mounted () {
	// 	this.renderChart({
	// 		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	// 		datasets: [
	// 		{
	// 			label: 'Data One',
	// 			backgroundColor: '#f87979',
	// 			data: [40, 39, 10, 40, 39, 80, 40]
	// 		}
	// 		]
	// 	}, {responsive: true, maintainAspectRatio: false})
	// }

}


// // import Vue from 'vue'	
// import { Line } from 'vue-chartjs'

// export default {
// 	extends: Line,
// 	mounted () {
// 		this.renderChart({
// 			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// 			datasets: [
// 			{
// 				label: 'Data One',
// 				backgroundColor: '#f87979',
// 				data: [40, 39, 10, 40, 39, 80, 40]
// 			}
// 			]
// 		}, {responsive: true, maintainAspectRatio: false})
// 	}

// }

// import Vue from 'vue'
// Vue.component('line-chart', {
//   extends: VueChartJs.Line,
//   mounted () {
//     this.renderChart({
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       datasets: [
//         {
//           label: 'Data One',
//           backgroundColor: '#f87979',
//           data: [40, 39, 10, 40, 39, 80, 40]
//         }
//       ]
//     }, {responsive: true, maintainAspectRatio: false})
//   }
// })

// export default {
// 	components: {
// 	'app-line-chart': 'line-chart'
// 	}

// }
// import { Line } from 'vue-chartjs'

// 	export default {
// 		extends: Line,
//   		mounted () {
//     	this.renderChart({
//       	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       	datasets: [
// 		        {
// 		          label: 'Data One',
// 		          backgroundColor: '#f87979',
// 		          data: [40, 39, 10, 40, 39, 80, 40]
// 		        }
// 		      ]
// 		    }, {responsive: true, maintainAspectRatio: false})
// 		  }
// 	}
</script>