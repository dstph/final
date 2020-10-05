<template>
	<div class="container-fluid blue">
		<div class="row">
			<div class="col-12">
				<div class="group" v-for="item in sheetGroups" :key="item.name">
					<p class="mt-2 p-1">{{item.name}}</p>
					<div class="note-card" v-for="sheet in sheets" :key="sheet.sheetGroups.id">
						<div class="show" v-if="sheet.sheetGroups.includes(item.id)">
							<img :src="sheet.preview" alt="">
							<div class="sheet-info">
								<p class="sheet-title">{{sheet.title}}</p>
								<p class="sheet-artist">{{sheet.artist}}</p>
								<div class="sheet-categories" v-for="item in sheetCategories" :key="item.id">
									<p class="sheet-categories" v-if="sheet.sheetCategories.includes(item.id)">{{item.name}}</p>
								</div>
								<button class="add" @click="cardClick(sheet)">Add to card</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: "NoteList",
	props: ['addSheet'],
	data() {
		return {
			sheetCategories: [],
			sheetGroups: [],
			sheets: []
		}
	},
	computed: {
		sheetsSheetGroupOne(){
			return this.sheets.filter(i=>i.sheetGroups.includes(1));
		},
		sheetsSheetGroupTwo(){
			return this.sheets.filter(i=>i.sheetGroups.includes(2));

		}
	},
	methods: {
		cardClick(data){
			this.addSheet(data);
		}
	},
	created(){
			fetch("https://raw.githubusercontent.com/brightestsirius/musicnotes/master/sheets.json")
				.then(response => response.json())
				.then(data => {
					this.sheetCategories = data.sheetCategories;
					this.sheetGroups = data.sheetGroups;
					this.sheets = data.sheets;
				});
	}
}	
</script>

<style>
	.note-card{
		display: inline-block;

	}
	.show{
		display: inline-block;
		width: 400px;
		height: 200px;
		position: relative;
		overflow: hidden;
		margin: 10px;
		
	}
	.show img{
		position: absolute;
		top: 0;
		left: 2%;
		width: 90%;
	}
	.sheet-info{
		position: absolute;
		top: 100px;
		height: 100px;
		width: 95%;
		background-color: #0272b3;
		border-radius: 5px;
	}
	.sheet-categories{
		display: inline-block;
		margin: 0;
	}
	.add{
		display: inline-block;
	}


	.blue{
		background-color: #E0FFFF;
	}
</style>