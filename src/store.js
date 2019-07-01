import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stringify } from 'querystring';
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        
    plazaActual: 'Todas las Plazas',
    plazaActualModal: '',
    tramoActual: '', 
    letraTramoActual: '',       
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
    letraTramoActualMutation(state,tramo){
        state.letraTramoActual = tramo.substr(6,1);
    },
    tramoActualMutation(state,tramo){
      var plaza = state.plazaActualModal.replace(' ','')
      var tramoletra = plaza + tramo.substr(6, 1)                      
       switch (tramoletra)
       {
           case "QueretaroA":
               tramoletra = 'Queretaro Cuerpo A';
               break;
           case "QueretaroB":
               tramoletra = 'Queretaro Cuerpo B';
               break;
           case "ChichimequillasA":
               tramoletra = 'Chichimequillas Cuerpo A';
               break;
           case "ChichimequillasB":
               tramoletra = 'Chichimequillas Cuerpo B';
               break;
           case "TepotzotlanA":
               tramoletra = 'Tepotzotlan Cuerpo A';
               break;
           case "TepotzotlanB":
               tramoletra = 'Tepotzotlan Cuerpo B';
               break;
           case "SalamancaA":
               tramoletra = 'Salamanca Cuerpo A';
               break;
           case "PalmillasA":
               tramoletra = 'Palmillas Cuerpo A';
               break;
           case "PalmillasB":
               tramoletra = 'Palmillas Cuerpo B';
               break;
           case "LibramientoA":
               tramoletra = 'Lib. Cuerpo A-Queretaro';
               break;
           case "LibramientoB":
               tramoletra = 'Lib. Cuerpo A-Sn Luis P';
               break;
           case "LibramientoC":
               tramoletra = 'Lib. Cuerpo B-Celaya Libre';
               break;
           case "LibramientoD":
               tramoletra = 'Lib. Cuerpo B-Celaya Libre';

               break;
           case "VillagrandA":
               tramoletra = 'Villagrand Cuerpo A';
               break;
           case "VillagrandB":
               tramoletra = 'Villagrand Cuerpo B';
               break;
           case "CerroGordoA":
               tramoletra = 'Cerro Gordo Cuerpo A';
               break;
           case "CerroGordoB":
               tramoletra = 'Cerro Gordo Cuerpo B';
               break;

           default:
               tramoletra = 0;
               break;

       }
      
      state.tramoActual = tramoletra
                   
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
    },
    plazaActualModalMutation(state,plaza){
      
      state.plazaActualModal = plaza
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

    actualizaPlazasDetalle(context,plaza,tramo){

      
    
      if(context.state.rangoFecha === "primary"){
        
        axios
       .get(`https://localhost:44384/api/Concentrado/TiposPago/${plaza}/${context.state.fechaInicio}/${context.state.fechaFin}/${context.state.letraTramoActual}`)
       .then(Response => (context.commit('plazasDetallePagoMutation', Response.data)))   
        

      }
      else{
        https://localhost:44384/api/Concentrado/TiposPago/Palmillas/2019-02-02/2019-02-02
         axios
        .get(`https://localhost:44384/api/Concentrado/TiposPago/${plaza}/${context.state.fechaInicio}/${context.state.fechaInicio}/${context.state.letraTramoActual}`)         
        .then(Response => (context.commit('plazasDetallePagoMutation', Response.data)))                 
             
      }


    }

    
  }
})
