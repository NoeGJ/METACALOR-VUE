<template>
<v-sheet class="mx-auto mt-10 mx-5" max-width="500">
<v-form class="mx-5" ref="form">
    <v-text-field label="Nombre del plan*" variant="solo-filled" :rules="[rules.required]"></v-text-field>

    <v-textarea  label="Descripción*" variant="solo-filled" :rules="[rules.required]"></v-textarea>
    <div>
    <ListaAlimentos v-for="comida in comidas" :comida="comida" @lista-registrada="listar" @eliminar-registro="eliminar" />
    </div>
    <!-- <ListaAlimentos comida="Comida" @lista-registrada="listar" @eliminar-registro="eliminar" />
    <ListaAlimentos comida="Cena" @lista-registrada="listar" @eliminar-registro="eliminar" /> -->
    <v-row class="mb-5">
    <v-col>
            <router-link to='/planes' >
            <v-btn
              color="red-darken-1"
              variant="text"
              
              class="ml-10"
            >
              Cancelar
            </v-btn>
        </router-link>
        </v-col>
    <v-col>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="guardar"
              class="ml-10"
            >
              Guardar
            </v-btn>
        </v-col>
    </v-row>        
</v-form>
</v-sheet>
</template>

<script>
    import ListaAlimentos from '@/components/ListaAlimentos.vue'
    export default {
        data:() => ({
            nombre: null,
            descripcion: null,
            comidas: [ 'Desayuno', 'Comida', 'Cena' ],
            lista: { Desayuno: [], Comida: [], Cena: [] },
            rules: {
                required: value => !!value || 'Campo requerido'
            },
        }),
        methods: {
            guardar: async function( ){
                const { valid } = await this.$refs.form.validate()
                 //if (valid) 
                console.log('Lista', this.lista)
            },
            listar: function( elemento ){
                //console.log( elemento )
                this.lista[elemento[1]].push(elemento[0])
            },
            eliminar: function( elemento ){
                //console.log( elemento )
            this.lista[elemento[1]].splice(elemento[0], 1)
            }
        },
        components: {
            ListaAlimentos,
        },
        
    }
</script>