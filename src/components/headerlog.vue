<template>
    <header>
      <nav class="navbar navbar-light bg-light">

        <!---<div class="nav-item">
                <div class="nav-item">
                  <div class="dropdown" style="position: relative; z-index: 1200;" @click="toggle2MiniBarraLateral">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      <img class="perfil" src="@/assets/PERFIL.png" alt="Dropdown" width="40" height="40">
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="margin-left: -12px;">
                      <router-link to="/profile" class="dropdown-item custom-black">Ver Perfil</router-link>
                      <router-link to="/edit-profile" class="dropdown-item custom-black">Editar Perfil</router-link>
                      <router-link to="/achievements" class="dropdown-item custom-black">Ver Logros</router-link>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item custom-black" href="#" @click="logout">Cerrar Sesión</a>
                    </div>
                  </div>
                </div>
        </div>-->
        <div v-if="isMobileView">
          <v-icon style="font-size: 50px; cursor: pointer;" @click="toggleMiniBarraLateral">mdi-menu</v-icon>
          <!---<span :class="{ oculto: !isSpanBarraLateral }"></span>-->
        </div>

        <div v-if="!isMobileView" class="NAV32">
          <!---<li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ Active: $route.path === '/' }">INICIO3</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" :class="{ Active: $route.path === '/login' }">LOGIN</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link" :class="{ Active: $route.path === '/register' }">REGISTRO</router-link>
          </li>-->
        </div>


        <div v-if="isMobileView">
            <a class="navbar-brand" href="#">
              <div class="logo-container">
                <img src="@/assets/LOGO_MC3.png" width="50" height="50" class="d-inline-block align-center logo" alt="Logo">
                <span class="CUALOGO2">METACALOR</span>
              </div>
            </a>
        </div>

        <div v-if="!isMobileView">
            <a class="navbar-brand" href="#">
              <div class="logo-container">
                <img src="@/assets/LOGO_MC3.png" width="50" height="50" class="d-inline-block align-center logo" alt="Logo">
                <span class="CUALOGO">METACALOR</span>
              </div>
            </a>
        </div>




        <div class="nav-item">
            <div class="nav-item">
              <div class="dropdown" style="position: relative; z-index: 1200;" @click="toggle2MiniBarraLateral">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <img class="perfil" src="@/assets/PERFIL.png" alt="Dropdown" width="40" height="40">
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="margin-left: -100px;">
                  <router-link to="/perfil" class="dropdown-item custom-black" style="margin-right: 12px;">Ver Perfil</router-link>
                  <!--<router-link to="/edit-profile" class="dropdown-item custom-black" style="margin-right: 12px;">Editar Perfil</router-link>-->
                  <!---<router-link to="/achievements" class="dropdown-item custom-black" style="margin-right: 12px;">Ver Logros</router-link>-->
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item custom-black" href="#" @click="logout" style="margin-right: 12px;">Cerrar Sesión</a>
                </div>
              </div>
            </div>
        </div>
        <!---<div v-if="!isMobileView" class="NAV32">
          -<li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ Active: $route.path === '/' }">INICIO3</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" :class="{ Active: $route.path === '/login' }">LOGIN</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link" :class="{ Active: $route.path === '/register' }">REGISTRO</router-link>
          </li>
        </div>-->
      </nav>
      
      
    </header>
    

    <div v-if="!isMobileView">  
      <div class="barra-lateral2" :class="{'mini-barra-lateral2':!isMiniBarraLateral2}">
          <!---<span :class="{ oculto: !isSpanBarraLateral }"></span>-->
          <div class="nombre-pagina">
            <i class="fa-solid fa-bars" style="font-size: 50px; cursor: pointer;" @click="toggle3MiniBarraLateral"></i>
            <span :class="{ 'oculto': !isSpanBarraLateral2 }">MENÚ</span>
          </div>

          <router-link to="/homelog" style="text-decoration: none;" class ="botonesv2">
            <button class="boton2">
              <i class="fa-solid fa-home" style="font-size: 30px; cursor: pointer;"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral2 }">HOME</span>
            </button>
          </router-link>

          <router-link to="/calendario" style="text-decoration: none;">
            <button class="boton2">
              <i class="fa-solid fa-calendar-days" style="font-size: 30px; cursor: pointer;"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral2 }">CALENDARIO</span>
            </button>
          </router-link>

          
          <router-link to="/alimentos" style="text-decoration: none;">
            <button class="boton2">
              <i class="fa-solid fa-utensils" style="font-size: 30px; cursor: pointer;"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral2 }">ALIMENTOS</span>
            </button>
          </router-link>

          <router-link to="/ejercicios" style="text-decoration: none;">
            <button class="boton2">
              <i class="fa-solid fa-dumbbell" style="font-size: 30px; cursor: pointer;"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral2 }">EJERCICIOS</span>
            </button>
          </router-link>


          <router-link to="/progresos" style="text-decoration: none;">
            <button class="boton2">
              <i class="fa-solid fa-arrow-up-right-dots" style="font-size: 30px; cursor: pointer;"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral2 }">PROGRESOS</span>
            </button>
          </router-link>

          <router-link to="/planesali" style="text-decoration: none;">
            <button class="boton2">
              <i class="fa-solid fa-solid fa-bowl-food" style="font-size: 30px; cursor: pointer;"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral2 }">PLANES ALIMENTICIOS</span>
            </button>
          </router-link>

          <router-link to="/ranking" style="text-decoration: none;">
            <button class="boton2">
              <i class="fa-solid fa-ranking-star" style="font-size: 30px; cursor: pointer;"></i>
              <span :class="{ 'oculto': !isSpanBarraLateral2 }">RANKING</span>
            </button>
          </router-link>
      </div>



    </div>  


    <div class="barra-lateral" :class="{ 'mini-barra-lateral': !isMiniBarraLateral }">

      <span class = "general2" :class="{ 'oculto': !isSpanBarraLateral }">MENÚ</span>
      <ul class="lista-botones mt-5">
        <li class="botones">
          <router-link to="/homelog" class ="btn botonesv">
            <i class="fa-solid fa-home"></i>
            <span class = "general" :class="{ 'oculto': !isSpanBarraLateral }">HOME</span>
          </router-link>
        </li>
        <li class="botones">
          <router-link to="/calendario" class ="btn botonesv">
            <i class="fa-solid fa-calendar-days"></i>
            <span class = "general" :class="{ 'oculto': !isSpanBarraLateral }">CALENDARIO</span>
          </router-link>
        </li>
        <li class="botones">
          <router-link to="alimentos" class ="btn botonesv">
            <i class="fa-solid fa-utensils"></i>
            <span class = "general" :class="{ 'oculto': !isSpanBarraLateral }">ALIMENTOS</span>
          </router-link>
        </li>
        <li class="botones">
          <router-link to="/ejercicios" class ="btn botonesv">
            <i class="fa-solid fa-dumbbell"></i>
            <span class = "general" :class="{ 'oculto': !isSpanBarraLateral }">EJERCICIOS</span>
          </router-link>
        </li>
        <li class="botones">
          <router-link to="/progresos" class ="btn botonesv">
            <i class="fa-solid fa-arrow-up-right-dots"></i>
            <span class = "general" :class="{ 'oculto': !isSpanBarraLateral }">PROGRESOS</span>
          </router-link>
        </li>
        <li class="botones">
          <router-link to="/planesali" class ="btn botonesv">
            <i class="fa-solid fa-bowl-food"></i>
            <span class = "general" :class="{ 'oculto': !isSpanBarraLateral }">PLANES ALIMENTICIOS</span>
          </router-link>
        </li>
        <li class="botones">
          <router-link to="/ranking" class ="btn botonesv">
            <i class="fa-solid fa-ranking-star"></i>
            <span class = "general" :class="{ 'oculto': !isSpanBarraLateral }">RANKING</span>
          </router-link>
        </li>
      </ul>
    </div>


   
    



</template>




<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
@import '@fortawesome/fontawesome-free/css/solid.css';
@import '@fortawesome/fontawesome-free/css/regular.css';



.body
{
    height:0px;
    background-color: #ffffff;
}

.v-icon
{
  z-index: 100;
}

.NAV32 {
  list-style: none; /* Elimina los puntos de la lista */
  display: flex; /* Hace que los elementos de la lista sean flexibles en línea */
  margin-right: 100px; /* Opcional: agrega espacio entre los elementos */
  
  font-family: 'Roboto Slab', serif;
}

.dropdown {
  list-style: none; /* Elimina los puntos de la lista */
  display: flex; /* Hace que los elementos de la lista sean flexibles en línea */
  margin-left: 10px; /* Opcional: agrega espacio entre los elementos */
  
  font-family: 'Roboto Slab', serif;
  margin-right:0px;
}
.dropdown-menu
{
  margin-right: 200px;
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
    margin-left:0px;
    /*margin-left: 310px;*/
  }
  
  .CUALOGO {
    width: 210px;
    height: 42px;
    border: 3px solid black;
  
  
    font-size: 1.6rem;
    font-family: 'FuentePersonalizada', 'Libre Baskerville' ;
    margin-left: -15px; /* Espacio entre el logo y el cuadro del span */
    z-index: 0;
    padding-left: 25px;
    padding-right: 15px;
    padding-top: 0px;
    padding-bottom: 5px;
  }
  .CUALOGO2 {
    width: 150px;
    height: 42px;
    border: 3px solid black;
  
  
    font-size: 1.2rem;
    font-family: 'FuentePersonalizada', 'Libre Baskerville' ;
    margin-left: -15px; /* Espacio entre el logo y el cuadro del span */
    z-index: 0;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 4px;
  }

  /*segunda parte-----------------------------------------------------------------------*/


*{
    margin:0;

    font-family: 'Roboto Slab', serif;
}

.barra-lateral {
    margin-top: 60px !important;
    position: fixed;
    width: 290px; /* Ancho de la barra lateral */
    height: 120vh; /* Altura del 100% del viewport */
    overflow: hidden;
    z-index: 100;
    background-color: #000000; /* Color de fondo */
    color: #ffffff; /* Color del texto */
    padding: 20px 15px;
    transition: width 0.5s ease, padding 0.5s ease; /* Añadir transición para padding */
    align-items: center; /* Centra verticalmente los elementos */
}

.mini-barra-lateral {
    margin-top: 60px !important;

    width: 0px; /* Ancho de la barra lateral */
    height: 120vh; /* Altura del 100% del viewport */
    overflow: hidden;
    background-color: #000000; /* Color de fondo */
    border: 0;
    padding: 20px 0px;
}

/* Estilos para el botón */




.lista-botones {
  list-style-type: none; /* Quita los puntos de la lista */
  padding: 0; /* Elimina el relleno predeterminado de la lista */
}

.lista-botones li {
    list-style: none;
    display: flex;
    margin-bottom: 5px;
}

.botonesv 
{
  /* Estilos generales para el botón con la clase 'botonesv' */
  width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    border:none;
    border-radius: 10px;
    background-color: rgb(0, 255, 21);
    color: rgb(255, 255, 255);
    margin-bottom: 10px;
}


/* Estilos para el enlace del router dentro del botón */

/* Estilos para el icono dentro del botón */
.botonesv .fa-solid 
{
  /* Estilos específicos para el icono dentro del botón */
  min-width: 50px;
  font-size: 30px;

}

.general
{
  width:100px;
    white-space: nowrap;
    font-size: 14px;
    text-align: left;
    opacity:1;
    transition:opacity 0.5s ease;
    transition: opacity 0.5s ease, width 0.5s ease;
    color: white;

}

.general2
{
  width:100px;
    white-space: nowrap;
    font-size: 25px;
    text-align: left;
    opacity:1;
    transition:opacity 0.5s ease;
    transition: opacity 0.5s ease, width 0.5s ease;
    color: white;

}

/* Estilo para cuando el mouse está sobre el botón */
.botonesv:hover {
  background-color: yellow; /* Cambia 'tu-color-hover' al color deseado */
}

/* Estilo para cuando el mouse está sobre el botón, y el span dentro de .general */
.botonesv:hover .general {
  /* Cambia los estilos del span dentro de .general cuando el mouse está sobre el botón */
  color:rgb(101, 42, 165)
}

.botonesv:hover .fa-solid {
  /* Cambia los estilos del span dentro de .general cuando el mouse está sobre el botón */
  color:rgb(101, 42, 165)
}


/* Estilo para cuando el enlace está activo o enfocado, y el span dentro de .general */
.botonesv.router-link-active .general,
.botonesv.router-link-exact-active .general,
.botonesv:focus .general {
  /* Cambia los estilos del span dentro de .general cuando el enlace está activo o enfocado */
  color: brown;
}
/* Estilo para cuando el enlace está activo o enfocado, y el span dentro de .general */
.botonesv.router-link-active .fa-solid,
.botonesv.router-link-exact-active .fa-solid,
.botonesv:focus .fa-solid {
  /* Cambia los estilos del span dentro de .general cuando el enlace está activo o enfocado */
  color: brown;
}

.botonesv.router-link-active,
.botonesv.router-link-exact-active,
.botonesv:focus {
  background-color:aqua; /* Cambia 'tu-color-aqui' al color deseado */
}


.oculto
{
    opacity:0;
    width: 0;
}
/*PARTE 3------------------------------------------------------------------------------------*/

.barra-lateral2 {
  margin-top: 60px;
  position: fixed;
  width: 270px; /* Ancho de la barra lateral */
  height: 120vh; /* Altura del 100% del viewport */
  overflow: hidden;
  background-color: #003f3f; /* Color de fondo */
  color: #000000; /* Color del texto */
  padding: 20px 15px;
  z-index: 100;
  transition: width 0.5s ease;
}

.mini-barra-lateral2 {
  position: fixed;
  width: 80px; /* Ancho de la barra lateral */
  height: 120vh; /* Altura del 100% del viewport */
  background-color: #003f3f; /* Color de fondo */
  color: #000000; /* Color del texto */
  z-index: 100;
}

.barra-lateral2  span
{
    /*border:2px solid blue*/
    width:100px;
    white-space: nowrap;
    font-size: 14px;
    text-align: left;
    opacity:1;
    transition:opacity 0.5s ease;
    transition: opacity 0.5s ease, width 0.5s ease;
    color: white;
    padding-right: 10px;
    text-decoration: none; /* Quita la línea de subrayado */

}


.barra-lateral2.router-link {
  text-decoration: none; /* Quita la línea de subrayado */
}
.barra-lateral2  span.oculto
{
    opacity:0;
    width: 0;
}

.barra-lateral2 .nombre-pagina
{
    margin-top: 1px;
    margin-bottom: 40px;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;

}


.barra-lateral2 .nombre-pagina span

{
    margin-left:15px;
    font-size: 25px;
}


.barra-lateral2 .nombre-pagina i
{
    margin-left: 2px;
    min-width: 50px;
    font-size: 40px;
    cursor: pointer;
    color:aliceblue

}


.barra-lateral2 .boton2{

    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    border:none;
    border-radius: 10px;
    background-color: rgb(0, 255, 21);
    color: rgb(255, 255, 255);
    margin-bottom: 10px;
}

.boton2:hover {
  background-color: #05f6f6; /* Cambia 'tuColorHover' al color deseado al pasar el ratón por encima */
}

/* Estilos para el span dentro de boton2 cuando se pasa el ratón por encima del botón */
.boton2:hover span {
  color:brown; /* Cambia 'tuTextHoverColor' al color deseado al pasar el ratón por encima */
}

.boton2:hover .fa-solid {
  color:brown; /* Cambia 'tuTextHoverColor' al color deseado al pasar el ratón por encima */
}


.barra-lateral2 .boton2 .fa-solid
{
    /*border:2px solid red;*/
    min-width: 50px ;
    font-size: 25px;
    
}

</style>


<script lang="ts">

import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import barralat2 from '../components/barralat2.vue';

export default {
  name: 'headerlog',
  components: {
    barralat2,
  },
  data() {
    return {
      isMiniBarraLateral: false,
      isMiniBarraLateral2: false,
      isSpanBarraLateral2: false,
      isMobileView: false,
      isSpanBarraLateral: false,
      usuarioAutenticado: false,
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
      this.isMiniBarraLateral2 = false;
      this.isSpanBarraLateral2 = false;
    },
    toggle2MiniBarraLateral() {
      if (this.isMiniBarraLateral && this.isSpanBarraLateral) {
        // Realizar la acción solo si ambas variables son false
        this.isMiniBarraLateral = !this.isMiniBarraLateral;
        this.isSpanBarraLateral = !this.isSpanBarraLateral;
      }
    },
    toggle3MiniBarraLateral() {
      this.isMiniBarraLateral2 = !this.isMiniBarraLateral2;
      this.isSpanBarraLateral2 = !this.isSpanBarraLateral2;
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Lógica adicional después de cerrar sesión, si es necesario
          alert('Sesión cerrada exitosamente');
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error.message);
        });
    },
    verificarEstadoAutenticacion() {
      const auth = getAuth();

      onAuthStateChanged(auth, (usuario) => {
        this.usuarioAutenticado = !!usuario;



        if(!this.usuarioAutenticado)
        {
          console.log("NO HAY USUARIO2")
        }
        else{
          console.log("INGRESO UN WEY2")
        }
      });
    },
  },
  mounted() {
    this.checkScreenSize();
    this.verificarEstadoAutenticacion();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
};

</script>


