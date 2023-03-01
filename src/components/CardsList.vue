<script>
import Card from "./Card.vue"



export default {
    data() {
        return {
        }
    },

    components: { Card }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-5">
            <div v-for="card in Cards" class="col">
                <img :src="card.card_images[0].image_url" alt="card" class="img-fluid">
                <h3>{{ card.name }}</h3>
                <p>{{ card.archetype }}</p>
            </div>
        </div>
    </div>

    <Card />
</template>

<style lang="scss" scoped></style>
