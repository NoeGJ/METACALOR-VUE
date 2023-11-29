<template>
    <header1/>
    <div class="body">
    <v-img src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2023/05/RECETA-UOR-blog.png" cover class="fill-height" >
        <v-form class="mx-5" >
            <v-card class="mx-auto mt-10" max-width="500"  elevation="10">
                <v-card-text class="text-center">

                    <v-card-title class="text-center">¡BIENVENIDO A METACALOR!</v-card-title>
                    <v-text-field class="mt-10 mb-5 mx-5" type="text" label="Nombre de usuario/Correo" prepend-inner-icon="mdi-account" ></v-text-field>
                    <v-text-field class="mt-5 mb-5 mx-5" :type="!show ? 'password' : 'text'" prepend-inner-icon="mdi-key-variant" label="Contraseña" 
                    :append-inner-icon="!show ? 'mdi-eye': 'mdi-eye-off'" @click:append-inner="show = !show" ></v-text-field>                
                    <v-btn class="acc1 px-10 my-5 text-center bg-yellow-darken-2">Acceder</v-btn>
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


<script lang="ts" >
import Footer1 from '../components/Footer1.vue';
import header1 from '../components/header.vue';
export default {
  name: 'Login',
  components: {
    header1,
    Footer1},
        data: () =>  ({
            show: false,            
        }), methods: {

        },
    }
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