<template>
    <div>
        <p>Please select a Device</p>
        <hr>
        <ul class="list-group">
        	<router-link v-for="device in devices" tag="li" :to="{name: 'deviceDetail', params: {id: device.id}}" class="list-group-item" style="cursor: pointer">{{device.name}}</router-link>
        </ul>
    </div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		computed: {
			...mapGetters({
				devices: 'devices'
			})
		}
	}
</script>