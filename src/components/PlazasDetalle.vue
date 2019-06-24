<template>
    <div>
        <!-- <b-button variant="outline-dark" @click="cambiar('0')">Regresar a Plazas</b-button> -->
        <p></p>
        <div class="row">
            <div class="col-xl-6"><ve-pie :data="chartData" :settings="chartSettings"></ve-pie></div>            
            <div class="col-xl-6"><ve-pie :data="chartData2" :settings="chartSettings"></ve-pie></div>   
        </div>  
          <p>{{getdata}}</p>
          <p>{{getdata2}} </p>               
    </div>
</template>



<script>
import axios from 'axios'
import {mapState, mapMutations, Store} from 'vuex'

export default {
    
    data(){

       this.chartSettings = {           
            selectedMode: 'single',
            hoverAnimation: false
      }
      return {
        chartData: {
          columns: ['pago', 'cantidad', ],
          rows: []
        },
        chartData2: {
          columns: ['vehiculo', 'cantidad', ],
          rows: []
        }              
      }
    },
    computed:{
        
        ...mapState(['plazaActual', 'tramoActual','fechaInicio','fechaFin','rowsPlazaDetalleTypePago']),
         getdata(){
                    
          this.chartData.rows = this.rowsPlazaDetalleTypePago.listTipoPago
          
 
        },
        getdata2(){

          this.chartData2.rows = this.rowsPlazaDetalleTypePago.listTipoVehiculo
        }
                
        
    },
    methods:{
    }
    // },    
    // created(){

    //     axios
    //    .get(`https://localhost:44384/api/Concentrado/TiposPago/${this.plazaAxi}/${this.fechaInicio}/${this.fechaInicio}`)
    //    .then(response => (this.$store.commit('plazasDetalleMutation', Response.data.listTipoPago)))
           

    // }
    
}
</script>
