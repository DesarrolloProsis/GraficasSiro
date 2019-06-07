<template>
    <div>
        <h2>{{titulo}}</h2>        

     <h2>{{fechaInicio}}</h2>    
        <h2>{{plazaActual}}</h2>  

     
        <v-layout></v-layout>
        <div class="row">         
             <div class="col"><ve-bar :data="chartData" :settings="chartSettings" :events="chartEvents"  height="600px"></ve-bar></div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import {mapState, mapMutations, Store} from 'vuex'
import BuscadorPrincipal from '@/components/BuscadorPrincipal.vue'
export default {

    name: 'PlazasInicio',
    components:{
        BuscadorPrincipal
    },
    data(){
        var self = this
        this.chartSettings = {

            stack:{'nombrePlaza': ['cuerpoA', 'cuerpoB','cuerpoC','cuerpoD']},
            selectedMode: 'single',
            hoverAnimation: false
        }
     
         this.chartEvents = {
             dblclick: function(e){  
                self.cambiar(e.name, e.seriesName)   
                self.cambiar2(e.seriesName)                                                                                                                    
             }                         
         }
        return{   
            
            fechaActual: Date(),
            chartData: {
            columns: ['nombrePlaza', 'cuerpoA', 'cuerpoB', 'cuerpoC', 'cuerpoD'],
            rows: []
            }
        }
    },
    computed:{

        ...mapState(['titulo', 'plazaActual', 'tramoActual','verTurnos','fechaInicio','fechaFin']),
       
      
    },
    methods:{

        ...mapMutations(['cambiar','cambiar2']),
 
     
    },
     mounted(){

            axios         
            // .get(`https://localhost:44384/api/Concentrado/Plaza/Tramo/`)   
            .get(`https://localhost:44384/api/Concentrado/Plaza/Tramo/${this.fechaInicio}/${this.fechaFin}`)                       
            .then(response => (this.chartData.rows = response.data))        
     },

}
</script>
