<script>
import Card from "./Card.vue"
// Importato lo store contenente le Cards = Array
import { store } from "../data/store"


export default {
    data() {
        return {
            // Inserito lo store per essere letto
            store,
        }
    },

    components: { Card }
}
</script>

<template>
    <div class="row row-cols-5 gy-2">
        <!-- Ciclato array "cards" che si trova dentro store   -->
        <!-- Fatto il bind delle proprietà specifiche da riportare nel componente CARD -->
        <Card v-for="card in store.cards" :pic="card.card_images[0].image_url" :name="card.name"
            :archetype="card.archetype" />
    </div>
</template>

<style lang="scss" scoped></style>
