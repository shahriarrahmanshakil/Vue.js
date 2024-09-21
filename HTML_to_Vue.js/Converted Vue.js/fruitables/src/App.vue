<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Topber from './components/layouts/Topber.vue';
import Navber from './components/layouts/Navber.vue';
import Footer from './components/layouts/Footer.vue';

</script>

<template>
  <Topber />
  <Navber />
  <RouterView />
  <Footer> </Footer>
</template>

<style scoped>

</style>