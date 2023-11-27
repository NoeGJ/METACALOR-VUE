<template>
    
      <v-dialog
        v-model="dialog"
        persistent
        width="500"
      >
        <template v-slot:activator="{ props }">
            <v-btn prepend-icon="mdi-plus" class="mb-5" v-bind="props" >Agregar un alimento</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Agregar alimento</span>
          </v-card-title>
          <v-card-text>
            <v-container>              
                  <v-autocomplete
                    v-model="busqueda"
                    :items="resultadosBusqueda"
                     
                    @change="seleccionarAlimento"

                    label="Buscar alimento*"
                    density="compact"
                    variant="solo"
                    hide-details
                    single-line
                    append-inner-icon="mdi-magnify"
                    class="mb-15"
                    required  
                  ></v-autocomplete>
  
                  <v-spacer></v-spacer>
              
                  <v-text-field
                    label="Cantidad*"
                    type="number"
                    variant="solo"
                    persistent-hint
                    required
                  ></v-text-field>
              

            
                
  
            </v-container>
            <small>*Se requieren llenar todos los campos</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
   
  </template>

<script>
  export default {

    data: () => ({
      dialog: false,
      busqueda: null,
      resultadosBusqueda: [
        {id: 1, nombre: 'Acelga cocida'},
        {id: 2, nombre: 'Acelga cruda'},
        {id: 3, nombre: 'Alcachofa mediana cocida'},
        {id: 4, nombre: 'Alfalfa'}
      ],
    }),
    methods: {
      seleccionarAlimento(){
        this.$emit('alimento-seleccionado', this.busqueda)
      }
    }
  }
</script>