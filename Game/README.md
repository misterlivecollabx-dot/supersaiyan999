# Super Saiyan 999 V1

Mobile-first HTML5 transformation game built from the provided assets.

## Run locally

```bash
cd Game_Project
python3 -m http.server 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## What is implemented

- Hidden tap thresholds for all 15 forms
- Energy bar with no numbers
- Energy drain after 2 seconds of no tapping
- No automatic revert to previous unlocked forms
- Manual switching to any unlocked previous form
- Full-screen portrait UI with aura, rocks, particles, flash, shake, lightning arcs, shockwaves, and cinematic charge effects
- Level-based backgrounds and audio

## Files

- `index.html`
- `styles.css`
- `game.js`
- `public/assets`

## Notes

- `?debug=1` enables an internal verification panel used for testing.
- Optimized runtime assets are in `public/assets`.
- Original extracted source assets remain in `.tmp_assets` for reference.
