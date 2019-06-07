import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    titulo:'Todas las Plazas',
    plazaActual: '0',
    tramoActual: '0',    
    verTurnos2: false,
    fechaInicio: new Date().toISOString().substr(0, 10),
    fechaFin:  new Date().toISOString().substr(0, 10),
    
  },
  mutations: {
    cambiar(state, plaza){

      state.plazaActual = plaza      
                
    },
    cambiar2(state,tramo){
      
      state.tramoActual = tramo
                   
    },
    cambioTurno(state){

      if(state.verTurnos2 == true){
        state.verTurnos2 = false
      }
      else{
        state.verTurnos2 = true
      }
    },
    fechaInicioMutate(state,e){

      state.fechaInicio = e
      
    },
    fechaFinMutate(state,e){

      state.fechaFin = e
      
    }
  },
  actions: {
  }
})
