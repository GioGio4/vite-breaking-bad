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
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0").then((response) => {
      // Inserisce i dati dentro allo Store.js (sarà reattivo)
      store.cards = response.data.data

      // console.log(store.cards)
    })

  }
}

</script>

<template>
  <!-- Header provvisorio- 
                          Creare un components  -->
  <header class="container">
    <nav class="mb-3">
      <h1>Yu-Gi-Oh API </h1>
    </nav>
  </header>

  <main class="pt-4">
    <AppMain />
  </main>
</template>

<style lang="scss">
header {
  height: 5vh;
}

main {
  background-color: #d48f38;
  height: 95vh;
}
</style>
