import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gutHealth: resolve(__dirname, 'gut-health.html'),
        weightManagement: resolve(__dirname, 'weight-management.html'),
        pickyEaters: resolve(__dirname, 'raising-confident-eaters.html'),
        maternityCare: resolve(__dirname, 'maternity-care.html'),
        wellnessCoaching: resolve(__dirname, 'wellness-coaching.html'),
        resources: resolve(__dirname, 'resources.html'),
        blogTemplate: resolve(__dirname, 'blog-template.html'),
        check: resolve(__dirname, 'check.html'),
        checkStatus: resolve(__dirname, 'check_status.html'),
        blogBloating: resolve(__dirname, 'blog-bloating.html'),
        blogMetabolism: resolve(__dirname, 'blog-metabolism.html'),
        blogPediatric: resolve(__dirname, 'blog-pediatric.html'),
        blogSibo: resolve(__dirname, 'blog-sibo.html'),
        quiz: resolve(__dirname, 'quiz.html'),
      },
    },
  },
})
