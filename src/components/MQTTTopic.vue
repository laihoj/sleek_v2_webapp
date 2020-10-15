<template>
	<div>
		<router-link tag="li" to='topic/12345'  class="list-group-item" style="cursor: pointer"> <b>{{topic}}</b> | {{message}} | <button v-on:click.prevent class="btn btn-danger" @click="unsub">Unsubscribe</button> </router-link>
		
	</div>
	
</template>

<script >
	export default {
		props: ['topic', 'message'],
		methods: {
			unsub() { //put subs list in global store state
				alert("unsubbed (not quite)!")
			}
		}
	}

</script>