# Modern Developer Portfolio

A modern, responsive developer portfolio built with React, TypeScript, and shadcn/ui.

## Features

- 🎨 Modern UI with dark/light mode
- 📱 Fully responsive design
- ⚡ Built with React + TypeScript + Vite
- 🎯 Three main pages: Home, Projects, and Contact
- 🔧 Easy to customize and extend

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

1. Update personal information in the components:
   - `src/pages/Home.tsx`: Update name, bio, and tech stack
   - `src/pages/Projects.tsx`: Add your projects
   - `src/pages/Contact.tsx`: Update contact information

2. Customize the theme:
   - Edit `src/index.css` to modify colors and styles
   - Update `tailwind.config.js` for additional customization

## Deployment

### GitHub Pages

1. Update the `vite.config.ts` file:
```typescript
export default defineConfig({
  base: '/portfolio/', // Replace with your repo name
  // ... other config
})
```

2. Add a deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. Install gh-pages:
```bash
npm install -D gh-pages
```

4. Build and deploy:
```bash
npm run build
npm run deploy
```

5. Go to your GitHub repository settings:
   - Navigate to "Pages"
   - Set the source to "gh-pages" branch

Your portfolio will be available at `https://yourusername.github.io/portfolio/`

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- [shadcn/ui](https://ui.shadcn.com/) for the UI components
- [Lucide Icons](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
