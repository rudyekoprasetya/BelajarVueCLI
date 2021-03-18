<template>
  <div id="app">
    <!-- navbar -->
    <NavBar />
    <!-- navbar -->

    <!-- konten -->
    <div class="container mt-4">
    <transition enter_active_class="animate__animated animate__fadeIn" leave_active_class="animate__animated animate__fadeOut">
      <router-view/>
    </transition>
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
