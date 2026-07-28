<template>
  <footer>
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="logo-icon" aria-hidden="true">⬡</span>
        <span class="brand-name">Bryllupsmønt</span>
      </div>
      <p class="footer-tagline">
        Unikke minder præget i metal – til jeres store dag.
      </p>
      <nav class="footer-nav" aria-label="Fodsidenavigation">
        <a href="#hjem" @click.prevent="scrollTo('hjem')">Hjem</a>
        <a href="#om-os" @click.prevent="scrollTo('om-os')">Om Os</a>
        <a href="#priser" @click.prevent="scrollTo('priser')">Priser</a>
        <a href="#kontakt" @click.prevent="scrollTo('kontakt')">Kontakt</a>
      </nav>
      <div class="footer-social">
        <a
          href="https://www.instagram.com/bryllupsmoent"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Følg Bryllupsmønt på Instagram (åbner i nyt vindue)"
        >
          <svg class="ig-icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" stroke="none" />
          </svg>
          <span>Instagram</span>
        </a>
      </div>
      <p class="footer-company">
        Bryllupsmønt I/S · CVR 4645 3352 · <a href="mailto:kontakt@bryllupsmønt.dk">kontakt@bryllupsmønt.dk</a>
      </p>
      <p class="footer-copy">
        © {{ new Date().getFullYear() }} Bryllupsmønt.dk – Alle rettigheder forbeholdes.
      </p>
    </div>
  </footer>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
footer {
  background: var(--color-dark);
  color: rgba(255,255,255,0.7);
  padding: 3rem 0 2rem;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-gold);
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 700;
}

.logo-icon {
  font-size: 1.2rem;
}

.footer-tagline {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
}

.footer-nav {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-nav a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.2s;
}

.footer-nav a:hover {
  color: var(--color-gold);
}

.footer-nav a:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 3px;
  border-radius: 3px;
}

.footer-social a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.2s;
}

.footer-social a:hover {
  color: var(--color-gold);
}

.footer-social a:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 3px;
  border-radius: 3px;
}

.footer-social .ig-icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
}

.footer-company {
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
  margin: 0;
}

.footer-company a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
}

.footer-company a:hover {
  color: var(--color-gold);
}

.footer-company a:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 3px;
  border-radius: 3px;
}

.footer-copy {
  color: rgba(255,255,255,0.55);
  font-size: 0.8rem;
  margin: 0;
  margin-top: 0.5rem;
}
</style>
