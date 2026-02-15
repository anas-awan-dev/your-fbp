# Your Finance Business Partner

A professional, responsive landing page for a global financial services platform built with Next.js, TypeScript, and styled-components.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, styled-components
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **SEO Optimized**: Meta tags, structured data, and Open Graph support
- **Email Integration**: Contact form with Nodemailer email functionality
- **Performance**: Optimized images, fonts, and smooth animations
- **Clean Architecture**: Component-based structure with clear separation of concerns

## 📁 Project Structure

```
yourfbp/
├── app/
│   ├── api/contact/          # Email API endpoint
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with SEO meta tags
│   └── page.tsx             # Main landing page
├── components/
│   ├── Overview/            # Hero section component
│   ├── Services/            # Financial services showcase
│   ├── Testimonials/        # Client testimonials
│   └── ContactForm/         # Contact form with validation
├── utils/
│   └── StyledComponentsRegistry.tsx  # SSR support for styled-components
├── styles/                  # Additional styling files
└── public/                  # Static assets
```

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: styled-components + CSS Modules
- **Email**: Nodemailer
- **Icons**: React Icons
- **Fonts**: Inter (Google Fonts)
- **Schema**: Structured data for SEO

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yourfbp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your email settings in `.env.local`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=your-email@gmail.com
   CONTACT_EMAIL=info@yourfbp.com
   NEXT_PUBLIC_SITE_URL=https://yourfbp.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

### Gmail Setup

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use this app password in `SMTP_PASS`

### Alternative Email Providers

The application supports any SMTP provider. Update the environment variables accordingly:

- **SendGrid**: Use SendGrid SMTP settings
- **Mailgun**: Use Mailgun SMTP settings  
- **AWS SES**: Use SES SMTP settings

## 🎨 Components Overview

### Overview Component
- Hero section with call-to-action
- Company statistics
- Responsive gradient background
- Smooth scroll to contact form

### Services Component
- Six core financial services
- Interactive cards with hover effects
- Icon-based service categories
- Feature lists for each service

### Testimonials Component
- Three client testimonials
- Star ratings and client information
- Professional avatars with initials
- Global client representation

### ContactForm Component
- Full form validation
- Email integration
- Accessibility compliant
- Loading states and error handling
- Auto-reply functionality

## 🌐 SEO & Performance

### SEO Features
- Comprehensive meta tags
- Open Graph and Twitter Cards
- Structured data (JSON-LD)
- Semantic HTML structure
- Optimized images and fonts

### Performance Optimizations
- Next.js Image component
- Font optimization with `next/font`
- CSS-in-JS with styled-components
- Tree shaking and code splitting
- Responsive images

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set environment variables**
   ```bash
   vercel env add SMTP_HOST
   vercel env add SMTP_PORT
   vercel env add SMTP_USER
   vercel env add SMTP_PASS
   vercel env add SMTP_FROM
   vercel env add CONTACT_EMAIL
   ```

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Add environment variables** in Netlify dashboard

### Custom Server

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- ESLint configuration for Next.js
- Consistent component structure
- Semantic HTML elements
- Accessible component patterns

## 🌟 Key Features Implemented

### Accessibility
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Color contrast compliance
- ✅ Focus management

### Responsive Design
- ✅ Mobile-first approach
- ✅ Flexible grid layouts
- ✅ Responsive typography
- ✅ Touch-friendly interactions
- ✅ Cross-browser compatibility

### Email Integration
- ✅ Contact form validation
- ✅ SMTP email sending
- ✅ Auto-reply functionality
- ✅ HTML email templates
- ✅ Error handling

### SEO Optimization
- ✅ Meta tags optimization
- ✅ Structured data markup
- ✅ Social media cards
- ✅ XML sitemap ready
- ✅ Performance optimized

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For support, email info@yourfbp.com or create an issue in this repository.

---

**Built with ❤️ using Next.js and TypeScript**
