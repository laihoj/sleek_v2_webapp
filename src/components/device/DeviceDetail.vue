<template>
	<div>
		
		<h3>Some Device Details</h3>
		<p>Device ID: {{ $route.params.id }}</p>
		<router-link 
			tag="button" 
			:to="link"
			class="btn btn-primary"
		>Edit</router-link>
	</div>
    
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				link: { 
					name: 'deviceEdit', 
					params: { 
						id: this.$route.params.id }, 
					query: { 
						locale: 'en', 
						q: 100  },
					hash: '#data'
				}
			}
		},
		beforeRouteEnter(to, from, next) {
			//component not created before next, so cant access vue instance object
			if (true) {
				next();
			} else {
				next(false)
			}
			
		}
	}
</script>