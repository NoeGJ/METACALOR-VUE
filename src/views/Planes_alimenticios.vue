<template>
    <v-card class="mx-auto mt-10" max-width="600" flat>    
                <v-toolbar class="px-2 bg-white">
                  <v-text-field
                    v-model="busqueda"
                    clearable
                    density="comfortable"
                    hide-details
                    placeholder="Buscar plan"
                    prepend-inner-icon="mdi-magnify"
                    class="mr-5 my-2"
                    variant="solo"
                   
                  ></v-text-field>
                 <!-- boton de mas + -->
                 
                 <router-link to="/planes/add"><v-btn prepend-icon="mdi-plus" color="#ff5733" ></v-btn></router-link>
                </v-toolbar>
    
                <v-data-table
                :headers="headers"
                :items="items"
                :single-select="true"
                :search="busqueda"
                item-key="id"
                no-data-text="Sin resultados"
                >
                    <template v-slot:item.radio="{ item }">
                        <v-radio-group v-model="itemSeleccion">
                         <v-radio
                          
                          
                          :value='item.id'
                          :name="'radio-' + item.id"
                          color="primary"
                        ></v-radio>                        
                      </v-radio-group>
  
                      </template>

                      <template v-slot:item.button="{ item }">
                      <router-link :to="'/planes/' + item.id"><v-btn>Editar</v-btn></router-link> 
                    </template>
                    </v-data-table>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="guardarPlan" >Guardar</v-btn>
                </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar" :color="colorSnackbar" :timeout="3000">
      {{ mensajeSnackbar }}
    </v-snackbar>
</template>


<style scoped>

a { text-decoration: none; color: inherit; }
</style>

<script lang="ts">  
import { VDataTable } from 'vuetify/labs/VDataTable';
 export default {
      data: () => {
        return {
          busqueda: '',
          itemSeleccion: null,
          snackbar: false,
          mensajeSnackbar: '',
          colorSnackbar: 'gray',
          headers: [
            { title: '', value: 'radio', sortable: false },
            
            { title: 'Nombre', value: 'nombre' },
            { title: '', value: 'button', sortable: false }
            
          ],
          items: [
          {
              id: 1,
              nombre: 'Plan nutriologo',
              
          },
          {
              id: 2,
              nombre: 'Plan 1',
              
          },
          {
              id: 3,
              nombre: 'Plan 2',
              
          }],
      }},
      methods: {
        guardarPlan: async function (){
          if( !this.itemSeleccion ){            
            this.mostrarSnackBar("Selecciona un plan")
            return
          }
            console.log( this.itemSeleccion )
            this.colorSnackbar = 'green'
            this.mostrarSnackBar("Plan guardado correctamente")
        },
        mostrarSnackBar: function( msg ){
          this.mensajeSnackbar = msg
          this.snackbar = true
        }
      },
      components: {
        VDataTable,
      }
  }
</script>