<template>
    <header>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <div class="logo-container">
            
          <img src="@/assets/LOGO_MC3.png" width="50" height="50" class="d-inline-block align-center logo" alt="Logo" >  
          <span class="CUALOGO">METACALOR</span>
          </div>
        </a>

        <div v-if="isMobileView" class="nombre-pagina">
          <v-icon style="font-size: 50px; cursor: pointer;" @click="toggleMiniBarraLateral">mdi-menu</v-icon>
          <span :class="{ oculto: !isSpanBarraLateral }"></span>
        </div>


        <div v-if="!isMobileView" class="NAV32">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ Active: $route.path === '/' }">INICIO</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" :class="{ Active: $route.path === '/login' }">LOGIN</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/example" class="nav-link" :class="{ Active: $route.path === '/example' }">REGISTRO</router-link>
          </li>
        </div>
      </nav>
    </header>

    <div class="barra-segunda" :class="{ 'mini-barra-segunda': !isMiniBarraLateral }">
      <li class="nav-item">
        <router-link to="/" class="nav-link" :class="{ Active: $route.path === '/' }">INICIO</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link" :class="{ Active: $route.path === '/login' }">LOGIN</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/example" class="nav-link" :class="{ Active: $route.path === '/example' }">REGISTRO</router-link>
      </li>
    </div>
</template>

<style scoped>

.body
{
    height:0px;
    background-color: #000000;
}

.v-icon
{
  z-index: 100;
}

.NAV32 {
  list-style: none; /* Elimina los puntos de la lista */
  display: flex; /* Hace que los elementos de la lista sean flexibles en línea */
  margin-right: 10px; /* Opcional: agrega espacio entre los elementos */
  
  font-family: 'Roboto Slab', serif;
}

.nav-item {
  margin-right: 10px; /* Opcional: agrega espacio entre los elementos */
}

.nav-link {
  text-decoration: none; /* Opcional: elimina la decoración de enlace (subrayado) */
  color: #ffffff; /* Opcional: establece el color del texto */
}

.Active {
  color: #00ff33;
}

*{
    margin:0;

    font-family: 'Roboto Slab', serif;
}
.navbar 
{
    background: linear-gradient(to right, #00ff1a, #00b3ff); /* Cambia los colores a tu elección */
    justify-content: space-between;
    padding:5px 2px;
    position: fixed;
    z-index: 100;
    width:100%;

    height: 60px;
}
.logo-container {
    display: flex;
    align-items: center;
    
  }
  
  .logo {
    max-width: 60px;
    height: auto;
    z-index: 2;
    margin-top: -5px;
    z-index: 1000;
    /*margin-left: 310px;*/
  }
  
  .CUALOGO {
    width: 200px;
    height: 42px;
    border: 3px solid black;
  
  
    font-size: 1.2rem;
    font-family: 'FuentePersonalizada', 'Libre Baskerville' ;
    margin-left: -15px; /* Espacio entre el logo y el cuadro del span */
    z-index: 0;
    padding-left: 25px;
    padding-right: 15px;
    padding-top: 4px;
  }

  /*segunda parte-----------------------------------------------------------------------*/

.barra-segunda {
    margin-top: 60px !important;
    position: fixed;
    width: 100%; /* Ancho de la barra lateral */
    height: 40px; /* Altura del 100% del viewport */
    overflow: hidden;
    z-index: 100;
    background-color: #000000; /* Color de fondo */
    color: #ffffff; /* Color del texto */
    padding: 0; /* No aplicar padding en el estado inicial */
    transition: height 0.5s ease, padding 0.5s ease; /* Añadir transición para padding */
    display: flex; /* Hace que los elementos sean flexibles en línea */
    justify-content: space-around; /* Espaciado uniforme entre los elementos */
    align-items: center; /* Centra verticalmente los elementos */
}

.mini-barra-segunda {
  margin-top: 60px !important;
    height: 0; /* Ancho de la barra lateral */
    overflow: hidden;
    background-color: #000000; /* Color de fondo */
    border: 0;
    padding: 0;
}

.barra-segunda li {
    display: flex;
    margin-right: 10px; /* Opcional: agregar espacio entre los elementos */
    text-decoration: none; /* Opcional: eliminar la decoración de enlace (subrayado) */
    color: #ffffff; /* Opcional: establecer el color del texto */
  }
  
  .Active
  {
    color: #00ff33;
  }

.nombre-pagina{
    margin-right: 10px;
    z-index: 101;
}

:host {
    position: fixed !important;
    top: 0px;
    left: 0;
    width: 100%;
  
    background-color: #333; /* Cambia el color de fondo a tu preferencia */
    color: #fff; /* Cambia el color del texto a tu preferencia */
    z-index: 100; /* Puedes ajustar el z-index si es necesario */
    /* Agrega más estilos según tus necesidades */
  }

</style>



<script>
export default {
  name: 'header1',
  data() {
    return {
      isMiniBarraLateral: false,
      isMobileView: false,
    };
  },
  methods: {
    toggleMiniBarraLateral() {
      this.isMiniBarraLateral = !this.isMiniBarraLateral;
    },
    checkScreenSize() {
      const width = window.innerWidth;
      this.isMobileView = width <= 768;
      this.isMiniBarraLateral = false;
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
