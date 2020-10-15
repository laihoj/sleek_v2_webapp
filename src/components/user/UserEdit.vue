<template>
	<div class="container">
		<div class="row">
			<label for="username" class="">Username</label>
			<input type="text" class="" name="username" :value="userName" @change="updateUserName">	
		</div>

		<div class="row">
			<label for="firstname" class="">First Name</label>
			<input type="text" class="" name="firstname" :value="firstName" @change="updateFirstName">
		</div>

		<div class="row">
			<label for="lastname" class="">Last Name</label>
			<input type="text" class="" name="lastname" :value="lastName" @change="updateLastName">
		</div>

		<div class="row">
			<label for="email" class="">Email</label>
			<input type="text" class="" name="email" :value="email" readonly>
		</div>



</div>

</template>


<script>
	
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';
	import * as types from '../../store/types';
	
	export default {
		methods: {
			...mapActions({
				setUserName: types.SET_USER_NAME,
				setFirstName: types.SET_FIRST_NAME,
				setLastName: types.SET_LAST_NAME,
				setEmail: types.SET_EMAIL,
			}),
			updateUserName(event) {
				this.setUserName(event.target.value)
			},
			updateFirstName(event) {
				this.setFirstName(event.target.value)
			},
			updateLastName(event) {
				this.setLastName(event.target.value)
			},
		},
		computed: {
			...mapGetters({
				firstName: types.FIRST_NAME,
				lastName: types.LAST_NAME,
				fullName: types.FULL_NAME,
				userName: types.USER_NAME,
				email: types.EMAIL,
			}),
			
			
		}
	}
</script>

