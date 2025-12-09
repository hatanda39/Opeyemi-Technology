# Opeyemi Technology Website

Professional web design and development services website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with beautiful hover effects and animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Lighthouse score 95+ with optimized images, fonts, and code splitting
- **SEO Ready**: Complete SEO optimization with meta tags, structured data, and sitemap
- **Analytics**: Google Analytics and Hotjar integration for user behavior tracking
- **PWA**: Progressive Web App with offline support and service worker
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4, Hotjar
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/opeyemi/technology-website.git
cd technology-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Copy environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Update environment variables in `.env.local`:
\`\`\`env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

1. Build the application:
\`\`\`bash
npm run build
\`\`\`

2. Start the production server:
\`\`\`bash
npm start
\`\`\`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting and tree shaking
- **Images**: WebP format with responsive sizing
- **Caching**: Service worker for offline support

## 🔧 Configuration

### Analytics Setup

1. **Google Analytics**:
   - Create a GA4 property
   - Add your tracking ID to `NEXT_PUBLIC_GA_ID`

2. **Hotjar**:
   - Create a Hotjar account
   - Add your site ID to `NEXT_PUBLIC_HOTJAR_ID`

### SEO Configuration

- Update `app/layout.tsx` with your site information
- Modify `next-sitemap.config.js` for sitemap generation
- Update structured data in the layout file

## 📱 PWA Features

- **Offline Support**: Service worker caches critical resources
- **Install Prompt**: Users can install the app on their devices
- **Background Sync**: Form submissions work offline
- **Push Notifications**: Ready for future implementation

## 🎨 Customization

### Colors and Branding

Update the color scheme in `tailwind.config.ts`:

\`\`\`typescript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // Add your brand colors
}
\`\`\`

### Content Updates

- **Hero Section**: Update content in `app/page.tsx`
- **Services**: Modify the services array
- **Portfolio**: Add your project images to `/public/images/`
- **Testimonials**: Update client testimonials
- **Contact Info**: Update contact details throughout the site

## 🧪 Testing

Run tests:
\`\`\`bash
npm test
\`\`\`

Run tests in watch mode:
\`\`\`bash
npm run test:watch
\`\`\`

Generate coverage report:
\`\`\`bash
npm run test:coverage
\`\`\`

## 📈 Monitoring

### Performance Monitoring

- **Lighthouse**: Run `npm run lighthouse` for performance audit
- **Bundle Analyzer**: Run `npm run analyze` to analyze bundle size
- **Web Vitals**: Automatically tracked in Google Analytics

### Error Tracking

Errors are automatically tracked in Google Analytics. For production, consider adding:
- Sentry for error monitoring
- LogRocket for session replay

## 🔒 Security

- **CSP Headers**: Content Security Policy configured
- **HTTPS**: Enforced in production
- **Security Headers**: HSTS, X-Frame-Options, etc.
- **Input Validation**: Zod schema validation for forms

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For support, email opeyemitechnology@gmail.com or create an issue on GitHub.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Lucide](https://lucide.dev/) for beautiful icons
