<template>
  <div>  
     <CajitaMensaje></CajitaMensaje> 
    <div v-if="plazaActual === '0'"> 
      <v-container grid-list-md>
        <v-flex>     
       
            <BuscadorPrincipal></BuscadorPrincipal>
            <ModalInfo></ModalInfo>
                   
        </v-flex>
   </v-container>
 
     </div>  
     <div v-else>        
     </div>  
    <!-- <div v-if="verTurnos2 === false">         -->
      <div v-if="plazaActual === '0'">                
        <PlazasInicio></PlazasInicio>
      </div>
      <div v-else>         
        <PlazasDetalle></PlazasDetalle>
      </div>
    <!-- <div v-else-if="verTurnos2 === true">           
      <PlazasInicioTurnos></PlazasInicioTurnos>
    </div> -->
  </div> 
</template>




<script>
import PlazasInicio from "@/components/PlazasInicio.vue";
import PlazasDetalle from "@/components/PlazasDetalle.vue";
import PlazasInicioTurnos from "@/components/PlazasInicioTurnos.vue";
import BuscadorPrincipal from "@/components/BuscadorPrincipal.vue";
import CajitaMensaje from "@/components/CajitaMensajes.vue";
import ModalInfo from"@/components/ModalInfo.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Graficas",
  components: {
    PlazasInicio,
    PlazasDetalle,
    PlazasInicioTurnos,
    BuscadorPrincipal,
    CajitaMensaje,
    ModalInfo
  },
  computed: {

    ...mapState(["plazaActual", "verTurnos2"]),
  
  }
};
</script>

