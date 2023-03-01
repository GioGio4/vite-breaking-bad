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
    <div class="col p-2">
        <div class="card-style text-center d-flex flex-column">
            <img :src="pic" alt="card" class="img-fluid">
            <h5>{{ name }}</h5>
            <p>{{ archetype }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-style {
    background-color: #d48f38;
    height: 100%;
    border: 2px solid #997448;
    border-radius: 5px;

    h5 {
        color: white;
    }

    p {
        margin-top: auto;
    }

}
</style>
