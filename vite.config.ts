import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import {
  getComponentChunkLinks,
  getFontFaceStyles,
  getFontLinks,
  getIconLinks,
  getInitialStyles,
  getMetaTagsAndIconLinks,
} from '@porsche-design-system/components-vue/partials';

const transformIndexHtmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html: string) {
      const headPartials = [
        // injects stylesheet which defines visibility of pre-hydrated PDS components
        getInitialStyles(),
        // injects stylesheet which defines Porsche Next CSS font-face definition (=> minimize FOUT)
        getFontFaceStyles(),
        // preloads Porsche Next font (=> minimize FOUT)
        getFontLinks(),
        // preloads PDS component core chunk from CDN for PDS component hydration (=> improve loading performance)
        getComponentChunkLinks(),
        // preloads Porsche icons (=> minimize FOUC)
        getIconLinks(),
        // injects favicon, apple touch icons, android touch icons, etc.
        getMetaTagsAndIconLinks({ appTitle: 'Porsche' }),
      ].join('');

      return html.replace(/<\/head>/, `${headPartials}$&`);
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['@porsche-design-system/components-vue', '@porsche-design-system/components-js'],
  },
  base: process.env.PUBLIC_BASE_PATH || '',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    transformIndexHtmlPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
