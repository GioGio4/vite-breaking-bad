<script>

export default {
    // Con le props riporto tutte le proprietà(specifiche) che mi sono
    // state passate dal genitore in questo caso (CardList-->Card)
    props: {
        pic: String,
        name: String,
        archetype: String,
    },
}

</script>

<template>
    <div class="col">
        <img :src="pic" alt="card" class="img-fluid">
        <h5>{{ name }}</h5>
        <p>{{ archetype }}</p>
    </div>
</template>

<style lang="scss" scoped></style>
