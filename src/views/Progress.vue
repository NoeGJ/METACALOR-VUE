<template>
    <h1 class="text-center">Progreso General</h1>
    <h3 class="text-center">{{ `${ dia } / ${ mes } / ${ anio } `   }}</h3>
    

</template>






<script setup>

    const date = new Date();
    const [mes, dia, anio] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    ];

</script>