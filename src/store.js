import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stringify } from 'querystring';
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        
    plazaActual: 'Todas las Plazas',
    tramoActual: '0',        
    fechaInicio: new Date().toISOString().substr(0, 10),
    fechaFin:  new Date().toISOString().substr(0, 10),
    rowsPlazaInicio: [],
    columnsPlazaInicio: [],
    rowsPlazaDetalleTypePago: [],    
    columnsPlazaDetalle: [],
    modal: false,
    rangoFecha: null

    
  },
  mutations: {
    plazaActualMutation(state, plaza){

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

      console.log(JSON.stringify(array))
      state.rowsPlazaDetalleTypePago = array 

    },
    modalMutation(state){

       if(state.modal == false)
          state.modal = true
       else
          state.modal = false  
    },
    rangoFechaMutation(state, rangoNuevo){
      state.rangoFecha = rangoNuevo
    }

  },
  actions: {

    actualizaPlazasInicio(context, rango){

      // context.commit('pruebas',rango)
        
        if(rango === "primary"){
          
         axios
         .get(`https://localhost:44384/api/Concentrado/Plaza/Tramo/${context.state.fechaInicio}/${context.state.fechaFin}`)
         .then(Response => (context.commit('plazaInicioMutation', Response.data)))                 

        }
        else{
 
          axios
          .get(`https://localhost:44384/api/Concentrado/Plaza/Tramo/${context.state.fechaInicio}/${context.state.fechaInicio}`)
          .then(Response => (context.commit('plazaInicioMutation', Response.data)))     
        }

    },

    actualizaPlazasDetalle(context,plaza){


      if(context.state.rangoFecha === "primary"){
        
        axios
       .get(`https://localhost:44384/api/Concentrado/TiposPago/${plaza}/${context.state.fechaInicio}/${context.state.fechaFin}`)
       .then(Response => (context.commit('plazasDetallePagoMutation', Response.data)))   
        

      }
      else{
        https://localhost:44384/api/Concentrado/TiposPago/Palmillas/2019-02-02/2019-02-02
         axios
        .get(`https://localhost:44384/api/Concentrado/TiposPago/${plaza}/${context.state.fechaInicio}/${context.state.fechaInicio}`)         
        .then(Response => (context.commit('plazasDetallePagoMutation', Response.data)))                 
             
      }


    }

    
  }
})
