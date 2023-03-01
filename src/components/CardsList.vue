<script>
import Card from "./Card.vue"
import axios from "axios"


export default {
    data() {
        return {
            // Array di Cards
            Cards: []
        }
    },

    components: { Card },

    // Lista importata con axios di carte
    created() {
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0").then((response) => {

            // Sovrascrittura Array Cards con dati ricevuti Axios
            this.Cards = response.data
        })

    }

}
</script>

<template>
    <Card />
</template>

<style lang="scss" scoped></style>
