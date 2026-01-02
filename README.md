# filupnot.github.io

Personal SvelteKit site for Philip Knott. Includes a simple homepage and a small collection of game score tools.

## Pages

- Home (`/`) with hero intro and a link to the game tools.
- About (`/about`).
- Game Score Tools (`/games`), with two score trackers:
  - Darts (Cricket) (`/games/darts-cricket`)
  - Dominoes (`/games/dominoes`)

## Local Development

```bash
npm install
npm run dev
```

## Build and Preview

```bash
npm run build
npm run preview
```

The static output is generated in `build/`.

## Tests

```bash
npm run test
npm run test:unit
npm run test:integration
```

## GitHub Pages Deployment

1. Build the site:
   ```bash
   npm run build
   ```
2. Deploy the contents of `build/` to your `gh-pages` branch.
3. In GitHub Pages settings, select the `gh-pages` branch.

If this repo is ever hosted under a subpath, set a base path during build:

```bash
BASE_PATH=/filupnot.github.io npm run build
```

## Adding New Routes

Create a folder under `src/routes` and add a `+page.svelte` file, for example:

```
src/routes/projects/+page.svelte
```

SvelteKit will prerender the route automatically.
