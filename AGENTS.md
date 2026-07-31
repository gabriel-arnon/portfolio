# Repository Guidance

## Structure
- This is a single-package React 19/Vite 7 site. The application entrypoint and page content are in `src/main.jsx`; global styles are in `src/styles.css`.
- Portuguese and English copy are maintained together in the `content` object in `src/main.jsx`.
- Files in `public/` are served as static assets. Use the existing `publicAsset()` helper for them instead of root-absolute URLs.

## Commands
- Install the locked dependencies with `npm ci`.
- Run the local site with `npm run dev`.
- Build the production bundle with `npm run build`; Vite writes it to `dist/`.
- Preview a built bundle with `npm run preview`.
- There are currently no lint, typecheck, or test scripts; the production build is the repository's automated validation step.

## GitHub Pages
- CI uses Node 24, runs `npm ci` and `npm run build`, and deploys `dist/` only for pushes to `main`; pull requests only run the build job.
- In GitHub Actions, `vite.config.js` sets the base URL to `/portfolio/`; preserve this behavior and keep public asset paths base-aware.
- Keep `package-lock.json` synchronized with `package.json`; do not commit generated `dist/` output.
