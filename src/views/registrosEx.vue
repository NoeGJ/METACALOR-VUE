<template>
  <header1/>
  <div class="body">
  <v-img src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2023/05/RECETA-UOR-blog.png" cover class="fill-height" >
      <v-form class="mx-5" >
          <v-card class="mx-auto mt-10" max-width="500"  elevation="10">
              <v-card-text class="text-center">

                  <v-card-title class="text-center">¡BIENVENIDO A METACALOR!</v-card-title>
                  <v-text-field class="mt-10 mb-5 mx-5" type="email" label="Nombre de usuario/Correo"  prepend-inner-icon="mdi-account" v-model="email" ></v-text-field>
                  <v-text-field class="mt-5 mb-5 mx-5" :type="!show ? 'password' : 'text'" prepend-inner-icon="mdi-key-variant" v-model ="pass" label="Contraseña" 
                  :append-inner-icon="!show ? 'mdi-eye': 'mdi-eye-off'" @click:append-inner="show = !show" ></v-text-field>                
                  <v-btn class="acc1 px-10 my-5 text-center bg-yellow-darken-2" type ="submit" @click.prevent="authUser">Acceder</v-btn>
                  <div class= "textos1">
                  <span class="text-center">¿No tienes cuenta? <router-link to="/register">Registrate</router-link></span>
                  <span class="text-blue text-decoration-underline"></span>
              </div>
              </v-card-text>

          </v-card>
      </v-form>
  </v-img>
</div>
<Footer1/>
</template>

<script lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import Footer1 from '../components/Footer1.vue';
import header1 from '../components/header.vue';

export default {
  name: 'Login',
  components: {
    header1,
    Footer1,
  },

  data: () => ({
      step: 1,
      show : false,

      items:  [{ name: 'Sedentaria', text: 'Actividades en posición sentada o de pie: pintar, manejar, trabajo de laboratorio, computación, coser, plantar, cocinar, jugar cartas, tocar un instrumento musical.'}, 
              {name: 'Liviana', text: 'Caminar, trabajos eléctricos, trabajo en restaurantes, limpieza en casa, golf, cuidado de niños, tenis de casa.'},
              { name: 'Moderada', text: 'Caminar vigorosamente, cortar el pasto, bailar, ciclismo en superficie plana, esquiar, tenis, llevar una carga.'},
              {name: 'Intensa', text:'Caminar con carga con pendiente hacia arriba, tala de arboles, excavación manual intensa, básquetbol, escalar, futbol, correr, natación, ciclismo con pendiente, aerobics.'},],
      actividad: null,
      sexo: null,
      date: null,
      altura: null,
      peso: null,
      name: null,
      lastName: null,
      email: '',
      phone: null,
      pass: '',
      repass: null,
      factoresActFis: {'H':[1.2,1.55,1.78]},
      actividadMessage: '',
      rules: {
        required: (value : boolean | string) => !!value || 'requerido.',
        email: (value : boolean | string) => !value || typeof value === 'string' &&
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) 
        || 'email invalido.',
        counter: (value : boolean | string) => typeof value === 'string' && value.length <= 10   || 'Max',
        min: (m : boolean | string) => typeof m === 'string' && m.length >= 8 || 'La contraseña debe de contener minimo 8 caracteres',
        security: (value : boolean | string) => 
        typeof value === 'string' && /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{};:'",.<>?/\\|]).*[^<>'";]*$/.test(value) ? true : 'La contraseña debe contar con mayusculas, numeros y por lo menos un caracter especial',
      },

    }),

  methods: {
    authUser() {
  const auth = getAuth();
  
  signInWithEmailAndPassword(auth, this.email, this.pass)
    .then((userCredential) => {
      // Después de iniciar sesión, obtén la información del usuario
      const user = userCredential.user;

      // Muestra los datos del usuario en la consola
      console.log("Usuario autenticado:", user);

      alert('Éxito!');
      this.$router.push('/homelog');
    })
    .catch((error) => {
      alert('ERROR!' + error.message);
    });
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
  },



};
</script>

<style scoped>

.body
{
  margin-top:60px ;

height: 100vh; /* Ocupar toda la altura de la ventana */
}

/* Eliminar el margen superior de v-img */
.v-image__image {
margin-top: 0;
}
  /*color del cad*/
  .v-card
  {
      background-color: rgba(10, 0, 0, 0.807) ;
      border-radius: 10px;

  }

  .v-card-title
  {
      color:aliceblue;
      font-size: 21px;

  }

      .v-text-field
      {          
          border-radius: 4PX;  
          height:56px;
          background-color:rgb(255, 255, 255);
      }
      
      .v-text-field:hover{
          background-color:rgb(47, 255, 255);
      
      }

      .v-text-field label {
          
          background-color: aqua;
          border-radius: 10px;
          color: rgb(255, 0, 0);
      }


      .v-icon-size-default
      {
          color:rgb(175, 0, 0)
      }



      /*TEXTOS DE ABAJO*/
      .textos1 span
      {
          color:aliceblue;
      }

      .textos1 a 
      {
          color: #ff0000; /* Cambia el color según tu preferencia (en este caso, rojo) */
          text-decoration: none; /* Elimina el subrayado */
      }

      .textos1 a:hover{
          color:greenyellow;
      
      }

      .V-text-field {
  border-radius: 100px; /* Radio de borde personalizado */
}


</style>