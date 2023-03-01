import { reactive } from "vue";

// Es. personale: Store sarà reattivo.
// Come un Data globale puù essere usato su qualunque componente
export const store = reactive({
  cards: [],
});
