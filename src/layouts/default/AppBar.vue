<template>
  <v-app-bar :elevation="10" flat color="#ff5733"  >
      <v-app-bar-nav-icon >
      <v-img width="50"  aspect-ratio="4/3" src="../../assets/LOGO_MC3.png" cover/>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="d-none d-sm-flex">
      Metacalor
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <router-link to="/"  ><v-btn variant="text" >INICIO</v-btn></router-link>

    <router-link to="/login"><v-btn variant="text" >LOGIN</v-btn></router-link>

    <router-link to="/register"><v-btn variant="text">REGISTRO</v-btn></router-link>
  </v-app-bar>
</template>

<style scoped>

a { text-decoration: none; color: inherit; }
</style>


<script lang="ts" setup>



</script>
