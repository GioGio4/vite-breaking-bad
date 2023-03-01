<script>
import Card from "./Card.vue"
import axios from "axios"


export default {
    components: { Card },


    created() {
        console.log(axios)
    }
}
</script>

<template>
    <Card />
</template>

<style lang="scss" scoped></style>
