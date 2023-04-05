<template>
  <v-card>
    <v-btn
        style="position: absolute; right: 0; z-index: 1"
        icon
        dark
        @click="closeModal"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-carousel>
      <v-carousel-item
          v-for="(img,i) in good.photos"
          :key="i"
          :src="img"
          reverse-transition="fade-transition"
          transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-card-title>{{ good.title }}</v-card-title>
    <v-card-subtitle>{{ good.author }}</v-card-subtitle>
    <v-card-text> {{ good.description }}</v-card-text>
    <div class="button-block">
      <v-card-title v-if="good.status!=='продана на аукционе'">{{ good.price }}</v-card-title>
      <v-card-actions v-if="good.status!=='продана на аукционе'">
        <Button :good="good"/>
      </v-card-actions>
      <v-card-text v-else>
        <v-chip>{{ good.status }}</v-chip>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
    name: "FullCard",
    components: {Button},
    props: ['good'],
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style scoped>
.button-block {
    display: flex;
    flex-direction: row;
}
</style>