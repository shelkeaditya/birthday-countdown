# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static vanilla HTML/CSS/JS birthday countdown using Vue 3 from a CDN. No build step, no package manager. Open `index.html` directly in a browser or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

Note: static servers do not run Cloudflare Pages Functions, so `/r2/*` URLs (including the favicon) return 404 locally. To test them, use `npx wrangler pages dev .` with the R2 binding configured.

## Architecture

Single-page app with three front-end files plus one Pages Function:

- **`index.html`** — markup + Vue template (`{{ }}` bindings, `:style` directives). Loads Vue 3 from unpkg and the Poppins font from Google Fonts.
- **`style.css`** — all styles; uses CSS custom properties defined in `:root` for the design system
- **`app.js`** — Vue 3 app (`createApp`, CDN global build); all logic lives here
- **`functions/r2/[[path]].js`** — Cloudflare Pages Function that serves objects from the R2 bucket under `/r2/<key>` (see below)

### app.js structure

- **Constants** at top: `BIRTHDAY_MONTH`, `BIRTHDAY_DAY`, `BIRTH_YEAR`, `IST_TZ` (`Asia/Kolkata`, shown to users as "IST"), time unit ms values
- **Pure functions**: `nextBirthday()`, `pad()`, `yearProgressPercent()`, `formatConciseDate()` — defined outside the Vue app
- **`data`**: countdown strings (`days`, `hours`, `minutes`, `seconds`), timezone strings (`utcDate`, `myDate`, `yourDate`), `yearProgress`, `visitorTimezone`
- **`computed`**: `target` (next birthday Date), `turningAge`, `birthdayLine`, `daysPadded`, and the `*Digits` arrays (`daysDigits`, `hoursDigits`, `minutesDigits`, `secondsDigits`) that drive the per-digit dial animation
- **`tick()`**: called every second via `setInterval`; updates countdown units, `yearProgress`, and all three timezone strings
- **Lifecycle**: `mounted` starts the interval; `beforeUnmount` clears it

### Digit dial animation

Each digit is rendered in its own `.digit-wrap` with a keyed `<transition name="dial">`. The `dial-*` transition classes in `style.css` roll the old digit out and the new one in. Changing the digit key in the template breaks the animation.

### Design tokens (style.css `:root`)

Matches the portfolio at `~/dev/personal/new/portfolio-frontend`. Key variables: `--bg`, `--surface`, `--border`, `--accent` (`#5b8def`), `--muted`, `--heading`. Always use these vars — no hardcoded colors.

## R2 assets and favicon

The favicon is served from a Cloudflare R2 bucket, not from the repo:

- Pages project has an R2 binding named `birthday-bucket` pointing to the `portfolio-assets` bucket (Pages → Settings → Bindings).
- `functions/r2/[[path]].js` reads that binding (`env["birthday-bucket"]`) and returns the object whose key matches the rest of the URL path. `/r2/images/Favicon.png` maps to the R2 key `images/Favicon.png`. R2 keys are case-sensitive.
- `index.html` references it with `<link rel="icon" type="image/png" href="/r2/images/Favicon.png" />`.
- The binding alone does not expose files; the Function is what serves them. If the binding is renamed, update the Function.

## Birthday date

Change `BIRTHDAY_MONTH` and `BIRTHDAY_DAY` (and `BIRTH_YEAR` for the "Turning N" line) in `app.js` to update the target date.
