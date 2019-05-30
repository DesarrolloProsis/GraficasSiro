<template>
    <div v-if="plazaActual === '0'">
        <PlazasInicio></PlazasInicio>
    </div>
    <div v-else-if="plazaActual != 0">
        <PlazasDetalle></PlazasDetalle>
    </div>
</template>




<script>

import PlazasInicio from '@/components/PlazasInicio.vue'
import PlazasDetalle from '@/components/PlazasDetalle.vue'
import {mapState, mapMutations} from 'vuex'
export default {
      name: 'Graficas',
      components: {
        PlazasInicio,
        PlazasDetalle
  },
  computed:{
      ...mapState(['plazaActual'])
  }
  
}
</script>

