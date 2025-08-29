# Porsche Design System for Vue (Offline Build v3.29.0)

## About

This repository demonstrates how to integrate the Porsche Design System with **Vue** using a specialized offline build.
This is particularly useful for applications that need to function without an internet connection.

A custom offline build of the Porsche Design System `v3.29.0` npm package is located in `./@porsche-design-system/components-{js|vue}`. 
This build is designed for offline use and does not retrieve assets from the global CDN (`https://cdn.ui.porsche.com` or `https://cdn.ui.porsche.cn`).

Instead, it expects all assets — such as fonts, icons, and web components — to be served from `${YOUR_BASE_URL}/assets/porsche-design-system/`. 

With the upcoming version 4 of the Porsche Design System, a new solution will be available that works out of the box in offline contexts, making this workflow obsolete.

## Integration

### Step 1

Copy the `./@porsche-design-system` folder and its contents from this repository into the **root directory** of **your** [Vue](https://vuejs.org/guide/quick-start.html) project.

### Step 2

To prepare for the next steps, you need to ensure that the `public/assets/porsche-design-system` directory is not tracked by Git.

```
// .gitignore

…
.vscode/*
!.vscode/extensions.json
.idea

public/assets/porsche-design-system
```

### Step 3

Extend the **scripts** section of your `package.json` file.

```
// package.json

"scripts": {
  "postinstall": "npm run copy:@porsche-design-system/components-vue && npm run copy:@porsche-design-system/components-js && npm run copy:@porsche-design-system/assets",
  "copy:@porsche-design-system/components-vue": "rm -rf ./node_modules/@porsche-design-system/components-vue && cp -r ./@porsche-design-system/components-vue/. ./node_modules/@porsche-design-system/components-vue",
  "copy:@porsche-design-system/components-js": "rm -rf ./node_modules/@porsche-design-system/components-js && cp -r ./@porsche-design-system/components-js/. ./node_modules/@porsche-design-system/components-js",
  "copy:@porsche-design-system/assets": "rm -rf ./public/assets/porsche-design-system && mkdir -p ./public/assets/porsche-design-system && cp -r ./@porsche-design-system/assets/. ./public/assets/porsche-design-system",
  …
}
```

### Step 4

Exclude Porsche Design System from Vite's cache.

```
// vite.config.ts

export default defineConfig({
  optimizeDeps: {
    exclude: ['@porsche-design-system/components-vue', '@porsche-design-system/components-js'],
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  …
})
```

### Step 5

Add the `@porsche-design-system/components-vue` npm package with version `3.29.0`.

```
npm install @porsche-design-system/components-vue@3.29.0
```

### Step 6

Wrap your application with the `<PorscheDesignSystemProvider />`, then integrate the Porsche Design System components you need. 

For additional information on how to integrate Partials and Tailwind CSS, you can also refer to the [Getting Started](https://designsystem.porsche.com/v3/developing/vue/getting-started) section of the official documentation.

```
// src/App.vue

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import { PButton, PFlag, PWordmark, PorscheDesignSystemProvider} from '@porsche-design-system/components-vue';
</script>

<template>
  <PorscheDesignSystemProvider>
    <PWordmark />
    <PButton icon="add">Some label</PButton>
    <PFlag />
    <header>…</header>
    <RouterView />
  </PorscheDesignSystemProvider>
</template>

<style scoped>
  …
</style>
```

### Step 7

Once the web application is built and served, open your browser's developer console. 
All Porsche Design System assets should then be loaded from `${YOUR_BASE_URL}`.
