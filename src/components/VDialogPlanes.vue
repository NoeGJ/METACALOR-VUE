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
            <v-form ref="mainForm">
            <v-container >              
                  <v-autocomplete
                    v-model="itemBusqueda"
                    :items="resultadosBusqueda"
                    ref="itemBusqueda"
                   
                    no-data-text="Sin resultados"
                    label="Buscar alimento*"
                    density="compact"
                    variant="solo"
                    item-title="nombre"
                    item-text="nombre"
                    item-value="id"
                    :rules="[rules.required]"
                          
                    menu-icon=""
                    single-line
                    prepend-inner-icon="mdi-magnify"
                    class="mb-15"
                    required  
                  ></v-autocomplete>
  
                 
              
                  <v-text-field
                    v-model="cantidad"
                    label="Cantidad*"
                    type="number"
                    variant="solo"
                    persistent-hint
                    :suffix="this.itemBusqueda != null ? this.resultadosBusqueda.find(item => item.id === this.itemBusqueda).unidad : ''"
                    :rules="[rules.required]"
                    required
                  ></v-text-field>
                  
            </v-container>
          </v-form>
            <small>*Se requieren llenar todos los campos</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="enviarDatos"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
   
  </template>

<script lang="ts">
  export default {

    data: () => ({
      
      dialog: false,
      itemBusqueda: null,
      unidad: '',
      cantidad: null,
      resultadosBusqueda: [
        {id: 1, nombre: 'Acelga cocida', unidad: 'taza'},
        {id: 2, nombre: 'Acelga cruda', unidad: 'taza'},
        {id: 3, nombre: 'Alcachofa mediana cocida', unidad: 'pieza'},
        {id: 4, nombre: 'Alfalfa', unidad: 'taza'}
      ],
      rules: {
          required: value => !!value || 'Campo requerido' 
      },
    }),
    methods: {
      enviarDatos: async function (){
        
        const { valid } = await this.$refs.mainForm.validate()

        if (valid) {
          
          const item = this.resultadosBusqueda.find(item => item.id === this.itemBusqueda)
          this.form.id = item?.id
           this.form.nombre = item?.nombre
           this.form.unidad = item?.unidad
  
          this.$emit('alimento-seleccionado', this.form)
          this.reset()
        }        
      },
      reset: function(){
        this.unidad = ''
        this.cantidad = null
        this.itemBusqueda= null
        this.dialog = false
      }
    },
    computed: {
      form() {
        return {
          id: this.itemBusqueda.id,
          nombre: this.itemBusqueda.nombre,
          unidad: this.itemBusqueda.unidad,
          cantidad: this.cantidad,
        }
      }
    },
  }
</script>