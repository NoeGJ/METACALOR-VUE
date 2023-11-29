<template>
    <div :class="{ 'barra-lateral': true, 'mini-barra-lateral': !isMiniBarraLateral }">
      <div class="nombre-pagina">
        <i class="fa-solid fa-bars" style="font-size: 50px; cursor: pointer;" @click="toggleMiniBarraLateral"></i>
        <span :class="{ 'oculto': !isSpanBarraLateral }">MENÚ</span>
      </div>
      <router-link to="/home" class="boton">
        <i class="fa-solid fa-home"></i>
        <span :class="{ 'oculto': !isSpanBarraLateral }">HOME</span>
      </router-link>
      <nav class="navegacion">
        <ul>
          <li>
            <router-link to="/calendar" class="boton">
              <i class="fa-solid fa-calendar-days"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral }">CALENDARIO</span>
            </router-link>
          </li>
          <li>
            <router-link to="/aliments" class="boton">
              <i class="fa-solid fa-utensils"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral }">ALIMENTOS</span>
            </router-link>
          </li>
          <li>
            <router-link to="/exercises" class="boton">
              <i class="fa-solid fa-dumbbell"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral }">EJERCICIOS</span>
            </router-link>
          </li>
          <li>
            <router-link to="/progress" class="boton">
              <i class="fa-solid fa-arrow-up-right-dots"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral }">PROGRESOS</span>
            </router-link>
          </li>
          <li>
            <router-link to="/planesali" class="boton">
              <i class="fa-solid fa-bowl-food"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral }">PLANES ALIMENTICIOS</span>
            </router-link>
          </li>
          <li>
            <router-link to="/ranking" class="boton">
              <i class="fa-solid fa-ranking-star"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral }">RANKING</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

  </template>

<style scope>
@import '@fortawesome/fontawesome-free/css/all.css';
@import '@fortawesome/fontawesome-free/css/solid.css';
@import '@fortawesome/fontawesome-free/css/regular.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');



.body
{
    height:0px;
    background-color: #000000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
}

.barra-lateral {
  margin-top: 0px;
  position: fixed;
  width: 270px; /* Ancho de la barra lateral */
  height: 120vh; /* Altura del 100% del viewport */
  overflow: hidden;
  background-color: #003f3f; /* Color de fondo */
  color: #000000; /* Color del texto */
  padding: 20px 15px;

  z-index: 1000;
  transition: width 0.5s ease;
}

.mini-barra-lateral {
  position: fixed;
  width: 80px; /* Ancho de la barra lateral */
  height: 120vh; /* Altura del 100% del viewport */
  background-color: #003f3f; /* Color de fondo */
  color: #000000; /* Color del texto */
  z-index: 1000;
}

.barra-lateral span {
  width: 100px;
  white-space: nowrap;
  font-size: 14px;
  text-align: left;
  opacity: 1;
  z-index: 100;
  transition: opacity 0.5s ease, width 0.5s ease;
  color: white;
}

.barra-lateral span.oculto {
  opacity: 0;
  width: 0;
}

.barra-lateral .nombre-pagina {
  margin-top: 1px;
  margin-bottom: 40px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
}

.barra-lateral .nombre-pagina span {
  margin-left: 15px;
  font-size: 25px;
}

.barra-lateral .nombre-pagina i {
  margin-left: 2px;
  min-width: 50px;
  font-size: 40px;
  cursor: pointer;
  color: aliceblue;
}

/* Botón */
.barra-lateral .boton {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: rgb(0, 255, 21);
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
}

.barra-lateral .boton .fa-solid {
  min-width: 50px;
  font-size: 25px;
}

/* Navegación */
.barra-lateral .navegacion li {
  list-style: none;
  display: flex;
  margin-bottom: 10px;
}

.barra-lateral .navegacion .button {
  width: 100%;
  height: 45px;
  display: flex;
  border: none;
  border-radius: 10px;
  background-color: rgb(0, 255, 21);
  color: rgb(255, 255, 255);
  margin-bottom: 5px;
}

.barra-lateral .navegacion .fa-solid {
  min-width: 50px;
  font-size: 30px;
}
</style>


<script lang="ts">

export default {
  name: 'barralat2',
  data() {
    return {
      isMiniBarraLateral: false,
      isMobileView: false,
      isSpanBarraLateral: false,
    };
  },
  methods: {
    toggleMiniBarraLateral() {
      this.isMiniBarraLateral = !this.isMiniBarraLateral;
      this.isSpanBarraLateral = !this.isSpanBarraLateral;
    },
    checkScreenSize() {
      const width = window.innerWidth;
      this.isMobileView = width <= 768;
      this.isMiniBarraLateral = false;
      this.isSpanBarraLateral = false;
    },
    toggle2MiniBarraLateral() {
      if (this.isMiniBarraLateral && this.isSpanBarraLateral) {
        // Realizar la acción solo si ambas variables son false
        this.isMiniBarraLateral = !this.isMiniBarraLateral;
        this.isSpanBarraLateral = !this.isSpanBarraLateral;
      }
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
