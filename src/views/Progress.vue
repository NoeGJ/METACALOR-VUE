<template>
    <h1 class="text-center">Progreso General</h1>
      <v-container  fluid>
      <v-row   no-gutters>
        <v-col v-for="n in nutrientes" :key="n" sm="4" cols="4" justify="center" align="center" class="mb-5">
          
          <p>{{ n.name }}</p>
          <h2>{{ n.total }} g</h2>
          <p>Total</p>
          
          
        </v-col>
      <v-divider></v-divider>
      <v-col cols="12" md="12"  justify="center">
        
          <v-card-text>           
              <Bar  :data="chartData" />            
          </v-card-text>
          
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container>
          <v-row justify="center">
            <v-btn icon="mdi-less-than" class="" variant="plain">  </v-btn>
            <p  class="text-center mt-3">{{ formattedDate }}</p>
            <v-btn icon="mdi-greater-than" class="" variant="plain" v-if="hoy !== ultimoDia" @click="changeDate">  </v-btn>
          </v-row>
        <!-- <h3 class="text-center">{{ `${ dia } / ${ mes } / ${ anio } `   }}</h3> -->

      
    </v-container>
    
    
</template>

<style scoped>
  .chartBar-container{
    height: 100%;
  }
</style>




<script>
import { Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, ArcElement, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale)


export default {
  name: 'BarChart',
  components: { Bar, Pie },
  
  data() {
    return {
      nutrientes: [{name:'Proteinas', total: 350},{name: 'Carbohidratos', total: 1050},{name: 'Lipidos', total: 500}],
      hoy: new Date(),
      primerDia: new Date( new Date().setDate( new Date().getDate() - new Date().getDay() )),
      ultimoDia: new Date( new Date().setDate( new Date().getDate() - new Date().getDay() + 6 )),
      chartData: {
        labels: [ 'Dom', 'Lun', 'Ma','Mi','Ju','Vi','Sab'],
        datasets: [
          {
            label: 'Calorias',
            backgroundColor: ['#f87979'],
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
        changeDate: function(){
      //const primerDia = new Date( hoy.setDate( hoy.getDate() - hoy.getDay() ))
      //const ultimoDia = new Date( hoy.setDate( hoy.getDate() - hoy.getDay() + 6 ))
      
      this.hoy.setDate(this.hoy.getDate() + 1 )
      this.$emit('update:hoy', new Date(this.hoy));
      const formattedDate = `${this.hoy.getDate()} / ${this.hoy.getMonth()} / ${this.hoy.getFullYear()}`;
    console.log('Nuevo valor de hoy:', formattedDate);

    }
  },

}

</script>