<template>
<div>    
  <CajitaMensaje></CajitaMensaje>
    <div v-if="plazaActual === 'Todas las Plazas'">
      <v-container grid-list-md>
        <v-flex>
          <BuscadorPrincipal></BuscadorPrincipal>
          <ModalInfo></ModalInfo>
        </v-flex>
      </v-container>
    </div>
    <div v-else>
      <BuscadorSecundario></BuscadorSecundario>
      <PlazasDetalle></PlazasDetalle>
    </div>

    <div v-if="plazaActual === 'Todas las Plazas'">
      <PlazasInicio></PlazasInicio>
    </div>
    <div v-else></div>
  </div>
</template>




<script>
import PlazasInicio from "@/components/PlazasInicio.vue";
import PlazasDetalle from "@/components/PlazasDetalle.vue";
import PlazasInicioTurnos from "@/components/PlazasInicioTurnos.vue";
import BuscadorPrincipal from "@/components/BuscadorPrincipal.vue";
import BuscadorSecundario from "@/components/BuscadorSecundario.vue";
import CajitaMensaje from "@/components/CajitaMensajes.vue";
import ModalInfo from "@/components/ModalInfo.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Graficas",
  components: {
    PlazasInicio,
    PlazasDetalle,
    PlazasInicioTurnos,
    BuscadorPrincipal,
    CajitaMensaje,
    ModalInfo,
    BuscadorSecundario
  },
  computed: {
    ...mapState(["plazaActual", "verTurnos2"])
  }
};
</script>

