<template>
    <div>
        <v-layout></v-layout>
        <div class="row">         
             <div class="col"><ve-bar :data="chartData" :settings="chartSettings" :events="chartEvents"  height="600px"></ve-bar></div>
        </div>
            {{getdata}} 
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

            stack:{'nombrePlaza': ['cuerpoA', 'cuerpoB','cuerpoC','cuerpoD']},
            selectedMode: 'single',
            hoverAnimation: false
        }
     
         this.chartEvents = {
             dblclick: function(e){  
                console.log(e)
                self.actualizaPlazasDetalle(e.name) 
                self.cambiar(e.name, e.seriesName)   
                self.cambiar2(e.seriesName)                                                                                                                    
             },
             click: (e) => {                                     
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

        ...mapState(['titulo', 'plazaActual', 'tramoActual','verTurnos','fechaInicio','fechaFin','rowsPlazaInicio']),

        getdata(){
          return this.chartData.rows = this.rowsPlazaInicio
        }
      
      
    },
    methods:{

        ...mapMutations(['cambiar','cambiar2','modalMutation']),
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
