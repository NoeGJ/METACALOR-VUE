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

            <v-card-title class="text-center">
                Insignia
            </v-card-title>


            <!-- Insignia con la imagen proporcionada -->
            <v-img src="https://cdn-icons-png.flaticon.com/512/771/771222.png" alt="Insignia" class="mx-auto mt-4" style="width: 100px; height: 100px;"></v-img>

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



    </v-row>

    </div>
    <Footer1/>
   
</template>

<script lang ="ts">
import Footer1 from '../components/Footer1.vue';
import headerlog from '../components/headerlog.vue';


export default {
    name: 'perfil',
    components: 
    {
      headerlog,
      Footer1
    
    },
    
    data() {
        return {
            isMobileView: false,
            nombre: 'Brayan',
            nombreUsuario: 'brayan_bh',
            correo: 'brayan.bautista0901@alumnos.udg.mx',
            telefono: '3312345678',
            nivelesActividad: ['SEDENTARIA', 'LIVIANA', 'MODERADA', 'INTENSA'],
            nivelActividad: 'MODERADA',
            peso: '65',
            estatura: '170',
            imc: '',
            sexo: '', // 'masculino' o 'femenino'
            edicionActivada: false,
            edicionActivadaFisico: false,
            rules: {
                required: (value) => !!value || 'Requerido.',
                email: (value) =>
                    !value ||
                    (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
                        ? true
                        : 'Email inválido.'),
                counter: (value) =>
                    typeof value === 'string' && value.length <= 10 || 'Máximo 10 caracteres.',
                min: (value) =>
                    typeof value === 'string' && value.length >= 8 || 'La contraseña debe tener al menos 8 caracteres.',
                security: (value) =>
                    typeof value === 'string' &&
                        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{};:'",.<>?/\\|]).*[^<>'";]*$/.test(value)
                        ? true
                        : 'La contraseña debe contener mayúsculas, números y al menos un carácter especial.',
            },
        };

    },
    watch: {
        peso: 'calcularIMC',
        estatura: 'calcularIMC',
    },
    

    methods: {
        calcularIMC() {
            // Lógica para calcular el IMC (Índice de Masa Corporal)
            if (this.peso && this.estatura) {
                const pesoFloat = parseFloat(this.peso);
                const estaturaFloat = parseFloat(this.estatura) / 100; // Convertir cm a metros
                const imc = pesoFloat / (estaturaFloat * estaturaFloat);
                this.imc = imc.toFixed(2);
            }
        },

        seleccionarSexo(sexo) {
            this.sexo = sexo;
        },
        toggleEdicion() {
            this.edicionActivada = !this.edicionActivada;
        },

        otraEdicion() {
            this.edicionActivadaFisico = !this.edicionActivadaFisico;
        },

        checkScreenSize() {
    const width = window.innerWidth;
    this.isMobileView = width <= 768;

    // Realiza acciones específicas según el valor de isMobileView
    if (this.isMobileView) {
      console.log('Cambiado a vista móvil');
      // Realiza acciones específicas para vista móvil
    } else {
      console.log('Cambiado a vista completa');
      // Realiza acciones específicas para vista completa
    }
  },
    },

    computed: {
        pesoRules() {
            return [
                (value) => value !== null && value !== '' || 'Requerido.',
                (value) => !isNaN(value) && parseFloat(value) >= 0 || 'Debe ser un número positivo',
                // otras reglas si es necesario
            ];
        },
        estaturaRules() {
            return [
                (value) => value !== null && value !== '' || 'Requerido.',
                (value) => !isNaN(value) && parseFloat(value) >= 0 || 'Debe ser un número positivo',
                // otras reglas si es necesario
            ];
        },
    },
    mounted() {
  this.checkScreenSize();
  window.addEventListener('resize', this.checkScreenSize);
},
beforeUnmount() {
  window.removeEventListener('resize', this.checkScreenSize);
},



}
</script>

<style scoped>

.body
{
    margin-left: 80px;
    margin-top: 70px;
    height: 120vh;
    background-color: rgb(255, 255, 255);
}
.bodyresponsive
{
    margin-left: 0px;
    height: 190vh;
    margin-top: 70px;
}
.campo-desactivado {
    color: black;
    /* Cambia el color del texto a negro cuando el campo está desactivado */
}
</style>
