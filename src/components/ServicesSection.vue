<template>
  <section class="section services" id="tjenester">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Tjenester</span>
        <h2>Hvad Vi Tilbyder</h2>
        <p class="section-intro">
          Fra design til præg – vi håndterer alt, så I kan nyde jeres store dag.
        </p>
      </div>
      <div class="services-list">
        <div class="service-item" v-for="(service, i) in services" :key="i">
          <div class="service-number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
          <div class="service-icon">{{ service.icon }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: '✏️',
    title: 'Brugerdefineret Møntdesign',
    description: 'Vores designere arbejder med jer for at skabe det perfekte møntdesign med jeres navne, dato og personligt motiv.'
  },
  {
    icon: '⚙️',
    title: 'Live Møntprægningstjenester',
    description: 'Gæsterne kan selv præge deres egne mønter under fejringen – en interaktiv og sjov oplevelse for alle aldre.'
  },
  {
    icon: '📦',
    title: 'Pakkeløsninger',
    description: 'Komplette pakker inklusive smuk præsentationsæske, personligt certifikat og valgfri indgravering.'
  },
  {
    icon: '🚚',
    title: 'Levering og Opsætning',
    description: 'Vi leverer og opsætter alt udstyr og sørger for en problemfri oplevelse fra start til slut.'
  }
]
</script>

<style scoped>
.services {
  background: white;
}

.services-list {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.service-item:hover {
  border-color: var(--color-gold);
  box-shadow: 0 4px 20px rgba(201, 168, 76, 0.15);
}

.service-number {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-gold);
  opacity: 0.4;
  min-width: 60px;
  line-height: 1;
}

.service-content {
  flex: 1;
}

.service-content h3 {
  font-family: 'Playfair Display', Georgia, serif;
  color: var(--color-burgundy);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.service-content p {
  color: var(--color-text-light);
  line-height: 1.7;
  font-size: 0.95rem;
}

.service-icon {
  font-size: 2rem;
  opacity: 0.7;
}

@media (max-width: 600px) {
  .service-item {
    flex-wrap: wrap;
  }
  .service-icon {
    display: none;
  }
}
</style>
