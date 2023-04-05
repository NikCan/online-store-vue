<template>
  <v-app id="app">
    <Navbar/>
    <div class="routers-container">
      <router-view/>
    </div>
    <Footer/>
  </v-app>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit('initialiseStore');
  }
}
</script>

<style>
.routers-container {
    min-height: 75vh;
}
</style>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>