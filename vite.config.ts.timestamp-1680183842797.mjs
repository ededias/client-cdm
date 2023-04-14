// vite.config.ts
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/vite/dist/node/index.js";
import Vue from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/unplugin-vue-router/dist/index.mjs";
import Components from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/unplugin-auto-import/dist/vite.js";
import { VitePluginFonts } from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/vite-plugin-fonts/dist/index.js";
import { VitePluginRadar } from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/vite-plugin-radar/dist/index.js";
import PurgeIcons from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/vite-plugin-purge-icons/dist/index.mjs";
import ImageMin from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/vite-plugin-imagemin/dist/index.mjs";
import VueI18nPlugin from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/vite-plugin-pwa/dist/index.mjs";
import purgecss from "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/node_modules/rollup-plugin-purgecss/lib/rollup-plugin-purgecss.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Raphael%20Troll/Desktop/Teste/quickstarter-vuero-v2.6.1/vite.config.ts";
var MINIFY_IMAGES = process.env.MINIFY ? process.env.MINIFY === "true" : false;
var vite_config_default = defineConfig({
  server: {
    host: "localhost",
    port: 5e3
  },
  // Project root directory (where index.html is located).
  root: process.cwd(),
  // Base public path when served in development or production.
  // You also need to add this base like `history: createWebHistory('my-subdirectory')`
  // in ./src/router.ts
  // base: '/my-subdirectory/',
  base: "/",
  // Directory to serve as plain static assets.
  publicDir: "public",
  // Adjust console output verbosity.
  logLevel: "info",
  /**
   * By default, Vite will crawl your index.html to detect dependencies that
   * need to be pre-bundled. If build.rollupOptions.input is specified,
   * Vite will crawl those entry points instead.
   *
   * @see https://vitejs.dev/config/#optimizedeps-entries
   */
  optimizeDeps: {
    include: [
      "@ckeditor/ckeditor5-vue",
      "@ckeditor/ckeditor5-build-classic",
      "@iconify/iconify",
      "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js",
      "@vee-validate/zod",
      "@vueuse/core",
      "@vueuse/head",
      "@vueform/multiselect",
      "@vueform/slider",
      "axios",
      "billboard.js",
      "dayjs",
      "dropzone",
      "dragula",
      "defu",
      "filepond",
      "filepond-plugin-file-validate-size",
      "filepond-plugin-file-validate-type",
      "filepond-plugin-image-exif-orientation",
      "filepond-plugin-image-crop",
      "filepond-plugin-image-edit",
      "filepond-plugin-image-preview",
      "filepond-plugin-image-resize",
      "filepond-plugin-image-transform",
      "imask",
      "nprogress",
      "notyf",
      "mapbox-gl",
      "photoswipe/lightbox",
      "photoswipe",
      "plyr",
      "v-calendar",
      "vee-validate",
      "vue",
      "vue-scrollto",
      "vue3-apexcharts",
      "vue-tippy",
      "vue-i18n",
      "vue-router",
      "unplugin-vue-router/runtime",
      "simplebar",
      "simple-datatables",
      "tiny-slider/src/tiny-slider",
      "vue-accessible-color-picker",
      "zod",
      "@stefanprobst/remark-shiki",
      "rehype-external-links",
      "rehype-raw",
      "rehype-sanitize",
      "rehype-stringify",
      "rehype-slug",
      "rehype-autolink-headings",
      "remark-gfm",
      "remark-parse",
      "remark-rehype",
      "shiki-es",
      "unified",
      "workbox-window",
      "textarea-markdown-editor/dist/esm/bootstrap"
    ],
    disabled: false
  },
  // Will be passed to @rollup/plugin-alias as its entries option.
  resolve: {
    alias: [
      {
        find: "/@src/",
        replacement: `/src/`
      }
    ]
  },
  build: {
    minify: "terser",
    // Do not warn about large chunks
    // chunkSizeWarningLimit: Infinity,
    // Double the default size threshold for inlined assets
    // https://vitejs.dev/config/build-options.html#build-assetsinlinelimit
    assetsInlineLimit: 4096 * 2,
    commonjsOptions: { include: [] }
  },
  plugins: [
    /**
     * plugin-vue plugin inject vue library and allow sfc files to work (*.vue)
     *
     * @see https://github.com/vitejs/vite/tree/main/packages/plugin-vue
     */
    Vue({
      include: [/\.vue$/]
    }),
    /**
     * vite-plugin-vue-i18n plugin does i18n resources pre-compilation / optimizations
     *
     * @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
     */
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src/locales/**"),
      fullInstall: false,
      compositionOnly: true
    }),
    /**
     * unplugin-vue-router plugin generate routes based on file system
     * allow to use typed routes and usage of defineLoader
     *
     * @see https://github.com/posva/unplugin-vue-router
     * @see https://github.com/vuejs/rfcs/blob/ad69da2aee9242ef88f036713db68f3ef274bb1b/active-rfcs/0000-router-use-loader.md
     */
    VueRouter({
      routesFolder: "src/pages",
      /**
       * Data Fetching is an experimental feature from vue & vue-router
       *
       * @see https://github.com/vuejs/rfcs/discussions/460
       * @see https://github.com/posva/unplugin-vue-router/tree/main/src/data-fetching
       */
      dataFetching: true
    }),
    /**
     * unplugin-auto-import allow to automaticaly import modules/components
     *
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      dts: true,
      imports: ["vue", "@vueuse/core", VueRouterAutoImports]
    }),
    /**
     * This is an internal vite plugin that load markdown files as vue components.
     *
     * @see /documentation
     * @see /vite-plugin-vuero-doc
     * @see /src/components/partials/documentation/DocumentationItem.vue
     * @see /src/composable/useMarkdownToc.ts
     */
    /**
     * unplugin-vue-components plugin is responsible of autoloading components
     * documentation and md file are loaded for elements and components sections
     *
     * @see https://github.com/antfu/unplugin-vue-components
     */
    Components({
      dirs: ["documentation", "src/components", "src/layouts"],
      extensions: ["vue", "md"],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    /**
     * vite-plugin-purge-icons plugin is responsible of autoloading icones from multiples providers
     *
     * @see https://icones.netlify.app/
     * @see https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
     */
    PurgeIcons(),
    /**
     * vite-plugin-fonts plugin inject webfonts from differents providers
     *
     * @see https://github.com/stafyniaksacha/vite-plugin-fonts
     */
    VitePluginFonts({
      google: {
        families: [
          {
            name: "Fira Code",
            styles: "wght@400;600"
          },
          {
            name: "Montserrat",
            styles: "wght@500;600;700;800;900"
          },
          {
            name: "Roboto",
            styles: "wght@300;400;500;600;700"
          }
        ]
      }
    }),
    /**
     * vite-plugin-radar plugin inject snippets from analytics providers
     *
     * @see https://github.com/stafyniaksacha/vite-plugin-radar
     */
    !process.env.GTM_ID ? void 0 : VitePluginRadar({
      gtm: {
        id: process.env.GTM_ID
      }
    }),
    /**
     * vite-plugin-pwa generate manifest.json and register services worker to enable PWA
     *
     * @see https://github.com/antfu/vite-plugin-pwa
     */
    VitePWA({
      base: "/",
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Vuero - A complete Vue 3 design system",
        short_name: "Vuero",
        start_url: "/?utm_source=pwa",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    /**
     * rollup-plugin-purgecss plugin is responsible of purging css rules
     * that are not used in the bundle
     *
     * @see https://github.com/FullHuman/purgecss/tree/main/packages/rollup-plugin-purgecss
     */
    purgecss({
      output: false,
      content: [`./src/**/*.vue`],
      variables: false,
      safelist: {
        standard: [
          /(autv|lnil|lnir|fas?)/,
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/
        ]
      },
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
      }
    }),
    /**
     * vite-plugin-imagemin optimize all images sizes from public or asset folder
     *
     * @see https://github.com/anncwb/vite-plugin-imagemin
     */
    !MINIFY_IMAGES ? void 0 : ImageMin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 60
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSYXBoYWVsIFRyb2xsXFxcXERlc2t0b3BcXFxcVGVzdGVcXFxccXVpY2tzdGFydGVyLXZ1ZXJvLXYyLjYuMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUmFwaGFlbCBUcm9sbFxcXFxEZXNrdG9wXFxcXFRlc3RlXFxcXHF1aWNrc3RhcnRlci12dWVyby12Mi42LjFcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1JhcGhhZWwlMjBUcm9sbC9EZXNrdG9wL1Rlc3RlL3F1aWNrc3RhcnRlci12dWVyby12Mi42LjEvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlLCBkaXJuYW1lIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IFZpdGVQbHVnaW5Gb250cyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWZvbnRzJ1xuaW1wb3J0IHsgVml0ZVBsdWdpblJhZGFyIH0gZnJvbSAndml0ZS1wbHVnaW4tcmFkYXInXG5pbXBvcnQgUHVyZ2VJY29ucyBmcm9tICd2aXRlLXBsdWdpbi1wdXJnZS1pY29ucydcbmltcG9ydCBJbWFnZU1pbiBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZW1pbidcbmltcG9ydCBWdWVJMThuUGx1Z2luIGZyb20gJ0BpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGUnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuaW1wb3J0IHB1cmdlY3NzIGZyb20gJ3JvbGx1cC1wbHVnaW4tcHVyZ2Vjc3MnXG5cbi8vIG9wdGlvbnMgdmlhIGVudiB2YXJpYWJsZXNcbmNvbnN0IE1JTklGWV9JTUFHRVMgPSBwcm9jZXNzLmVudi5NSU5JRlkgPyBwcm9jZXNzLmVudi5NSU5JRlkgPT09ICd0cnVlJyA6IGZhbHNlXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgbWFpbiBjb25maWd1cmF0aW9uIGZpbGUgZm9yIHZpdGVqc1xuICpcbiAqIEBzZWUgaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZ1xuICovXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICBwb3J0OiA1MDAwLFxuICB9LFxuICAvLyBQcm9qZWN0IHJvb3QgZGlyZWN0b3J5ICh3aGVyZSBpbmRleC5odG1sIGlzIGxvY2F0ZWQpLlxuICByb290OiBwcm9jZXNzLmN3ZCgpLFxuICAvLyBCYXNlIHB1YmxpYyBwYXRoIHdoZW4gc2VydmVkIGluIGRldmVsb3BtZW50IG9yIHByb2R1Y3Rpb24uXG4gIC8vIFlvdSBhbHNvIG5lZWQgdG8gYWRkIHRoaXMgYmFzZSBsaWtlIGBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCdteS1zdWJkaXJlY3RvcnknKWBcbiAgLy8gaW4gLi9zcmMvcm91dGVyLnRzXG4gIC8vIGJhc2U6ICcvbXktc3ViZGlyZWN0b3J5LycsXG4gIGJhc2U6ICcvJyxcbiAgLy8gRGlyZWN0b3J5IHRvIHNlcnZlIGFzIHBsYWluIHN0YXRpYyBhc3NldHMuXG4gIHB1YmxpY0RpcjogJ3B1YmxpYycsXG4gIC8vIEFkanVzdCBjb25zb2xlIG91dHB1dCB2ZXJib3NpdHkuXG4gIGxvZ0xldmVsOiAnaW5mbycsXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0LCBWaXRlIHdpbGwgY3Jhd2wgeW91ciBpbmRleC5odG1sIHRvIGRldGVjdCBkZXBlbmRlbmNpZXMgdGhhdFxuICAgKiBuZWVkIHRvIGJlIHByZS1idW5kbGVkLiBJZiBidWlsZC5yb2xsdXBPcHRpb25zLmlucHV0IGlzIHNwZWNpZmllZCxcbiAgICogVml0ZSB3aWxsIGNyYXdsIHRob3NlIGVudHJ5IHBvaW50cyBpbnN0ZWFkLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvI29wdGltaXplZGVwcy1lbnRyaWVzXG4gICAqL1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAnQGNrZWRpdG9yL2NrZWRpdG9yNS12dWUnLFxuICAgICAgJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYycsXG4gICAgICAnQGljb25pZnkvaWNvbmlmeScsXG4gICAgICAnQG1hcGJveC9tYXBib3gtZ2wtZ2VvY29kZXIvZGlzdC9tYXBib3gtZ2wtZ2VvY29kZXIubWluLmpzJyxcbiAgICAgICdAdmVlLXZhbGlkYXRlL3pvZCcsXG4gICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgJ0B2dWVmb3JtL211bHRpc2VsZWN0JyxcbiAgICAgICdAdnVlZm9ybS9zbGlkZXInLFxuICAgICAgJ2F4aW9zJyxcbiAgICAgICdiaWxsYm9hcmQuanMnLFxuICAgICAgJ2RheWpzJyxcbiAgICAgICdkcm9wem9uZScsXG4gICAgICAnZHJhZ3VsYScsXG4gICAgICAnZGVmdScsXG4gICAgICAnZmlsZXBvbmQnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXNpemUnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1leGlmLW9yaWVudGF0aW9uJyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtY3JvcCcsXG4gICAgICAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWVkaXQnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3JyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcmVzaXplJyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtdHJhbnNmb3JtJyxcbiAgICAgICdpbWFzaycsXG4gICAgICAnbnByb2dyZXNzJyxcbiAgICAgICdub3R5ZicsXG4gICAgICAnbWFwYm94LWdsJyxcbiAgICAgICdwaG90b3N3aXBlL2xpZ2h0Ym94JyxcbiAgICAgICdwaG90b3N3aXBlJyxcbiAgICAgICdwbHlyJyxcbiAgICAgICd2LWNhbGVuZGFyJyxcbiAgICAgICd2ZWUtdmFsaWRhdGUnLFxuICAgICAgJ3Z1ZScsXG4gICAgICAndnVlLXNjcm9sbHRvJyxcbiAgICAgICd2dWUzLWFwZXhjaGFydHMnLFxuICAgICAgJ3Z1ZS10aXBweScsXG4gICAgICAndnVlLWkxOG4nLFxuICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvcnVudGltZScsXG4gICAgICAnc2ltcGxlYmFyJyxcbiAgICAgICdzaW1wbGUtZGF0YXRhYmxlcycsXG4gICAgICAndGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyJyxcbiAgICAgICd2dWUtYWNjZXNzaWJsZS1jb2xvci1waWNrZXInLFxuICAgICAgJ3pvZCcsXG4gICAgICAnQHN0ZWZhbnByb2JzdC9yZW1hcmstc2hpa2knLFxuICAgICAgJ3JlaHlwZS1leHRlcm5hbC1saW5rcycsXG4gICAgICAncmVoeXBlLXJhdycsXG4gICAgICAncmVoeXBlLXNhbml0aXplJyxcbiAgICAgICdyZWh5cGUtc3RyaW5naWZ5JyxcbiAgICAgICdyZWh5cGUtc2x1ZycsXG4gICAgICAncmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzJyxcbiAgICAgICdyZW1hcmstZ2ZtJyxcbiAgICAgICdyZW1hcmstcGFyc2UnLFxuICAgICAgJ3JlbWFyay1yZWh5cGUnLFxuICAgICAgJ3NoaWtpLWVzJyxcbiAgICAgICd1bmlmaWVkJyxcbiAgICAgICd3b3JrYm94LXdpbmRvdycsXG4gICAgICAndGV4dGFyZWEtbWFya2Rvd24tZWRpdG9yL2Rpc3QvZXNtL2Jvb3RzdHJhcCcsXG4gICAgXSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gIH0sXG4gIC8vIFdpbGwgYmUgcGFzc2VkIHRvIEByb2xsdXAvcGx1Z2luLWFsaWFzIGFzIGl0cyBlbnRyaWVzIG9wdGlvbi5cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICcvQHNyYy8nLFxuICAgICAgICByZXBsYWNlbWVudDogYC9zcmMvYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIC8vIERvIG5vdCB3YXJuIGFib3V0IGxhcmdlIGNodW5rc1xuICAgIC8vIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogSW5maW5pdHksXG4gICAgLy8gRG91YmxlIHRoZSBkZWZhdWx0IHNpemUgdGhyZXNob2xkIGZvciBpbmxpbmVkIGFzc2V0c1xuICAgIC8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvYnVpbGQtb3B0aW9ucy5odG1sI2J1aWxkLWFzc2V0c2lubGluZWxpbWl0XG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYgKiAyLFxuICAgIGNvbW1vbmpzT3B0aW9uczogeyBpbmNsdWRlOiBbXSB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgLyoqXG4gICAgICogcGx1Z2luLXZ1ZSBwbHVnaW4gaW5qZWN0IHZ1ZSBsaWJyYXJ5IGFuZCBhbGxvdyBzZmMgZmlsZXMgdG8gd29yayAoKi52dWUpXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS90cmVlL21haW4vcGFja2FnZXMvcGx1Z2luLXZ1ZVxuICAgICAqL1xuICAgIFZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvXSxcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIHZpdGUtcGx1Z2luLXZ1ZS1pMThuIHBsdWdpbiBkb2VzIGkxOG4gcmVzb3VyY2VzIHByZS1jb21waWxhdGlvbiAvIG9wdGltaXphdGlvbnNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy92aXRlLXBsdWdpbi12dWUtaTE4blxuICAgICAqL1xuICAgIFZ1ZUkxOG5QbHVnaW4oe1xuICAgICAgaW5jbHVkZTogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuL3NyYy9sb2NhbGVzLyoqJyksXG4gICAgICBmdWxsSW5zdGFsbDogZmFsc2UsXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiB1bnBsdWdpbi12dWUtcm91dGVyIHBsdWdpbiBnZW5lcmF0ZSByb3V0ZXMgYmFzZWQgb24gZmlsZSBzeXN0ZW1cbiAgICAgKiBhbGxvdyB0byB1c2UgdHlwZWQgcm91dGVzIGFuZCB1c2FnZSBvZiBkZWZpbmVMb2FkZXJcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9yZmNzL2Jsb2IvYWQ2OWRhMmFlZTkyNDJlZjg4ZjAzNjcxM2RiNjhmM2VmMjc0YmIxYi9hY3RpdmUtcmZjcy8wMDAwLXJvdXRlci11c2UtbG9hZGVyLm1kXG4gICAgICovXG4gICAgVnVlUm91dGVyKHtcbiAgICAgIHJvdXRlc0ZvbGRlcjogJ3NyYy9wYWdlcycsXG5cbiAgICAgIC8qKlxuICAgICAgICogRGF0YSBGZXRjaGluZyBpcyBhbiBleHBlcmltZW50YWwgZmVhdHVyZSBmcm9tIHZ1ZSAmIHZ1ZS1yb3V0ZXJcbiAgICAgICAqXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9yZmNzL2Rpc2N1c3Npb25zLzQ2MFxuICAgICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlci90cmVlL21haW4vc3JjL2RhdGEtZmV0Y2hpbmdcbiAgICAgICAqL1xuICAgICAgZGF0YUZldGNoaW5nOiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogdW5wbHVnaW4tYXV0by1pbXBvcnQgYWxsb3cgdG8gYXV0b21hdGljYWx5IGltcG9ydCBtb2R1bGVzL2NvbXBvbmVudHNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgICovXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBkdHM6IHRydWUsXG4gICAgICBpbXBvcnRzOiBbJ3Z1ZScsICdAdnVldXNlL2NvcmUnLCBWdWVSb3V0ZXJBdXRvSW1wb3J0c10sXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGFuIGludGVybmFsIHZpdGUgcGx1Z2luIHRoYXQgbG9hZCBtYXJrZG93biBmaWxlcyBhcyB2dWUgY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIEBzZWUgL2RvY3VtZW50YXRpb25cbiAgICAgKiBAc2VlIC92aXRlLXBsdWdpbi12dWVyby1kb2NcbiAgICAgKiBAc2VlIC9zcmMvY29tcG9uZW50cy9wYXJ0aWFscy9kb2N1bWVudGF0aW9uL0RvY3VtZW50YXRpb25JdGVtLnZ1ZVxuICAgICAqIEBzZWUgL3NyYy9jb21wb3NhYmxlL3VzZU1hcmtkb3duVG9jLnRzXG4gICAgICovXG4gICAgLyoqXG4gICAgICogdW5wbHVnaW4tdnVlLWNvbXBvbmVudHMgcGx1Z2luIGlzIHJlc3BvbnNpYmxlIG9mIGF1dG9sb2FkaW5nIGNvbXBvbmVudHNcbiAgICAgKiBkb2N1bWVudGF0aW9uIGFuZCBtZCBmaWxlIGFyZSBsb2FkZWQgZm9yIGVsZW1lbnRzIGFuZCBjb21wb25lbnRzIHNlY3Rpb25zXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgICAqL1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgZGlyczogWydkb2N1bWVudGF0aW9uJywgJ3NyYy9jb21wb25lbnRzJywgJ3NyYy9sYXlvdXRzJ10sXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgZHRzOiB0cnVlLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIHZpdGUtcGx1Z2luLXB1cmdlLWljb25zIHBsdWdpbiBpcyByZXNwb25zaWJsZSBvZiBhdXRvbG9hZGluZyBpY29uZXMgZnJvbSBtdWx0aXBsZXMgcHJvdmlkZXJzXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vaWNvbmVzLm5ldGxpZnkuYXBwL1xuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3B1cmdlLWljb25zL3RyZWUvbWFpbi9wYWNrYWdlcy92aXRlLXBsdWdpbi1wdXJnZS1pY29uc1xuICAgICAqL1xuICAgIFB1cmdlSWNvbnMoKSxcblxuICAgIC8qKlxuICAgICAqIHZpdGUtcGx1Z2luLWZvbnRzIHBsdWdpbiBpbmplY3Qgd2ViZm9udHMgZnJvbSBkaWZmZXJlbnRzIHByb3ZpZGVyc1xuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3RhZnluaWFrc2FjaGEvdml0ZS1wbHVnaW4tZm9udHNcbiAgICAgKi9cbiAgICBWaXRlUGx1Z2luRm9udHMoe1xuICAgICAgZ29vZ2xlOiB7XG4gICAgICAgIGZhbWlsaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0ZpcmEgQ29kZScsXG4gICAgICAgICAgICBzdHlsZXM6ICd3Z2h0QDQwMDs2MDAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ01vbnRzZXJyYXQnLFxuICAgICAgICAgICAgc3R5bGVzOiAnd2dodEA1MDA7NjAwOzcwMDs4MDA7OTAwJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdSb2JvdG8nLFxuICAgICAgICAgICAgc3R5bGVzOiAnd2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIHZpdGUtcGx1Z2luLXJhZGFyIHBsdWdpbiBpbmplY3Qgc25pcHBldHMgZnJvbSBhbmFseXRpY3MgcHJvdmlkZXJzXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdGFmeW5pYWtzYWNoYS92aXRlLXBsdWdpbi1yYWRhclxuICAgICAqL1xuICAgICFwcm9jZXNzLmVudi5HVE1fSURcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IFZpdGVQbHVnaW5SYWRhcih7XG4gICAgICAgICAgZ3RtOiB7XG4gICAgICAgICAgICBpZDogcHJvY2Vzcy5lbnYuR1RNX0lELFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogdml0ZS1wbHVnaW4tcHdhIGdlbmVyYXRlIG1hbmlmZXN0Lmpzb24gYW5kIHJlZ2lzdGVyIHNlcnZpY2VzIHdvcmtlciB0byBlbmFibGUgUFdBXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1wd2FcbiAgICAgKi9cbiAgICBWaXRlUFdBKHtcbiAgICAgIGJhc2U6ICcvJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnZmF2aWNvbi5pY28nLCAncm9ib3RzLnR4dCcsICdhcHBsZS10b3VjaC1pY29uLnBuZyddLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ1Z1ZXJvIC0gQSBjb21wbGV0ZSBWdWUgMyBkZXNpZ24gc3lzdGVtJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1Z1ZXJvJyxcbiAgICAgICAgc3RhcnRfdXJsOiAnLz91dG1fc291cmNlPXB3YScsXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogcm9sbHVwLXBsdWdpbi1wdXJnZWNzcyBwbHVnaW4gaXMgcmVzcG9uc2libGUgb2YgcHVyZ2luZyBjc3MgcnVsZXNcbiAgICAgKiB0aGF0IGFyZSBub3QgdXNlZCBpbiB0aGUgYnVuZGxlXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9GdWxsSHVtYW4vcHVyZ2Vjc3MvdHJlZS9tYWluL3BhY2thZ2VzL3JvbGx1cC1wbHVnaW4tcHVyZ2Vjc3NcbiAgICAgKi9cbiAgICBwdXJnZWNzcyh7XG4gICAgICBvdXRwdXQ6IGZhbHNlLFxuICAgICAgY29udGVudDogW2AuL3NyYy8qKi8qLnZ1ZWBdLFxuICAgICAgdmFyaWFibGVzOiBmYWxzZSxcbiAgICAgIHNhZmVsaXN0OiB7XG4gICAgICAgIHN0YW5kYXJkOiBbXG4gICAgICAgICAgLyhhdXR2fGxuaWx8bG5pcnxmYXM/KS8sXG4gICAgICAgICAgLy0obGVhdmV8ZW50ZXJ8YXBwZWFyKSh8LSh0b3xmcm9tfGFjdGl2ZSkpJC8sXG4gICAgICAgICAgL14oPyEofC4qPzopY3Vyc29yLW1vdmUpListbW92ZSQvLFxuICAgICAgICAgIC9ecm91dGVyLWxpbmsofC1leGFjdCktYWN0aXZlJC8sXG4gICAgICAgICAgL2RhdGEtdi0uKi8sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgZGVmYXVsdEV4dHJhY3Rvcihjb250ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRXaXRob3V0U3R5bGVCbG9ja3MgPSBjb250ZW50LnJlcGxhY2UoLzxzdHlsZVteXSs/PFxcL3N0eWxlPi9naSwgJycpXG4gICAgICAgIHJldHVybiBjb250ZW50V2l0aG91dFN0eWxlQmxvY2tzLm1hdGNoKC9bQS1aYS16MC05LV8vOl0qW0EtWmEtejAtOS1fL10rL2cpIHx8IFtdXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogdml0ZS1wbHVnaW4taW1hZ2VtaW4gb3B0aW1pemUgYWxsIGltYWdlcyBzaXplcyBmcm9tIHB1YmxpYyBvciBhc3NldCBmb2xkZXJcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FubmN3Yi92aXRlLXBsdWdpbi1pbWFnZW1pblxuICAgICAqL1xuICAgICFNSU5JRllfSU1BR0VTXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiBJbWFnZU1pbih7XG4gICAgICAgICAgZ2lmc2ljbGU6IHtcbiAgICAgICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxuICAgICAgICAgICAgaW50ZXJsYWNlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpcG5nOiB7XG4gICAgICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vempwZWc6IHtcbiAgICAgICAgICAgIHF1YWxpdHk6IDYwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcG5ncXVhbnQ6IHtcbiAgICAgICAgICAgIHF1YWxpdHk6IFswLjgsIDAuOV0sXG4gICAgICAgICAgICBzcGVlZDogNCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN2Z286IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVWaWV3Qm94JyxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZUVtcHR5QXR0cnMnLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICBdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFgsU0FBUyxTQUFTLGVBQWU7QUFDM1osU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZUFBZTtBQUN0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
