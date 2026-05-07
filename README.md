# Immersion Education Partners Site

Astro marketing site for Immersion Education Partners.

## What was improved

- Added smarter header behavior:
  - closes the mobile menu when you click outside it
  - highlights active home-page sections (`Services`, `Expertise`) while scrolling
- Kept existing keyboard support (`Esc` closes the menu) and improved navigation feedback.

## Local development

### 1) Install dependencies

```bash
npm install
```

### 2) Run the site in development mode

```bash
npm run dev
```

Then open the URL shown in your terminal (typically `http://localhost:4321`).

### 3) Build a production bundle

```bash
npm run build
```

### 4) Preview the production build locally

```bash
npm run preview
```

Then open the preview URL printed in the terminal.

## Where to see the improvements

1. Start dev server with `npm run dev`.
2. Open the home page.
3. Resize to mobile width and open the menu:
   - click outside the menu to see it close automatically.
4. On desktop/mobile home page, scroll through sections:
   - nav links for section anchors are now highlighted as you move through the page.
