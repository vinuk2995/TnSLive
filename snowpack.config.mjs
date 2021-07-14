/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    // polyfillNode: false,
    // source : "local",
    "external": ["fs" , "path" ,"url"]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
