<template>
  <div>
    <!-- Header -->
    <header class="shadow-xl bg-lime-600 flex items-center justify-between px-4 py-2 md:py-2">
      <img src="/logo.png" alt="logo" class="h-12 md:h-16 w-auto md:ml-1" />

     <h1 class="text-lg md:text-sm lg:text-2xl font-bold text-center text-gray-900 flex-grow md:flex-grow-0">
  Kobane Garten Landschaftsbau
</h1>

      <!-- Hamburger-Menü Button -->
      <button @click="toggleMenu" class="md:hidden ml-3">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex md:flex-grow flex-row-reverse space-x-4 pr-2">
        <ul class="flex space-x-4">
          <li v-for="(link, index) in links" :key="index">
            <NuxtLink :to="link.to" class="text-gray-800 hover:bg-lime-400 block py-2 px-4 rounded-md">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </header>

    <!-- Mobile Navigation -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white py-2 px-4 space-y-2">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <NuxtLink :to="link.to" class="text-gray-800 hover:bg-lime-400 block py-2 rounded-md">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Hauptinhalt -->
    <main class="container mx-auto px-4 md:px-8 py-8 bg-white text-gray-900">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="flex flex-wrap bg-lime-700 text-white p-6">
      <ul class="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 md:space-y-0">
        
        <li><NuxtLink to="/kontakt" class="hover:underline">Kontakt</NuxtLink></li>
        <li><NuxtLink to="/impressum" class="hover:underline">Impressum</NuxtLink></li>
        <li><NuxtLink to="/datenschutz" class="hover:underline">Datenschutz</NuxtLink></li>
     
      </ul>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Kontakt', to: '/kontakt' },
  { label: 'Galerie', to: '/galerie' }
];

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Globale Stile hier */
body {
  background-color: white;
}

/* Beispiel für responsive Stile */
@media (min-width: 640px) {
  .container {
    max-width: 768px; /* Breite für Tablets und größere Bildschirme */
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 1024px; /* Breite für größere Bildschirme (Laptops) */
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1280px; /* Breite für große Bildschirme */
  }
}

@media (max-width: 639px) {
  .container {
    max-width: 100%; /* Volle Breite für kleine mobile Geräte */
    padding-left: 1rem;
    padding-right: 1rem;
  }

  footer ul {
    flex-direction: column; /* Links untereinander anordnen */
    text-align: center; /* Zentrierter Text für bessere Lesbarkeit */
  }
}
</style>
