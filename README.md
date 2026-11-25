# 🎂 Birthday Countdown

<p align="center">
  <strong>A sleek, real-time birthday countdown built with Vue 3.</strong>
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

A clean and interactive **birthday countdown timer** designed to track every second until the next birthday.

The project combines a responsive glassmorphic interface with real-time countdown calculations, automatic timezone detection, and a progress indicator showing how far through the calendar year we are.

**No build tools. No npm dependencies. No setup hassle.**

---

## 🌟 Features

### ⏳ Live Countdown

Track the remaining time with precise:

**Days · Hours · Minutes · Seconds**

The countdown updates every second, with each digit rolling like a mechanical dial.

### 📈 Year Progress

A progress bar shows how much of the current calendar year has already passed.

### 🌍 Timezone Aware

The page shows the current time in **UTC**, in **IST (India Standard Time, UTC+5:30)**, and in the **visitor's own browser timezone**, which is detected automatically.

No manual timezone configuration is required.

### 💎 Modern Interface

Built with a clean, premium aesthetic featuring:

* Glassmorphism
* Responsive layout
* Smooth visual transitions
* Minimal UI
* Mobile-friendly design

### ⚡ Zero Build Step

The entire front end runs directly in the browser.

No:

```text
npm install
npm run build
webpack
vite
node_modules
```

Just open the HTML file and you're ready to go.

---

## 🛠️ Tech Stack

| Technology                  | Usage                                          |
| --------------------------- | ---------------------------------------------- |
| 🟢 **Vue 3**                | Reactive UI and countdown logic                |
| 🌐 **HTML5**                | Semantic page structure                        |
| 🎨 **CSS3**                 | Styling, layout and visual effects             |
| ⚡ **Vue CDN**               | Vue runtime without a build system             |
| 🌍 **Browser Timezone API** | Automatic visitor timezone detection           |
| ☁️ **Cloudflare Pages**     | Hosting, plus a Function that serves R2 assets |
| 🗄️ **Cloudflare R2**        | Stores the favicon and other images            |

---

## 🚀 Live Demo

### 🎂 [Open Birthday Countdown](https://bday.shelkeaditya.dpdns.org/)

Experience the countdown directly in your browser.

---

## 💻 Run Locally

### Clone the repository

```bash
git clone https://github.com/shelkeaditya/birthday-countdown.git
cd birthday-countdown
```

### Option 1 — Open directly

Simply open:

```text
index.html
```

in your browser.

### Option 2 — Using `serve`

```bash
npx serve .
```

### Option 3 — Using Python

```bash
python3 -m http.server
```

Then open the local address provided by the server.

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

Simple, lightweight, and free of npm dependencies.

---

## ☁️ Deployment & Assets

The site is hosted on **Cloudflare Pages**. The favicon lives in an R2 bucket and is served through a Pages Function:

* The Pages project has an R2 binding named `birthday-bucket` pointing to the `portfolio-assets` bucket.
* `functions/r2/[[path]].js` handles any request under `/r2/` and returns the matching R2 object, so `/r2/images/Favicon.png` serves the key `images/Favicon.png`.
* `index.html` references it with `<link rel="icon" type="image/png" href="/r2/images/Favicon.png" />`.

---

## 🌍 Timezone Handling

The countdown target is the next 2 April in the visitor's **local browser timezone**, rather than a fixed location.

The timezone panel always shows three clocks:

```text
UTC
IST (Asia/Kolkata, UTC+05:30)
Visitor's own timezone (detected automatically)
```

---

## 🎯 Design Goals

The project was built around four principles:

**Simple** — No unnecessary dependencies.

**Fast** — Minimal client-side overhead.

**Responsive** — Works across desktop and mobile screens.

**Accurate** — Real-time countdown and timezone-aware calculations.

---

## 👨‍💻 Created By

**Aditya Shelke**

Cloud • DevOps • Security

<p>
  <a href="https://github.com/shelkeaditya">
    <img src="https://img.shields.io/badge/GitHub-@shelkeaditya-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

<p align="center">
  🎂 <strong>Every second counts.</strong>
</p>
