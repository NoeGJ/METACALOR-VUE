<template>
  <header1/>
      <div class="body">
            <v-img src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2023/05/RECETA-UOR-blog.png" cover class="fill-height" >

              <v-card class="welcome-card mx-5 mt-12" outlined>
                <v-card-title>¡Bienvenido a Metacalor!</v-card-title>
                <v-card-text>
                  <!-- Contenido adicional, como la tabla, puede ir aquí -->
                  <p>
                    Gracias por unirte a Metacalor, tu plataforma integral de bienestar. 
                    Aquí encontrarás todo lo necesario para llevar un estilo de vida saludable, 
                    desde seguimiento de tus alimentos hasta rutinas de ejercicio personalizadas por ti mismo.
                  </p>
                </v-card-text>
              </v-card>
                  <v-table class=" mx-5 mt-10" max-width="500"  elevation="10">
                <thead>
                  <tr>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-left">
                      Score
                    </th>
                    <th class="text-left">
                      Rank
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(player, index) in players" :key="player.name">
                    <td>{{ player.name }}</td>
                    <td>{{ player.score }}</td>
                    <td>{{ getRank(index) }}</td>
                  </tr>
                </tbody>
              </v-table>
        </v-img>
      </div>
  <Footer1/>
</template>

<script lang="ts" >
import Footer1 from '../components/Footer1.vue';
import header1 from '../components/header.vue';
export default {
  name: 'Login',
  components: {
    header1,
    Footer1},

    data() {
    return {
      players: [
        { name: "Player 1", score: 150 },
        { name: "Player 2", score: 200 },
        { name: "Player 3", score: 120 },
        { name: "Player 4", score: 180 },
        { name: "Player 5", score: 250 },
        { name: "Player 6", score: 160 },
        { name: "Player 7", score: 220 },
        { name: "Player 8", score: 190 },
        { name: "Player 9", score: 140 },
        { name: "Player 10", score: 210 },
      ],
    };
  },
  methods: {
    getRank(index) {
      const sortedPlayers = this.players.slice().sort((a, b) => b.score - a.score);
      return index + 1;
    },
  },


};
</script>

<style scoped>
.body {
  margin-top: 60px;
  height: 120vh; /* Ocupar toda la altura de la ventana */
}

/* Eliminar el margen superior de v-img */
.v-image__image {
  margin-top: 0;
}

<style scoped>
.body {
  margin-top: 60px;
  height: 100vh; /* Ocupar toda la altura de la ventana */
}

/* Eliminar el margen superior de v-img */
.v-image__image {
  margin-top: 0;
}

/* Estilo para la tabla */
v-table {
  margin: 20px; /* Ajusta según sea necesario */
  border-collapse: collapse;
  width: calc(100% - 40px); /* Ajusta según sea necesario */
  height: 200px;
}

th, td {
  border: 1px solid #ddd; /* Borde para las celdas */
  padding: 8px; /* Espaciado interno */
  text-align: left;
}

thead tr {
  background-color: #f2f2f2; /* Color de fondo para la fila del encabezado */
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9; /* Color de fondo para filas pares del cuerpo de la tabla */
}

/* Estilo para la tarjeta de bienvenida */
.welcome-card {
  max-width: 600px; /* Ajusta según sea necesario */
  margin: 20px auto; /* Centra la tarjeta y ajusta los márgenes */
  background-color: aqua;
}



</style>

