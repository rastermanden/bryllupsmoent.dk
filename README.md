# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Analytics (self-hosted Plausible)

The site can report page views to a self-hosted [Plausible](https://plausible.io)
instance. The tracking script is only injected in production builds, and
only when a host is configured — so it's a no-op until you set it up.

1. Stand up your own Plausible instance (e.g. via Docker on a VPS) and add
   this site to it.
2. Set the following as GitHub Actions **repository variables** (Settings →
   Secrets and variables → Actions → Variables), so `deploy.yml` passes them
   into the build:
   - `VITE_PLAUSIBLE_HOST` — hostname of your Plausible instance, e.g.
     `analytics.example.com`
   - `VITE_PLAUSIBLE_DOMAIN` — site domain reported to Plausible (defaults
     to `bryllupsmønt.dk` if unset)
3. For local development, copy `.env.example` to `.env.local` and fill in
   the same values if you want to test tracking locally against a
   production build (`npm run build && npm run preview`).

No cookie consent banner is required — Plausible is cookie-less by design.
