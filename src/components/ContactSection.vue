<template>
  <section class="section contact" id="kontakt">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Kontakt</span>
        <h2>Lad Os Skabe Noget Særligt</h2>
        <p class="section-intro">
          Udfyld formularen nedenfor, og vi vender tilbage inden for 24 timer.
        </p>
      </div>
      <div class="contact-wrapper">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Navn *</label>
              <input type="text" id="name" v-model="form.name" placeholder="Jeres navne" required />
            </div>
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" v-model="form.email" placeholder="email@eksempel.dk" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="date">Bryllupsdato</label>
              <input type="date" id="date" v-model="form.date" />
            </div>
            <div class="form-group">
              <label for="guests">Antal Gæster</label>
              <input type="number" id="guests" v-model="form.guests" placeholder="f.eks. 80" min="10" />
            </div>
          </div>
          <div class="form-group">
            <label for="message">Besked</label>
            <textarea id="message" v-model="form.message" rows="5" placeholder="Fortæl os om jeres bryllup og ønsker..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full">
            Send Forespørgsel
          </button>
        </form>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <a href="mailto:info@bryllupsmoent.dk">info@bryllupsmoent.dk</a>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <div>
              <strong>Område</strong>
              <span>Hele Danmark</span>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">⏰</span>
            <div>
              <strong>Svartid</strong>
              <span>Inden for 24 timer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  date: '',
  guests: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  alert('Tak for din henvendelse! Vi vender tilbage snarest.')
  Object.assign(form, { name: '', email: '', date: '', guests: '', message: '' })
}
</script>

<style scoped>
.contact {
  background: white;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  margin-top: 3rem;
  align-items: start;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-text);
}

input, textarea {
  border: 1.5px solid var(--color-border);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.2s;
  background: var(--color-light);
  color: var(--color-text);
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--color-gold);
  background: white;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-full {
  width: 100%;
  justify-content: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  min-width: 220px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.contact-item div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-item strong {
  font-weight: 600;
  color: var(--color-burgundy);
  font-size: 0.9rem;
}

.contact-item a, .contact-item span {
  color: var(--color-text-light);
  font-size: 0.95rem;
  text-decoration: none;
}

.contact-item a:hover {
  color: var(--color-gold);
}

@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
