<template>
  <div id="app">
    <!-- navbar -->
    <NavBar />
    <!-- navbar -->

    <!-- konten -->
    <div class="container mt-4">
      <router-view/>
    </div>
    <!-- konten -->
    
  </div>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
