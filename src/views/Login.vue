<template>
    <v-img src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2023/05/RECETA-UOR-blog.png" cover class="fill-height">
        <v-form>
            <v-card class="mx-auto mt-10" max-width="500"  elevation="10">
                <v-card-text class="text-center">
                    <v-card-title class="text-center">Bienvenido</v-card-title>
                    <v-text-field class="mt-10 mb-5 mx-5" type="text" label="Nombre de usuario/Correo" prepend-inner-icon="mdi-account" ></v-text-field>
                    <v-text-field class="mt-5 mb-5 mx-5" :type="!show ? 'password' : 'text'" prepend-inner-icon="mdi-key-variant" label="Contraseña" 
                    :append-inner-icon="!show ? 'mdi-eye': 'mdi-eye-off'" @click:append-inner="show = !show" ></v-text-field>                
                    <v-btn class="px-10 my-5 text-center bg-yellow-darken-2">Acceder</v-btn>
                    <div>
                    <span class="text-center">¿No tienes cuenta? <router-link to="/register">Registrate</router-link></span>
                    <span class="text-blue text-decoration-underline"></span>
                </div>
                </v-card-text>
            </v-card>
        </v-form>
    </v-img>
</template>
  
<script lang="ts" >
    export default {
        data: () =>  ({
            show: false,            
        }), methods: {

        },
    }
</script>
  