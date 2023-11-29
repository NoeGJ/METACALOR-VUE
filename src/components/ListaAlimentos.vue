<template>
    <h4 >{{ comida }}</h4>
    <v-divider ></v-divider>
    <v-list >
        <v-list-item v-for="alimento, i in alimentos" :key="i">
            <v-row>
            <v-col>
                {{ alimento.nombre }}
            </v-col>
            <v-col>
                {{ alimento.cantidad  }} {{ alimento.unidad }}/s
            </v-col>
            <v-col>
                <v-btn icon="mdi-delete" variant="text" density="comfortable" rounded="0" @click="eliminarElemento( i )"></v-btn>
            </v-col>
        </v-row>
        
        </v-list-item>
        <VDialogPlanes @alimento-seleccionado="agregarElemento" />
    </v-list>
</template>


<script>
    import VDialogPlanes from './VDialogPlanes.vue'
    export default {
        inheritAttrs: false,
        props: ['comida'],
        data (){
            return{
            alimentos: [],
            }
        },

        methods: {
            agregarElemento( elemento ){
                //console.log('elemento', elemento)
                this.alimentos.push( elemento )
                this.$emit('lista-registrada', [this.alimentos, this.comida])
            },
            eliminarElemento( id ){
                //console.log('eliminar', id)
                this.alimentos.splice(id, 1)
                this.$emit('eliminar-registro', [id, this.comida])
            }

        },
        components: {
            VDialogPlanes,
        },
    }
</script>