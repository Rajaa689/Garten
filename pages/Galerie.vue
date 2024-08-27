<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-4">Galerie</h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(image, index) in images" :key="index" @click="openSlideshow(index)">
        <img :src="image.src" :alt="image.alt" class="cursor-pointer hover:opacity-75 transition duration-300 image-style">
      </div>
    </div>
    
    <gallery-slideshow
      :images="images"
      :index="slideshowIndex"
      :visible="isSlideshowOpen"
      @close="closeSlideshow"
    ></gallery-slideshow>
  </div>
</template>

<script setup lang="ts">

const images = ref([
  { src: '/images/1.jpg', alt: 'gartenarbeit' },
  { src: '/images/2.jpg', alt: 'gartenarbeit' },
  { src: '/images/3.jpg', alt: 'gartenarbeit' },
  { src: '/images/4.jpg', alt: 'gartenarbeit' },
  { src: '/images/5.jpg', alt: 'gartenarbeit' },
  { src: '/images/6.jpg', alt: 'gartenarbeit' },
  { src: '/images/7.jpg', alt: 'gartenarbeit' },
  { src: '/images/8.jpg', alt: 'gartenarbeit' },
  { src: '/images/9.jpg', alt: 'gartenarbeit' },
  { src: '/images/10.jpg', alt: 'gartenarbeit' },
  { src: '/images/11.jpg', alt: 'gartenarbeit' },
  { src: '/images/12.jpg', alt: 'gartenarbeit' },
  { src: '/images/13.jpg', alt: 'gartenarbeit' },
  { src: '/images/14.jpg', alt: 'gartenarbeit' },
  { src: '/images/15.jpg', alt: 'gartenarbeit' },
  { src: '/images/16.jpg', alt: 'gartenarbeit' },
  { src: '/images/17.jpg', alt: 'gartenarbeit' },
  { src: '/images/18.jpg', alt: 'gartenarbeit' },
  { src: '/images/19.jpg', alt: 'gartenarbeit' },
  { src: '/images/20.jpg', alt: 'gartenarbeit' },
  { src: '/images/21.jpg', alt: 'gartenarbeit' },
  { src: '/images/22.jpg', alt: 'gartenarbeit' },
  { src: '/images/23.jpg', alt: 'gartenarbeit' },
  { src: '/images/24.jpg', alt: 'gartenarbeit' },
  { src: '/images/25.jpg', alt: 'gartenarbeit' },
  { src: '/images/26.jpg', alt: 'gartenarbeit' },
  { src: '/images/27.jpg', alt: 'gartenarbeit' },
  { src: '/images/28.jpg', alt: 'gartenarbeit' },
  { src: '/images/29.jpg', alt: 'gartenarbeit' },
  { src: '/images/30.jpg', alt: 'gartenarbeit' },
  { src: '/images/31.jpg', alt: 'gartenarbeit' },
  { src: '/images/32.jpg', alt: 'gartenarbeit' },
  { src: '/images/33.jpg', alt: 'gartenarbeit' },
  { src: '/images/34.jpg', alt: 'gartenarbeit' },
  { src: '/images/35.jpg', alt: 'gartenarbeit' },
  { src: '/images/36.jpg', alt: 'gartenarbeit' },
  { src: '/images/37.jpg', alt: 'gartenarbeit' },
  { src: '/images/38.jpg', alt: 'gartenarbeit' },
  { src: '/images/39.jpg', alt: 'gartenarbeit' },
  { src: '/images/40.jpg', alt: 'gartenarbeit' },
  { src: '/images/41.jpg', alt: 'gartenarbeit' },
  { src: '/images/42.jpg', alt: 'gartenarbeit' },
  { src: '/images/43.jpg', alt: 'gartenarbeit' },
  { src: '/images/44.jpg', alt: 'gartenarbeit' },
  { src: '/images/45.jpg', alt: 'gartenarbeit'},
  { src: '/images/46.jpg', alt: 'gartenarbeit' },
  { src: '/images/47.jpg', alt: 'gartenarbeit' },
  { src: '/images/48.jpg', alt: 'gartenarbeit' },
  { src: '/images/49.jpg', alt: 'gartenarbeit' },
  { src: '/images/50.jpg', alt: 'gartenarbeit' },
  { src: '/images/51.jpg', alt: 'gartenarbeit' },
  { src: '/images/52.jpg', alt: 'gartenarbeit' },
  { src: '/images/53.jpg', alt: 'gartenarbeit' },
  { src: '/images/54.jpg', alt: 'gartenarbeit' },
  { src: '/images/55.jpg', alt: 'gartenarbeit' },
  { src: '/images/56.jpg', alt: 'gartenarbeit' },
  { src: '/images/57.jpg', alt: 'gartenarbeit' },
  { src: '/images/58.jpg', alt: 'gartenarbeit' },
  { src: '/images/59.jpg', alt: 'gartenarbeit' }
  
]);

const isSlideshowOpen = ref(false);
const slideshowIndex = ref(0);

function openSlideshow(index) {
  slideshowIndex.value = index;
  isSlideshowOpen.value = true;
}

function closeSlideshow() {
  isSlideshowOpen.value = false;
}
</script>

<style scoped>
.grid {
  margin-top: 1rem;
}
.image-style {
  width: 100%;
  height: 300px; /* Einheitliche Höhe für alle Bilder */
  object-fit: cover; /* Stellt sicher, dass die Bilder zugeschnitten werden und gleich groß sind */
}
</style>
