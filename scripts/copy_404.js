import fs from 'fs';
import path from 'path';

// This script copies dist/index.html to dist/404.html
// This allows GitHub Pages to serve the React App for unknown routes,
// enabling client-side routing to take over.

const dist = path.resolve('dist');
const index = path.join(dist, 'index.html');
const copy = path.join(dist, '404.html');

if (!fs.existsSync(index)) {
    console.error('❌ dist/index.html not found. Did you build first?');
    process.exit(1);
}

try {
    fs.copyFileSync(index, copy);
    console.log('✅ Copied index.html to 404.html for SPA fallback');
} catch (e) {
    console.error('❌ Failed to copy 404.html:', e);
    process.exit(1);
}
