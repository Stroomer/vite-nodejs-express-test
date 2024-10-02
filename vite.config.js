export default {
  root: 'src', // Make sure this is correctly set
  build: {
    outDir: '../public',
    rollupOptions: {
      input: './src/index.js', // Specify the entry point
    },
  },
  optimizeDeps: {
    include: ['axios', 'lodash'], // List of dependencies to pre-bundle
  },
};
