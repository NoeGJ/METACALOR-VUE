<template>
  <header1/>
      <div class = "body">
          <v-img src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2023/05/RECETA-UOR-blog.png" cover class="fill-height">
                          <v-form class="mx-5">
                              <v-card class="mx-auto mt-12 mb-5" max-width="500" >
                                  <v-card-title class="text-h6 font-weight-regular justify-space-between ">
                                      <span v-if="step > 1">REGISTRO</span>
                                      
                                  </v-card-title>
                                  <v-window v-model="step">
                                    <v-window-item :value="1">
                                      <v-card-text>
                                        <div class="text-center m-5 mb-10 mt-10">
                                          <h3 class="text-h4 font-weight-light mb-3">
                                              ¡Bienvenido a Metacalor!
                                          </h3>
                                          <h3 class="text-h5 font-weight-light mb-6 text-caption ">
                                              Ingresa tus datos a continuación...
                                          </h3>
                                      </div>
                                      </v-card-text>
                                    </v-window-item>

                                    <v-window-item :value="2">
                                      <v-card-text>
                                        <v-list lines="two" >
                                          <v-list-subheader>Selecciona tu nivel de actividad fisica</v-list-subheader>
                                          <v-list-item  color="warning" v-for="item , i in items" :key="i" :value="item" @click="selectAct(i)">                
                                            <v-list-item-title v-text="item.name"  ></v-list-item-title>                
                                            <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
                                          </v-list-item>                      
                                          <span class="text-red">{{ actividadMessage }}</span>
                                        </v-list>  
                                      </v-card-text>
                                    </v-window-item>

                                    <v-window-item :value="3">
                                      <v-card-text>
                                        <v-radio-group class="mt-10" label="Sexo" v-model="nuevoUsuario.sexo" :rules="[rules.required]" inline>
                                          <v-radio  class="mr-5" label="Hombre" value="H"></v-radio>
                                          <v-radio  label="Mujer" value="M"></v-radio>                      
                                        </v-radio-group>                    
                                        <v-text-field ref="date" v-model="nuevoUsuario.date" class="mb-4" type="date" label="Fecha de nacimiento" :rules="[rules.required]" required></v-text-field>
                                          <v-row>
                                            <v-col>
                                             <v-text-field  ref="altura" v-model="nuevoUsuario.altura" type="text" label="Altura" suffix="cm" :rules="[rules.required, rules.numericPhoneNumber]"  required></v-text-field>
                                            </v-col>
                                            <v-col>
                                            <v-text-field ref="peso" v-model="nuevoUsuario.peso" type="text" label="Kilogramos" suffix="kg" :rules="[rules.required, rules.numericPhoneNumber]"  required></v-text-field>
                                            </v-col>
                                              
                                          </v-row>     
                                          <span class="text-red">{{ actividadMessage }}</span>  
                                      </v-card-text>
                                    </v-window-item>

                                  <v-window-item :value="4">
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
                                  <v-card-text class="text-center">
                                      <div class="text-left">
                                          <h3 class="text-h7 font-weight-light mx-4 mb-2 font-size:10px" >¡BRINDANOS UN POCO DE INFORMACIÓN SOBRE TI!</h3>
                                      </div>
                                      <!--DATOS PARA EL REGTISTRO DE USUARIO-->
                                          <v-text-field n
                                              ref="name" v-model="nuevoUsuario.name" 
                                              label="NOMBRE" type="text" :rules="[rules.required, rules.onlyLetters]" 
                                              prepend-inner-icon="mdi-account" required
                                              class ="mx-5"
                                          ></v-text-field>
                                          <v-text-field 
                                              ref="lastName" v-model="nuevoUsuario.lastname" 
                                              label="APELLIDO PATERNO" type="text" :rules="[rules.required, rules.onlyLetters]" 
                                              prepend-inner-icon="mdi-account" required
                                              class ="mx-5"
                                          ></v-text-field>
                                          <v-text-field 
                                              ref="lastName2" v-model="nuevoUsuario.lastname2" 
                                              label="APELLIDO MATERNO" type="text" :rules="[rules.required, rules.onlyLetters]" 
                                              prepend-inner-icon="mdi-account" required
                                              class ="mx-5"
                                          ></v-text-field>
                                          <v-text-field 
                                              ref="email" v-model="nuevoUsuario.email" label="E-mail" 
                                              type="email"  :rules="[rules.required, rules.email]" 
                                              prepend-inner-icon="mdi-email" required
                                              class="mx-5"
                                          ></v-text-field>
                                          <v-text-field 
                                              ref="phone" v-model ="nuevoUsuario.phone" label="TELÉFONO"
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
                                  </v-card-text>

                      <v-divider></v-divider>
                      <v-alert class ="mx-5" v-if ="error">
                          {{ error }}
                      </v-alert>
                    </v-window-item>
                    </v-window>
                      <v-card-actions class="cardaba mt-0">
                          <v-btn v-if="step > 1" @click="step--">Atras</v-btn>
                          <v-spacer></v-spacer>
                          <v-btn v-if="step < 4" @click="nextStep()">Siguiente</v-btn>
                          <v-btn v-if="step===4" @click="register()">Terminar</v-btn>
                      </v-card-actions>
                  </v-card>
              </v-form>
                      
          </v-img>
      </div>
  <Footer1/>
</template>

<script lang="ts">
import { ref } from 'vue';
import Footer1 from '../components/Footer1.vue';
import header1 from '../components/header.vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Cambiado de signInWithEmailAndPassword a createUserWithEmailAndPassword
import {onMounted} from 'vue'
import "firebase/auth"
import {signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {  addDoc, serverTimestamp} from "firebase/firestore";


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
    usuarioAutenticado: false,
    show2 : false,
    items:  [{ name: 'Sedentaria', text: 'Actividades en posición sentada o de pie: pintar, manejar, trabajo de laboratorio, computación, coser, plantar, cocinar, jugar cartas, tocar un instrumento musical.'}, 
            {name: 'Liviana', text: 'Caminar, trabajos eléctricos, trabajo en restaurantes, limpieza en casa, golf, cuidado de niños, tenis de casa.'},
            { name: 'Moderada', text: 'Caminar vigorosamente, cortar el pasto, bailar, ciclismo en superficie plana, esquiar, tenis, llevar una carga.'},
            {name: 'Intensa', text:'Caminar con carga con pendiente hacia arriba, tala de arboles, excavación manual intensa, básquetbol, escalar, futbol, correr, natación, ciclismo con pendiente, aerobics.'},],

    actividad:null,
    actividadFis: 0,
    formValid:true,
    pass: '',
    repass: null,
    error: '',
    factoresActFis: {'H':[1.2,1.55,1.78,2.10], 'M':[1.2,1.56,1.64,1.82]},
    actividadMessage: '',
    rules: 
    {
      onlyLetters: (value: boolean | string ) => /^[A-Za-z]+$/.test(value) || 'Solo se permiten letras.',
      required: (value : boolean | string) => !!value || 'requerido.',
      numericPhoneNumber: (value: boolean|string) => /^\d+$/.test(value) || 'Ingrese solo números',
      email: (value : boolean | string) => !value || typeof value === 'string' &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) 
      || 'email invalido.',
      counter: (value : boolean | string) => typeof value === 'string' && value.length <= 10   || 'Max',
      counter2: (value : boolean | string) => typeof value === 'string' && value.length <= 15   || 'Max',
      min: (m : boolean | string) => typeof m === 'string' && m.length >= 8 || 'La contraseña debe de contener minimo 8 caracteres',

      security: (value : boolean | string) => 
      typeof value === 'string' && /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{};:'",.<>?/\\|]).*[^<>'";]*$/.test(value) ? true : 'La contraseña debe contar con mayusculas, numeros y por lo menos un caracter especial',
    },
    nuevoUsuario:
    {
      imageData:'',
       email: '',
       phone: '',
       name: '',
       lastname: '',
       lastname2: '',
       sexo: '',
       Edad:0,
       date: null,
       altura:0,
       peso:0,
       Actividad:null,
       ActividadF:0,
    },

  }),
  setup() {
  const usuarioAutenticado = ref(false);

  onMounted(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (usuario) => {
      usuarioAutenticado.value = !!usuario;

      if (!usuarioAutenticado.value) {
        console.log("NO HAY USUARIO");
      } else {
        console.log("INGRESO UN WEY");
      }
    });
  });

  // Devuelve las propiedades y métodos que necesitas en el componente
  return {
    usuarioAutenticado,
  };
},

methods:
{
  nextStep: function(){
    switch (this.step) {
            case 1:
                this.step++
                break;
            case 2:
                this.actividadMessage = '';
                this.actividad == null ? this.actividadMessage = 'Requerido.' : this.step++;
                break;
            case 3:
                this.actividadMessage = '';
                if (!!this.nuevoUsuario.sexo && !!this.nuevoUsuario.date && !!this.nuevoUsuario.altura && !!this.nuevoUsuario.peso) {
                  this.step++;
                } else {
                  this.actividadMessage = 'Requerido.';
                  // Aquí puedes agregar más lógica según tus necesidades
                }
                break;
          default:
            break;
        }        
  },
  selectAct: function(item: any)
      {
         this.nuevoUsuario.Actividad== item ? this.nuevoUsuario.Actividad = null : this.nuevoUsuario.Actividad = item     
         this.actividad== item ? this.actividad = null : this.actividad = item


        console.log(this.nuevoUsuario.Actividad)
      },
  registerUser() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.nuevoUsuario.email, this.pass)
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



    console.log('Nombre:', this.nuevoUsuario.name);
    console.log('actividad fisica:', this.actividadFis);
    console.log('sexoo', this.sexo)
    console.log('date', this.date)
    console.log('altura', this.altura)
    console.log('peso', this.peso)
    console.log('Apellido Paterno:', this.nuevoUsuario.lastname);
    console.log('Apellido Materno:', this.nuevoUsuario.lastname2);
    console.log('Email:', this.nuevoUsuario.email);
    console.log('Teléfono:', this.nuevoUsuario.phone);
    console.log('Contraseña:', this.pass);
    console.log('Confirmar Contraseña:', this.repass);

    console.log('Entró a la función register');
    if (this.nuevoUsuario.name && this.nuevoUsuario.lastname && this.nuevoUsuario.lastname2 && this.nuevoUsuario.email && this.nuevoUsuario.phone && this.pass && this.repass) {
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

      async agregarUsuario() {
      try {
        const db = getFirestore();
        const usuariosRef = collection(db, 'USUARIOS2');
      
        // Agrega un nuevo documento con el objeto nuevoAlimento y una marca de tiempo
        await addDoc(usuariosRef, {
          ...this.nuevoUsuario,
          timestamp: serverTimestamp()
        });

        console.log('Usuario agregado correctamente');
        
        // Limpia el formulario después de agregar el alimento
        this.nuevoUsuario = {
          imageData:'',
          email: '',
          phone: '',
          name: '',
         lastname: '',
         lastname2:'',
        sexo:'',
          Edad:0,
         date: null,
          altura:0,
          peso:0,
          Actividad:null,
          ActividadF:0,
        
        };
      } catch (error) {
        console.error('Error al agregar usuario:', error.message);
      }
    },

      async obtenerDatosUsuario(uid) {
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
},

}


}
</script>





<style scoped>

.body
{
  margin-top:60px ;
  height: 190vh; /* Ocupar toda la altura de la ventana */
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

