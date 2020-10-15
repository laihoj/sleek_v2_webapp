<template>
	<div>
		
	<div class="container">


			<br>
		<button class="btn btn-success" @click="newRecording">New Recording</button>
		<br>

<h3>Recordings</h3>
		<b-list-group flush>
			<b-table striped bordered small hover selectable select-mode="single" @row-selected="selected" :items="recordings" :fields="fields"></b-table>
		</b-list-group>

		
	</div>
	</div>
</template>

<script>
	
	export default {
		props: ['recordings'],
		data() {
			return {
				fields: [
					{key: 'id', label: 'id'},
					{key: 'metadata.description', label: 'Description'},
					{key: 'metadata.date', label: 'Date'},
				]
			}
		},
		methods: {
			selected(row) {
				this.$router.push({name: 'recording', params: {id: row[0].id}});
			},
			newRecording() {
				this.$store.dispatch('startNewRecording');
				const latestIndex = this.recordings[0].id
				this.$router.push({name: 'recording', params: {id: latestIndex}});
			}
		}
		
	}
</script>