# Next Level Partners Website

A professional consulting website built with Next.js 16 and Tailwind CSS v4.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

- **/** - Home page with hero, problem/solution, services overview, testimonials
- **/about** - About Jason Hochman, experience timeline, core competencies
- **/services** - Direct Engagement & Curated Network service details
- **/case-studies** - 3 detailed case studies with metrics
- **/insights** - Blog/articles section with newsletter signup
- **/contact** - Contact form, Calendly placeholder, FAQ accordion
- **/privacy** - Privacy policy page

## Customization Guide

### 1. Add Your Calendly Link

In `/src/app/contact/page.tsx`, replace the Calendly placeholder:

```tsx
// Find this section and add your Calendly embed
<a
  href="https://calendly.com/YOUR-LINK-HERE/discovery"
  ...
```

Or embed directly using Calendly's React component.

### 2. Add Your Headshot

1. Add your photo to `/public/images/headshot.jpg`
2. Update the hero sections in `/src/app/page.tsx` and `/src/app/about/page.tsx`:

```tsx
import Image from "next/image";

<Image
  src="/images/headshot.jpg"
  alt="Jason Hochman"
  width={400}
  height={400}
  className="rounded-2xl"
/>
```

### 3. Update Content

Key files to customize:
- `/src/app/page.tsx` - Home page content and testimonials
- `/src/app/about/page.tsx` - Your experience and background
- `/src/app/services/page.tsx` - Service descriptions and pricing
- `/src/app/case-studies/page.tsx` - Client success stories
- `/src/app/insights/page.tsx` - Blog articles

### 4. Update Contact Information

Search for and replace:
- `jason@nextlevelpartners.com` - Your email
- `linkedin.com/in/jasonmhochman` - Your LinkedIn URL
- Trust signals (years of experience, revenue impact, etc.)

### 5. Add Company Logos

For the social proof section, add client logos to `/public/images/logos/` and import them.

## Brand Colors

Defined in `/src/app/globals.css`:

```css
--color-primary: #1a365d;     /* Navy blue */
--color-secondary: #2f855a;   /* Forest green */
--color-accent: #d97706;      /* Amber */
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Deploy automatically

```bash
# Or use Vercel CLI
npx vercel
```

### Other Platforms

Build the static files:
```bash
npm run build
```

The output is in `.next/` folder.

## Domain Setup

1. Purchase/verify ownership of `next-levelpartners.com`
2. In your hosting platform, add the custom domain
3. Configure DNS to point to your hosting provider

## Adding Calendly Embed

1. Get your Calendly embed code from calendly.com
2. Install the Calendly package: `npm install react-calendly`
3. Add to the contact page:

```tsx
import { InlineWidget } from "react-calendly";

<InlineWidget url="https://calendly.com/nextlevelpartners/discovery" />
```

## Contact Form Integration

The contact form currently shows a success message on submit. To make it functional:

1. **Formspree**: Add your Formspree endpoint
2. **EmailJS**: Use EmailJS for client-side email
3. **API Route**: Create `/src/app/api/contact/route.ts` for server-side handling

Example with Formspree:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Tech Stack

- Next.js 16
- Tailwind CSS v4
- TypeScript
- React 19

## Support

For issues or questions, contact jason@nextlevelpartners.com
