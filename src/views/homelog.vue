<template>
    <headerlog/>
    <div class="body" :class="{'bodyresponsive':isMobileView}">
        <v-img src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2023/05/RECETA-UOR-blog.png" cover class="fill-height" >
        <!--- <barralat2/>-->
        <!--<Bar :data="chartData" ></Bar>-->
        <v-card class="mx-auto mt-10 w-75" max-width="" flat>
          <v-card-title>
            <h1>RANKING</h1>
          </v-card-title>
          <v-row>
        <v-col>
        <v-table  style="width: 400px;">
          <thead >
            <tr>
              <td>User</td>
              <td>Rank</td>
              <td >Score</td>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in players" :key="player.name" >
            <td>{{ player.name }}</td>
            <td>{{ player.score }}</td>
            <td class="text-right w-25" >{{ getRank(index) }}</td>
          </tr>
        </tbody>
        </v-table>
      </v-col>

      <v-col>

        <Bar :data="chartData" ></Bar>

      </v-col>
      </v-row>
        </v-card>


        </v-img>
</div>
    <Footer1/>
  </template>
  
  <script lang="ts">
  import { onMounted } from 'vue';
  import "firebase/auth";
  import Footer1 from '../components/Footer1.vue';
  import headerlog from '../components/headerlog.vue';
  import barralat2 from '@/components/barralat2.vue';
  import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)


  
  export default {
    name: 'homelog',
    components: {
      headerlog,
      barralat2,
      Footer1,Bar,
    },
    data() {
  return {
    isMobileView: false,
    players: [
      { name: "Player 1", score: 400 },
      { name: "Player 2", score: 380 },
      { name: "Player 3", score: 320 },
      { name: "Player 4", score: 290 },
      { name: "Player 5", score: 250 },
      { name: "Player 6", score: 220 },
      { name: "Player 7", score: 210 },
      { name: "Player 8", score: 190 },
      { name: "Player 9", score: 140 },
      { name: "Player 10", score: 110 },
    ],
    
    chartData: {
      label:'RANKING',
      labels: ['2DO', '1ER', '3ER'],
      datasets: [
        {

          backgroundColor: ['#ff5733'],
          data: [80, 200, 60]
        }
      ]
    }
  };
},

    methods: {
      inicializar: function () {
        //console.log( docSnap.data() )

    },
    getRank(index) {
      const sortedPlayers = this.players.slice().sort((a, b) => b.score - a.score);
      return index + 1;
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
    mounted() 
    {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() 
    {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    setup() {
      const auth = getAuth();
  
      // Método para obtener datos del usuario
      const obtenerDatosUsuario = async (uid) => {
        try {
          const db = getFirestore();
          const usuariosRef = collection(db, 'usuarios');
          const querySnapshot = await getDocs(query(usuariosRef, where('uid', '==', uid)));
  
          if (querySnapshot.size > 0) {
            // El usuario fue encontrado, puedes acceder a sus datos
            querySnapshot.forEach((doc) => {
              const datosUsuario = doc.data();
              console.log('Datos del usuario:', datosUsuario);
            });
          } else {
            console.log('Usuario no encontrado');
          }
        } catch (error) {
          console.error('Error al obtener datos del usuario:', error.message);
        }
      };
  
      // Escucha cambios en la autenticación
      onAuthStateChanged(auth, (usuario) => {
        if (usuario) {
          // Usuario autenticado, puedes acceder a su UID
          console.log('UID del usuario autenticado:', usuario.uid);
          console.log('CORREO del usuario autenticado:', usuario.email);
  
          // También ejecuta la lógica del método aquí
          obtenerDatosUsuario(usuario.uid);
        } else {
          // No hay usuario autenticado
          console.log('No hay usuario autenticado');
        }
      });
  
      // Acciones al montar el componente
      onMounted(() => {
        console.log('HOLA MUNDO');
      });
    },
  };
  </script>
  
  <style scoped>
  .body {
    margin-top:60px;
    height: 100vh; /* Ocupar toda la altura de la ventana */
  }
  
  .bodyresponsive
{
    margin-left: 0px;
    height: 130vh;
    margin-top: 60px;
}

  /* Eliminar el margen superior de v-img */
  .v-image__image {
    margin-top: 0;
  }
  
   .V-card
   {
     background-color: rgb(254, 153, 0);
   }

  
  </style>
  