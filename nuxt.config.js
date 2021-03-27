const baseUrl = process.env.BASE_URL || "http://localhost:3000";
export default {
  env: {
    baseURL: baseUrl,
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "shopteando",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "title",
        content: "beautiful template of an online store with nuxtjs 😲",
      },
      {
        hid: "description",
        name: "description",
        content:
          "It is a template of an example store inspired by a nintendo store developed by Code Solution Panamá.",
      },

      { hid: "og:type", content: "website" },
      { hid: "og:url", content: baseUrl },
      {
        hid: "og:title",
        content: "beautiful template of an online store with nuxtjs 😲",
      },
      {
        hid: "og:description",
        content:
          "It is a template of an example store inspired by a nintendo store developed by Code Solution Panamá.",
      },
      { hid: "og:image", content: `${baseUrl}/Shoptenado.png` },

      { hid: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:url", content: baseUrl },
      {
        hid: "twitter:title",
        content: "beautiful template of an online store with nuxtjs 😲",
      },
      {
        hid: "twitter:description",
        content:
          "It is a template of an example store inspired by a nintendo store developed by Code Solution Panamá.",
      },
      { hid: "twitter:image", content: `${baseUrl}/Shoptenado.png` },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-analytics"
  ],
  googleAnalytics:{
    id: process.env.GA_ID || ''
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://template-shoptenado-nuxtjs.netlify.app",
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
