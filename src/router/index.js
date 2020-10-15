import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Header from '@/components/Header.vue';
import Device from '@/components/device/Device.vue';
import DeviceDetail from '@/components/device/DeviceDetail.vue';
import DeviceEdit from '@/components/device/DeviceEdit.vue';
import DeviceStart from '@/components/device/DeviceStart.vue';
import MQTTConsole from '@/components/MQTTConsole.vue';
import TopicDetail from '@/components/TopicDetail.vue';
import Research from '@/components/Research.vue';
import Fifo from '@/components/Fifo.vue';
import Recorder from '@/components/Recorder.vue';
import Recording from '@/components/recording/Recording.vue';
// import NewRecording from '@/components/recording/NewRecording.vue';
import Recordings from '@/components/recording/Recordings.vue';
import Usecases from '@/components/Usecases.vue';
import RecogAPI from '@/components/RecogAPI.vue';
import MLConf from '@/components/MLConf.vue';
import DsDashboard from '@/components/DsDashboard.vue';
import User from '@/components/user/User.vue';
import UserDetail from '@/components/user/UserDetail.vue';
import UserEdit from '@/components/user/UserEdit.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
      	default: Home, 
      	'header-top': Header
      }
    },
    {
      path: '/device',
      name: 'device',
      components: {default: Device, 'header-top': Header},
      children: [
      	{ 
      		path: '', 
      		component: DeviceStart 
      	},
    		{ 
    			path: ':id', 
    			component: DeviceDetail,
          name: 'deviceDetail'
    		},
    		{ 
    			path: ':id/edit', 
    			component: DeviceEdit, 
    			name: 'deviceEdit' 
    		}]
    },
    {
    	path: '/mqttconsole/',
    	// component: MQTTConsole,
    	components: {
      		default: MQTTConsole, 
      		'header-top': Header
      	},
      	children: [
      		{ path: "topic/:id", component: TopicDetail, name: 'topicDetai;' }
      	],
    	name: 'mqttConsole' 
    },
    {
    	path: '/user',
    	name: 'user',
    	components: {
      		default: User, 
      		'header-top': Header
      	},
      	children: [
			{ 
				path: ':id', 
				component: UserDetail,
				name: 'userDetail' 
			},
			{ 
				path: ':id/edit', 
				component: UserEdit, 
				name: 'userEdit' 
			}
		]
    },
    {
      path: '/recogapi',
      // component: MQTTConsole,
      components: {
          default: RecogAPI, 
          'header-top': Header
        },
      name: 'recogApi' 
    },
    {
      path: '/research',
      components: {
          default: Research, 
          'header-top': Header
        },
      name: 'research' 
    },
    {
      path: '/fifo',
      components: {
          default: Fifo, 
          'header-top': Header
        },
      name: 'fifo' 
    },
    {
      path: '/recorder',
      name: 'recorder',
      props: true,
      components: {
          default: Recorder, 
          // props: true,
          'header-top': Header
        },
      children: [
        { 
          path: '', 
          component: Recordings,
          props: true,
          name: 'recordings'
        },
        // { 
        //   path: 'new', 
        //   component: NewRecording,
        //   props: true,
        //   name: 'newRecording'

        // },
        { 
          path: ':id', 
          component: Recording,
          props: true,
          name: 'recording'

        },
        
        
        ]
      
    },
    {
      path: '/usecases',
      components: {
          default: Usecases, 
          'header-top': Header
        },
      name: 'usecases' 
    },
    {
      path: '/mlconf',
      components: {
          default: MLConf, 
          'header-top': Header
        },
      name: 'mlConf' 
    },
    {
    	path: '/dsdashboard',
    	// component: MQTTConsole,
    	components: {
      		default: DsDashboard, 
      		'header-top': Header
      	},
    	name: 'dsDashboard' 
    },
    { 
    	path: '*', 
    	redirect: {name: 'home'}
    }
  ]
})
