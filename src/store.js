import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stringify } from 'querystring';
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    titulo:'Todas las Plazas',
    plazaAxi: '',
    plazaActual: '0',
    tramoActual: '0',        
    fechaInicio: new Date().toISOString().substr(0, 10),
    fechaFin:  new Date().toISOString().substr(0, 10),
    rowsPlazaInicio: [],
    columnsPlazaInicio: [],
    rowsPlazaDetalleTypePago: [],
    rowsPlazaDetalleTypeVehiculo: [],
    columnsPlazaDetalle: [],
    modal: false

    
  },
  mutations: {
    cambiar(state, plaza){

      state.plazaActual = plaza      
                
    },
    cambiar2(state,tramo){
      
      state.tramoActual = tramo
                   
    },
    cambiarPlazaAxi(state, plaza){
      state.plazaAxi = plaza
    },
    fechaInicioMutate(state,e){

      state.fechaInicio = e
      
    },
    fechaFinMutate(state,e){

      state.fechaFin = e      
    },
    plazaInicioMutation(state, array){

        state.rowsPlazaInicio = array

    },
    plazasDetallePagoMutation(state,array){

      state.rowsPlazaDetalleTypePago = array 
      // state.commit.mutations('plazasDetalleVehiculoMutation',array.listTipoVehiculo)
      // state.rowsPlazaDetalleTypeVehiculo = array2
      // // Store.commit.actions('actualizaPlazasDetalle')

    },
    plazasDetalleVehiculoMutation(state,array){

      // alert(JSON.stringify(array))
      alert('HOLA')      
      state.rowsPlazaDetalleTypeVehiculo = array


    },
    modalMutation(state){

       if(state.modal == false)
          state.modal = true
       else
          state.modal = false  
    }

  },
  actions: {

    actualizaPlazasInicio(context, rango){

      // context.commit('pruebas',rango)
        
        if(rango === false){
        axios
        .get(`https://localhost:44384/api/Concentrado/Plaza/Tramo/${context.state.fechaInicio}/${context.state.fechaInicio}`)
        .then(Response => (context.commit('plazaInicioMutation', Response.data)))              

        }
        else{

         axios
        .get(`https://localhost:44384/api/Concentrado/Plaza/Tramo/${context.state.fechaInicio}/${context.state.fechaFin}`)
        .then(Response => (context.commit('plazaInicioMutation', Response.data)))        

        }

    },

    actualizaPlazasDetalle(context,plaza){


      // if(rango === false){
        
      //   axios
      //  .get(`https://localhost:44384/api/Concentrado/TiposPago/${context.state.plazaActual}/${context.state.fechaInicio}/${context.state.fechaInicio}`)
      //  .then(Response => (context.commit('plazasDetalleMutation', Response.data.ListTipoPago, Response.data.ListTipoVehiculo)))   
        

      // }
      // else{
        https://localhost:44384/api/Concentrado/TiposPago/Palmillas/2019-02-02/2019-02-02
         axios
        .get(`https://localhost:44384/api/Concentrado/TiposPago/${plaza}/${context.state.fechaInicio}/${context.state.fechaInicio}`)         
        .then(Response => (context.commit('plazasDetallePagoMutation', Response.data)))                 
             


    }

    
  }
})
