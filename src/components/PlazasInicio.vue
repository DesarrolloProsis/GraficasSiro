<template>
    <div>
        <v-layout></v-layout>
        <div class="row">         
             <div class="col"><ve-histogram :data="chartData" :settings="chartSettings" :events="chartEvents"  height="600px"></ve-histogram></div>
        </div>
        <p>{{getdata}} </p>        
    </div>  
</template>
         
<script>

import axios from 'axios'
import {mapState, mapMutations, Store, mapActions} from 'vuex'
import BuscadorPrincipal from '@/components/BuscadorPrincipal.vue'
export default {

    name: 'PlazasInicio',
    components:{
        BuscadorPrincipal
    },
    data(){
        var self = this
        this.chartSettings = {

            // stack:{'nombrePlaza': ['cuerpoA', 'cuerpoB','cuerpoC','cuerpoD']},
            selectedMode: 'single',
            hoverAnimation: false
        }
     
         this.chartEvents = {
             dblclick: function(e){  
                console.log(e)
                self.plazaActualMutation(e.name)
                self.actualizaPlazasDetalle(e.name)                    
                self.cambiar2(e.seriesName)                                                                                                                    
             },
             click: (e) => { 
                 console.log(e)               
             self.actualizaPlazasDetalle(e.name)
             self.modalMutation()
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

        ...mapState(['plazaActual', 'tramoActual','verTurnos','fechaInicio','fechaFin','rowsPlazaInicio','rangoFecha']),

        getdata(){
           this.chartData.rows = this.rowsPlazaInicio
        }
      
      
    },
    methods:{

        ...mapMutations(['plazaActualMutation','cambiar2','modalMutation']),
        ...mapActions(['actualizaPlazasDetalle'])

    },
     created(){

            axios         
            // .get(`https://localhost:44384/api/Concentrado/Plaza/Tramo/`)   
            .get(`https://localhost:44384/api/Concentrado/Plaza/Tramo/${this.fechaInicio}/${this.fechaInicio}`)   
            .then(response => (this.$store.commit('plazaInicioMutation',response.data)))                                                   
     }  

}
</script>
