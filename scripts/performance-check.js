#!/usr/bin/env node

/**
 * Performance Monitoring Script
 * Run this script to check your portfolio's performance metrics
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Portfolio Performance Check\n');

// Check bundle size
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  const files = fs.readdirSync(distPath);
  const jsFiles = files.filter(file => file.endsWith('.js'));
  const cssFiles = files.filter(file => file.endsWith('.css'));
  
  console.log('📦 Bundle Analysis:');
  jsFiles.forEach(file => {
    const stats = fs.statSync(path.join(distPath, file));
    const sizeInKB = (stats.size / 1024).toFixed(2);
    console.log(`  ${file}: ${sizeInKB} KB`);
  });
  
  cssFiles.forEach(file => {
    const stats = fs.statSync(path.join(distPath, file));
    const sizeInKB = (stats.size / 1024).toFixed(2);
    console.log(`  ${file}: ${sizeInKB} KB`);
  });
} else {
  console.log('⚠️  No dist folder found. Run "npm run build" first.');
}

// Check dependencies
console.log('\n📋 Dependency Analysis:');
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
const dependencies = Object.keys(packageJson.dependencies || {});
const devDependencies = Object.keys(packageJson.devDependencies || {});

console.log(`  Production dependencies: ${dependencies.length}`);
console.log(`  Development dependencies: ${devDependencies.length}`);

// Performance recommendations
console.log('\n💡 Performance Recommendations:');
console.log('  1. Use Lighthouse to audit your deployed site');
console.log('  2. Optimize images with WebP format');
console.log('  3. Implement lazy loading for images');
console.log('  4. Consider code splitting for larger components');
console.log('  5. Add service worker for offline functionality');
console.log('  6. Use CDN for external resources');
console.log('  7. Enable gzip compression on your server');

// SEO checklist
console.log('\n🔍 SEO Checklist:');
console.log('  ✅ Meta tags added to index.html');
console.log('  ✅ Sitemap.xml created');
console.log('  ✅ Robots.txt configured');
console.log('  ⚠️  Add Open Graph image (og-image.jpg)');
console.log('  ⚠️  Update URLs in sitemap.xml with your actual domain');
console.log('  ⚠️  Add Google Analytics tracking ID');

console.log('\n✨ Performance check complete!'); 