<script>
import AppMain from "./components/AppMain.vue"
import axios from "axios"
import { store } from "./data/store"

export default {

  data() {
    return {
      // Inserire nel return per poterlo leggere 
      store,
    }
  },

  components: { AppMain },

  created() {
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0").then((response) => {
      // Inserisce i dati dentro allo Store.js (sarà reattivo)
      store.cards = response.data.data
    })

  }
}

</script>

<template>
  <AppMain />
</template>

<style lang="scss"></style>
