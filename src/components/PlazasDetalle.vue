<template>
    <div>
        <h2>Plaza {{plazaActual}} Tramos {{tramoActual}}</h2>  <b-button variant="outline-dark" @click="cambiar('0')">Regresar a Plazas</b-button>
        <p></p>
        <div class="row">
            <div class="col-xl-6"><ve-pie :data="chartData" :settings="chartSettings"></ve-pie></div>            
            <div class="col-xl-6"><ve-pie :data="chartData2" :settings="chartSettings"></ve-pie></div>
            <div class="col-xl-6">jskjfskdlfjsd</ve-pie></div>
        </div>
        
         
    </div>
</template>



<script>
import axios from 'axios'
import {mapState, mapMutations, Store} from 'vuex'

export default {
    
    data(){

       this.chartSettings = {
            stack:{
                
               'Cuerpos': ['T01','T02', 'T03']
            },
            selectedMode: 'single',
            hoverAnimation: false
      }
      return {
        chartData: {
          columns: ['Pagos', 'Numero', ],
          rows: [
            { 'Pagos': 'No Pago', 'Numero': 250 },
            { 'Pagos': 'Efectivo', 'Numero': 200  },
            { 'Pagos': 'Efectivo CRE', 'Numero': 153  },
            { 'Pagos': 'Valores', 'Numero': 125 }
          ]
        },
        chartData2: {
          columns: ['Carril', 'Numero', ],
          rows: [
            { 'Carril': 'T01', 'Numero': 148 },
            { 'Carril': 'T02C', 'Numero': 785  },
            { 'Carril': 'T03C', 'Numero': 1553  },
            { 'Carril': 'T04C', 'Numero': 854 },
            { 'Carril': 'T05C', 'Numero': 854 },
            { 'Carril': 'T06C', 'Numero': 854 }
          ]
        }              
      }
    },
    computed:{
        
        ...mapState(['plazaActual', 'tramoActual']),
                
        
    },
    methods:{
        ...mapMutations(['cambiar'])
    }
}
</script>
