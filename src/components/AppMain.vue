<script>
import CardList from "./CardsList.vue"

export default {

    components: { CardList },


}

</script>

<template>
    <section class="card-container container">
        <CardList />
    </section>
</template>

<style lang="scss" scoped>
section {
    // section usata come box che contiene tutte le carte,
    // con altezza fissa e overflow per scrollare le carte 
    background-color: white;
    height: 90vh;
    border: 2px solid gray;
    overflow: auto;
    filter: drop-shadow(3px 4px 6px black);
}
</style>
