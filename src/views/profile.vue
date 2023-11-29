<template>
    <headerlog/>
            <div class="body" :class="{'bodyresponsive':isMobileView}">

<v-row>
<v-col class="text-center">
    <div>
        <!-- Título centrado -->
        <v-card-title class="text-center">
            Perfil General
        </v-card-title>

        <!-- Avatar -->
        <v-avatar image="https://i.pinimg.com/originals/f5/8a/37/f58a37e92275010d4725b957b50b87e6.gif"
            size="150"></v-avatar>

        <!-- Campos de información del perfil -->
        <v-card-text>
            <v-text-field label="Nombre" v-model="nombre" outlined dense solo 
            prepend-icon="mdi-account"
                append-icon="mdi-pencil" 
                :disabled="!edicionActivada"
                :rules="[rules.required]"></v-text-field>

            <v-text-field label="Nombre de Usuario" v-model="nombreUsuario" outlined dense solo
                prepend-icon="mdi-account-circle" append-icon="mdi-pencil"
                :disabled="!edicionActivada"
                :rules="[rules.required, rules.counter]"></v-text-field>

            <v-text-field label="Correo" v-model="correo" outlined dense solo prepend-icon="mdi-email"
                append-icon="mdi-pencil" :disabled="!edicionActivada"
                :rules="[rules.required, rules.email]"></v-text-field>

            <v-text-field label="Teléfono" v-model="telefono" outlined dense solo prepend-icon="mdi-phone"
                append-icon="mdi-pencil" :disabled="!edicionActivada"
                :rules="[rules.required, rules.counter]"></v-text-field>

            <!-- Botón para activar/desactivar edición -->
            <v-btn @click="toggleEdicion" color="primary" outlined>
                {{ edicionActivada ? 'Guardar' : 'Editar' }}
            </v-btn>

        </v-card-text>
    </div>
</v-col>

<v-col class="text-center">

    <!-- Título centrado -->
    <v-card-title class="text-center">
        Perfil Físico
    </v-card-title>

    <!-- Combobox de nivel de actividad física y campos modificables -->
    <v-card-text>
        <v-row>
            <v-col cols="12" md="6">
                <v-select v-model="nivelActividad" :items="nivelesActividad" label="Nivel de Actividad Física"
                    outlined dense :disabled="!edicionActivadaFisico"></v-select>
            </v-col>

            <v-col cols="12" md="6">
                <v-text-field v-model="peso" label="Peso (kg)" outlined dense solo
                    prepend-icon="mdi-weight-kilogram" append-icon="mdi-pencil" :rules="pesoRules"
                    :disabled="!edicionActivadaFisico"></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
                <v-text-field v-model="estatura" label="Estatura (cm)" outlined dense solo
                    prepend-icon="mdi-human-male-height" append-icon="mdi-pencil" :rules="estaturaRules"
                    :disabled="!edicionActivadaFisico"></v-text-field>
            </v-col>


        </v-row>

        <!-- Resultado del IMC (no modificable) -->
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="imc" label="IMC" outlined dense solo readonly disabled></v-text-field>
            </v-col>
        </v-row>

        <!-- Selección de sexo con iconos -->
        <v-row>
            <v-col cols="6" md="3">
                <v-btn @click="seleccionarSexo('masculino')" icon>
                    <img src="https://i.pinimg.com/564x/2a/a3/01/2aa301d6debe3e52181b2331a42e3f5b.jpg" alt="Icono Masculino" width="200" height="160">
                </v-btn>
            </v-col>

            <v-col cols="6" md="3">
                <v-btn @click="seleccionarSexo('femenino')" icon>
                    <img src="https://i.pinimg.com/564x/1f/79/06/1f7906d3fafb7418bbed6eb475de9c09.jpg" alt="Icono Femenino" width="120" height="100">
                </v-btn>
            </v-col>
        </v-row>
    </v-card-text>

    <!-- Botón para ir a recomendaciones -->
    <v-col cols="12" md="6" class="mt-15">
        <v-btn color="primary" @click="irARecomendaciones" outlined>
            Ir a Recomendaciones
        </v-btn>
    </v-col>

    <!-- Botón para activar/desactivar edición -->
    <v-btn @click="otraEdicion" color="primary" outlined>
        {{ edicionActivadaFisico ? 'Guardar' : 'Editar' }}
    </v-btn>
</v-col>

<v-col>
    <v-card-title class="text-center">
        Insignia
    </v-card-title>


    <!-- Insignia con la imagen proporcionada -->
    <v-img src="https://cdn-icons-png.flaticon.com/512/771/771222.png" alt="Insignia" class="mx-auto mt-4"></v-img>

</v-col>

</v-row>

</div>
    <Footer1/>
</template>

<script lang="ts">
import { ref } from 'vue';
import Footer1 from '../components/Footer1.vue';
import headerlog from '../components/headerlog.vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Cambiado de signInWithEmailAndPassword a createUserWithEmailAndPassword


export default {
  name: 'Profile',
  components: {
    headerlog,
    Footer1,
  },
  data: () => ({
      step: 1,
      imageData:'',
      show1 : false,
      show2 : false,
      items:  [{ name: 'Sedentaria', text: 'Actividades en posición sentada o de pie: pintar, manejar, trabajo de laboratorio, computación, coser, plantar, cocinar, jugar cartas, tocar un instrumento musical.'}, 
              {name: 'Liviana', text: 'Caminar, trabajos eléctricos, trabajo en restaurantes, limpieza en casa, golf, cuidado de niños, tenis de casa.'},
              { name: 'Moderada', text: 'Caminar vigorosamente, cortar el pasto, bailar, ciclismo en superficie plana, esquiar, tenis, llevar una carga.'},
              {name: 'Intensa', text:'Caminar con carga con pendiente hacia arriba, tala de arboles, excavación manual intensa, básquetbol, escalar, futbol, correr, natación, ciclismo con pendiente, aerobics.'},],
      actividad: null,
      formValid:true,
      sexo: null,
      date: null,
      altura: null,
      peso: null,
      name: null,
      lastName: null,
      lastName2: null,
      email: '',
      phone: null,
      pass: '',
      repass: null,
      error: '',
      factoresActFis: {'H':[1.2,1.55,1.78]},
      actividadMessage: '',
      rules: 
      {
        onlyLetters: (value: boolean | string ) => /^[A-Za-z]+$/.test(value) || 'Solo se permiten letras.',
        required: (value : boolean | string) => !!value || 'requerido.',
        numericPhoneNumber: (value: boolean|string) => /^\d+$/.test(value) || 'Ingrese solo números en el número de teléfono.',
        email: (value : boolean | string) => !value || typeof value === 'string' &&
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) 
        || 'email invalido.',
        counter: (value : boolean | string) => typeof value === 'string' && value.length <= 10   || 'Max',
        counter2: (value : boolean | string) => typeof value === 'string' && value.length <= 15   || 'Max',
        min: (m : boolean | string) => typeof m === 'string' && m.length >= 8 || 'La contraseña debe de contener minimo 8 caracteres',

        security: (value : boolean | string) => 
        typeof value === 'string' && /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{};:'",.<>?/\\|]).*[^<>'";]*$/.test(value) ? true : 'La contraseña debe contar con mayusculas, numeros y por lo menos un caracter especial',
      },

    }),

  methods:
  {
    registerUser() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.pass)
        .then(() => 
        {
          alert('Registro exitoso!');
          // Puedes agregar aquí cualquier lógica adicional después de que el usuario se registre
          this.$router.push('/login');
        })
        .catch((error) => {
          alert('Error en el registro: ' + error.message);
        });
    },

    register() {
      this.error = '';
      console.log('Nombre:', this.name);
      console.log('Apellido Paterno:', this.lastName);
      console.log('Apellido Materno:', this.lastName2);
      console.log('Email:', this.email);
      console.log('Teléfono:', this.phone);
      console.log('Contraseña:', this.pass);
      console.log('Confirmar Contraseña:', this.repass);

      console.log('Entró a la función register');
      if (this.name && this.lastName && this.lastName2 && this.email && this.phone && this.pass && this.repass) {
        console.log('Todos los campos fueron llenados');
        this.registerUser(); // Llama a la función para registrar el usuario
      } else {
        this.error = 'Todos los campos son requeridos';
        console.log('Condiciones no cumplidas');
      }
    },


    // ...



        previewThumbnail(event) 
        {
          const input = event.target;
          if (input.files && input.files[0]) {
            const file = input.files[0];
            
            // Verifica si la extensión del archivo es JPG
            const isJpg = /\.(jpg|jpeg)$/i.test(file.name);

            if (!isJpg) {
              alert('Por favor, selecciona un archivo JPG.');
              // Puedes limpiar el input o manejar la situación de otra manera
              input.value = '';
              return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
              this.imageData = e.target.result;
            };
            reader.readAsDataURL(file);
          }
        },

  }


}
</script>





<style scoped>

.body
  {
    margin-top:60px ;
    height:200vh; /* Ocupar toda la altura de la ventana */
  }
  
  .bodyresponsive
  {
    margin-top:60px ;
    height:200vh; /* Ocupar toda la altura de la ventana */
  }

  .photo-upload {
  height: auto;
  margin: 20px 0;
  position: relative;
  text-align: center;
  width: 100%;
}
.input-file {
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  z-index: -1;
}
.input-file:focus + label {
  border-color: #d3007f;
}
.input-file + label {
  background: transparent;
  border: 2px solid #bc0087;
  border-radius: 50%;
  color: #5b5b5b;
  display: inline-block;
  font-size: 12pt;
  font-weight: 500;
  height: 200px;
  line-height: 200px;
  text-align: center;
  width: 200px;
}
.input-file + label:hover,
.input-file + label:focus {
  border-color: #bc0087;
  cursor: pointer;
}
.image-preview {
  border-radius: 50%;
  height: 200px;
  left: -4px;
  margin: 0 auto;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
}
.image-preview__img {
  border: 6px solid #bc0087;
  border-radius: 50%;
  height: 200px;
  margin-left: 2px;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
  width: 200px;
}

.image-preview__img:hover {
  border: #00ff00; /* Cambiamos solo el color del borde a verde al pasar el ratón sobre la imagen */
}

</style>
