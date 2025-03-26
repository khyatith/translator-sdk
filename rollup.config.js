import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',  // your SDK entry point
  output: {
    file: 'dist/translation-sdk.min.js',  // bundled output file
    format: 'iife',  // Immediately Invoked Function Expression for browser use
    name: 'TranslationSDK'  // global variable to expose
  },
  plugins: [terser()]  // minification plugin
};
