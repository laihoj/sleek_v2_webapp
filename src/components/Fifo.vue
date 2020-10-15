<template>
	<div class="container">
		<label for="fifosize">Set buffer size, currently: {{limit}} samples</label>
		<input type="range" name="fifosize" min="1" max="10" v-model="limit" @change="updateSize">
		<br>
		<button @click="append">TEST: push to buffer</button>
		<br>
		<br>
		<p>Buffer content length: {{fifoLength}}</p>


	</div>
</template>

<script>

	import MyFIFO from '../store/fifo'
	export default {
		data() {
			return {
				fifo: new MyFIFO(6),
				limit: 6
			}
		},
		methods: {
			append() {
				this.fifo.newMsg("hha")
			},
			updateSize() {
				this.fifo.setSize(this.limit)

			}
		},
		computed: {
			fifoLength() {
				return this.fifo.fifo.length
			}
		}
	}
</script>