<template>
  <v-app id="app">
    <Navbar/>
    <router-view/>
    <!--        <Footer/>-->
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
#app {
    font-family: 'Merriweather', serif;
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
}
</style>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>