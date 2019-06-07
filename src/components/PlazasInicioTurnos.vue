<template>
  <div>
    <h2>{{titulo}}</h2>
    <h2>{{prueba}}</h2>
    <h2>{{fechaInicio}}</h2>
    
    
    <v-layout></v-layout>
    <div class="row">
      <div class="col">
        <ve-histogram :data="chartData" :settings="chartSettings" height="600px"></ve-histogram>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations, Store } from "vuex";
import BuscadorPrincipal from "@/components/BuscadorPrincipal.vue";
export default {
  name: "PlazasInicio",
  components: {
    BuscadorPrincipal
  },
  data() {
    var self = this;
    this.chartSettings = {
                        
    };

    return {
      fechaActual: Date(),      
      chartData: {
        columns: [],
        rows: []
      },
    }
  },
  computed: {
    ...mapState(["titulo", "plazaActual", "tramoActual", "verTurnos","fechaInicio"])
  },
  methods: {
    ...mapMutations(["cambiar", "cambiar2"])
  },
  mounted() {
  axios
         .get('https://localhost:44384/api/Concentrado/Plaza/Turnos/')  
         .then(response => {           
           this.chartData.columns = response.data.turnosNombre      
           this.chartData.rows = response.data.lista                
           })                            
  }
};
</script>
