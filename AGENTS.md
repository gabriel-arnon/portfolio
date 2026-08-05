# Repository Guidance

## Application
- This is a single-package React 19/Vite 7 site; `src/main.jsx` contains the app entrypoint and page implementation, and `src/styles.css` contains global styles.
- Keep Portuguese and English copy synchronized in the `content` object in `src/main.jsx`.
- Use the `publicAsset()` helper in `src/main.jsx` for files under `public/`; GitHub Pages serves this app below `/portfolio/`, so do not hard-code root-absolute public asset paths.

## Commands
- Install locked dependencies with `npm ci`.
- Use `npm run dev` for local development, `npm run build` for the production bundle, and `npm run preview` to preview that bundle.
- There are no lint, typecheck, or test scripts; `npm run build` is the repository's automated validation.

## Deployment
- CI runs on Node 24, then runs `npm ci` and `npm run build`; deployment happens only for pushes to `main`, while pull requests only build.
- Preserve the `vite.config.js` conditional base: `/portfolio/` in GitHub Actions and `/` locally.
- Keep `package-lock.json` synchronized with `package.json`; `dist/` is generated and gitignored.
