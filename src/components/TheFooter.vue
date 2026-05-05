<template>
  <footer>
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="logo-icon">⬡</span>
        <span class="brand-name">Bryllupsmønt</span>
      </div>
      <p class="footer-tagline">
        Unikke minder præget i metal – til jeres store dag.
      </p>
      <nav class="footer-nav">
        <a href="#hjem" @click.prevent="scrollTo('hjem')">Hjem</a>
        <a href="#om-os" @click.prevent="scrollTo('om-os')">Om Os</a>
        <a href="#priser" @click.prevent="scrollTo('priser')">Priser</a>
        <a href="#kontakt" @click.prevent="scrollTo('kontakt')">Kontakt</a>
      </nav>
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
  color: rgba(255,255,255,0.55);
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
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.2s;
}

.footer-nav a:hover {
  color: var(--color-gold);
}

.footer-copy {
  color: rgba(255,255,255,0.35);
  font-size: 0.8rem;
  margin: 0;
  margin-top: 0.5rem;
}
</style>
