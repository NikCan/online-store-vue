<template>
  <v-btn
      color="deep-purple lighten-2"
      text
      :loading="loading"
      :disabled="loading"
      @click="changeStatus(good)"
      v-if="good.status === 'в продаже'"
  >
    Купить
  </v-btn>
  <v-btn
      color="deep-purple lighten-2"
      text
      :loading="loading"
      :disabled="loading"
      @click="changeStatus(good)"
      v-else-if="good.status === 'в корзине'"
  >
    В корзине
  </v-btn>
</template>

<script>
export default {
  name: "Button",
  props: ['good'],
  data() {
    return {
      loading: false
    }
  },
  methods: {
    changeStatus(item) {
      this.loading = true
      setTimeout(() => {
        this.$store.commit('changeStatus', {
          title: item.title,
          status: item.status === 'в продаже' ? 'в корзине' : 'в продаже'
        })
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>