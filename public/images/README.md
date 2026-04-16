# Image assets

Replace these placeholder SVGs with production images before launch:

| File | Purpose | Recommended size/format |
|---|---|---|
| `logo.png` | Circular IEP logo used in header and footer | 256×256 PNG (transparent bg) or SVG |
| `hero.png` | Hero image on the homepage | 1440×1080 PNG or JPG, optimized (<300KB) |
| `kane-headshot.jpg` | Kane's professional headshot | 800×1000 JPG, optimized (<200KB) |

## While you wait

This folder currently contains SVG placeholders at the above paths so local builds don't 404. They are visually obvious (gold panels with labels) so you won't accidentally ship them.

## Optimization

Run images through [squoosh.app](https://squoosh.app) or `sharp-cli` before committing:

```bash
npx sharp-cli -i hero.jpg -o hero.png --resize 1440 --format png --quality 85
```
