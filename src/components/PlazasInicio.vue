<template>
    <div>
        <v-layout></v-layout>
        <div class="row">         
             <div class="col"><ve-histogram :data="chartData" :settings="chartSettings" :events="chartEvents" :toolbox="toolbox"  height="600px"></ve-histogram></div>
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
        },
     
         this.chartEvents = {
             dblclick: function(e){  
                console.log(e)
                self.plazaActualMutation(e.name)
                var pruebas = this.buscarNombreTramo(e.name, e.seriesName)
                self.actualizaPlazasDetalle()                    
                self.cambiar2(e.seriesName)                                                                                                                    
             },
             click: (e) => { 
             console.log(e)   
             self.plazaActualModalMutation(e.name)
             self.letraTramoActualMutation(e.seriesName)
             self.tramoActualMutation(e.seriesName)        
             self.actualizaPlazasDetalle(e.name, e.seriesName.substr(6, 1))
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

        ...mapMutations(['plazaActualMutation','tramoActualMutation','modalMutation','plazaActualModalMutation','letraTramoActualMutation']),
        ...mapActions(['actualizaPlazasDetalle']),


    },
     created(){

            axios         
            // .get(`https://localhost:44384/api/Concentrado/Plaza/Tramo/`)   
            .get(`https://localhost:44384/api/Concentrado/Plaza/Tramo/${this.fechaInicio}/${this.fechaInicio}`)   
            .then(response => (this.$store.commit('plazaInicioMutation',response.data)))                                                   
     }  

}
</script>
