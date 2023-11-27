<template>
    <h4 >{{ comida }}</h4>
    <v-divider ></v-divider>
    <v-list >
        <v-list-item v-for="alimento, i in alimentos" :key="i">
            <v-col>
                {{ alimento.nombre }}
            </v-col>
        </v-list-item>
        <VDialogPlanes @alimento-seleccionado="agregar" />
    </v-list>
</template>


<script>
    import VDialogPlanes from './VDialogPlanes.vue'
    export default {
        props: ['comida'],
        data: () => ({
            alimentos: [],
        }),
        methods: {
            agregar( elemento ){
                this.alimentos.push( elemento )
            }
        },
        components: {
            VDialogPlanes,
        },
    }
</script>