<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/layouts/Footer.vue';
import Navber from './components/layouts/Navber.vue';


</script>

<template>
  <Navber />
  <RouterView />
  <Footer> </Footer>
</template>

<style scoped>

</style>
