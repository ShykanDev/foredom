<template>
  <div>
    <MainLayout>
      <template #main>
        <section class="flex items-center justify-center py-3 bg-slate-100 font-poppins">
          <div class="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
            <h2 class="mb-6 text-3xl font-bold text-sky-800">Contacto</h2>
            <p class="mb-8 text-gray-600">Llene este formulario y nos pondremos en contacto con usted lo antes posible.</p>
            <form @submit.prevent="sendEmail" class="space-y-6">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label for="name" class="block text-sm font-medium text-sky-700">Nombre</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <i class="absolute text-gray-400 transform -translate-y-1/2 fas fa-user left-3 top-1/2"></i>
                    <input v-model="name" type="text" id="name" name="name" :class="{'border-red-500': noName}" required
                     placeholder="Juan Pérez" class="block w-full py-2 pl-10 pr-3 border rounded-md border-sky-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <p v-if="noName" class="text-xs text-red-500">Este campo es obligatorio.</p>
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium text-sky-700">Asunto</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <i class="absolute text-gray-400 transform -translate-y-1/2 fas fa-tag left-3 top-1/2"></i>
                    <input v-model="subject" type="text" id="subject" name="subject" :class="{'border-red-500': noSubject}" required
                      class="block w-full py-2 pl-10 pr-3 border rounded-md border-sky-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  placeholder="Deseo adquirir productos al mayoreo"/>
                  </div>
                  <p v-if="noSubject" class="text-xs text-red-500">Este campo es obligatorio.</p>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label for="email" class="block text-sm font-medium text-sky-700">Correo Electrónico</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <i class="absolute text-gray-400 transform -translate-y-1/2 fas fa-envelope left-3 top-1/2"></i>
                    <input v-model="email" type="email" id="email" name="email" :class="{'border-red-500': noEmail}" required
                      class="block w-full py-2 pl-10 pr-3 border rounded-md border-sky-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="correo@ejemplo.com" />
                  </div>
                  <p v-if="noEmail" class="text-xs text-red-500">Este campo es obligatorio.</p>
                </div>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-sky-700">Mensaje</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                  <i class="absolute text-gray-400 transform -translate-y-1/2 fas fa-comment left-3 top-1/2"></i>
                  <textarea id="message" name="message" rows="4" v-model="message" :class="{'border-red-500': noMessage}" required
                    class="block w-full py-2 pl-10 pr-3 border rounded-md border-sky-800 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" placeholder="Escriba su mensaje"></textarea>
                </div>
                <p v-if="noMessage" class="text-xs text-red-500">Este campo es obligatorio.</p>
              </div>
              <div>
                <button  type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

let name = ref('');
let subject = ref('');
let email = ref('');
let message = ref('');

let noName = ref(false);
let noSubject = ref(false);
let noEmail = ref(false);
let noMessage = ref(false);

const sendEmail = async () => {
  if (!name.value || !subject.value || !email.value || !message.value) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const templateParams = {
    name: name.value,
    subject: subject.value,
    email: email.value,
    message: message.value,
    reply_to: email.value
  };

  try {
    await emailjs.send(
      'service_3nl9wkf.', // Reemplaza con tu Service ID
      'template_1p78rdi', // Reemplaza con tu Template ID
      templateParams,
      'fXlbInB-wrOGPiUbH' // Reemplaza con la clave pública que obtuviste
    );
    notify();
    name.value = '';
    subject.value = '';
    email.value = '';
    message.value = '';

  } catch (error) {
    console.error('Error al enviar el correo:', error);

  }
};

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const notify = () => {

  toast.success("Su mensaje ha sido enviado, pronto nos pondremos en contacto", {
    position: toast.POSITION.TOP_RIGHT,
  });


};

</script>

<style scoped>
/* Puedes añadir más estilos personalizados si lo deseas */
</style>
