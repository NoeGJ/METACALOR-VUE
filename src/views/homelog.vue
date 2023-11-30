<template>
    <headerlog/>
    <div class="body">
        <v-img src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2023/05/RECETA-UOR-blog.png" cover class="fill-height" >
        <!--- <barralat2/>-->
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
  
  export default {
    name: 'homelog',
    components: {
      headerlog,
      barralat2,
      Footer1
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
    margin-top: 60px;
    height: 100vh; /* Ocupar toda la altura de la ventana */
  }
  
  /* Eliminar el margen superior de v-img */
  .v-image__image {
    margin-top: 0;
  }
  
  
  </style>
  