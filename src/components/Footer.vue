<template>
  <v-footer class="footer">
    <Menu/>
    <ContactsData/>
  </v-footer>
</template>

<script>
import Menu from "@/components/Menu.vue";
import ContactsData from "@/components/ContactsData.vue";

export default {
  name: "Footer",
  components: {ContactsData, Menu},
}
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: space-evenly;
    min-height: 96px;
    background: #ECEAEA;
}
</style>