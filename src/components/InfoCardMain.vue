<template>
  <div
    class="max-w-lg mx-auto overflow-hidden bg-white border rounded-lg shadow-md border-green-50 md:max-w-lg "
  >
    <!-- Imagen -->
    <!-- <img :src="image" alt="Card image" class="object-cover w-full max-h-60 " /> -->

    <!-- Contenido -->
    <div class="p-4">
      <!-- Título -->
      <h2 class="mb-2 text-xl font-semibold text-center border-b-2 text-sky-600 border-b-sky-500 font-poppins ">{{ title }}</h2>

      <!-- Resumen -->
      <p class="text-base text-gray-600 font-poppins">{{ summary }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Definimos las props con valores predeterminados
defineProps({
  title: {
    type: String,
    default: 'Título de ejemplo',
  },
  summary: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget massa nec nunc pretium consequat.',
  },
  image: {
    type: String,
    default: 'https://storage.googleapis.com/a1aa/image/MWJSpm8Ynar9AF9kA7luRMNBDgJW7uTpccNt2dHQLEG1oU9E.jpg',
  },
});
</script>

<style>
/* No es necesario agregar estilos personalizados debido a TailwindCSS */
</style>
