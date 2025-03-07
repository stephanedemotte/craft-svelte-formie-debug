# Todo

- cleanup and make it work craftRetour, craftSeomaticRobots, craftSeomaticSitemap `cmsUtils.js`

# utils

### server deploi node

```bash
  yarn
  yarn build
  #PORT=3002 ORIGIN=https://frontend.com pm2 start --interpreter /usr/bin/bun build/index.js
  pm2 reload build/index.js
```

### non breaking space

```js
res = await res.json();
res = JSON.stringify(res)
  .replace(/ :/g, "\u00A0:")
  .replace(/« /g, "«\u00A0")
  .replace(/ »/g, "\u00A0»");
res = JSON.parse(res);
```

### for craft preview

```nginx
  add_header Content-Security-Policy "frame-ancestors backend.com";
```

## to use frontend instead backend url

on `query.js`

```js
if (ENV == "production") res = res.replaceAll(CMS_URL, "");
```

on `nginx`

```nginx
  location /uploads/ {
    proxy_pass https://backend/uploads/;
  }
  location /admin/actions/assets/ {
    proxy_pass https://backend/admin/actions/assets/;
  }
```

## remove last trailing slash

```nginx
location / {
    rewrite ^(.+)/$ $1 permanent;
}
```

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
