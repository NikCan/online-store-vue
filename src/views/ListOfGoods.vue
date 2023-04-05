<template>
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

</template>

<script>
import ShortCard from "@/components/ShortCard.vue";

export default {
    name: "ListOfGoods",
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

.box {
    padding: 20px;
}
</style>