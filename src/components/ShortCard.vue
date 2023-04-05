<template>
  <div>
    <v-dialog
        v-model="dialog"
        width="100%"
        max-width="800"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card elevation="0" :disabled="good.status==='продана на аукционе'" class="card">
          <div v-bind="attrs" v-on="on">
            <v-img :src="good.photos[0]" style="height: 160px"></v-img>
            <div class="title-box">
              <v-card-title class="card-title"> «{{ good.title }}»</v-card-title>
              <v-card-title class="card-title">{{ good.author }}</v-card-title>
            </div>
          </div>
          <div class="button-block">
            <v-card-title class="price" v-if="good.status!=='продана на аукционе'">{{ good.price }}</v-card-title>
            <v-card-actions v-if="good.status!=='продана на аукционе'">
              <Button :good="good"/>
            </v-card-actions>
            <v-card-text v-else class="status">Продана на аукционе</v-card-text>
          </div>
        </v-card>
      </template>

      <FullCard :good="good" @closeModal="closeModal"/>
    </v-dialog>
  </div>
</template>

<script>
import FullCard from "@/components/FullCard.vue";
import Button from "@/components/Button.vue";

export default {
  name: "ShortCard",
  components: {Button, FullCard},
  props: ['good'],
  data() {
    return {
      dialog: false,
      disabled: this.good.status === 'продана на аукционе'
    }
  },
  methods: {
    closeModal() {
      this.dialog = false
    },
  }
}
</script>

<style scoped>
.card {
    width: 280px;
    height: 328px;
    border: 1px solid #E1E1E1;
}

.title-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 16px;
    padding-left: 16px;
}

.card-title {
    justify-content: center;
    padding: 0;
    font-weight: 400;
    font-size: 18px;
    color: #343030;
}

.price {
    padding: 0;
    font-weight: 700;
    font-size: 16px;
    color: #343030;
}

.status {
    font-weight: 700;
    font-size: 16px;
    color: #343030;
    padding-left: 0;
}

.button-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    font-weight: 700;
    font-size: 16px;
}
</style>