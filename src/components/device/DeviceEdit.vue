<template>
	<div>
		
		<h3>Edit the Device</h3>
		<hr>
		


		<div class="row" >
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                	<div class="form-group">
                        <label for="deviceId">Device Id</label>
                        <input type="text" id="deviceId" class="form-control" :value="$route.params.id" readonly>
                    </div>
                    <div class="form-group">
                        <label for="deviceName">Device Name</label>
                        <input type="text" id="deviceName" class="form-control" v-model="deviceName">
                    </div>
                    <div class="form-group">
                        <label for="user">User</label>
                        <input type="text" id="user" class="form-control" v-model="user">
                    </div>
                    <div class="form-group">
                        <label for="context">Context</label>
                        <input type="text" id="context" class="form-control" v-model="context">
                    </div>
                    <div class="form-group">
                    	<label >Transmitting</label>
                        <label>
                            <input type="radio" value="Yes" v-model="transmitting"> Yes
                        </label>
                        <label>
                            <input type="radio" value="No" v-model="transmitting"> No
                        </label>
                        
                    </div>
                </div>
            </div>
<button class="btn-primary btn" @click="confirmed = true">Confirm</button>


	</div>
    
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				confimed: false,
				deviceName: 'left pinky',
				user: 'jaakko',
				context: 'testing',
				transmitting: 'No'
			}
		},
		beforeRouteLeave(to, from, next) {
			if (this.confirmed) {
				next();
			} else {
				if (confirm('Leave without confirming?')) {
					next();
				} else {
					next(false);
				}
			}
		}
	}
</script>