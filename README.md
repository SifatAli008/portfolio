# Sifat Ali - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, inspired by Brittany Chiang's design aesthetic.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── SkillIcons.tsx
│   │   └── theme-provider.tsx
│   ├── pages/
│   │   ├── Home.tsx      # Main landing page
│   │   ├── Projects.tsx  # Projects showcase
│   │   └── Contact.tsx   # Contact form
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📝 Customization

### Personal Information
Update your personal information in the following files:
- `src/pages/Home.tsx` - Update hero section, experience, education
- `src/pages/Projects.tsx` - Update project details
- `src/pages/Contact.tsx` - Update contact information

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Customize component styles in individual component files

### SEO
- Update meta tags in `index.html`
- Modify `public/sitemap.xml` with your actual URL
- Update `public/robots.txt` if needed

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:

```env
VITE_GA_TRACKING_ID=your-google-analytics-id
VITE_CONTACT_EMAIL=your-email@example.com
```

### Analytics
Add Google Analytics by updating the tracking ID in your deployment platform's environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Brittany Chiang's portfolio](https://brittanychiang.com/)
- Icons from [Lucide React](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## 📞 Contact

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

⭐ If you found this portfolio helpful, please give it a star!