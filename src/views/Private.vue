<template>
	<div class="private">
		<h1>CRUD dengan API Lokal</h1>
		<hr>
<p>
	<button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Tambah</button>
</p>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nama</th>
      <th scope="col">Gender</th>
      <th scope="col">Alamat</th>
      <th scope="col">Gaji</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in data" :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.nama}}</td>
      <td>{{item.gender}}</td>
      <td>{{item.alamat}}</td>
      <td>{{item.gaji}}</td>
      <td>
			<button type="button" class="btn btn-small btn-warning">Edit</button> | <button type="button" class="btn btn-small btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
<!-- modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- modal -->
	</div>
</template>

<script>
	import axios from "axios"

	export default {
		component: 'Private',
		data: function() {
			return {
				url: 'http://localhost/rest-api/',
				data: null
			}
		},
		mounted() {
			this.getData();
		},
		methods: {
			getData: function() {
				axios.get(this.url+'tampil_data.php').then(
					response=>{
						// console.log(response.data.pengurus);
						this.data=response.data.pengurus;
					});
			}
		}
	}
</script>

<style scoped>
	
</style>