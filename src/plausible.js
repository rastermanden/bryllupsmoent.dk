/**
 * Injects the self-hosted Plausible Analytics tracking script.
 *
 * No-ops unless `VITE_PLAUSIBLE_HOST` is set and the app is running in a
 * production build, so local development never makes requests to an
 * analytics host.
 *
 * Configure via env vars (see .env.example):
 * - VITE_PLAUSIBLE_HOST: hostname of the self-hosted Plausible instance
 *   (e.g. "analytics.example.com")
 * - VITE_PLAUSIBLE_DOMAIN: the tracked site domain (defaults to
 *   "bryllupsmønt.dk")
 */
export function initPlausible() {
  const host = import.meta.env.VITE_PLAUSIBLE_HOST
  if (!import.meta.env.PROD || !host) return

  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN || 'bryllupsmønt.dk'

  const script = document.createElement('script')
  script.defer = true
  script.dataset.domain = domain
  script.src = `https://${host}/js/script.js`
  document.head.appendChild(script)
}
