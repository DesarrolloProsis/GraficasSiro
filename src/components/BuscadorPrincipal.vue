<template>
  <div>
    <h2>{{fechaInicio}}</h2>
    <h2>{{fechaFin}}</h2>
      
    <v-container grid-list-md>
      <v-flex xs6>
        <div class="row">
          <v-switch
          v-on:click="rangoFecha ? false : true"
            v-model="rangoFecha"
            :label="'Seleccionar Intervalo'"
            color="#33C7FF"
            value="primary"
            hide-details
          ></v-switch>
        </div>
      </v-flex>
    </v-container>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 lg3>
          <v-menu            
            v-model="menuFechaInicial"
            :close-on-content-click="false"
            :nudge-right="40"            
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field                
                v-model="computedDateFormatted"
                label="Inicio de Busqueda"
                persistent-hint
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker :value="fechaInicio" no-title @input="updateFechaInicio"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12 lg3 v-if="rangoFecha">
          <v-menu            
            v-model="nemuFechaFinal"          
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }" >
              <v-text-field
                v-model="computedDateFormatted2"
                label="Fin de Busqueda"
                persistent-hint
                prepend-icon="event"                
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker :value="fechaFin" no-title @input="updateFechaFin"></v-date-picker>                          
          </v-menu>                  
        </v-flex>  
        <v-flex xs12 lg3>
          <b-button variant="outline-dark" size="lg">Dark</b-button>  
          </v-flex>             
      </v-layout>
    </v-container>   
    
  </div>
  
</template>


<script>
import axios from "axios";
import moment from "moment";
import { mapState, mapMutations, Store } from "vuex";
import { constants } from 'crypto';

export default {
  data(){ 

      return{
      menuFechaInicial: false,
      nemuFechaFinal: false,
      rangoFecha: false,

      }

  },
  
  computed: {

    ...mapState(['fechaInicio','fechaFin']),
   
     computedDateFormatted() {    
      return this.formatDate(this.fechaInicio);
    },
    computedDateFormatted2() {      
      return this.formatDate(this.fechaFin);
    },

  },

  methods: {  


    formatDate(date) {

      if (!date) return null;
      else return moment(date).format("LLL");

    },
    updateFechaInicio (e) {
      
      this.$store.commit('fechaInicioMutate', e)
    }, 
    updateFechaFin (e) {
      
      this.$store.commit('fechaFinMutate', e)
    }



  
  }
};
</script>