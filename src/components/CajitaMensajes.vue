<template>  
    <v-container fill-height>

        <div>
            <v-flex text-xs-center>
          <h3>{{plazaActual}}</h3>  
            </v-flex>  
          <h5>Fecha Seleccionada Inicio:  {{fechaInicio}}</h5> 
         <div v-if="rangoFecha">
          <h5>Fecha Seleccionada Fin:  {{fechaFin}}</h5>  
          </div>      

        </div>
 
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