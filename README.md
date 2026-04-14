# ray_lao

Portfolio site for GitHub Pages, built with Vite + React + Tailwind + Framer Motion.

## Fixed Workflow (Recommended)

- Develop and commit source code on `main` only.
- Do not manually edit files on `gh-pages`.
- Publish with `portfolio/npm run deploy` only.

## Daily Development

1. Stay on `main`.
2. Go to project folder:
   - `cd portfolio`
3. Local preview:
   - `npm install` (first time only)
   - `npm run dev`
4. Commit source code on `main`.

## Publish to GitHub Pages

From `portfolio`:

- `npm run deploy`

This command will:

- build `portfolio/dist`
- publish static files to branch `gh-pages`

Site URL:

- [https://raylao925.github.io/ray_lao/](https://raylao925.github.io/ray_lao/)

## Important Notes

- `main` = source code (`portfolio/src`, configs, etc.)
- `gh-pages` = generated static output (`index.html`, `assets/*`)
- Seeing many deleted files on `gh-pages` is expected; switch back to `main`.

## If Push Fails on gh-pages

If you ever see:

- `failed to push ... (fetch first)`

Run:

- `git fetch origin gh-pages`
- `git pull --rebase origin gh-pages`
- resolve conflicts if any
- push again

Or simply redeploy from `main` by running:

- `cd portfolio && npm run deploy`
