<template>
  <section class="section pricing" id="priser">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Priser</span>
        <h2>Vores Pakke</h2>
        <p class="section-intro">
          Alt hvad I behøver til en uforglemmelig bryllupsmøntoplevelse.
        </p>
      </div>
      <div class="pricing-single">
        <div class="pricing-card featured">
          <div class="pricing-header">
            <span class="plan-icon">🪙</span>
            <h3>Bryllupsmønt</h3>
          </div>
          <ul class="plan-features">
            <li v-for="feature in features" :key="feature">
              <span class="check">✓</span> {{ feature }}
            </li>
          </ul>
          <a href="#kontakt" @click.prevent="scrollTo('kontakt')" class="btn btn-primary">
            Kontakt Os
          </a>
          <p class="plan-cta-note">Er I flere eller vil I have det anderledes? Kontakt os.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const features = [
  'Brudeparret slår den første mønt af sølv',
  'Op til 50 kobbermønter til jeres gæster',
  '1 unikt design',
  '2 timers tilstedeværelse'
]
</script>

<style scoped>
.pricing {
  background: var(--color-light);
}

.pricing-single {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
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
  max-width: 420px;
  width: 100%;
}

.pricing-card.featured {
  border-color: var(--color-gold);
  box-shadow: 0 12px 50px rgba(201, 168, 76, 0.2);
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
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.plan-features li {
  font-size: 1rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.check {
  color: var(--color-gold);
  font-weight: 700;
}

.plan-cta-note {
  text-align: center;
  color: var(--color-text-light);
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
}
</style>
