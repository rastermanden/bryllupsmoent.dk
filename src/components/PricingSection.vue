<template>
  <section class="section pricing" id="priser">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Priser</span>
        <h2>Vælg Den Rigtige Pakke</h2>
        <p class="section-intro">
          Vi tilbyder fleksible pakker, der passer til alle bryllupstyper og budgetter.
        </p>
      </div>
      <div class="pricing-grid">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="pricing-card"
          :class="{ featured: plan.featured }"
        >
          <div class="pricing-header">
            <span class="plan-icon">{{ plan.icon }}</span>
            <h3>{{ plan.name }}</h3>
            <div class="plan-price">
              <span class="currency">kr.</span>
              <span class="amount">{{ plan.price }}</span>
            </div>
            <p class="plan-desc">{{ plan.description }}</p>
          </div>
          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature">
              <span class="check">✓</span> {{ feature }}
            </li>
          </ul>
          <a href="#kontakt" @click.prevent="scrollTo('kontakt')" class="btn" :class="plan.featured ? 'btn-primary' : 'btn-outline-dark'">
            Book Nu
          </a>
        </div>
      </div>
      <p class="pricing-note">
        * Alle priser er inkl. moms. Kontakt os for skræddersyede løsninger til større arrangementer.
      </p>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const plans = [
  {
    icon: '🌸',
    name: 'Sølv',
    price: '2.995',
    description: 'Perfekt til mindre bryllupper',
    featured: false,
    features: [
      'Op til 50 mønter',
      '1 unikt design',
      '2 timers tilstedeværelse',
      'Standard præsentationsæske',
      'Digital kopi af design'
    ]
  },
  {
    icon: '��',
    name: 'Guld',
    price: '4.995',
    description: 'Vores mest populære pakke',
    featured: true,
    features: [
      'Op til 100 mønter',
      '2 unikke designs',
      '4 timers tilstedeværelse',
      'Premium præsentationsæske',
      'Live prægningstjeneste',
      'Personligt certifikat',
      'Foto af processen'
    ]
  },
  {
    icon: '💎',
    name: 'Diamant',
    price: '7.995',
    description: 'Den ultimative oplevelse',
    featured: false,
    features: [
      'Ubegrænsede mønter',
      '3 unikke designs',
      'Hele dagen',
      'Luksus gaveboks',
      'Live prægningstjeneste',
      'Professionel fotografi',
      'Videodokumentation',
      'Personlig koordinator'
    ]
  }
]
</script>

<style scoped>
.pricing {
  background: var(--color-light);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  align-items: start;
}

.pricing-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 2px solid transparent;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.1);
}

.pricing-card.featured {
  border-color: var(--color-gold);
  transform: scale(1.03);
  box-shadow: 0 12px 50px rgba(201, 168, 76, 0.2);
}

.pricing-card.featured:hover {
  transform: scale(1.03) translateY(-4px);
}

.pricing-header {
  text-align: center;
}

.plan-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.75rem;
}

.pricing-header h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.6rem;
  color: var(--color-burgundy);
  margin-bottom: 1rem;
}

.plan-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

.currency {
  font-size: 1.1rem;
  color: var(--color-text-light);
}

.amount {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-burgundy);
  line-height: 1;
}

.plan-desc {
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.plan-features li {
  font-size: 0.92rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.check {
  color: var(--color-gold);
  font-weight: 700;
}

.pricing-note {
  text-align: center;
  color: var(--color-text-light);
  font-size: 0.85rem;
  margin-top: 2rem;
}
</style>
