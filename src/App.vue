<script setup>
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'
import AboutSection from './components/AboutSection.vue'
import GallerySection from './components/GallerySection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PricingSection from './components/PricingSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <a href="#main-content" class="skip-link">Spring til indhold</a>
  <TheHeader />
  <main id="main-content">
    <TheHero />
    <AboutSection />
    <GallerySection />
    <ServicesSection />
    <PricingSection />
    <TestimonialsSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>
