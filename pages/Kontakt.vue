<!-- pages/contact.vue -->
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Kontakt</h1>
    <div class="flex flex-col lg:flex-row items-center gap-8">
      <!-- Kontaktinformationen -->
      <div class="flex-1 text-gray-800 space-y-4">
        <div class="text-gray-900 text-2xl font-bold">
          <p>Kobane Garten und Landschaftsbau</p>
        </div>
        <div class="text-gray-800">
          <p>Adresse: </p> 
          <p>Weesrieser Weg 7</p>
          <p>24943 Flensburg</p>

        </div>
        <div class="text-gray-800">
          <p>E-Mail:</p>
          <a href="mailto:info@kobane-gartenbau.de" class="hover:underline">info@kobane-gartenbau.de</a>
        </div>
        <div class="text-gray-800">
          <p>Telefon:</p>
          <a href="tel:046166354403" class="hover:underline">046166354403</a>
        </div>
        <div class="text-gray-800">
          <p>Fax:</p>
          <a href="fax:046166354404" class="hover:underline">046166354404</a>
        </div>
        <div class="text-gray-800">
          <p>Mobile:</p>
          <a href="mobile:+4917622787830" class="hover:underline">017622787830</a>
        </div>
        <p>Wir freuen uns auf Ihre Anfrage!</p>
      </div>

      <!-- Bild des Geschäftsführers -->
      <div class="flex-1">
        <img 
          src="public/images/profil1.jpg" 
          alt="Geschäftsführer Kobane Garten und Landschaftsbau" 
          class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


useHead({ title: 'Kontakt' })
</script>

<style scoped>
/* Optional: Stile für die Kontaktseite */
.container {
  max-width: 800px;
}

h1 {
  color: #2d3748; /* dunkelgrau */
}

/* Optional: Stil für das Bild des Geschäftsführers */
img {
  max-width: 100%;
  height: auto;
}
</style>
