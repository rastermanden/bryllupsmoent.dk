<template>
  <section class="section gallery" id="galleri">
    <div class="container">
      <div class="section-header">
        <span class="section-label">I Aktion</span>
        <h2>Se Det Ske</h2>
        <p class="section-intro">
          Oplev processen med egne øjne – fra hammerslag til håndlavet minde.
        </p>
      </div>

      <div class="gallery-grid" :class="`gallery-grid--${images.length}`">
        <div
          v-for="(image, i) in images"
          :key="i"
          class="gallery-item"
          @click="openLightbox(i)"
        >
          <picture>
            <source :srcset="image.thumbWebp" type="image/webp" />
            <img :src="image.thumbJpg" :alt="image.alt" loading="lazy" decoding="async" />
          </picture>
          <div class="gallery-overlay">
            <span class="gallery-zoom">⊕</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="lightboxIndex !== null" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">✕</button>
        <button v-if="images.length > 1" class="lightbox-prev" @click="prevImage">‹</button>
        <picture>
          <source :srcset="images[lightboxIndex].fullWebp" type="image/webp" />
          <img :src="images[lightboxIndex].fullJpg" :alt="images[lightboxIndex].alt" class="lightbox-img" />
        </picture>
        <button v-if="images.length > 1" class="lightbox-next" @click="nextImage">›</button>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import galleryData from '../data/gallery.json'

// Gallery images are configured in src/data/gallery.json — set "enabled" to
// true/false to show/hide an image. To add a new image: drop it in
// /public/gallery/, run `npm run optimize-images` to generate WebP + thumbnail
// variants, then add an entry with its base name (without extension).
// import.meta.env.BASE_URL picks up the Vite base (/bryllupsmoent.dk/ in production).
const base = import.meta.env.BASE_URL
const V = '?v=2'
const images = galleryData
  .filter((img) => img.enabled)
  .map((img) => ({
    thumbWebp: `${base}gallery/thumbs/${img.name}.webp${V}`,
    thumbJpg:  `${base}gallery/thumbs/${img.name}.jpg${V}`,
    fullWebp:  `${base}gallery/${img.name}.webp${V}`,
    fullJpg:   `${base}gallery/${img.name}-opt.jpg${V}`,
    alt: img.alt,
  }))

const lightboxIndex = ref(null)

function openLightbox(i) {
  lightboxIndex.value = i
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxIndex.value = null
  document.body.style.overflow = ''
}

function prevImage() {
  lightboxIndex.value = (lightboxIndex.value - 1 + images.length) % images.length
}

function nextImage() {
  lightboxIndex.value = (lightboxIndex.value + 1) % images.length
}
</script>

<style scoped>
.gallery {
  background: var(--color-cream);
}

/* ── Grid layouts ── */
.gallery-grid {
  display: grid;
  gap: 1rem;
  margin-top: 3rem;
}

.gallery-grid--1 {
  grid-template-columns: 1fr;
  max-width: 700px;
  margin-inline: auto;
}

.gallery-grid--2 {
  grid-template-columns: repeat(2, 1fr);
}

.gallery-grid--3 {
  grid-template-columns: repeat(3, 1fr);
}

.gallery-grid--4,
.gallery-grid--5,
.gallery-grid--6 {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  .gallery-grid--4,
  .gallery-grid--5,
  .gallery-grid--6 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ── Item ── */
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  aspect-ratio: 3 / 4;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  background: var(--color-border);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.04);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(124, 45, 68, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-zoom {
  color: white;
  font-size: 2.5rem;
  line-height: 1;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

/* ── Lightbox ── */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(10, 5, 10, 0.92);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 88vh;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  object-fit: contain;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: fixed;
  background: rgba(255,255,255,0.12);
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.75rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  backdrop-filter: blur(4px);
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255,255,255,0.25);
}

.lightbox-close {
  top: 1.25rem;
  right: 1.25rem;
  font-size: 1.1rem;
}

.lightbox-prev {
  left: 1.25rem;
  font-size: 2.25rem;
}

.lightbox-next {
  right: 1.25rem;
  font-size: 2.25rem;
}

@media (max-width: 600px) {
  .gallery-grid--3 {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-grid--3 .gallery-item:first-child {
    grid-column: 1 / -1;
    aspect-ratio: 4 / 3;
  }
}
</style>
