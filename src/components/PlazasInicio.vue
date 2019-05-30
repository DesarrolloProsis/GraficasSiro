<template>
    <div>
        <h2>{{titulo}}</h2>        
        <h2>{{formatoFecha(fechaActual)}}</h2> 
        <h2>{{plazaActual}}</h2>  

         <div>gdfgdfgdfgdgdfgdfgdfgdf </div> 
        <div class="row">
         
             <div class="col"><ve-bar :data="chartData" :settings="chartSettings" :events="chartEvents"  height="600px"></ve-bar></div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import moment from 'moment'
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

        ...mapState(['titulo', 'plazaActual', 'tramoActual']),
       
      

    },
    methods:{

        ...mapMutations(['cambiar','cambiar2']),

        formatoFecha(fechaActual){

                return moment(fechaActual).format('L')

        }
     
    },
     mounted(){
         axios
         .get('https://localhost:44384/api/Concentrado/Tramo')
         .then(response => (this.chartData.rows = response.data))

     },


}
</script>
