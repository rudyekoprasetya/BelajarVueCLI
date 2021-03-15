<template>
	<div class="public">		
		<h2>Rest Client dengan NewsAPI.org</h2>
		<hr>
		<div class="row">
			<div class="col" v-for="items in data" :key="items.id">

<div class="card" style="width: 18rem; margin-bottom: 10px;">
  <img :src="items.urlToImage" class="card-img-top" height="180px">
  <div class="card-body">
    <h5 class="card-title">{{items.title}}</h5>
    <p class="card-text">{{items.description}}</p>
  </div>
</div>				
			</div>
		</div>

	</div>
</template>
<script>
import axios from "axios";

	export default {
		component: 'Public',
		data: function() {
			return {
				url : 'https://newsapi.org/v2/top-headlines?country=id&apiKey=51dfd39984fe476f90f625457f70c96a',
				data: null
			}
		},
		mounted() {
			this.getNews();
		},
		methods: {
			getNews: function() {
				axios
				.get(this.url)
				.then(response=> {
					// console.log(response.data.articles);
					// memasukan ke data
					this.data=response.data.articles;
					// console.log(this.data);
				});
			}
		}
	}
</script>

<style scoped>

</style>