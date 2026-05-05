<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollTo = (id) => {
  closeMenu()
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <a href="#" class="logo" @click.prevent="scrollTo('hjem')">
        <span class="logo-icon">⬡</span>
        Bryllupsmønt
      </a>

      <nav :class="{ open: isMenuOpen }">
        <ul>
          <li><a href="#hjem" @click.prevent="scrollTo('hjem')">Hjem</a></li>
          <li><a href="#om-os" @click.prevent="scrollTo('om-os')">Om Os</a></li>
          <li><a href="#priser" @click.prevent="scrollTo('priser')">Priser</a></li>
          <li><a href="#kontakt" @click.prevent="scrollTo('kontakt')">Kontakt</a></li>
        </ul>
      </nav>

      <button
        class="burger"
        :class="{ active: isMenuOpen }"
        @click="toggleMenu"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 0;
  transition: background 0.3s, box-shadow 0.3s;
  background: transparent;
}

header.scrolled {
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-gold);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.02em;
}

header.scrolled .logo {
  color: var(--color-burgundy);
}

.logo-icon {
  font-size: 1.25rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

nav a {
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s;
}

header.scrolled nav a {
  color: var(--color-text);
}

nav a:hover {
  color: var(--color-gold);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.burger span {
  display: block;
  width: 26px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

header.scrolled .burger span {
  background: var(--color-burgundy);
}

.burger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger.active span:nth-child(2) {
  opacity: 0;
}

.burger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }

  nav.open {
    max-height: 300px;
  }

  nav ul {
    flex-direction: column;
    gap: 0;
    padding: 0.5rem 0;
  }

  nav ul li a {
    display: block;
    padding: 0.9rem 2rem;
    color: var(--color-text) !important;
    border-bottom: 1px solid var(--color-light);
  }

  nav ul li:last-child a {
    border-bottom: none;
  }
}
</style>
