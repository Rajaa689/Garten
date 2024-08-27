<template>
  <div class="container mx-auto relative">
    <swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
      :slides-per-view="1"
      :effect="'creative'"
      :pagination="{ clickable: true }"
      :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
      :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative h-96 overflow-hidden">
          <img :src="slide.image" alt="slide" class="slide-image"/>
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <p class="text-white text-xl md:text-3xl font-bold text-center">{{ slide.text }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="welcome-section flex flex-col md:flex-row items-center justify-between bg-lime-100 p-4 my-4 rounded shadow-lg">
      <h1 class="text-left text-4xl font-bold tracking-tight text-lime-800 md:text-4xl">Willkommen bei Kobane Garten & Landschaftsbau</h1>
      <div class="tracking-wide text-lg text-gray-800 flex max-w-2xl flex-col gap-y-2 text-base leading-7">
        <p>
          Wir sind Ihr kompetenter Partner für Garten- und Landschaftsbau in der Flensburg und Umgebung. 
        </p>
        <p>
          Wir haben die Firma Peter Thomson aus Handewitt übernommen!
        </p>
        <p>
          Wir haben unsere Produktpalette erweitert und
          Pflasterarbeiten, Friesenwälle, Erdarbeiten, Minibaggerarbeiten, Hausanschlüsse,
          Schmutzwasser, Regenwasser, Dränagen und Verrieslungen unserer Produktpalette hinzugefügt.
        </p>
        <p> 
          Kontaktieren Sie uns für ein unverbindliches Angebot in Flensburg und Umgebung.
        </p>
      </div>
    </div>
     <!-- Kontaktinformationen -->
    <div class="contact-info flex flex-col md:flex-row gap-4 mb-8">
        <p>Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot anfordern? Kontaktieren Sie uns</p>
        <br>
      <div class="contact-item">
      <p>Telefon:</p>
       <a href="tel:046166354403" class="inline-block text-gray-900 bg-lime-200 md:text-sx font-bold hover:bg-lime-400 block rounded-md">046166354403</a>
       <p>Mobile:</p>
        <a href="tel:017622787830" class="inline-block text-gray-900 bg-lime-200 md:text-sx font-bold hover:bg-lime-400 block rounded-md">017622787830</a>
      </div>
    </div>
    <h2 class="text-3xl font-bold text-center text-gray-900 mt-8">Unsere Leistungen</h2>
    <div class="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

      <!-- Kategorie: Jahrespflge / Grünflächenpflege -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Jahrespflge / Grünflächenpflege</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Rasenmähen & Vertikutieren</li>
          <li>Gartenpflege</li>
          <li>Heckenpflanzung und -Schnitt</li>
          <li>Gehölzschnitt</li>
        </ul>
      </div>

      <!-- Kategorie: Neu & Umgestaltung -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Neu & Umgestaltung</h3>
        <ul class="list-disc ml-5 mt-2">
          <li>Spielplatz neubauen</li>
          <li>Pflasterarbeiten</li>
          <li>Terrassen bauen / Zaunarbeiten</li>
          <li>Bepflanzungen</li>
        </ul>
      </div>

      <!-- Kategorie: Bäume fällen -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Bäume fällen</h3>
      </div>

      <!-- Kategorie: Pflasterarbeiten -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Pflasterarbeiten</h3>
      </div>

      <!-- Kategorie: Friesenwälle -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Friesenwälle</h3>
      </div>

      <!-- Kategorie: Erdarbeiten -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Erdarbeiten</h3>
      </div>

      <!-- Kategorie: Dränagen und Verrieslungen -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Dränagen und Verrieslungen</h3>
      </div>

      <!-- Kategorie: Minibaggerarbeiten -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Minibaggerarbeiten</h3>
      </div>

      <!-- Kategorie: Hausanschlüsse -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Hausanschlüsse</h3>
      </div>

      <!-- Kategorie: Bepflanzungen -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Bepflanzungen</h3>
      </div>

      <!-- Kategorie: Rasenmähen -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Rasenmähen</h3>

      </div>

      <!-- Kategorie: Doppelstabmatte aufsetzen -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Doppelstabmatte aufsetzen</h3>
      </div>
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Rollrasen legen</h3>
      </div>

      <!-- Kategorie: Zaunarbeiten (Kunststoffzaun aufsetzen) -->
      <div class="service-card p-4 bg-white shadow-lg rounded">
        <h3 class="text-xl font-semibold text-gray-800">Zaunarbeiten (Kunststoffzaun aufsetzen)</h3>
      </div>

    </div>

    <div class="why-contact-us bg-lime-100 p-4 my-8 rounded shadow-lg">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-4">Drei Gründe, warum Sie uns kontaktieren sollten</h2>
      <div class="reason flex flex-col md:flex-row items-center justify-between mb-4">
        <div class="reason-number text-xl font-bold text-lime-800 mb-2 md:mb-0 md:mr-4">Vielfältige Leistungen</div>
        <div class="reason-text text-lg text-gray-800">
          <p>Ob Pflasterarbeiten, Erdarbeiten oder Gartenpflege – wir bieten eine breite Palette an Dienstleistungen, die individuell auf Ihre Bedürfnisse abgestimmt sind. Vertrauen Sie auf unsere Expertise für maßgeschneiderte Lösungen.</p>
        </div>
      </div>
      <div class="reason flex flex-col md:flex-row items-center justify-between mb-4">
        <div class="reason-number text-xl font-bold text-lime-800 mb-2 md:mb-0 md:mr-4">Engagiertes Team</div>
        <div class="reason-text text-lg text-gray-800">
          <p>Unser erfahrenes Team arbeitet mit Leidenschaft und Sorgfalt an jedem Projekt. Wir nehmen uns die Zeit, Ihre Wünsche zu verstehen und setzen diese mit höchster Präzision um, damit Ihr Garten in bestem Glanz erstrahlt.</p>
        </div>
      </div>
      <div class="reason flex flex-col md:flex-row items-center justify-between">
        <div class="reason-number text-xl font-bold text-lime-800 mb-2 md:mb-0 md:mr-4">Transparente Preise</div>
        <div class="reason-text text-lg text-gray-800">
          <p>Bei uns gibt es keine versteckten Kosten. Wir bieten transparente und faire Preisgestaltung, sodass Sie genau wissen, was Sie für Ihr Geld bekommen. Qualität muss nicht teuer sein – überzeugen Sie sich selbst.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const slides = [
  {
    image: '/images/3.jpg',
    text: 'Pflasterarbeiten: Wir bieten umfassende Lösungen für Ihre Pflasterprojekte.'
  },
  {
    image: '/images/32.jpg',
    text: 'Friesenwälle: Traditionelle und moderne Friesenwälle für Ihr Grundstück.'
  },
  {
    image: '/images/6.jpg',
    text: 'Erdarbeiten: Professionelle Erdarbeiten für Bauvorhaben aller Art.'
  },
  {
    image: '/images/16.jpg',
    text: 'Minibaggerarbeiten: Wir übernehmen Baggerarbeiten für Ihr Bauprojekt.'
  }
];
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}
.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
.service-card {
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.why-contact-us .reason {
  margin-bottom: 1rem;
}
.why-contact-us .reason-number {
  flex-shrink: 0;
}
</style>
