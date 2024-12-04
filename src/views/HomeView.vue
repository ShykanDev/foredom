<template>
  <div class="">
    <MainLayout>
      <template #main>
        <section>
          <IntroCard/>
        </section>
        <section class="py-8 font-poppins">
          <h2 class="py-6 mb-6 text-2xl font-bold text-center text-white bg-sky-600 font-poppins">
            Su mejor opción en productos Foredom
          </h2>
          <div class="container px-4 mx-auto">
            <InformativeCardHome/>
            <GraphicBar/>
            <section class="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
    <!-- Card 1: Calidad Garantizada -->
    <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-out-right">
        <div class="flex items-center justify-center w-full h-40 rounded-t-lg">
            <i class="text-6xl text-gray-500 fas fa-award"></i>
        </div>
        <h3 class="mt-4 text-xl font-bold text-slate-700">Calidad Garantizada</h3>
        <p class="mt-2">Ofrecemos productos originales con los mismos estándares de calidad que las líneas fabricadas en EE.UU. y Asia.</p>
        <ul class="mt-4">
            <li class="flex items-center">
                <i class="mr-2 text-green-500 fas fa-check"></i>
                Productos auténticos y confiables
            </li>
            <li class="flex items-center">
                <i class="mr-2 text-green-500 fas fa-check"></i>
                Verificados para un rendimiento óptimo
            </li>
            <li class="flex items-center">
                <i class="mr-2 text-green-500 fas fa-check"></i>
                Garantía incluida
            </li>
        </ul>
    </div>

    <!-- Card 2: Precios Competitivos -->
    <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-out-right">
        <div class="flex items-center justify-center w-full h-40 rounded-t-lg">
            <i class="text-6xl text-gray-500 fas fa-dollar-sign"></i>
        </div>
        <h3 class="mt-4 text-xl font-bold text-slate-700">Precios Competitivos</h3>
        <p class="mt-2">Aseguramos los costos más bajos del mercado sin comprometer la calidad de nuestros productos.</p>
        <ul class="mt-4">
            <li class="flex items-center">
                <i class="mr-2 text-green-500 fas fa-check"></i>
                Ahorro garantizado
            </li>
            <li class="flex items-center">
                <i class="mr-2 text-green-500 fas fa-check"></i>
                Mejor relación calidad-precio
            </li>
            <li class="flex items-center">
                <i class="mr-2 text-green-500 fas fa-check"></i>
                Opciones accesibles
            </li>
        </ul>
    </div>

    <!-- Card 3: Soporte y Refacciones -->
    <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="zoom-out-right">
        <div class="flex items-center justify-center w-full h-40 rounded-t-lg">
            <i class="text-6xl text-gray-500 fas fa-tools"></i>
        </div>
        <h3 class="mt-4 text-xl font-bold text-slate-700">Soporte y Refacciones</h3>
        <p class="mt-2">Garantizamos disponibilidad inmediata de refacciones y asistencia técnica especializada.</p>
        <ul class="mt-4">
            <li class="flex items-center">
                <i class="mr-2 text-green-500 fas fa-check"></i>
                Refacciones originales
            </li>
            <li class="flex items-center">
                <i class="mr-2 text-green-500 fas fa-check"></i>
                Asistencia técnica confiable
            </li>
            <li class="flex items-center">
                <i class="mr-2 text-green-500 fas fa-check"></i>
                Respuesta rápida a consultas
            </li>
        </ul>
    </div>
</section>

<div class="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg md:flex-row" data-aos="fade-up">
    <!-- Título alineado a la izquierda -->
    <div class="w-full md:w-1/3">
        <h3 class="text-xl font-bold text-slate-700">Importadores Mayoristas</h3>
    </div>
    <!-- Contenido de texto -->
    <div class="w-full mt-4 md:w-2/3 md:mt-0">
        <p class="text-slate-600">
            Somos importadores mayoristas especializados en productos Foredom SR, ya sea fabricados en Asia o en Estados Unidos.
            Ofrecemos los mismos estándares de calidad con productos originales y garantizados, siempre al menor costo posible.
        </p>
    </div>
</div>

<div class="flex flex-col items-start p-6 mt-4 bg-white rounded-lg shadow-lg md:flex-row" data-aos="fade-up">
    <!-- Título alineado a la izquierda -->
    <div class="w-full mt-4 md:w-1/3">
        <h3 class="text-xl font-bold text-slate-700">Calidad Garantizada</h3>
    </div>
    <!-- Contenido de texto -->
    <div class="w-full mt-4 md:w-2/3 md:mt-0">
        <p class="text-slate-600">
            Todos nuestros productos Foredom SR, ya sean de Asia o Estados Unidos, están garantizados con la misma calidad premium.
            Ofrecemos herramientas de precisión para todas tus necesidades, manteniendo los costos lo más bajos posibles.
        </p>
    </div>
</div>

<div class="flex flex-col items-start p-6 mt-4 bg-white rounded-lg shadow-lg md:flex-row" data-aos="fade-up">
    <!-- Título alineado a la izquierda -->
    <div class="w-full md:w-1/3">
        <h3 class="text-xl font-bold text-slate-700">Productos Originales</h3>
    </div>
    <!-- Contenido de texto -->
    <div class="w-full mt-4 md:w-2/3 md:mt-0">
        <p class="text-slate-600">
            Nos aseguramos de ofrecerte productos Foredom SR originales, ya sea de Asia o Estados Unidos, manteniendo siempre los
            estándares de calidad más altos. Puedes confiar en nosotros para obtener lo mejor al mejor precio.
        </p>
    </div>
</div>

<div class="flex flex-col items-start p-6 mt-4 bg-white rounded-lg shadow-lg md:flex-row" data-aos="fade-up">
    <!-- Título alineado a la izquierda -->
    <div class="w-full md:w-1/3">
        <h3 class="text-xl font-bold text-slate-700">Precios Competitivos</h3>
    </div>
    <!-- Contenido de texto -->
    <div class="w-full mt-4 md:w-2/3 md:mt-0">
        <p class="text-slate-600">
            Ofrecemos los precios más competitivos del mercado, garantizando que puedas acceder a herramientas Foredom SR de alta calidad,
            ya sean de Asia o Estados Unidos, sin comprometer tu presupuesto.
        </p>
    </div>
</div>

<div class="flex flex-col items-start p-6 mt-4 bg-white rounded-lg shadow-lg md:flex-row" data-aos="fade-up">
    <!-- Título alineado a la izquierda -->
    <div class="w-full md:w-1/3">
        <h3 class="text-xl font-bold text-slate-700">Calidad Garantizada</h3>
    </div>
    <!-- Contenido de texto -->
    <div class="w-full mt-4 md:w-2/3 md:mt-0">
        <p class="text-slate-600">
            Todos nuestros productos Foredom SR, ya sean fabricados en Asia o Estados Unidos, cuentan con garantía de calidad,
            asegurando su durabilidad y rendimiento para que siempre tengas lo mejor.
        </p>
    </div>
</div>


          </div>
        </section>
        <section>
          <h2 class="py-2 text-2xl font-bold text-center text-white shadow-lg bg-sky-800 font-poppins">Conozca las diferencias entre los productos Foredom SR de Asia y Estados Unidos</h2>
          <SRForedomEU/>
          <SRForedomAS/>
        </section>
        <section>
          <UniBidi/>
        </section>
        <section>
          <EtiquetaDiferencia/>
        </section>
        <section class="flex flex-wrap justify-around w-full gap-2 px-2 mt-5 space-y-3">
          <InfoCardMain
      v-for="(item, index) in cardItems"
      :key="index"
      :title="item.title"
      :summary="item.summary"
      :image="item.image"
    />
        </section>

        <section class="flex justify-center p-4 px-3 mt-5 text-white bg-sky-600">
  <h1 class="text-3xl font-bold">

  </h1>
</section>

<section class="flex flex-wrap justify-around w-full gap-2 px-2 mt-5 space-y-3">
  <!-- Card 1 -->
  <div class="max-w-lg p-6 mx-auto overflow-hidden bg-white border rounded-lg shadow-md border-green-50 md:max-w-lg">
    <div class="flex items-center mb-4">
      <i class="mr-4 text-3xl fas fa-truck text-sky-600"></i>
      <h2 class="text-xl font-semibold text-slate-700">Importadores Mayoristas</h2>
    </div>
    <p class="text-base text-gray-600 font-poppins">
      Somos importadores mayoristas especializados en productos Foredom SR, tanto de Asia como de EE. UU., ofreciendo la misma calidad a un precio más bajo.
    </p>
  </div>

  <!-- Card 2 -->
  <div class="max-w-lg p-6 mx-auto overflow-hidden bg-white border rounded-lg shadow-md border-green-50 md:max-w-lg">
    <div class="flex items-center mb-4">
      <i class="mr-4 text-3xl fas fa-cogs text-sky-600"></i>
      <h2 class="text-xl font-semibold text-slate-700">Calidad Garantizada</h2>
    </div>
    <p class="text-base text-gray-600 font-poppins">
      Nuestros productos Foredom SR tienen garantía de calidad y rendimiento, con los más altos estándares de fabricación en todos los modelos.
    </p>
  </div>

  <!-- Card 3 -->
  <div class="max-w-lg p-6 mx-auto overflow-hidden bg-white border rounded-lg shadow-md border-green-50 md:max-w-lg">
    <div class="flex items-center mb-4">
      <i class="mr-4 text-3xl fas fa-tags text-sky-600"></i>
      <h2 class="text-xl font-semibold text-slate-700">Precios Competitivos</h2>
    </div>
    <p class="text-base text-gray-600 font-poppins">
      Ofrecemos precios muy competitivos para todos nuestros productos Foredom SR, tanto de Asia como de EE. UU., sin comprometer la calidad.
    </p>
  </div>

  <!-- Card 4 -->
  <div class="max-w-lg p-6 mx-auto overflow-hidden bg-white border rounded-lg shadow-md border-green-50 md:max-w-lg">
    <div class="flex items-center mb-4">
      <i class="mr-4 text-3xl fas fa-headset text-sky-600"></i>
      <h2 class="text-xl font-semibold text-slate-700">Soporte Técnico Especializado</h2>
    </div>
    <p class="text-base text-gray-600 font-poppins">
      Nuestro equipo está listo para brindar soporte técnico especializado en todas las herramientas Foredom SR, asegurando el mejor rendimiento.
    </p>
  </div>

  <!-- Card 5 -->
  <div class="max-w-lg p-6 mx-auto overflow-hidden bg-white border rounded-lg shadow-md border-green-50 md:max-w-lg">
    <div class="flex items-center mb-4">
      <i class="mr-4 text-3xl fas fa-hammer text-sky-600"></i>
      <h2 class="text-xl font-semibold text-slate-700">Herramientas para Profesionales</h2>
    </div>
    <p class="text-base text-gray-600 font-poppins">
      Ofrecemos herramientas Foredom SR de alta precisión para satisfacer las necesidades de los profesionales más exigentes en cualquier sector.
    </p>
  </div>

  <!-- Card 6 -->
  <div class="max-w-lg p-6 mx-auto overflow-hidden bg-white border rounded-lg shadow-md border-green-50 md:max-w-lg">
    <div class="flex items-center mb-4">
      <i class="mr-4 text-3xl fas fa-clipboard-check text-sky-600"></i>
      <h2 class="text-xl font-semibold text-slate-700">Disponibilidad Continua</h2>
    </div>
    <p class="text-base text-gray-600 font-poppins">
      Garantizamos la disponibilidad continua de nuestros productos Foredom SR para que puedas contar con ellos cuando más los necesites.
    </p>
  </div>
</section>







  <section class="p-6 font-poppins">
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <h2 class="mb-4 text-2xl font-bold text-emerald-800">Seguridad de la Página</h2>
            <p class="mb-4 text-gray-700">Nos tomamos muy en serio la seguridad de tu información. Aquí hay algunas medidas que hemos implementado para asegurar que tu experiencia sea segura:</p>

            <!-- Conexión Segura -->
            <div class="flex items-center mb-6">
                <i class="mr-4 text-3xl text-green-500 fas fa-lock"></i>
                <div>
                    <h3 class="text-xl font-semibold">Conexión Segura</h3>
                    <p class="text-gray-600">Utilizamos HTTPS para asegurar que tu conexión a nuestra página esté encriptada y segura. Esto significa que cualquier dato que envíes o recibas a través de nuestra página está protegido contra interceptaciones.</p>
                    <ul class="text-gray-600 list-disc list-inside">
                        <li>Protección contra ataques de intermediarios (Man-in-the-Middle).</li>
                        <li>Encriptación de datos.</li>
                        <li>Verificación de la autenticidad del servidor.</li>
                    </ul>
                </div>
            </div>

            <!-- Certificado SSL -->
            <div class="flex items-center">
                <i class="mr-4 text-3xl text-blue-500 fas fa-shield-alt"></i>
                <div>
                    <h3 class="text-xl font-semibold">Certificado SSL</h3>
                    <p class="text-gray-600">Nuestro sitio está protegido con un certificado SSL, lo que garantiza que tus datos están seguros y encriptados. Un certificado SSL es una tecnología estándar de seguridad que establece un enlace encriptado entre un servidor web y un navegador.</p>
                    <ul class="text-gray-600 list-disc list-inside">
                        <li>Autenticación del sitio web para asegurar que estás comunicándote con el servidor correcto.</li>
                        <li>Encriptación de la información transmitida para protegerla de accesos no autorizados.</li>
                        <li>Confianza y seguridad para nuestros usuarios al ver el candado en la barra de direcciones.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
                     <!-- Ads Section -->
                     <h3 class="mt-6 text-4xl font-bold text-center text-sky-900 font-poppins">Le podría interesar</h3>
        <section  class="flex justify-center w-full my-6 space-x-4"> <!-- ads section -->
              <div
                class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
                <span
                  class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
                <a href="https://shykandev.github.io/medicinaparahigado/" class="relative w-full h-full" target="_blank"
                  rel="noopener noreferrer">
                  <div
                    class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                    <p class="text-xs font-bold text-center text-white font-poppins md:text-3xl">Jarabe o Cápsulas tu decides</p>
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">100% Natural</p>
                  </div>
                  <img class="w-full h-full bg-contain rounded-md" src="https://shykandev.github.io/medicinaparahigado/assets/mainHome-BjxRmTRc.jpg" alt="">
                  <p class="absolute text-xs font-bold text-center text-white bg-red-600 top-1 font-poppins md:text-3xl">
                    ¿Problemas en el Hígado?</p>
                  <p class="absolute text-xs font-bold text-center text-white bottom-1 font-poppins md:text-3xl">
                    Conozca Livad</p>
                </a>
              </div>

              <div
                class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
                <span
                  class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
                <a href="https://shykandev.github.io/medicinaparadiabetes/" class="relative w-full h-full" target="_blank"
                  rel="noopener noreferrer">
                  <div
                    class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">100% Natural</p>
                    <!-- <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">Tu </p> -->
                    <p class="hidden text-sm font-bold text-center text-white font-poppins md:text-3xl md:block">Esta es su solución</p>
                  </div>
                  <img class="w-full h-full bg-contain rounded-md" src="https://shykandev.github.io/medicinaparadiabetes/assets/mainHome-EGZr2Qar.jpg" alt="">
                  <p class="absolute top-0 text-xs font-bold text-center text-white bg-yellow-600 font-poppins md:text-3xl">¿Tienes Diabetes?</p>
                  <p
                    class="absolute px-3 text-xs font-bold text-center text-white md:px-0 bottom-3 font-poppins md:text-3xl">
                    Le recomendamos GLUFAC</p>
                </a>
              </div>
            </section>
            <section>
              <div class="p-4 text-sm text-center bg-gray-100">
    <p><i class="fas fa-info-circle text-sky-500"></i>  <em>Este sitio no está afiliado, respaldado ni es propiedad de Foredom. Los productos Foredom que ofrecemos son distribuidos bajo licencia mayorista. Todas las marcas y nombres de productos son propiedad de sus respectivos dueños. Las imágenes utilizadas en este sitio son propiedad de sus respectivos autores y no somos propietarios de ellas.</em></p>
</div>

            </section>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import IntroCard from '@/components/IntroCard.vue';
import InformativeCardHome from '@/components/InformativeCardHome.vue';
import GraphicBar from '@/components/GraphicBar.vue';
import InfoCardMain from '@/components/InfoCardMain.vue';
import SRForedomEU from '@/components/SRForedomEU.vue';
import SRForedomAS from '@/components/SRForedomAS.vue';
import UniBidi from '@/components/UniBidi.vue';
import EtiquetaDiferencia from '@/components/EtiquetaDiferencia.vue';

const cardItems = [
  {
    title: 'Importadores Mayoristas',
    summary: 'Somos importadores mayoristas especializados en productos Foredom SR, tanto de Asia como de EE. UU., ofreciendo la misma calidad a un precio más bajo.',
    image: 'https://via.placeholder.com/500x300/ff7f7f/333333?text=Importadores+Mayoristas',
  },
  {
    title: 'Calidad Garantizada',
    summary: 'Nuestros productos Foredom SR tienen garantía de calidad y rendimiento, con los más altos estándares de fabricación en todos los modelos.',
    image: 'https://via.placeholder.com/500x300/ff7f7f/333333?text=Calidad+Garantizada',
  },
  {
    title: 'Precios Competitivos',
    summary: 'Ofrecemos precios muy competitivos para todos nuestros productos Foredom SR, tanto de Asia como de EE. UU., sin comprometer la calidad.',
    image: 'https://via.placeholder.com/500x300/ff7f7f/333333?text=Precios+Competitivos',
  },
  {
    title: 'Soporte Técnico Especializado',
    summary: 'Nuestro equipo está listo para brindar soporte técnico especializado en todas las herramientas Foredom SR, asegurando el mejor rendimiento.',
    image: 'https://via.placeholder.com/500x300/ff7f7f/333333?text=Soporte+Técnico',
  },
  {
    title: 'Herramientas para Profesionales',
    summary: 'Ofrecemos herramientas Foredom SR de alta precisión para satisfacer las necesidades de los profesionales más exigentes en cualquier sector.',
    image: 'https://via.placeholder.com/500x300/ff7f7f/333333?text=Herramientas+Profesionales',
  },
  {
    title: 'Disponibilidad Continua',
    summary: 'Garantizamos la disponibilidad continua de nuestros productos Foredom SR para que puedas contar con ellos cuando más los necesites.',
    image: 'https://via.placeholder.com/500x300/ff7f7f/333333?text=Disponibilidad+Continua',
  },
];


</script>

<style scoped></style>
