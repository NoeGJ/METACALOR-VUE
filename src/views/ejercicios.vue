<template>
    <headerlog/>
    <div class="body" :class="{'bodyresponsive':isMobileView}">

                <!-- Titulo -->
    <h1 class="exercise-title">Catálogo Interactivo de Ejercicios para Rutinas de Entrenamiento</h1>
    <!-- Búsqueda -->
    <input v-model="searchQuery" placeholder="Buscar ejercicio..." class="search-bar mx-3" />
    
    <!-- Lista de Ejercicios -->
    <div class="exercise-container">
      <div v-for="exercise in filteredExercises" :key="exercise.id" class="exercise-square">
        <h2 style="background-color: green;">{{ exercise.nombre }}</h2>
        <div class="exercise-details">
          <p><strong>Nombre:</strong> {{ exercise.nombre }}</p>
          <p><strong>Repeticiones:</strong> {{ exercise.repeticiones }}</p>
          <p><strong>Duración:</strong> {{ exercise.duracion }}</p>
          <p><strong>Beneficios:</strong> {{ exercise.beneficios }}</p>
        </div>
      </div>

      <!-- Mensaje si no hay ejercicios después de aplicar el filtro -->
      <p v-if="filteredExercises.length === 0" style="color: red; font-size: 100px;">No hay ejercicios que coincidan con la búsqueda</p>
    </div>

        </div>
  </template>
  
  <script lang="ts" >
  import Footer1 from '../components/Footer1.vue';
  import headerlog from '../components/headerlog.vue';
  export default {
    name: 'Login',
    components: {
      headerlog,
      Footer1},
  
      data() {
    return {
      isMobileView: false,

      "exercises": [
        {
          "id": 1,
          "nombre": "Plancha lateral (Side Plank)",
          "repeticiones": "3 series de 30 segundos a 1 minuto por lado",
          "duracion": "8-10 minutos",
          "beneficios": "Fortalece el core(músculos abdominales, lumbares, de la pelvis, los glúteos y la musculatura profunda de la columna) y los músculos laterales."
        },
        {
          "id": 2,
          "nombre": "Flexiones de pino (Handstand Push-ups)",
          "repeticiones": "3 series de 8-10 repeticiones",
          "duracion": "15-20 minutos",
          "beneficios": "Trabaja hombros y tríceps de manera intensa."
        },
        {
          "id": 3,
          "nombre": "Zancadas inversas (Reverse Lunges)",
          "repeticiones": "3 series de 12-15 repeticiones por pierna",
          "duracion": "12-15 minutos",
          "beneficios": "Trabaja piernas y glúteos, mejorando el equilibrio."
        },
        {
          "id": 4,
          "nombre": "Mountain Climbers",
          "repeticiones": "3 series de 20-25 repeticiones por pierna",
          "duracion": "10-12 minutos",
          "beneficios": "Cardio intenso que también fortalece el core."
        },
        {
          "id": 5,
          "nombre": "Flexiones de pico (Pike Push-ups)",
          "repeticiones": "3 series de 10-12 repeticiones",
          "duracion": "10-15 minutos",
          "beneficios": "Centrado en los hombros y tríceps, con un ángulo diferente."
        },
        {
          "id": 6,
          "nombre": "Sentadillas (Squats)",
          "repeticiones": "3 series de 15-20 repeticiones",
          "duracion": "10-12 minutos",
          "beneficios": "Trabaja los músculos de las piernas y glúteos, fortalece el core."
        },
        {
          "id": 7,
          "nombre": "Plancha (Plank)",
          "repeticiones": "3 series de 45 segundos a 1 minuto",
          "duracion": "8-10 minutos",
          "beneficios": "Excelente para fortalecer el core y mejorar la resistencia general."
        },
        {
          "id": 8,
          "nombre": "Burpees",
          "repeticiones": "3 series de 12-15 repeticiones",
          "duracion": "10-15 minutos",
          "beneficios": "Ejercicio de cuerpo completo que involucra cardio y fuerza."
        },
        {
          "id": 9,
          "nombre": "Levantamiento de rodillas (Knee Raises)",
          "repeticiones": "3 series de 15-20 repeticiones",
          "duracion": "8-10 minutos",
          "beneficios": "Trabaja los músculos abdominales inferiores."
        },
        {
          "id": 10,
          "nombre": "Flexiones (Push-ups)",
          "repeticiones": "3 series de 12-15 repeticiones",
          "duracion": "10-12 minutos",
          "beneficios": "Fortalece el pecho, los hombros y los tríceps."
        },
        {
          "id": 11,
          "nombre": "Jumping Jacks",
          "repeticiones": "3 series de 30-60 segundos",
          "duracion": "8-10 minutos",
          "beneficios": "Ejercicio cardiovascular que también trabaja piernas y brazos."
        },
        {
          "id": 12,
          "nombre": "Elevaciones laterales (Lateral Raises)",
          "repeticiones": "3 series de 12-15 repeticiones",
          "duracion": "10-12 minutos",
          "beneficios": "Se centra en los deltoides laterales para fortalecer los hombros."
        },
        {
          "id": 13,
          "nombre": "Abdominales bicicleta (Bicycle Crunches)",
          "repeticiones": "3 series de 20-25 repeticiones por lado",
          "duracion": "10-15 minutos",
          "beneficios": "Trabaja los abdominales superiores e inferiores."
        },
        {
          "id": 14,
          "nombre": "Skipping",
          "repeticiones": "3 series de 30-60 segundos",
          "duracion": "8-10 minutos",
          "beneficios": "Otra opción de cardio que también mejora la coordinación."
        },
        {
          "id": 15,
          "nombre": "Flexiones de tríceps (Tricep Dips)",
          "repeticiones": "3 series de 12-15 repeticiones",
          "duracion": "10-12 minutos",
          "beneficios": "Enfocado en fortalecer los tríceps y la parte superior de los brazos."
        },
        {
          "id": 16,
          "nombre": "Desplantes laterales (Lateral Lunges)",
          "repeticiones": "3 series de 12-15 repeticiones por pierna",
          "duracion": "10-12 minutos",
          "beneficios": "Trabaja los músculos de las piernas y glúteos, mejorando la movilidad lateral."
        },
        {
          "id": 17,
          "nombre": "Plancha con elevación de brazo (Plank with Arm Raise)",
          "repeticiones": "3 series de 12-15 elevaciones por brazo",
          "duracion": "10-12 minutos",
          "beneficios": "Fortalece el core y trabaja los músculos de la espalda y hombros."
        },
        {
          "id": 18,
          "nombre": "Saltos en caja (Box Jumps)",
          "repeticiones": "3 series de 10-12 repeticiones",
          "duracion": "10-15 minutos",
          "beneficios": "Desarrolla potencia en las piernas y mejora la coordinación."
        },
        {
          "id": 19,
          "nombre": "Flexiones diamante (Diamond Push-ups)",
          "repeticiones": "3 series de 10-12 repeticiones",
          "duracion": "10-12 minutos",
          "beneficios": "Se centra en los tríceps y el pecho de manera diferente."
        },
        {
          "id": 20,
          "nombre": "Elevación de talones (Calf Raises)",
          "repeticiones": "3 series de 15-20 repeticiones",
          "duracion": "8-10 minutos",
          "beneficios": "Fortalece los músculos de la pantorrilla."
        },
        {
          "id": 21,
          "nombre": "Flexiones de rodillas (Knee Push-ups)",
          "repeticiones": "3 series de 12-15 repeticiones",
          "duracion": "8-10 minutos",
          "beneficios": "Alternativa más accesible para fortalecer pecho y tríceps."
        },
        {
          "id": 22,
          "nombre": "Sentadillas sumo (Sumo Squats)",
          "repeticiones": "3 series de 15-20 repeticiones",
          "duracion": "10-12 minutos",
          "beneficios": "Trabaja los músculos internos del muslo y glúteos."
        },
        {
          "id": 23,
          "nombre": "Plancha lateral con rotación (Side Plank with Rotation)",
          "repeticiones": "3 series de 12-15 rotaciones por lado",
          "duracion": "10-12 minutos",
          "beneficios": "Mejora la estabilidad del core y trabaja los oblicuos."
        },
        {
          "id": 24,
          "nombre": "Elevación frontal (Front Raises)",
          "repeticiones": "3 series de 12-15 repeticiones",
          "duracion": "8-10 minutos",
          "beneficios": "Fortalece los deltoides frontales."
        },
        {
          "id": 25,
          "nombre": "Skipping alto (High Knees)",
          "repeticiones": "3 series de 30-60 segundos",
          "duracion": "8-10 minutos",
          "beneficios": "Ejercicio cardiovascular que también trabaja el core."
        },
        {
          "id": 26,
          "nombre": "Flexiones con palmada (Clap Push-ups)",
          "repeticiones": "3 series de 8-10 repeticiones",
          "duracion": "10-12 minutos",
          "beneficios": "Añade un componente explosivo a las flexiones, trabajando el pecho y tríceps."
        },
      ],
      "searchQuery": "",
    };
  },

methods:
{
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
},


  computed: {
    // Filtrar ejercicios según la búsqueda
    filteredExercises() {
      return this.exercises.filter(exercise =>
        exercise.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted() {
  this.checkScreenSize();
  window.addEventListener('resize', this.checkScreenSize);
},
beforeUnmount() {
  window.removeEventListener('resize', this.checkScreenSize);
},
};

  </script>
  
  <style scoped>
  .body {
    margin-top: 60px;
    margin-left: 80px;
    height: 120vh; /* Ocupar toda la altura de la ventana */
    background-color: white;
  }

  .bodyresponsive {
    margin-top: 60px;
    margin-left: 0px;
    height: 120vh; /* Ocupar toda la altura de la ventana */
    background-color: white;
  }


.exercise-title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: bold;
}
.exercise-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.exercise-square {
  width: 300px;
  height: 300px;
  border: 3px solid #000000;
  background-color: #8BC34A; 
  margin: 10px;
  border-radius: 10px;
}
.search-bar {
  width: 95%;
  height:50px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #000000;
}

</style>
  