
# GSLzw

This is a code bundle for GSLzw. The original project is available at https://www.figma.com/design/Xt5jCq1lHsdI91VeuF7Dgw/GSLzw.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deployment Workflow

This site is configured for GitHub Pages as a repository site:

`https://teeroy47.github.io/Gslzw/`

### What is already configured

- Vite production builds use the repository base path: `/Gslzw/`
- Public assets are referenced with `import.meta.env.BASE_URL`
- GitHub Actions deployment workflow exists at [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)

### GitHub Pages setup

1. Push the repository to the `main` branch on GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Save the setting.

### Deploying

Every push to `main` will:

1. install dependencies with `npm ci`
2. run `npm run build`
3. upload the `dist/` output
4. deploy the site to GitHub Pages

You can also trigger the deployment manually from the `Actions` tab with `workflow_dispatch`.

### Local pre-push check

Before pushing, run:

```bash
npm run build
```

If the build passes locally, the GitHub Pages workflow should be able to build the same output in CI.

### Important note

This setup is currently tailored to the repository name `Gslzw`. If you rename the repository, update the `base` value in [vite.config.ts](./vite.config.ts).
  
