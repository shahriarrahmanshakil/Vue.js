<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/common/Navbar.vue';
import Footer from './components/common/Footer.vue';

</script>

<template>
    <div class="wrapper">
      <Navbar />
      <RouterView />
      <Footer></Footer>
    </div>
</template>

<style scoped>


</style>
