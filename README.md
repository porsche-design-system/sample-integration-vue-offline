# Porsche Design System for Vue (Offline Build)

## About

This repository demonstrates how to integrate the Porsche Design System with *Vue** using a specialized offline build.
This is particularly useful for applications that need to function without an internet connection.

A custom offline build of the Porsche Design System `v3.29.0` npm package is located in `./@porsche-design-system/components-{js|vue}`. 
This build is designed for offline use and does not retrieve assets from the global CDN (`https://cdn.ui.porsche.com` or `https://cdn.ui.porsche.cn`).

Instead, it expects all assets — such as fonts, icons, and web components — to be served from `${YOUR_BASE_URL}/assets/porsche-design-system/`. 

With the upcoming version 4 of the Porsche Design System, a new solution will be available that works out of the box in offline contexts, making this workflow obsolete.

## Integration

### Step 1

Copy the `./@porsche-design-system` folder and its contents from this repository into the **root directory** of your Vue project.

### Step 2

Move the assets from `./@porsche-design-system/assets` to `./public/assets/porsche-design-system`, ensuring they are served at `${YOUR_BASE_URL}/assets/porsche-design-system/` when your application is running.

```
mkdir -p ./public/assets/porsche-design-system
mv ./@porsche-design-system/assets/* ./public/assets/porsche-design-system
```

### Step 3

Extend the **scripts** section of your `package.json` file.

```
"scripts": {
  "postinstall": "npm run copy-offline-pds-vue-build && npm run copy-offline-pds-js-build",
  "copy-offline-pds-vue-build": "rm -rf ./node_modules/@porsche-design-system/components-vue && cp -r ./@porsche-design-system/components-vue/. ./node_modules/@porsche-design-system/components-vue",
  "copy-offline-pds-js-build": "rm -rf ./node_modules/@porsche-design-system/components-js && cp -r ./@porsche-design-system/components-js/. ./node_modules/@porsche-design-system/components-js",
  …
}
```

### Step 3

Add the `@porsche-design-system/components-vue` npm package with version `3.29.0`.

```
npm install @porsche-design-system/components-vue@3.29.0
```

### Step 4

Wrap your app with the `<PorscheDesignSystemProvider />`.

```vue
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

### Step 5

Once the web application is built and served, open your browser's developer console. 
All Porsche Design System assets should then be loaded from `${YOUR_BASE_URL}`.
