<template>
  <button
      class="button"
      :disabled="loading"
      @click="changeStatus(good)"
      v-if="good.status === 'в продаже'"
  >
    <v-progress-circular
        indeterminate
        color="white"
        :size="22"
        v-if="loading"
    ></v-progress-circular>
    Купить
  </button>

  <button
      class="button"
      :style="{background: !loading ? '#5B3A32' : ''}"
      :disabled="loading"
      @click="changeStatus(good)"
      v-else-if="good.status === 'в корзине'"
  >
    <v-progress-circular
        indeterminate
        color="white"
        :size="22"
        v-if="loading"
    ></v-progress-circular>
    <v-icon v-else color="white"> mdi-check</v-icon>
    В корзине
  </button>
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
.button {
    background: #403432;
    height: 48px;
    width: 118px;
    font-weight: 700;
    font-size: 14px;
    color: #F4F6F9;
}

.button:hover {
    background: #776763;
}

.button:disabled {
    background: #C1B4B1;
}

.button:active {
    opacity: 0.7;
}
</style>