<template>
  <div>    
 

   <v-container grid-list-md>
      <v-flex xs3>
        <div class="row">
          <v-switch
          v-on:click="rangoFecha ? false : true"
            v-model="rangoFecha"
            :label="'Seleccionar Intervalo'"
            color="#33C7FF"
            value="primary"
            hide-details
          ></v-switch>

            <v-switch
            v-on:click="verTramos ? false : true"
            v-model="verTurnos"
            :label="'Visualizar por Tramos'"
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
            <v-date-picker 
                :value="fechaInicio" 
                @input="updateFechaInicio"
                :max = "fechaMax"
                no-title                 
                >
            </v-date-picker>
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
                prepend-icon= "event" 
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker 
                :value="fechaFin"                 
                @input="updateFechaFin"
                :max = "fechaMax"
                no-title 
              >
            </v-date-picker>                          
          </v-menu>                  
        </v-flex>  
        <v-flex xs12 lg6>
          <b-button @click="actualizaPlazasDetalle(plazaActual)" variant="outline-success" size="lg" :disabled="oculto">Buscar</b-button>            
          <b-button @click="plazaActualMutation('Todas las Plazas')" variant="outline-dark" size="lg">Regresar a Plazas</b-button>
          </v-flex> 

      </v-layout>  
      <v-flex xs12 lg6>
      <b-alert show v-model="showDismissibleAlert" variant="danger">La Fecha Fin Debe Ser Mayor :)</b-alert>    
      </v-flex> 
        
    </v-container>
    
  </div>  
</template>


<script>
import axios from "axios";
import moment from "moment";


import { mapState, mapMutations, mapActions, Store } from "vuex";


export default {

  data(){ 

      return{    
      fechaMax: new Date().toISOString().substr(0, 10).toString(), 
      menuFechaInicial: false,
      nemuFechaFinal: false,
      rangoFecha: false,
      verTramos: false,
      oculto: false,
      items: ['hola','adios'],
      select: ''

      }

  },
  
  computed: {

    ...mapState(['fechaInicio','fechaFin','plazaActual']),
   
     computedDateFormatted() {    
      return this.formatDate(this.fechaInicio);
    },
    computedDateFormatted2() {      
      return this.formatDate(this.fechaFin);
    },
    showDismissibleAlert(){

      if(this.rangoFecha == "primary")
      {
        this.$store.commit('rangoFechaMutation', this.rangoFecha)
        if(this.fechaFin >= this.fechaInicio){  
          this.oculto = false
          return false
        }
        else{    
             
          this.oculto = true      
          return true
        } 
      }
      else{
        this.$store.commit('rangoFechaMutation', this.rangoFecha)
          this.oculto = false
          return false
      }   
    }

  },

  methods: {  
    ...mapMutations(['plazaActualMutation']),
    ...mapActions(['actualizaPlazasDetalle']),

    formatDate(date) {

      if (!date) return null;
      else return moment(date).format("L");

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