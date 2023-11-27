<template>
<v-sheet class="mx-auto mt-10 mx-5" max-width="500">
<v-form class="mx-5">
    <v-text-field label="Nombre del plan" variant="solo-filled"></v-text-field>

    <v-textarea  label="Descripción" variant="solo-filled"></v-textarea>

    <ListaAlimentos comida="Desayuno" />
    <ListaAlimentos comida="Comida" />
    <ListaAlimentos comida="Cena" />

</v-form>
</v-sheet>
</template>

<script>
    import ListaAlimentos from '@/components/ListaAlimentos.vue'
    export default {
        components: {
            ListaAlimentos,
        },
        
    }
</script>