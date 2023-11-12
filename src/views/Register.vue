<template>
  <v-img src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2023/05/RECETA-UOR-blog.png" cover class="fill-height">
        <v-form ref="form">
        <v-card class="mx-auto mt-6" max-width="500"  elevation="10" >
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
                    </div>
                </v-window-item>
                <v-window-item :value="2">
                  <v-card-text class="text-center">
                    
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
                  <h3 class="text-h7 font-weight-light mx-4">¡Queremos conocerte mejor!</h3>
                  <v-card-text class="text-center">
                    
                    <v-radio-group class="mt-10" label="Sexo" v-model="sexo" :rules="[rules.required]" inline>
                      <v-radio  class="mr-5" label="Hombre" value="H"></v-radio>
                      <v-radio  label="Mujer" value="M"></v-radio>                      
                    </v-radio-group>                    
                    <v-text-field ref="date" v-model="date" class="mb-4" type="date" label="Fecha de nacimiento" :rules="[rules.required]" required></v-text-field>
                    <v-row>
                    <v-col>
                    <v-text-field  ref="altura" v-model="altura" type="text" label="Altura" suffix="cm" :rules="[rules.required]" @keypress="($event: KeyboardEvent) => isInteger($event)" required></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field ref="peso" v-model="peso" type="text" label="Kilogramos" suffix="kg" :rules="[rules.required]" @keypress="($event: KeyboardEvent) => isFloat($event)" required></v-text-field>
                  </v-col>
                </v-row>              
                  </v-card-text>        
                </v-window-item>

                <v-window-item :value="4">
                  <v-card-text>
                    <div class="text-left">
                      <h3 class="text-h7 font-weight-light mx-4 mb-2" >¡Ya casi terminados!</h3>
                    </div>
                    <v-text-field ref="name" v-model="name" label="Nombre" type="text" :rules="[rules.required]" prepend-inner-icon="mdi-account" required></v-text-field>
                    <v-text-field ref="lastName" v-model="lastName" label="Apellidos" type="text" :rules="[rules.required]" prepend-inner-icon="mdi-account" required></v-text-field>
                    <v-text-field ref="email" v-model="email" label="E-mail" type="email"  :rules="[rules.required, rules.email]" prepend-inner-icon="mdi-email" required></v-text-field>
                    <v-text-field ref="phone" v-model="phone" label="Telefono" type="text" :rules="[rules.required]" maxlength="10" prepend-inner-icon="mdi-phone" required></v-text-field>
                    <v-text-field ref="pass" v-model="pass" label="Contraseña" :type="show1 ? 'text' : 'password'" :rules="[rules.required, rules.min]" prepend-inner-icon="mdi-key-variant" 
                    :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append-inner="show1 = !show1" required></v-text-field>
                    <v-text-field ref="repass" v-model="repass" label="Confirmar contraseña" :type="show2 ? 'text' : 'password'" :rules="[rules.required]" prepend-inner-icon="mdi-key-variant" 
                    :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" @click:append-inner="show2 = !show2" required></v-text-field>
                  </v-card-text>
                </v-window-item>
            </v-window>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn v-if="step > 1" variant="text" @click="step--">Atras</v-btn>
                <v-spacer></v-spacer>
                <v-btn v-if="step < 4" variant="text" @click="nextStep()">Siguiente</v-btn>
                <v-btn v-if="step == 4" variant="text" @click="submit()"  >Terminar</v-btn>
            </v-card-actions>
        </v-card>
      </v-form>
   </v-img>
  </template>
  
<script lang="ts" >
import { DefineComponent } from 'vue';

export default {
    data: () => ({
      step: 1,
      show1 : false,
      show2 : false,
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
      email: null,
      phone: null,
      pass: null,
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

    }), methods: {
        isInteger: function(event: KeyboardEvent){
          
          if(!/^\d$/.test(event.key)) event.preventDefault()

          const inputSoFar = this.altura + event.key;
          if (!!this.altura && !/^[1-9]\d{0,2}$/.test(inputSoFar)) {
            event.preventDefault();
            }
        },
        isFloat: function(event: KeyboardEvent){

          if(!/^[0-9]*[.]?[0-9]{0,2}$/.test(event.key)) event.preventDefault()


        },
        selectAct: function(item: any){
           this.actividad == item ? this.actividad = null : this.actividad = item     
                      
          console.log(this.actividad)
        },
        nextStep: function(){
          switch (this.step) {
            case 1:
              this.step++
              break;
            case 2:
              this.actividadMessage = ''
              this.actividad == null ? this.actividadMessage = 'Requerido.' : this.step++
              break;
            case 3:
              if( !!this.sexo && !!this.date && !!this.altura && !!this.peso)
                this.step++
              break
            default:
              break;
          }        
        },
         submit: async function(){
          
          (this.$refs.form as DefineComponent<{ validate: () => boolean }>).validate().then( (success: any) => {
            if(!success.valid){
            console.log("not valid")
            return
            }

            if(this.pass !== this.repass){
              alert('Las contraseñas no coinciden')
              return
            }

              console.log(this.actividad, this.sexo,
      this.date,
      this.altura,
      this.peso,
      this.name,
      this.lastName,
      this.email,
      this.phone,
      this.pass,
      this.repass,)
            
          })

        },
    },

    computed: {
        tituloActual() {
        switch (this.step) {
          case 1:
            return ''
          case 2:
            return 'Nivel de actividad fisica'
          case 3:
            return 'Datos Fisicos' 
          default:
            return 'Crear cuenta'
        }
      },
        form(){
         return {
           actividad: this.actividad,
           sexo: this.sexo,
           name: this.name,
           date: this.date,
           altura: this.altura,
           peso: this.peso,
           lastName: this.lastName,
           email: this.email,
           phone: this.phone,
           pass: this.pass,
           repass: this.repass,          

         }
      },
    },
  }

</script>