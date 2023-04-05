<template>
  <div>
    <v-dialog
        v-model="dialog"
        width="100%"
        max-width="800"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card class="card">
          <div v-bind="attrs" v-on="on">
            <v-img :src="good.photos[0]" style="height: 160px"></v-img>
            <v-card-title style="justify-content: center; padding-bottom: 0; padding-left: 0">
              «{{ good.title }}»
            </v-card-title>
            <v-card-title style="justify-content: center; padding-top: 0; padding-left: 0">{{
                good.author
              }}
            </v-card-title>
          </div>
          <div class="button-block">
            <v-card-title style="padding: 0" v-if="good.status!=='продана на аукционе'">{{ good.price }}</v-card-title>
            <v-card-actions v-if="good.status!=='продана на аукционе'">
              <Button :good="good"/>
            </v-card-actions>
            <v-card-text v-else>
              <v-chip>{{ good.status }}</v-chip>
            </v-card-text>
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