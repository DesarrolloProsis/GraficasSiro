<template>
<div>
  <v-layout row justify-center>
    <v-dialog v-model="this.modal" persistent max-width="1000px" :lazy="true" >
      <v-card>
        <v-card-title>
          <span class="headline">
            <p><span style="color:#17BF54">Plaza:</span> &nbsp; {{plazaActualModal}}&nbsp; &nbsp; <span style="color:#17BF54">Nombre del Tramo: &nbsp; </span> {{tramoActual}}</p>
              </span>          
        </v-card-title>
        <v-card-text>
          <PlazasDetalle></PlazasDetalle>               
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>          
            <v-btn color="blue darken-1" flat @click="this.modalMutation">Cerrar</v-btn>          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </div>
</template>
<script>
import PlazasDetalle from "@/components/PlazasDetalle.vue";
import axios from 'axios'
import {mapState, mapMutations, Store} from 'vuex'

export default {

    components:{

        PlazasDetalle
    },
    computed: {
        
        ...mapState(['modal','titulo','plazaActualModal','tramoActual'])
    },
    methods:{
        ...mapMutations(['modalMutation'])
    }
}
</script>