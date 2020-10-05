<template>
	<div class="container color">
		<h4 class="pt-8">MY ORDER SUMMARY:</h4>
		<hr>
		<div class="row">
			<span class="col-6 text-nowrap text-left">Subtotal:</span>  <span class="col-6 text-right">{{cost.price}}</span>
		</div>
		<div class="row">
			<span class="col-6 text-nowrap text-left">Shipping & Handling:</span>  <span class="col-6 text-right">${{user.shipping.value}}</span>
		</div>
		<div class="row">
			<span class="col-6 text-nowrap text-left">Discount:</span>  <span class="col-6 text-right">(${{user.discount.value}})</span>
		</div>
		<div class="row">
			<span class="col-6 text-nowrap text-left">Coupon:</span>  <span class="col-6 text-right">(${{user.coupon.value}})</span>
		</div>
		<div class="row">
			<span class="col-6 text-nowrap text-left">Tax:</span>  <span class="col-6 text-right">${{user.tax.value}}</span>
		</div>
		<div class="row">
			<span class="col-6 text-nowrap text-left">Gift Card:</span>  <span class="col-6 text-right">(${{user.giftCard.value}})</span>
		</div>
		<hr>
		<div class="row">
			<span class="col-6 text-nowrap text-left">ORDER TOTAL</span>  <span class="col-6 text-right">${{total}}(USD)</span>
		</div>
		
		<button class="btn btn-success" @click="post">COMPLETE ORDER</button>
		
		
		
	</div>
</template>

<script>
export default{
	props: ['sheet', 'cost'],
	data() {
		return {
			user: [],
			total: '',
			order: {sheet: []}
		}
	},
	methods: {
		post(){}
		
	},
	created(){
		fetch("https://raw.githubusercontent.com/brightestsirius/musicnotes/master/user.json")
			.then(response => response.json())
			.then(data => {
				this.user = data.user;
				
			});
	},
	updated(){
		let self = this;
		function calculateOrder(){
			self.total = +(self.cost.price) + +(self.user.shipping.value) - +(self.user.discount.value) - +(self.user.coupon.value) + +(self.user.tax.value) + -(self.user.giftCard.value)
		}
		calculateOrder();
		self.$set(self.order, 'id', self.user.id);
		self.$set(self.order, 'name', self.user.name);
		self.$set(self.order, 'price', self.total);
		// console.log(self.order.sheet)
		// self.sheet.forEach(e=>self.order.sheet.push(e.id))

	}
}
</script>

<style>
	.color{
		background: #d6d6d6;
	}
</style>	