<template>
	<div>
    <nav class="navbar navbar-default">
      <ul class="nav nav-pills">
  <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
  <!-- <router-link to="/user/" tag="li" active-class="active"><a>User</a></router-link> -->
  <router-link to="/device/" tag="li" active-class="active"><a>Device</a></router-link>
  <!-- <router-link to="/mqttconsole/" tag="li" active-class="active"><a>MQTT Console</a></router-link> -->
  
  <!-- <router-link to="/dsdashboard/" tag="li" active-class="active"><a>DS Dashboard</a></router-link> -->
  <!-- <router-link to="/mlconf/" tag="li" active-class="active"><a>ML Conf</a></router-link> -->
  <router-link to="/recogapi/" tag="li" active-class="active"><a>Recog API</a></router-link>
  <router-link to="/research/" tag="li" active-class="active"><a>Research</a></router-link>
  <router-link to="/usecases/" tag="li" active-class="active"><a>Use Cases</a></router-link>
  <!-- <router-link to="/fifo/" tag="li" active-class="active"><a>Fifo</a></router-link> -->
  <router-link to="/recorder/" tag="li" active-class="active"><a>Recorder</a></router-link>
  <router-link to="/midi/" tag="li" active-class="active"><a>MIDI</a></router-link>
</ul>  
<ul class="nav nav-pills navbar-right">
  <li><input type="text" class="form-control" v-model="username"></li>
  <li><button class="btn btn-primary" @click="saveData">save</button></li>
  <li><button class="btn btn-primary" @click="loadData">load</button></li>
  <!-- <li ><a href="#"></a></li>
  <li ><a href="#"></a></li> -->
</ul>


    </nav>
		
<hr>
	</div>

</template>

<script>
import axios from 'axios';
import {mapActions} from 'vuex';
  export default {
    data() {
      return {
        username: "jaakko"
      }
    },
    computed: {
      recordings() {
        return this.$store.getters.recordings
      }
    },
    methods: {
      saveData() {
          alert("payload size: " + new TextEncoder().encode(JSON.stringify(this.recordings)).length / 1024 + " kiloBytes")
          axios({
            method: 'post',
            url: "https://sleek-v2-firebase.herokuapp.com/api/recordings",
            params: {
              user: this.username
            },
            headers: {
              "Content-Type": "application/json"
              // 'Access-Control-Allow-Origin': '*'
            }, 
            data: {
              recordings: this.recordings
            }
          })
          .then(response=> {
            console.log(response)
            alert('Save complete')
          })
          .catch(error => {
            alert(error) 
          })
        // alert('saved')
      },
      loadData() {

        let url = "https://sleek-v2-firebase.herokuapp.com/api/recordings";
      axios({
        method: 'get',
        url: "https://sleek-v2-firebase.herokuapp.com/api/recordings",
        params: {
          user: this.username
        },
        headers: {
            "Content-Type": "application/json",
            // 'Access-Control-Allow-Origin': '*'
        }, 
      })
      .then(response => {
        this.$store.dispatch('initRecordings', response.data)
        console.log(response.data)
      })
        


        // alert('loaded')
      },
    }

  }
</script>