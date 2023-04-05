<template>
  <div>
    <div class="title-text">Картины эпохи возрождения</div>
    <div class="container">
      <div
          v-for="good in $store.getters.getGoods"
          :key="good.title"
          class="box"
      >
        <ShortCard
            :good="good"
        />
      </div>
      <div v-if="$store.getters.getGoods.length===0">
        Ничего не найдено
      </div>
    </div>
  </div>
</template>

<script>
import ShortCard from "@/components/ShortCard.vue";

export default {
  name: "Catalog",
  components: {ShortCard},
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    max-width: none;
}

.title-text {
    display: flex;
    justify-content: center;
    padding-top: 45px;
    padding-bottom: 13px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
}

.box {
    padding: 20px;
}
</style>