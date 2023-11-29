<template>
    <headerlog/>
    <div class="body">
        <v-img src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2023/05/RECETA-UOR-blog.png" cover class="fill-height" >
        <!--- <barralat2/>-->
        </v-img>
</div>
    <Footer1/>
  </template>
  
  <script lang="ts" >
  import Footer1 from '../components/Footer1.vue';
  import headerlog from '../components/headerlog.vue';
  import barralat2 from '@/components/barralat2.vue';
  export default {
    name: 'homelog',
    components: {
      headerlog,
      barralat2,
      Footer1},
  };
  </script>
  
  <style scoped>
  .body {
    margin-top: 60px;
    height: 100vh; /* Ocupar toda la altura de la ventana */
  }
  
  /* Eliminar el margen superior de v-img */
  .v-image__image {
    margin-top: 0;
  }
  
  
  </style>
  