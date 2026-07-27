<template>
  <section class="section testimonials" id="anmeldelser">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Anmeldelser</span>
        <h2>Hvad Vores Kunder Siger</h2>
        <p class="section-intro">
          Vi er stolte af at have været en del af mange uforglemmelige bryllupper rundt om i Danmark.
        </p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="(testimonial, i) in testimonials" :key="i">
          <div class="stars" aria-label="5 ud af 5 stjerner">
            <span v-for="n in testimonial.rating" :key="n">★</span>
          </div>
          <p class="quote">"{{ testimonial.quote }}"</p>
          <div class="author">
            <div class="author-initials">{{ testimonial.initials }}</div>
            <div class="author-info">
              <span class="author-name">{{ testimonial.name }}</span>
              <span class="author-detail">{{ testimonial.detail }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    rating: 5,
    quote: 'comming soon',
    initials: 'B&H',
    name: 'Bjorn & Hedvig',
    detail: ''
  }
]
</script>

<style scoped>
.testimonials {
  background: var(--color-burgundy);
}

.testimonials .section-header h2 {
  color: white;
}

.testimonials .section-intro {
  color: rgba(255, 255, 255, 0.75);
}

.testimonials .section-label {
  color: var(--color-gold-light);
  border-color: rgba(232, 212, 158, 0.4);
}

.testimonials-grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s, transform 0.3s;
}

.testimonial-card:hover {
  border-color: var(--color-gold);
  transform: translateY(-4px);
}

.stars {
  color: var(--color-gold);
  font-size: 1.1rem;
  letter-spacing: 0.2em;
  margin-bottom: 1rem;
}

.quote {
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  line-height: 1.7;
  font-size: 0.95rem;
  flex: 1;
  margin-bottom: 1.5rem;
}

.author {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.author-initials {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-gold);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  font-size: 0.85rem;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
}

.author-detail {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

@media (max-width: 850px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
