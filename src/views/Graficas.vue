<template>
  <v-app>
    <h1 align="center">Grafica De Trafico</h1>        
     <v-container>
       <v-layout>
         <v-flex xs4>
        <CajitaMensaje></CajitaMensaje>
        </v-flex>        
          <v-flex xs7 v-if="plazaActual === 'Todas las Plazas'">
          <BuscadorPrincipal></BuscadorPrincipal>
           <ModalInfo></ModalInfo>    
          </v-flex> 
          <v-flex v-else>
              <PlazasDetalle></PlazasDetalle>
          </v-flex>                      
       </v-layout>
    </v-container>

    <div v-if="plazaActual === 'Todas las Plazas'">
      <PlazasInicio></PlazasInicio>
    </div>
    <div v-else></div>
  </v-app>  
</template>

// LaVacaLoca16


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

