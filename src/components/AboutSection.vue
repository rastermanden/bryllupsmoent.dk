<template>
  <section class="section about" id="om-os">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Om Os</span>
        <h2>En Tradition Med Et Moderne Twist</h2>
        <p class="section-intro">
          Vi specialiserer os i at skabe personlige møntprægningstjenester, der giver jeres bryllupsdag et unikt præg.
          Vores mobile møntprægningsmaskine kommer direkte til jeres bryllup.
        </p>
      </div>
      <div class="about-grid">
        <div class="about-card" v-for="feature in features" :key="feature.title">
          <div class="about-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '🪙',
    title: 'Håndlavede Møntprægningsmaskiner',
    text: 'Vores vintage møntprægningsmaskiner er restaureret med omhu og skaber autentiske, håndlavede erindringsskilte.'
  },
  {
    icon: '💍',
    title: 'Personligt til Jeres Dag',
    text: 'Hvert design er speciallavet til jer – med jeres navne, dato og et motiv der afspejler jeres kærlighedshistorie.'
  },
  {
    icon: '🎪',
    title: 'Mobile Tjenester',
    text: 'Vi kommer direkte til jeres bryllupslokation, hvad enten det er en slotshal, have eller restaurantvenue.'
  },
  {
    icon: '🎁',
    title: 'Mindeværdige Gæstegaver',
    text: 'Dine gæster tager en unik, personlig mønt hjem som et varigt minde fra jeres bryllupsdag.'
  }
]
</script>

<style scoped>
.about {
  background: var(--color-light);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.about-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: transform 0.3s, box-shadow 0.3s;
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
}

.about-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.about-card h3 {
  font-family: 'Playfair Display', Georgia, serif;
  color: var(--color-burgundy);
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
}

.about-card p {
  color: var(--color-text-light);
  font-size: 0.95rem;
  line-height: 1.7;
}
</style>
