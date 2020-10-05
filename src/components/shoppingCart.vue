<template>
	<div class="container">
		<div class="row">
			<div class="col-12"><h2>My Shopping Cart</h2></div>
		</div>
		<div class="row">
			<div class="col-6 text-white bg-dark">Item Description</div>
			<div class="col-2 text-white bg-dark">Quantit</div>
			<div class="col-2 text-white bg-dark">Price</div>
			<div class="col-2 text-white bg-dark">Total</div>
		</div>
		
			<div v-for="(note, index) in sheet" :key='note.id'>
				<div class="row">
					<div class="col-6">
						<div class="row">
							<img :src="note.preview"  class="img-responsive col-4 pt-5" alt="note">
							<div class="col-8">
								<h5 class="blue-text pt-5">{{note.title}}</h5>
								<h6>{{note.artist}}</h6>
							</div>	
						</div>	
					</div>
				
					<div class="col-2 pt-5">
						<input  type="number" v-model="inputvalue[index]" value='1' min="1" max="1000" step="1"/>
						<div>
							<b-button @click="removeItem(index)"  variant="link">Remove Item</b-button>
						</div>
					</div>
					<div class="col-2 pt-5"><h4><strong>{{note.price}}</strong></h4></div>
					<div class="col-2 pt-5" ><h4 ref="price"><strong >{{inputvalue[index]*note.price}}</strong></h4></div>
				</div>
			</div>
		
	
	</div>
		
</template>

<script>
export default{
	name: "shoppingCard",
	props: ['sheet'],
	data() {
		return {
			inputvalue: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			price: {}
			
			
		}
	},
	updated(){
		
		let x = this.$refs['price'];
		let self = this;
		function arraySum(array){
			var sum = 0;
			for(var i = 0; i < array.length; i++){
			sum += +array[i].outerText;
			}
			self.$set(self.price, 'cost', sum)
			
			
		}
		
		arraySum(x);
		
		this.$emit('cost',{
			price: this.price.cost
		})
		
	},
	methods:{
		addFromNoteList(sheet){
			console.log(sheet);

		},
		removeItem(index){
			this.sheet.splice(index, 1);	

		},
	
	}

}
</script>

<style>
	.blue-text{
		color: #00BFFF;
	}
</style>



