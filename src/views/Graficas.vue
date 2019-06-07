<template>
  <div>  
    <div v-if="plazaActual === '0'"> 
     <BuscadorPrincipal></BuscadorPrincipal>   
     </div>  
     <div v-else> 
       <h2>aslñlañflasñdlasñ</h2>
     </div>  
    <!-- <div v-if="verTurnos2 === false">         -->
      <div v-if="plazaActual === '0'">                
        <PlazasInicio></PlazasInicio>
      </div>
      <div v-else>         
        <PlazasDetalle></PlazasDetalle>
      </div>
    </div>
    <!-- <div v-else-if="verTurnos2 === true">           
      <PlazasInicioTurnos></PlazasInicioTurnos>
    </div> -->
  <!-- </div> -->
</template>




<script>
import PlazasInicio from "@/components/PlazasInicio.vue";
import PlazasDetalle from "@/components/PlazasDetalle.vue";
import PlazasInicioTurnos from "@/components/PlazasInicioTurnos.vue";
import BuscadorPrincipal from "@/components/BuscadorPrincipal.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Graficas",
  components: {
    PlazasInicio,
    PlazasDetalle,
    PlazasInicioTurnos,
    BuscadorPrincipal
  },
  computed: {

    ...mapState(["plazaActual", "verTurnos2"]),
  
  }
};
</script>

