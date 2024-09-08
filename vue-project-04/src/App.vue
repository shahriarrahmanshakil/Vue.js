<script setup>
import { RouterView } from 'vue-router'
import Footer from '@/views/layouts/Footer.vue'
import Navbar from '@/views/layouts/Navbar.vue'
</script>

<template>
  <div>
    <Navbar></Navbar>
    <RouterView />
    <Footer></Footer>
  </div>



</template>

<style scoped>
 
</style>
