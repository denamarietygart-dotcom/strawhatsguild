# ☠ The Straw Hats — Guild Website
**World of Warcraft · Thunderlord US · Alliance**

---

## Project Structure

```
strawhat-guild/
│
├── index.html              ← Main HTML — all sections live here
│
├── css/
│   ├── base.css            ← CSS variables, reset, typography
│   ├── layout.css          ← Ocean BG, navbar, sections, footer, grid helpers
│   ├── components.css      ← Buttons, cards, stats, badges, cursor, discord CTA
│   ├── sections.css        ← Per-section styles (hero, rules, leadership, etc.)
│   └── animations.css      ← All keyframes and entrance animations
│
├── js/
│   ├── cursor.js           ← Custom glowing cursor + hover effects
│   ├── particles.js        ← Floating ocean particles rising from bottom
│   └── nav.js              ← Section routing, navbar scroll, openLink utility
│
└── assets/
    └── images/
        ├── favicon.png     ← ☠ skull favicon (add your own)
        ├── hero-banner.jpg ← Hero background (add Midjourney Luffy image here)
        └── jolly-roger.png ← Straw Hat Jolly Roger (add Midjourney image here)
```

---

## How to Add Your Midjourney Images

1. Generate images using the prompts in Discord
2. Save them to `assets/images/`
3. Add the hero banner to `index.html`:

In the `#hero` section, add this inside `.hero-vignette`:
```html
<img src="assets/images/hero-banner.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.25;z-index:-1;" alt="">
```

---

## Deploy to Vercel (Free)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — done

No build step needed. Pure HTML/CSS/JS.

---

## Updating Content

| What to update | Where |
|---|---|
| Raid schedule | `index.html` → `#schedule` section |
| Progression | `index.html` → `.boss-grid` |
| Officer names | `index.html` → `#leadership` section |
| Discord link | Search `akuH6jMkbQ` and replace with your invite code |
| Raffle details | `index.html` → `#raffle` section |
| Streamer cards | `index.html` → `#streamers` section |
| Guild rules | `index.html` → `.rules-grid` |

---

## Colors (change in `css/base.css`)

| Variable | Color | Used for |
|---|---|---|
| `--red` / `--red2` | Crimson | Buttons, accents, raid badge |
| `--gold` / `--gold2` | Gold | Text, borders, highlights |
| `--teal` / `--teal2` | Teal | Section eyebrows, particles, PvP badge |
| `--navy` → `--navy5` | Deep blue-black | All backgrounds |
| `--cream` / `--cream2` | Warm white | Body text |

---

*Fan site · Not affiliated with Blizzard Entertainment*
*© 2026 The Straw Hats Guild · Thunderlord US*
