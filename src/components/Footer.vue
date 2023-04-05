<template>
  <v-footer
      absolute
  >
    <v-col>
      <v-btn
          v-for="link in links"
          :key="link"
          text
          rounded
          class="my-2"
      >
        {{ link }}
      </v-btn>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
      'Каталог',
      'Доставка',
      'Оплата',
      'Контакты',
      'О компании',
    ],
  }),
}
</script>

<style scoped>

</style>