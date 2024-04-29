<script setup>
  import { ref, onMounted } from 'vue';
  import Splide from '@splidejs/splide';
  // Default theme
  import '@splidejs/vue-splide/css';

  const mainSlides = ref([
    { src: 'https://cdn0.riastatic.com/photosnew/auto/photo/ford_edge__548482755f.webp' },
    { src: 'https://cdn0.riastatic.com/photosnew/auto/photo/ford_edge__548482765f.webp' },
    { src: 'https://cdn1.riastatic.com/photosnew/auto/photo/ford_edge__548482766f.webp' },
    { src: 'https://cdn0.riastatic.com/photosnew/auto/photo/ford_edge__548482775f.webp' },
    { src: 'https://cdn0.riastatic.com/photosnew/auto/photo/ford_edge__548482785f.webp' },
    { src: 'https://cdn1.riastatic.com/photosnew/auto/photo/ford_edge__548482791f.webp' },
  ]);

  const thumbnailSlides = ref([
    { src: 'https://cdn0.riastatic.com/photosnew/auto/photo/ford_edge__548482755f.webp' },
    { src: 'https://cdn0.riastatic.com/photosnew/auto/photo/ford_edge__548482765f.webp' },
    { src: 'https://cdn1.riastatic.com/photosnew/auto/photo/ford_edge__548482766f.webp' },
    { src: 'https://cdn0.riastatic.com/photosnew/auto/photo/ford_edge__548482775f.webp' },
    { src: 'https://cdn0.riastatic.com/photosnew/auto/photo/ford_edge__548482785f.webp' },
    { src: 'https://cdn1.riastatic.com/photosnew/auto/photo/ford_edge__548482791f.webp' },
  ]);

  onMounted(() => {
    const mainSlider = new Splide('#main-slider', {
      type: 'fade',
      heightRatio: 0.5,
      fixedHeight: 588,
      pagination: false,
      arrows: true,
      cover: true,
    });

    const thumbnailSlider = new Splide('#thumbnail-slider', {
      rewind: true,
      fixedWidth: 180,
      fixedHeight: 132,
      isNavigation: true,
      gap: 9,
      focus: 'center',
      pagination: false,
      cover: true,
      arrows: false,
      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 38,
        },
      },
    });

    mainSlider.sync(thumbnailSlider);
    mainSlider.mount();
    thumbnailSlider.mount();
  });
</script>

<template>
  <div class="splide-container">
    <div ref="mainSlider" class="splide" id="main-slider">
      <div class="splide__track">
        <ul class="splide__list">
          <li v-for="(slide, index) in mainSlides" :key="index" class="splide__slide">
            <img :src="slide.src" alt="">
          </li>
        </ul>
      </div>
      <div class="slider-verified"></div>
      <div class="slider-video"></div>
      <div class="slider-round-360"></div>
    </div>
    <div ref="thumbnailSlider" class="splide" id="thumbnail-slider">
      <div class="splide__track">
        <ul class="splide__list">
          <li v-for="(slide, index) in thumbnailSlides" :key="index" class="splide__slide">
            <img :src="slide.src" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
