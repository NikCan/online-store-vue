<template>
  <div class="menu">
    <v-btn
        v-for="item in items"
        @click="$router.push(item.link).catch(()=>{})"
        :key="item.title"
        text
        rounded
        class="menu-button"
    >
      {{ item.title }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    items: [
      {
        title: 'Каталог',
        link: 'list'
      },
      {
        title: 'Доставка',
        link: 'delivery'
      },
      {
        title: 'Оплата',
        link: 'payment'
      },
      {
        title: 'Контакты',
        link: 'contacts'
      },
      {
        title: 'О компании',
        link: 'about'
      },
    ],
  }),
}
</script>

<style scoped>
.menu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-right: 50px;
}

.menu-button {
    font-weight: 400;
    font-size: 14px;
    color: #555555;
    text-transform: none;
}
</style>