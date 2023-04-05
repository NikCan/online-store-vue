<template>
  <div id="nav-container">
    <v-footer color="white">
      <v-col>
        <v-btn
            v-for="item in items"
            @click="$router.push(item.link).catch(()=>{})"
            :key="item.title"
            text
            rounded
            class="my-2"
                    >
          {{ item.title }}
        </v-btn>
      </v-col>
      <div class="input-box">
        <input
            @change="changeSearch"
            class="input"
            type="text"
            v-model="value"
        >
        <button class="button">Найти</button>
      </div>
    </v-footer>
    <v-divider/>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  props: [],
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
        link: '/'
      },
    ],
      value: '',
  }),
    methods: {
      changeSearch() {
          this.$store.commit('changeSearch', this.value)
      }
    }
}
</script>

<style scoped>
.input {
    border: 1px black solid;
    height: 36px;
}

.button {
    color: white;
    background-color: black;
    width: 100px;
}

.input-box {
    display: flex;
}
</style>