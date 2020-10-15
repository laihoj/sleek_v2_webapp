<script>
// import VueChartJS from 'vue-chartjs'
// import { Line } from 'vue-chartjs'
import { Line, mixins } from 'vue-chartjs'
// export default {

	// Load separate modules


export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  data() {
  	return {
  		options: {}
  	}
  }
}
	// extends: Line,
	// mounted () {
	// 	// let vm = this;
	// 	this.renderChart({
	// 		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	// 		datasets: [
	// 		{
	// 			label: 'Data One',
	// 			backgroundColor: '#f87979',
	// 			data: this.chartData
	// 		}
	// 		]
	// 	}, {responsive: true, maintainAspectRatio: false})
	// },
	// data() {
	// 	return {
	// 		chartData: {...},
	// 		options: {...}
	// 	}
	// },
	// mixins: [ VueChartJS.mixins.reactiveProp ],
	// props: ['chartData']
// }

</script>