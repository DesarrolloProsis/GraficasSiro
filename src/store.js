import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    titulo:'Todas las Plazas',
    plazaActual: '0',
    tramoActual: '0',
    
  },
  mutations: {
    cambiar(state, plaza){

      state.plazaActual = plaza      
                
    },
    cambiar2(state,tramo){

      state.tramoActual = tramo
                   
    }
  },
  actions: {


  }
})
