<template>
	<div>
		<h1>User Page</h1>
		<router-view></router-view>
		<!-- <p>First name: {{ firstName }}</p>
		<p>Full name: {{ fullName }}</p>
		<p>Username: {{ userName }}</p>
		<input type="text" name="username" :value="userName" @change="updateUserName"> -->
	</div>

</template>

<script>
	
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';
	import * as types from '../../store/types';
	
	export default {
		// methods: {
		// 	...mapActions({
		// 		setUserName: types.SET_USER_NAME,
		// 		setFirstName: types.SET_FIRST_NAME,
		// 		setLastName: types.SET_LAST_NAME,
		// 		setEmail: types.SET_EMAIL,
		// 	}),
		// 	updateUserName(event) {
		// 		this.setUserName(event.target.value)
		// 	}
		// },
		// computed: {
		// 	...mapGetters({
		// 		firstName: types.FIRST_NAME,
		// 		lastName: types.LAST_NAME,
		// 		fullName: types.FULL_NAME,
		// 		userName: types.USER_NAME,
		// 		email: types.EMAIL,
		// 	}),
			
			
		// }
	}
</script>






