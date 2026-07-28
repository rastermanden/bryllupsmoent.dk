<template>
  <section class="section gallery" id="galleri" aria-labelledby="galleri-heading">
    <div class="container">
      <div class="section-header">
        <span class="section-label">I Aktion</span>
        <h2 id="galleri-heading">Se Det Ske</h2>
        <p class="section-intro">
          Oplev processen med egne øjne – fra hammerslag til håndlavet minde.
        </p>
      </div>

      <div class="gallery-grid" :class="`gallery-grid--${images.length}`">
        <button
          v-for="(image, i) in images"
          :key="i"
          ref="galleryButtons"
          type="button"
          class="gallery-item"
          :aria-label="`Se billede i fuld størrelse: ${image.alt}`"
          @click="openLightbox(i)"
        >
          <picture>
            <source :srcset="image.thumbWebp" type="image/webp" />
            <img :src="image.thumbJpg" :alt="image.alt" loading="lazy" decoding="async" />
          </picture>
          <div class="gallery-overlay">
            <span class="gallery-zoom" aria-hidden="true">⊕</span>
          </div>
        </button>
      </div>

      <div class="gallery-cta">
        <p>Se mange flere billeder fra vores arbejde på Instagram.</p>
        <a
          class="btn btn-outline-dark"
          href="https://www.instagram.com/bryllupsmoent"
          target="_blank"
          rel="noopener"
        >
          <svg class="ig-icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" stroke="none" />
          </svg>
          Følg os på Instagram
        </a>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxIndex !== null"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Billedvisning"
        @click.self="closeLightbox"
        @keydown="onLightboxKeydown"
      >
        <button ref="closeButton" class="lightbox-close" aria-label="Luk billedvisning" @click="closeLightbox">✕</button>
        <button v-if="images.length > 1" class="lightbox-prev" aria-label="Forrige billede" @click="prevImage">‹</button>
        <picture>
          <source :srcset="images[lightboxIndex].fullWebp" type="image/webp" />
          <img :src="images[lightboxIndex].fullJpg" :alt="images[lightboxIndex].alt" class="lightbox-img" />
        </picture>
        <button v-if="images.length > 1" class="lightbox-next" aria-label="Næste billede" @click="nextImage">›</button>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
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
const galleryButtons = ref([])
const closeButton = ref(null)
let _pushedState = false
let _lastTrigger = null

function openLightbox(i) {
  _lastTrigger = galleryButtons.value[i] || null
  lightboxIndex.value = i
  document.body.style.overflow = 'hidden'
  history.pushState({ lightbox: true }, '')
  _pushedState = true
  nextTick(() => closeButton.value?.focus())
}

function _closeImmediately() {
  lightboxIndex.value = null
  document.body.style.overflow = ''
  _pushedState = false
  _lastTrigger?.focus()
  _lastTrigger = null
}

function closeLightbox() {
  const shouldGoBack = _pushedState
  _closeImmediately()
  if (shouldGoBack) history.back()
}

function onPopState() {
  if (lightboxIndex.value !== null) _closeImmediately()
}

function prevImage() {
  lightboxIndex.value = (lightboxIndex.value - 1 + images.length) % images.length
}

function nextImage() {
  lightboxIndex.value = (lightboxIndex.value + 1) % images.length
}

function onLightboxKeydown(e) {
  if (e.key === 'Escape') {
    e.stopPropagation()
    closeLightbox()
  } else if (e.key === 'ArrowLeft' && images.length > 1) {
    prevImage()
  } else if (e.key === 'ArrowRight' && images.length > 1) {
    nextImage()
  } else if (e.key === 'Tab') {
    // Simple focus trap: cycle focus among the lightbox's buttons.
    const focusables = e.currentTarget.querySelectorAll('button')
    if (!focusables.length) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }
}

onMounted(() => window.addEventListener('popstate', onPopState))
onUnmounted(() => window.removeEventListener('popstate', onPopState))
</script>

<style scoped>
.gallery {
  background: var(--color-cream);
}

/* ── Instagram call-to-action ── */
.gallery-cta {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.gallery-cta p {
  color: var(--color-text-light);
  font-size: 1rem;
  margin: 0;
}

.ig-icon {
  width: 1.15rem;
  height: 1.15rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
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
  border: none;
  padding: 0;
  width: 100%;
  display: block;
  font: inherit;
  text-align: inherit;
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
