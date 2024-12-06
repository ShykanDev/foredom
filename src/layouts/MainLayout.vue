<template>
    <div class="">
      <header class="sticky top-0 z-50 w-full">
        <section class="w-full bg-gradient-to-r from-sky-700 to-cyan-700">
            <div class="flex items-center justify-between px-6 py-1 shadow-lg">
                <img class="w-10" src="https://i.ibb.co/j3ys635/shield-1.png" alt="SSL Certificate">
                <div class="flex text-3xl italic font-bold text-white font-poppins">
                    <p class="animate-fade-down">foredom.</p>
                    <p class="animate-fade-down animate-delay-150 text-sky-200">com.</p>
                    <p class="animate-fade-down animate-delay-300 text-sky-50">mx</p>
                </div>
                <div></div>
                <div  class="absolute items-center hidden gap-4 text-white md:flex right-20 font-poppins">
                <a  href="emailto:informes@prasadam.mx"><i class="fas fa-envelope"></i> informes@grupochimex.com</a>
                </div>
            </div>
        </section>
        <section class="bg-white shadow-md font-poppins">
            <nav class="flex flex-wrap justify-center py-2 space-x-6 text-[.70rem] md:text-sm font-semibold text-gray-700 transition-all duration-700 ease-in-out">
                <RouterLink
                    class="px-2 py-1 border-b-4 hover:text-sky-500"
                    :class="{ 'border-sky-500': route.name === 'home' }"
                    :to="{ name: 'home' }"
                >
                    Inicio
                </RouterLink>
                <RouterLink
                    class="px-2 py-1 border-b-4 hover:text-sky-500"
                    :class="{ 'border-sky-500': route.name === 'spaOne' }"
                    :to="{ name: 'spaOne' }"
                >
                    Beneficios y Productos
                </RouterLink>
                <RouterLink
                    class="px-2 py-1 border-b-4 hover:text-sky-500"
                    :class="{ 'border-sky-500': route.name === 'refacciones' }"
                    :to="{ path: '/refacciones' }"
                >
                   Refacciones
                </RouterLink>
                <RouterLink
                    class="px-2 py-1 border-b-4 hover:text-sky-500"
                    :class="{ 'border-sky-500': route.name === 'features' }"
                    :to="{ name: 'features' }"
                >
                   Información detallada
                </RouterLink>
                <RouterLink
                    class="px-2 py-1 border-b-4 hover:text-sky-500"
                    :class="{ 'border-sky-500': route.name === 'spaThree' }"
                    :to="{ name: 'spaThree' }"
                >
                    Preguntas y Respuestas
                </RouterLink>
                <RouterLink
                    class="px-2 py-1 border-b-4 hover:text-sky-500"
                    :class="{ 'border-sky-500': route.name === 'contact' }"
                    :to="{ name: 'contact' }"
                >
                    Contacto
                </RouterLink>
                <p
                    class="px-2 py-1 italic font-poppins hover:text-sky-800"
                >
                    Grupo Chimex
                </p>
            </nav>
        </section>
    </header>

        <main class="overflow-hidden">
            <slot name="main">

            </slot>
        </main>



    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();



let showEmail = ref(true);
</script>

<style scoped>

</style>
