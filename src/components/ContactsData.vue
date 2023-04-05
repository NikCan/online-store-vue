<template>
  <div class="contacts-block">
    <div style="padding-right: 20px">
      <v-icon> mdi-phone</v-icon>
      +7(812)555-55-55
    </div>
    <div>
      <v-icon> mdi-map-marker</v-icon>
      г. Санкт-Петербург, ул. Ефимова, 3
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsData"
}
</script>

<style scoped>
.contacts-block {
    display: flex;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    align-items: center;
    color: #555555;
}
</style>