# ✦ Cosmic Dashboard

A personal astrology and divination web app — installable as a PWA, works offline, no account required, no ads, no tracking.

**Live App → [DFiSlayer.github.io/cosmic-dashboard](https://DFiSlayer.github.io/cosmic-dashboard/)**

---

## What It Does

Add any person's name and date of birth to generate a full multi-system profile. Add birth time and city to unlock the complete natal chart with houses, Rising sign, and aspects.

---

## Systems

| System | What You Get |
|---|---|
| **Western Astrology** | Sun sign, all planets, Rising, MC, 12 houses, major aspects — calculated with VSOP87 |
| **Vedic / Jyotish** | Sidereal sun sign via Lahiri ayanamsa, Nakshatra with ruling planet |
| **Numerology** | Life Path, Expression, Soul Urge, Quiet Self, Birthday, Pinnacle, Personal Year |
| **Chinese / BaZi** | Zodiac animal, element, polarity, Four Pillars year stem and branch |
| **Aztec Tonalpohualli** | Day sign and trecena from the 260-day sacred calendar |
| **Inca / Andean** | Monthly sacred festival cycle |
| **Native American** | Animal Totem zodiac with mineral, direction, element, color, compatibility · Birth Moon (Ojibwe/Algonquin) |
| **Elder Futhark Runes** | Solar birth rune (Viking date ranges per Randi Bjarum) · Birth Hour rune from birth time |
| **Celtic Tree Calendar** | Ogham / Beth-Luis-Nion tree sign |
| **Human Design** | Type, strategy, authority, profile, defined and undefined centers |
| **Synastry** | Side-by-side comparison of any two charts across all systems |

---

## Features

- **Works offline** — all calculations run in the browser, no server needed
- **Auto-saves** — charts stored in browser localStorage, persist between sessions
- **Share charts** — encode any chart as a URL, no server required
- **Export** — save as PDF via browser print, or download chart data as JSON
- **Import** — restore charts from a JSON backup file
- **PWA** — installable to home screen on iOS, Android, and desktop via the ⬇ App button
- **Download App** — save the entire app as a standalone HTML file

---

## Planetary Calculations

Uses a full VSOP87 truncated series implementation in pure JavaScript — no external libraries, no API calls. Accuracy is ±0.1° for the Sun, ±0.5° for inner planets, ±1–2° for outer planets. Sign placement is correct for all planets across all dates 1800–2100.

Houses and Rising sign require birth city for a one-time geocoding lookup (OpenStreetMap Nominatim). After that, all calculations are offline.

---

## Files

```
index.html      The entire app — all logic, data, and styling in one file
manifest.json   PWA configuration
sw.js           Service worker — caches the app for offline use
icons/          App icons for home screen installation
```

---

## Privacy

All chart data is stored locally in your browser. The only external calls are:

- City geocoding → OpenStreetMap Nominatim (city name only, one-time per chart)
- Google Fonts (fonts only, no tracking)

Nothing is sent to any server. No analytics, no accounts, no ads.

---

## Built With

- Vanilla JavaScript — no frameworks, no build step
- VSOP87 ephemeris (Meeus *Astronomical Algorithms*)
- ELP2000-82 truncated series for the Moon
- Lahiri ayanamsa for Vedic calculations
- GMT correlation for Aztec Tonalpohualli
- Rune date ranges: Vogue Scandinavia / Randi Bjarum method
- Native American animal totems: Brownielocks traditional sources
- Geocoding: OpenStreetMap Nominatim

---

*Personal project. Interpretations are based on traditional systems and intended for reflection.*
