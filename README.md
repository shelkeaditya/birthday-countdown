# 🎂 Birthday Countdown

<p align="center">
  <strong>A real-time birthday countdown built with Vue 3.</strong>
</p>

<p align="center">
  <a href="https://bday.shelkeaditya.dpdns.org/">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-Birthday_Countdown-6366f1?style=for-the-badge" alt="Live Demo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-3-42b883?style=flat-square&logo=vue.js&logoColor=white" alt="Vue 3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Zero--Build-111827?style=flat-square" alt="Zero Build">
</p>

---

## ✨ Overview

A single-page countdown to the next birthday (2 April). It shows the time remaining in days, hours, minutes and seconds, how far through the calendar year we are, and the current time in UTC, IST and the visitor's own timezone.

The front end has no build step and no npm dependencies: Vue 3 is loaded from a CDN.

---

## 🌟 Features

* **Live countdown** — days, hours, minutes and seconds, updated every second. Each digit rolls with a dial-style animation.
* **Turning age** — shows the age being turned and the date of the next birthday.
* **Year progress** — a progress bar showing how much of the current calendar year has passed.
* **Three clocks** — current time in UTC, in IST (`Asia/Kolkata`, UTC+5:30), and in the visitor's browser timezone, which is detected automatically.
* **Responsive layout** — the four countdown blocks switch from a 4-column to a 2-column grid on screens 480px wide or narrower.
* **Dark theme** — styled with CSS custom properties and the Poppins font.

---

## 🛠️ Tech Stack

| Technology               | Usage                                              |
| ------------------------ | -------------------------------------------------- |
| **Vue 3** (CDN)          | Reactive UI and countdown logic                    |
| **HTML5**                | Page structure and Vue template                    |
| **CSS3**                 | Styling, layout, transitions and animations        |
| **Browser Intl APIs**    | Visitor timezone detection and time formatting     |
| **Cloudflare Pages**     | Hosting, plus a Function that serves R2 assets     |
| **Cloudflare R2**        | Stores the favicon                                 |

---

## 💻 Run Locally

```bash
git clone https://github.com/shelkeaditya/birthday-countdown.git
cd birthday-countdown
```

Then either open `index.html` directly in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server
```

An internet connection is needed for Vue (unpkg) and the Poppins font (Google Fonts).

> **Note:** these servers don't run Cloudflare Pages Functions, so the favicon (served from R2 via `/r2/...`) won't load locally. Use `npx wrangler pages dev .` with the R2 binding configured to test it.

---

## 📁 Project Structure

```text
birthday-countdown/
│
├── index.html            # Markup and Vue template
├── style.css             # Styles and design tokens
├── app.js                # Vue 3 app and countdown logic
├── functions/
│   └── r2/
│       └── [[path]].js   # Pages Function: serves R2 objects at /r2/<key>
├── CLAUDE.md
└── README.md
```

---

## ☁️ Deployment & Assets

The site is hosted on **Cloudflare Pages**. The favicon lives in an R2 bucket and is served through a Pages Function:

* The Pages project has an R2 binding named `birthday-bucket` pointing to the `portfolio-assets` bucket.
* `functions/r2/[[path]].js` handles requests under `/r2/` and returns the matching R2 object, so `/r2/images/Favicon.png` serves the key `images/Favicon.png`.
* `index.html` references it with `<link rel="icon" type="image/png" href="/r2/images/Favicon.png" />`.

---

## 🌍 Timezone Handling

The countdown target is the next 2 April at midnight in the visitor's **local browser timezone**.

The timezone panel shows three clocks:

```text
UTC
IST (Asia/Kolkata, UTC+05:30)
Visitor's own timezone (detected automatically)
```

---

## 👨‍💻 Created By

**Aditya Shelke**

Cloud • DevOps • Security

<p>
  <a href="https://github.com/shelkeaditya">
    <img src="https://img.shields.io/badge/GitHub-@shelkeaditya-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>
