<template>
    <h1 class="text-center">Progreso General</h1>
      <v-container  fluid>
      <v-row   no-gutters>
        <v-col v-for="n in nutrientes" :key="n" sm="4" cols="4" justify="center" align="center" class="mb-5">
          
          <p>{{ n.name }}</p>
          <h2 class="text-lg-h4 text-sm-h6">{{ n.total }} g</h2>
          <p>Total</p>
          
          
        </v-col>
      <v-divider></v-divider>
      
      <v-col cols="12" md="12" class="pa-lg-10"  justify="center">
        <v-progress-linear v-model="value" :height="25" color="#ff5733">
          <strong > Avance {{ value }}%</strong>
        </v-progress-linear>
        
          <v-card-text>           
              <Bar  :data="chartData" />            
          </v-card-text>
          
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <!-- <v-container >
          <v-row justify="center">
            <v-btn icon="mdi-less-than" class="" variant="plain" v-if="this.hoy.toLocaleDateString() !== this.primerDia.toLocaleDateString()" @click="changeDate(false)" > </v-btn>
            <p   class="text-center mt-3 font-weight-medium">{{ hoy.toLocaleDateString() }}</p>
            <v-btn icon="mdi-greater-than" class="" variant="plain" v-if="this.hoy.toLocaleDateString() !== this.ultimoDia.toLocaleDateString()" @click="changeDate(true)">  </v-btn>
          </v-row>

    </v-container> -->
    <v-container>
    <v-timeline align="start">
      <v-timeline-item dot-color="white" size="large">
        <template v-slot:icon>
          <v-progress-circular model-value="75" :size="508" :width="20">
             75% 
          </v-progress-circular>
        </template>
        <template v-slot:opposite>
          {{ primerDia.toLocaleDateString() }}
        </template>
        <v-row>
          <v-col>
        <div>
          <div class="text-h8 text-center">Calorias</div>
          <p>            
            2010 kcal/245 cal
          </p>
        </div>
      </v-col>
        <v-divider vertical class="d-none d-sm-flex"></v-divider>
        <v-col>
        <div>
          <div class="text-h8">Proteinas</div>
          <p>
            125 g
          </p>
        </div>
      </v-col>
      <v-divider vertical class="d-none d-sm-flex"></v-divider>
      <v-col>
      <div>
        <div class="text-h8">Carbohidratos</div>
        <p>
          325 g
        </p>
      </div>
    </v-col>
    <v-divider vertical class="d-none d-sm-flex"></v-divider>
    <v-col>
    <div>
      <div class="text-h8">Grasas</div>
      <p>
        98 g
      </p>
    </div>
  </v-col>
  
      </v-row>
      </v-timeline-item>
  
      <v-timeline-item>
        <template v-slot:opposite>
          Opposite content
        </template>
        <div>
          <div class="text-h6">Content title</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
  
      <v-timeline-item>
        <template v-slot:opposite>
          Opposite content
        </template>
        <div>
          <div class="text-h6">Content title</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite>
          Opposite content
        </template>
        <div>
          <div class="text-h6">Content title</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<style scoped>
  .chartBar-container{
    height: 100%;
  }
</style>




<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: 'BarChart',
  components: { Bar },
  
  data() {
    return {
      nutrientes: [{name:'Proteinas', total: 350},{name: 'Carbohidratos', total: 1050},{name: 'Lipidos', total: 500}],
      hoy: new Date(),
      primerDia: new Date( new Date().setDate( new Date().getDate() - new Date().getDay() )),
      ultimoDia: new Date( new Date().setDate( new Date().getDate() - new Date().getDay() + 6 )),
      value: 90,
      chartData: {
        labels: [ 'Dom', 'Lun', 'Ma','Mi','Ju','Vi','Sab'],
        datasets: [
          {
            label: 'Calorias',
            backgroundColor: ['#ff5733'],
            data: [40, 20, 12, 0,0,0,0]
          }
        ]
      },
    }
  },
    computed:{
      formattedDate() {
        return `${this.hoy.getDate()} / ${this.hoy.getMonth() + 1} / ${this.hoy.getFullYear()}`;
      }
    },
 methods:{
        changeDate: function(tipo){
      
          const fechaActual = new Date(this.hoy);      
          tipo ? fechaActual.setDate(fechaActual.getDate() + 1) : fechaActual.setDate(fechaActual.getDate() - 1);
    
        //console.log(fechaActual)
        this.hoy = fechaActual
        //console.log(this.hoy)
        //console.log(this.ultimoDia)
        //console.log(this.hoy.toLocaleDateString() != this.ultimoDia.toLocaleDateString())
    }
  },

}

</script>