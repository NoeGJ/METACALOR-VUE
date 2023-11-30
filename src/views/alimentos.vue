<template>
      <headerlog />
      <div class="body" :class="{'bodyresponsive': isMobileView}">


        <form @submit.prevent="agregarAlimento">
      <label for="alimento">Alimento:</label>
      <input v-model="nuevoAlimento.Alimento" required>

      <label for="energia">Energía (kcal):</label>
      <input v-model="nuevoAlimento.Energia_kcal" type="number" required>

      <label for="carbohidratos">Carbohidratos (g):</label>
      <input v-model="nuevoAlimento.Hidratos_de_carbono_g" type="number" required>

      <label for="lipidos">Lípidos (g):</label>
      <input v-model="nuevoAlimento.Lipidos_g" type="number" required>

      <label for="proteina">Proteína (g):</label>
      <input v-model="nuevoAlimento.Proteina_g" type="number" required>

      <label for="unidad">Unidad:</label>
      <input v-model="nuevoAlimento.Unidad" required>

      <button type="submit">Agregar Alimento</button>
    </form>

        <h1 class="exercise-title">Catálogo Interactivo de Alimentos para Búsqueda de Calorías</h1>
  
        <v-text-field
            v-model="searchTerm"
            @input="search"
            label="Buscar por alimento"
            prepend-inner-icon="mdi-magnify"
            class="mb-5 ml-5"
            style="width: 360px;"
          ></v-text-field>


        <v-table class ="ejerciciost mx-5" dark>
          <thead>
            <tr>
              <th class="text-left">Alimento</th>
              <th class="text-left">Kcal</th>
              <th class="text-left">Carbohidratos</th>
              <th class="text-left">Lipidos</th>
              <th class="text-left">Proteínas</th>
              <th class="text-left">Unidad</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.Alimento }}</td>
              <td>{{ item.Energia_kcal }}</td>
              <td>{{ item.Hidratos_de_carbono_g }}</td>
              <td>{{ item.Lipidos_g }}</td> 
              <td>{{ item.Proteina_g }}</td> 
              <td>{{ item.Unidad }}</td> 
            </tr>
          </tbody>
        </v-table>
      </div>
      <Footer1 />
  </template>
  

  <script lang="ts">
  import Footer1 from '../components/Footer1.vue';
  import headerlog from '../components/headerlog.vue';
  import { getFirestore, collection, getDocs } from 'firebase/firestore';
  import {  addDoc, serverTimestamp} from "firebase/firestore";
  
  export default {
    name: 'Login',
    components: {
      headerlog,
      Footer1
    },
    data() {
      return {
        searchTerm: '',
        isMobileView: false,
        desserts: [
      {
        Alimento: '',
        Energia_kcal: '',
        Hidratos_de_carbono_g: '',
        Lipidos_g: '',
        Proteina_g: '',
        Unidad: '',
        id: ''
      }],
      nuevoAlimento:{
        Alimento: '',
        Energia_kcal: 0,
        Hidratos_de_carbono_g: 0,
        Lipidos_g: 0,
        Proteina_g: 0,
        Unidad: '',
      },
      // Puedes agregar más objetos con la misma estructura si es necesario
    // Array para almacenar los datos de la colección
  };
    },
    methods: {
        async fetchDataFromFirestore() 
        {
            const db = getFirestore();
            const alimentosRef = collection(db, 'ALIMENTOS2');
            
            const querySnapshot = await getDocs(alimentosRef);
            const alimentos = [];

            querySnapshot.forEach((doc) => {
                alimentos.push(doc.data());
            });

            this.desserts = alimentos;
            this.allDesserts = alimentos; // Guarda una copia de seguridad de todos los datos
            },
      checkScreenSize() {
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
      search() {
    if (this.searchTerm.trim() === '') {
      // Si el término de búsqueda está vacío, muestra todos los elementos
      this.desserts = this.allDesserts;
    } else {
      // Filtra los elementos según el término de búsqueda
      this.desserts = this.allDesserts.filter(item =>
        item.Alimento.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  },
  async agregarAlimento() {
      try {
        const db = getFirestore();
        const alimentosRef = collection(db, 'ALIMENTOS2');

        // Agrega un nuevo documento con el objeto nuevoAlimento y una marca de tiempo
        await addDoc(alimentosRef, {
          ...this.nuevoAlimento,
          timestamp: serverTimestamp()
        });

        console.log('Alimento agregado correctamente');
        
        // Limpia el formulario después de agregar el alimento
        this.nuevoAlimento = {
          Alimento: '',
          Energia_kcal: 0,
          Hidratos_de_carbono_g: 0,
          Lipidos_g: 0,
          Proteina_g: 0,
          Unidad: '',
        };
      } catch (error) {
        console.error('Error al agregar alimento:', error.message);
      }
    },
  },
  // 
    mounted() {
      this.checkScreenSize();
      this.fetchDataFromFirestore(); // Llama a la función para obtener datos de Firestore
      window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkScreenSize);
    }
  };
  </script>

<style scoped>

.body {
    margin-top: 60px;
    margin-left: 80px;
    height: 150vh; /* Ocupar toda la altura de la ventana */
    background-color: white;
  }

  .bodyresponsive {
    margin-top: 60px;
    margin-left: 0px;
    margin-right: 40px;
    height: 150vh; /* Ocupar toda la altura de la ventana */
    background-color: white;
  }

.exercise-title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: bold;
}

.ejerciciost
{

    width:700px;
    max-height: 750px; /* Altura máxima para mostrar una barra de desplazamiento vertical */
    overflow-y: auto; /* Agrega una barra de desplazamiento vertical si el contenido es más largo que la altura máxima */
    border: 1px solid #000; /* Agrega un borde de 1 píxel sólido negro alrededor de la tabla */
    border-radius: 10px;
    overflow-x: auto; /* Agrega una barra de desplazamiento vertical si el contenido es más largo que la altura máxima */

}


.custom-table {
  border: 1px solid #000; /* Agrega un borde de 1 píxel sólido negro alrededor de la tabla */
}

.input-container {
  width:600px;
}


.search-input
{
    width: 300px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: text; /* Asegúrate de que el cursor esté configurado correctamente */
    padding: 10px;
    border: 2px solid #000000;
}

</style>