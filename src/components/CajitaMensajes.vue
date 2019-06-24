<template>  
    <v-container fill-height>

        <div>
            <v-flex text-xs-center>
          <h3>{{titulo}}</h3>  
            </v-flex>
          <h5>Fecha Seleccionada Inicio:  {{fechaInicio}}</h5>    
          <h5>Fecha Seleccionada Fin:  {{fechaFin}}</h5>    

        </div>
 
    </v-container>  
</template>

<script>

import axios from "axios";
// import moment from "moment";
import { mapState, mapMutations, mapActions, Store } from "vuex";


export default {

    computed:{
        ...mapState(['titulo','fechaInicio','fechaFin','rowsPlazaInicio'])
    }
}
  </script>