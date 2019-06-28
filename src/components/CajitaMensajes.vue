<template>  
    <v-container>
      <v-layout>
        <v-flex xs12 text-xs-center>
          <v-flex>
          <h2>{{plazaActual}}</h2>  
            </v-flex>  
          <h3>Fecha Seleccionada Inicio:  {{fechaInicio}}</h3> 
         <div v-if="rangoFecha">
          <h3>Fecha Seleccionada Fin:  {{fechaFin}}</h3>  
          </div>      
        </v-flex>
      </v-layout>
    </v-container>  
</template>

<script>

import axios from "axios";
// import moment from "moment";
import { mapState, mapMutations, mapActions, Store } from "vuex";


export default {

    computed:{
        ...mapState(['plazaActual','fechaInicio','fechaFin','rangoFecha'])
    }
}
  </script>