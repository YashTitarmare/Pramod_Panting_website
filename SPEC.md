# Precision Paint Co. - Painting Services Website

## 1. Concept & Vision

A premium painting services website that exudes professionalism and craftsmanship. The design language draws from architectural photography and design magazines—clean lines, dramatic contrasts, and letting the work speak for itself. The experience should feel like walking through a high-end showroom where every brushstroke is intentional.

## 2. Design Language

### Aesthetic Direction
Inspired by Scandinavian design studios and luxury real estate platforms. Generous whitespace, bold typography, and strategic use of color to guide attention.

### Color Palette
```
Primary:      #1a365d (Deep Navy)
Secondary:    #2d3748 (Charcoal Gray)
Accent:       #ed8936 (Warm Orange - for CTAs)
Background:   #ffffff (Pure White)
Surface:      #f7fafc (Light Gray)
Text Primary: #1a202c (Near Black)
Text Muted:   #718096 (Medium Gray)
Success:      #38a169 (Green)
```

### Typography
- **Headings**: "Playfair Display" (serif) - elegant, trustworthy
- **Body**: "Inter" (sans-serif) - clean, readable
- **Accent/CTA**: "Inter" bold, uppercase with letter-spacing

### Spatial System
- Base unit: 8px
- Section padding: 80px (desktop), 48px (mobile)
- Container max-width: 1280px
- Card border-radius: 12px
- Button border-radius: 8px

### Motion Philosophy
- Subtle entrance animations on scroll (fade-up, 400ms ease-out)
- Hover states: scale(1.02) with 200ms transition
- CTA buttons: subtle shadow lift on hover
- Image reveal: clip-path animation from bottom

### Visual Assets
- Icons: Lucide React (consistent stroke width)
- Images: High-quality painting work photography
- Decorative: Subtle gradient overlays, geometric shapes

## 3. Layout & Structure

### Page Structure

#### Home Page
1. **Hero Section** (100vh)
   - Full-screen background image with overlay
   - Large headline with animated text reveal
   - Subheadline with value proposition
   - Two CTAs: "Get Free Quote" (primary), "View Our Work" (secondary)
   - Scroll indicator at bottom

2. **Trust Bar**
   - Horizontal strip with key stats/trust indicators
   - Icons + numbers + labels (e.g., "500+ Projects", "15 Years", "Licensed & Insured")

3. **Services Overview**
   - 4-column grid (2 on mobile)
   - Service cards with icon, title, brief description
   - Link to full service pages

4. **Why Choose Us**
   - Split layout: image left, content right
   - Checklist of benefits with checkmark icons
   - Secondary CTA

5. **Portfolio Preview**
   - 6-image masonry grid
   - Category filter tabs
   - "View All Projects" button

6. **Testimonials**
   - Carousel with customer reviews
   - Star ratings, customer photo, name, location
   - Navigation dots

7. **CTA Banner**
   - Full-width orange accent background
   - Bold headline + quote form button
   - Urgency text

8. **Service Areas**
   - Map or list of served cities
   - "Not in list? Contact us anyway"

9. **Footer**
   - 4-column layout
   - Contact info, quick links, services, social
   - Copyright + privacy links

#### About Page
- Hero with company photo
- Our Story section
- Mission & Values
- Team (optional)
- Certifications/Badges

#### Services Pages (Interior, Exterior, Commercial, Specialty)
- Hero with service-specific image
- Service description
- What's Included list
- Process steps (numbered)
- Gallery of work
- Related services
- Quote CTA

#### Portfolio Page
- Filter tabs by category
- Masonry grid of project images
- Lightbox on click
- Before/After comparison feature

#### Testimonials Page
- All reviews in grid
- Video testimonials (if available)
- Submit review form

#### Contact Page
- Contact form (name, email, phone, service type, message)
- Map integration
- Contact details
- Business hours
- Emergency contact

#### Get a Quote Page
- Multi-step form
- Step 1: Contact info
- Step 2: Service type & property details
- Step 3: Project specifics (size, timeline)
- Step 4: Additional notes
- Confirmation message

## 4. Features & Interactions

### Navigation
- Fixed/sticky header on scroll
- Logo left, nav links center, CTA right
- Mobile: hamburger menu with slide-out drawer
- Active page indicator

### Forms
- Real-time validation
- Success/error states
- Loading spinner on submit
- Data stored in Firebase

### Portfolio Gallery
- Lazy loading images
- Category filtering (instant, no reload)
- Lightbox with navigation
- Before/After slider (draggable)

### Testimonials Carousel
- Auto-advance every 5 seconds
- Pause on hover
- Swipe on mobile
- Navigation arrows + dots

### Before/After Slider
- Draggable divider
- Touch-enabled
- Smooth transition

### Click-to-Call
- Sticky mobile button
- Visible on mobile only
- Phone icon + "Call Now"

### Scroll Animations
- Elements fade in on scroll into view
- Staggered animations for lists
- Parallax on hero background

## 5. Component Inventory

### Header
- States: default, scrolled (compact), mobile-open
- Logo, nav links, CTA button
- Mobile hamburger icon

### Button
- Variants: primary (orange), secondary (outline), ghost
- States: default, hover (lift + shadow), active, disabled, loading
- Sizes: sm, md, lg

### Service Card
- Icon, title, description, link arrow
- Hover: subtle lift + shadow

### Portfolio Card
- Image with overlay on hover
- Category tag
- Click opens lightbox

### Testimonial Card
- Quote text, rating stars, avatar, name, location
- Quote icon decoration

### Form Input
- States: default, focus, error, success, disabled
- Label, input, error message, helper text

### Section Header
- Eyebrow text (small, uppercase)
- Main heading
- Optional subheading

### Trust Badge
- Icon, number, label
- Grouped in horizontal strip

### Footer
- Multi-column responsive layout
- Newsletter signup (optional)
- Social icons

## 6. Technical Approach

### Framework
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

### Firebase Setup
- Firestore for:
  - Contact submissions
  - Quote requests
  - Testimonials (moderated)
  - Portfolio items
- Firebase Auth for admin (optional)

### Data Models

```typescript
// Quote Request
interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: 'interior' | 'exterior' | 'commercial' | 'specialty';
  propertyType: 'residential' | 'commercial';
  address: string;
  squareFootage?: number;
  timeline: 'asap' | 'within-week' | 'within-month' | 'flexible';
  description: string;
  createdAt: Timestamp;
  status: 'pending' | 'contacted' | 'quoted' | 'completed';
}

// Contact Message
interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: Timestamp;
}

// Portfolio Item
interface PortfolioItem {
  id: string;
  title: string;
  category: 'interior' | 'exterior' | 'commercial' | 'specialty';
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  description?: string;
  location?: string;
  createdAt: Timestamp;
}

// Testimonial
interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar?: string;
  approved: boolean;
  createdAt: Timestamp;
}
```

### SEO Strategy
- Dynamic meta tags per page
- JSON-LD structured data (LocalBusiness, Service)
- Sitemap generation
- robots.txt
- Canonical URLs

### Performance
- Next.js Image optimization
- Dynamic imports for heavy components
- ISR for static content
- Lighthouse target: 90+ score

## 7. File Structure

```
/app
  /layout.tsx
  /page.tsx (Home)
  /about/page.tsx
  /services/
    /page.tsx (Services overview)
    /interior/page.tsx
    /exterior/page.tsx
    /commercial/page.tsx
    /specialty/page.tsx
  /portfolio/page.tsx
  /testimonials/page.tsx
  /contact/page.tsx
  /quote/page.tsx
/components
  /ui (Button, Input, Card, etc.)
  /layout (Header, Footer, Container)
  /sections (Hero, Services, Portfolio, etc.)
  /forms (ContactForm, QuoteForm)
/lib
  /firebase.ts
  /hooks.ts
/public
  /images
/styles
  /globals.css
```
