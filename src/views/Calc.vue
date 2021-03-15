<template>
	<div class="calc">
		<h1>Apps Calculator</h1>
		
	<div class="container">
		<div class="mb-3">
			<label for="angka1" class="form-label">Angka 1</label>
			<input type="number" class="form-control" v-model="angka1">
		</div>
		<div class="mb-3">
			<label for="angka2" class="form-label">Angka 2</label>
			<input type="number" class="form-control" v-model="angka2">
		</div>
			<button type="button" class="btn btn-lg btn-danger" @click="kaliData">Kali</button> <button type="button" class="btn btn-lg btn-info" @click="bagiData">Bagi</button> <button type="button" class="btn btn-lg btn-warning" @click="tambahData">Tambah</button> <button type="button" class="btn btn-lg btn-primary" @click="kurangData">Kurang</button> 
		</div>
		<hr>
		<h2>Hasilnya adalah {{hasil}}</h2>
		
	</div>
</template>

<script>
	export default {
		component: 'Calc',
		data: function (){
			return {				
				angka1: 0,
				angka2: 0,
				hasil: 0
			}
		},
		methods: {
			//perkalian
			kaliData: function() {
				this.hasil=this.angka1*this.angka2;
			},
			//pembagian
			bagiData: function() {
				this.hasil=this.angka1/this.angka2;
			},
			//penjumlahan
			tambahData: function() {
				this.hasil=parseInt(this.angka1)+parseInt(this.angka2);
			},
			//pengurangan
			kurangData: function() {
				this.hasil=this.angka1-this.angka2;
			}
		}
	}
</script>