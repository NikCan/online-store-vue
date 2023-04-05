<template>
  <div id="nav-container">
    <v-footer class="footer" color="white">
      <Menu/>
      <div class="input-box">
        <input
            placeholder="Поиск по названию картины"
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

import Menu from "@/components/Menu.vue";

export default {
  name: "Navbar",
  components: {Menu},
  data() {
    return {
      value: '',
    }
  },
  methods: {
    changeSearch() {
      this.$store.commit('changeSearch', this.value)
    }
  }
}
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: space-evenly;
    min-height: 96px;
}

.input {
    border: 1px solid #E1E1E1;
    height: 48px;
    width: 294px;
    padding: 10px;

    font-weight: 400;
    font-size: 14px;
    color: #9F9F9F;
}

.input:focus {
    color: #343030;
    border: 1px solid #B5B5B5;
    outline: 0;
    outline-offset: 0;
}

.button {
    color: white;
    background: #403432;
    width: 122px;
    height: 48px;
    font-weight: 700;
    font-size: 14px;
}

.button:hover{
    background: #776763;
}
.button:active {
    opacity: 0.7;
}

.input-box {
    display: flex;
}
</style>