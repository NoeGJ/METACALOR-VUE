<template>
    <headerlog/>
    <div class="body" :class="{'bodyresponsive':isMobileView}">
        <h1 class="text-center">Progreso General</h1>
      <v-container>
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
     <v-container >
          <v-row justify="center">
            <v-btn icon="mdi-less-than" class="" variant="plain" v-if="this.hoy.toLocaleDateString() !== this.primerDia.toLocaleDateString()" @click="changeDate(false)" > </v-btn>
            <p   class="text-center mt-3 font-weight-medium">{{ formattedDate }}</p>
            <v-btn icon="mdi-greater-than" class="" variant="plain" v-if="this.hoy.toLocaleDateString() !== this.ultimoDia.toLocaleDateString()" @click="changeDate(true)">  </v-btn>
          </v-row>

    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="pa-lg-3 my-5 ">

          <Pie :data="pieChartData" ></Pie>
        
        </v-col>
        <v-col cols="12" md="6">
          <v-list lines="one" class="ml-lg-15">
            <v-divider ></v-divider>
            <v-list-item v-for="item, i in listItems" :key="i" :title="item.title">
              <template v-slot:append>
              {{ item.result }}
              {{ i == 3 ? 'Pts': '' }}
            </template>
          </v-list-item>
          <v-divider ></v-divider>
          </v-list>
        </v-col>
      </v-row>
    </v-container>



    </div>
    <Footer1/>
   
</template>

<script lang ="ts">
import Footer1 from '../components/Footer1.vue';
import headerlog from '../components/headerlog.vue';
import { Bar, Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)



export default {
  name: 'BarChart',
  components: { 
    Bar, Pie,
    Footer1, headerlog 
},
  
  data() {
    return {
        isMobileView: false,
      nutrientes: [{name:'Proteinas', total: 350},{name: 'Carbohidratos', total: 1050},{name: 'Lipidos', total: 500}],
      hoy: new Date(),
      primerDia: new Date( new Date().setDate( new Date().getDate() - new Date().getDay() )),
      ultimoDia: new Date( new Date().setDate( new Date().getDate() - new Date().getDay() + 6 )),
      value: 90,
      listItems: [{title: 'Calorias meta', result: 2590},
                  {title: 'Calorias consumidas', result: 2200},     
                  {title: 'Calorias quemadas', result: 350},
                  {title: 'Puntos obtenidos', result: 1500},
                  {title: 'Porcentaje logrado', result: '90%'},
                  {title: 'Proteinas', result: 105},
                  {title: 'Carbohidratos', result: 230},
                  {title: 'Grasas', result: 90}],
      //Datos del grafico de barras
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
      pieChartData: {
        labels: ['Proteinas', 'Carbohidratos', 'Grasas'],
        datasets: [
          {
            backgroundColor: ['#ff5733','#CACACF', '#4450FF'],
            data: [105, 230, 90]
          }
        ]
      },
    }
    
  },

    

    methods: 
    {
        changeDate: function(tipo){
          const fechaActual = new Date(this.hoy);      
          tipo ? fechaActual.setDate(fechaActual.getDate() + 1) : fechaActual.setDate(fechaActual.getDate() - 1);
    
        //console.log(fechaActual)
        this.hoy = fechaActual
        //console.log(this.hoy)
        //console.log(this.ultimoDia)
        //console.log(this.hoy.toLocaleDateString() != this.ultimoDia.toLocaleDateString())
    },
        checkScreenSize() 
        {
            const width = window.innerWidth;
            this.isMobileView = width <= 768;

            // Realiza acciones específicas según el valor de isMobileView
            if (this.isMobileView) {
            console.log('Cambiado a vista móvil');
            // Realiza acciones específicas para vista móvil
            } else {
            console.log('Cambiado a vista completa');
            // Realiza acciones específicas para vista completa
            }
        },
    },

    computed: 
    {
        formattedDate() {
        return `${this.hoy.getDate()} / ${this.hoy.getMonth() + 1} / ${this.hoy.getFullYear()}`;
      }
    },
    mounted() 
    {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() 
    {
        window.removeEventListener('resize', this.checkScreenSize);
    },



}
</script>

<style scoped>

.body
{
    margin-left: 80px;
    margin-top: 70px;
    height: 220vh;
    background-color: rgb(255, 255, 255);
}
.bodyresponsive
{
    margin-left: 0px;
    height: 220vh;
    margin-top: 70px;
}

</style>
