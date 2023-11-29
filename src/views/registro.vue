<template>
    <header1/>
        <div class ="body">
            <v-img src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2023/05/RECETA-UOR-blog.png" cover class="fill-height">
                <v-form class="mx-5" >
                    <v-card class="mx-auto mt-12 mb-5" max-width="500" >
                        <v-card-title class="text-h6 font-weight-regular justify-space-between ">
                            <span>{{ tituloActual }}</span>
                        </v-card-title>
                        <v-window v-model="step">


                    <v-window-item :value="1">
                        <div class="text-center m-5 mb-10 mt-10">
                            <h3 class="text-h4 font-weight-light mb-3">
                                ¡Bienvenido a Metacalor!
                            </h3>
                            <h3 class="text-h5 font-weight-light mb-6 text-caption ">
                                Ingresa tus datos a continuación...
                            </h3>
                            <img class="chopper" src="../assets/chopper.png">
                        </div>
                    </v-window-item>


                    <v-window-item :value="2">
                        <v-card-text class="text-center">
                            <div class="text-left">
                                <h3 class="text-h7 font-weight-light mx-4 mb-2 font-size:10px" >¡BRINDANOS UN POCO DE INFORMACIÓN SOBRE TI!</h3>
                            </div>
                            <!--DATOS PARA EL REGTISTRO DE USUARIO-->
                                <v-text-field 
                                    ref="name" v-model="name" 
                                    label="NOMBRE" type="text" :rules="[rules.required, rules.onlyLetters]" 
                                    prepend-inner-icon="mdi-account" required
                                    class ="mx-5"
                                ></v-text-field>
                                <v-text-field 
                                    ref="lastName" v-model="lastName" 
                                    label="APELLIDO PATERNO" type="text" :rules="[rules.required, rules.onlyLetters]" 
                                    prepend-inner-icon="mdi-account" required
                                    class ="mx-5"
                                ></v-text-field>
                                <v-text-field 
                                    ref="lastName2" v-model="lastName2" 
                                    label="APELLIDO MATERNO" type="text" :rules="[rules.required, rules.onlyLetters]" 
                                    prepend-inner-icon="mdi-account" required
                                    class ="mx-5"
                                ></v-text-field>
                                <v-text-field 
                                    ref="email" v-model="email" label="E-mail" 
                                    type="email"  :rules="[rules.required, rules.email]" 
                                    prepend-inner-icon="mdi-email" required
                                    class="mx-5"
                                ></v-text-field>
                                <v-text-field label="TELÉFONO"
                                    prepend-inner-icon="mdi-phone"
                                    class="mx-5"
                                    type="text" 
                                    :rules="[rules.required, rules.numericPhoneNumber, rules.counter]"
                                ></v-text-field>
                                <v-text-field 
                                    ref="pass" v-model="pass" label="CONTRASEÑA" :type="show1 ? 'text' 
                                    : 'password'" :rules="[rules.required, rules.min, rules.counter2, rules.security]" prepend-inner-icon="mdi-key-variant" 
                                    :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                                    @click:append-inner="show1 = !show1" required
                                    class ="mx-5"
                                ></v-text-field>
                                <v-text-field 
                                    ref="repass" v-model="repass" label="CONFIRMAR CONTRASEÑA" :type="show1 ? 'text' 
                                    : 'password'" :rules="[rules.required, rules.min, rules.counter2, rules.security]" prepend-inner-icon="mdi-key-variant" 
                                    :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                                    @click:append-inner="show1 = !show1" required
                                    class ="mx-5"
                                    ></v-text-field>
                                    <span class="text-red">{{ actividadMessage }}</span>
                        </v-card-text>
                    </v-window-item>
                    <v-window-item :value="3">
                        <v-card-text>
                          <h3>¡MUESTRANOS TU MEJOR ROSTRO!</h3>
                          <div class="photo-upload">
                            <div class="file-upload-form">
                              <input
                                type="file"
                                @change="previewThumbnail"
                                name="photo-upload-button"
                                id="photo-upload-button"
                                accept="image/*"
                                class="input-file"
                              />
                              <label for="photo-upload-button" style="font-size: 11px;">CARGA TU FOTO EN FORMATO .JPG</label>
                            </div>
                            <div class="image-preview" v-if="imageData.length > 0">
                              <img :src="imageData" class="image-preview__img" />
                            </div>
                          </div>
                        </v-card-text>

                    </v-window-item>

                    <v-window-item :value="4">
                    <h3 class="text-h7 font-weight-light mx-4">¡Queremos conocerte mejor!</h3>
                    <v-list lines="two">
                                <v-list-subheader>
                                    <b>¡BRINDAMOS UN POCO DE INFORMACIÓN!</b>
                                </v-list-subheader>
                    </v-list>                
                    </v-window-item>

                    <v-window-item :value="5">
                        <h3 class="text-h7 font-weight-light mx-4">¡YA CASI TERMINAMOS!</h3>
                    <v-card-text>
                    </v-card-text>
                    </v-window-item>
            </v-window>

            <v-divider></v-divider>
            <v-card-actions class="cardaba mt-0">
                <v-btn v-if="step > 1" variant="text" @click="step--">Atras</v-btn>
                <v-spacer></v-spacer>
                <v-btn v-if="step < 5" variant="text" @click="nextStep()">Siguiente</v-btn>
                <v-btn v-if="step == 5" variant="text" @click="submit()"  >Terminar</v-btn>
            </v-card-actions>
        </v-card>
      </v-form>
   </v-img>
        </div>
    <Footer1/>
</template>

<script lang="ts">
import Footer1 from '../components/Footer1.vue';
import header1 from '../components/header.vue';

export default {
  name: 'Register',
  components: {
    header1,
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
      email: null,
      phone: null,
      pass: null,
      repass: null,
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
        nextStep: function () 
        {
          switch(this.step)
          {
              case 1:
                  this.step++;
              break;
              case 2:
                  this.actividadMessage = ''
                  

              break;

          }
            // Lógica para avanzar al siguiente paso
            if (this.step < 5 && this.formValid) {
            this.step++;
            } else {
            // Muestra un mensaje de error o realiza otra acción si el formulario no es válido
            console.log('Formulario no válido');
            }
        },

        
        submit: function () 
        {
            // Lógica para enviar el formulario al final
            if (this.formValid) {
            console.log('Formulario enviado');
            // Puedes agregar la lógica adicional aquí, como enviar los datos al servidor.
            } else {
            // Muestra un mensaje de error o realiza otra acción si el formulario no es válido
            console.log('Formulario no válido');
            }
        },
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
    },
    computed: 
    {
        tituloActual() 
        {
        // Lógica para determinar el título según el paso actual
            switch (this.step) 
            {
                case 1:
                return '';
                case 2:
                return 'Crear cuenta';
                
                case 3:
                return 'FOTO';
                
                case 4:
                return 'Nivel de actividad física';

                default:
                return 'Datos físicos';
                
            }
        },
    },
};
</script>


<style scoped>
  .body
  {
    margin-top:60px ;
    height: 130vh; /* Ocupar toda la altura de la ventana */
  }
  /* Eliminar el margen superior de v-img */
  .v-image__image 
  {
    margin-top: 0;
  }


/*-----------------------------------------------------------------------------------------------------------------------*/
.chopper
{
    width: 200px;
    height: 200px;
    vertical-align: middle; /* Ajusta la posición vertical */
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