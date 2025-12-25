# My Website 2

Static SvelteKit site with TypeScript, designed for GitHub Pages hosting.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static output is generated in `build/`.

## GitHub Pages Deployment

1. Build with a base path if your site is served from a repo subpath:
   ```bash
   BASE_PATH=/my-website-2 npm run build
   ```
2. Deploy the contents of `build/` to your `gh-pages` branch.
3. In GitHub Pages settings, select the `gh-pages` branch.

## Route 53 + Custom Domain

1. Add a `CNAME` file to `static/` with your custom domain (for example, `www.example.com`).
2. In Route 53, create an `A` record (alias) to GitHub Pages and a `CNAME` for `www`.
3. Set the custom domain in GitHub Pages settings and enable HTTPS.

## Adding New Routes

Create a folder under `src/routes` and add a `+page.svelte` file, for example:

```
src/routes/projects/+page.svelte
```

SvelteKit will prerender the route automatically.
