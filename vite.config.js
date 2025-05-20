import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './', // this is because the HTML files are in the root
  server: {
    open: true
  },
  build: {
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        portfolio: path.resolve(__dirname, 'portfolio.html'),
        process: path.resolve(__dirname, 'process.html'),
        projectSample: path.resolve(__dirname, 'projects-sample.html'),
        projects: path.resolve(__dirname, 'projects.html'),
        serviceDetail: path.resolve(__dirname, 'service-detail.html'),
        services: path.resolve(__dirname, 'services.html'),
        team: path.resolve(__dirname, 'team.html')
        // Add more pages as needed
      }
    }
  }
});
