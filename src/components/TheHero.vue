<template>
  <section class="hero" id="hjem">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="coin-decoration">⬡</div>
      <h1>Din Personlige<br><span>Bryllupsmønt</span></h1>
      <p class="hero-subtitle">
        Skab et unikt og uforglemmeligt minde fra jeres store dag.<br>
        Håndlavede møntprægningstjenester til dit bryllup.
      </p>
      <div class="hero-actions">
        <a href="#priser" @click.prevent="scrollTo('priser')" class="btn btn-primary">Se Priser</a>
        <a href="#om-os" @click.prevent="scrollTo('om-os')" class="btn btn-outline">Læs Mere</a>
      </div>
    </div>
    <div class="hero-scroll">
      <span>↓</span>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 50%, rgba(180, 130, 70, 0.4) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 30%, rgba(124, 45, 68, 0.5) 0%, transparent 60%),
    linear-gradient(135deg, #1a0a10 0%, #3d1a24 40%, #2a0e1a 70%, #1c1208 100%);
  background-size: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero-content {
  position: relative;
  text-align: center;
  color: white;
  padding: 2rem;
  z-index: 2;
}

.coin-decoration {
  font-size: 4rem;
  color: var(--color-gold);
  margin-bottom: 1.5rem;
  display: block;
  animation: float 3s ease-in-out infinite;
  line-height: 1;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

h1 span {
  color: var(--color-gold);
  display: block;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.5);
  animation: bounce 2s ease infinite;
  font-size: 1.5rem;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}
</style>
