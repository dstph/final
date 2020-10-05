<template>
<div id="app">
<NoteList :addSheet='addSheet'/>
<div class="container">
	<div class="row">
		<div class="col-8">
			<shoppingCart :sheet='sheet' @cost='setCost' />
		</div>
		<div class="col-4">
			<ordersummary :sheet='sheet' :cost='cost' />
		</div>
	</div>
</div>

</div>
</template>

<script>
import NoteList from './components/NoteList.vue'
import shoppingCart from './components/shoppingCart.vue'
import ordersummary from './components/ordersummary.vue'
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
export default {
	data(){
		return{
			sheet: [],
			cost: {}
		}
	},
	name: 'App',
	components: {
		NoteList, 
		shoppingCart,
		ordersummary
	},
	methods: {
		addSheet(data){
			this.sheet.push(data);
			console.log(this.sheet);
		},
		setCost(data){
			this.cost = data;
			console.log(this.cost)
		}
	}
}
</script>

<style>

#app {
margin: 0;
}
</style>
