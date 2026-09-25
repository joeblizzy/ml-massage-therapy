# ML Massage Therapy Wellness PC — Official Website & Booking System

A fast, responsive, and calming multi-page website built for **ML Massage Therapy Wellness PC**, a solo Licensed Massage Therapy (LMT) practice founded by Maria in Washington Heights, Manhattan, NY.

Designed specifically to match the **Booking System Spec Sheet**, featuring standalone pages, zero decorative illustration graphics (all real photography slots), Cal.com integration, clear appointment-only boundaries, and upfront cancellation policies.

---

## 🌿 Website Architecture

- **Homepage (`/`)**:
  - Hero with treatment space photography, headline, and "Book Now" CTA
  - Testimonial pull quote pulled from 5-star Google review
  - 3 supporting photography slots: Studio Interior, Hands-on Treatment, Calming Details
  - Featured services overview
  - Appointment-only protocol banner & operating schedule callout
- **About Page (`/about`)**:
  - Maria's bio, credentials, and personalized clinical treatment philosophy
  - Practitioner photo slot and treatment space photos
  - Studio environment & hospital-grade linen hygiene standards
  - Google Reviews showcase (5.0 rating across 20 reviews)
- **Services & Rates (`/services`)**:
  - Individual cards for each service with duration, post-treatment turnaround buffers, pricing, and descriptions:
    1. **Initial Consultation & Massage** (75 min + 15m buffer, $150)
    2. **Standard Massage Session** (60 min + 15m buffer, $125)
    3. **Express Session** (30 min + 10m buffer, $70)
    4. **Follow-Up / Maintenance Session** (45 min + 10m buffer, $95)
  - Dedicated "Book Now" buttons linking to specific Cal.com event types
  - Clear breakdown of Payment & 24-hour Cancellation Policy (Section 6)
  - Custom intake question transparency notice (Section 5)
- **Location & Booking (`/contact` & `/book`)**:
  - Direct Cal.com booking calendar embed with service filtering tabs
  - Full address: `640 W 153rd St, Suite A4A, New York, NY 10031`
  - Transit & subway instructions (1 train at 157th St, C train at 155th St)
  - Practice hours table (Mon, Thu, Sat: 9am–5pm; closed Tue, Wed, Fri, Sun)
  - Direct phone link: `(646) 669-6308`

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom wellness color palette (Sage, Warm Stone, Sand, Linen) and Cormorant Garamond typography
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6)
- **Booking Integration**: Cal.com embed + direct deep links

---

## 🚀 Quick Start (Development & Building)

```bash
# Install dependencies
npm install

# Run the local development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ How to Customize (Client Guide)

All key business information, pricing, Cal.com URLs, and photo paths are centralized in **[`src/config.ts`](file:///Users/josephbagh/Documents/Projects/ML%20Massage%20Therapy/src/config.ts)**.

### 1. Linking Your Cal.com Account
In `src/config.ts`, update:
```ts
calCom: {
  baseUrl: "https://cal.com/your-cal-username",
  username: "your-cal-username"
}
```

### 2. Updating Practitioner & Studio Photos
To replace the placeholders with your own real photographs:
1. Save your photos in `public/images/` (e.g., `maria.jpg`, `studio.jpg`, `treatment.jpg`).
2. Update the image paths in `src/config.ts`:
   - `practitioner.photo`: `"/images/maria.jpg"`
   - `gallery[0].url`: `"/images/studio.jpg"`
   - `services[0].image`: `"/images/initial-consult.jpg"`

### 3. Adjusting Service Rates & Buffers
In `src/config.ts`, each service in the `services` array has `price`, `duration`, and `bufferAfter` fields that can be edited in seconds.

---

## 📅 Cal.com Setup Checklist (Per Spec)

1. **Create the 4 Event Types** (Section 3):
   - `Initial Consultation and Massage` (Duration: 75 min, Buffer after: 15 min)
   - `Standard Massage Session` (Duration: 60 min, Buffer after: 15 min)
   - `Express Session` (Duration: 30 min, Buffer after: 10 min)
   - `Follow Up / Maintenance Session` (Duration: 45 min, Buffer after: 10 min)
2. **Configure Availability** (Section 4):
   - Monday: `9:00am – 5:00pm`
   - Thursday: `9:00am – 5:00pm`
   - Saturday: `9:00am – 5:00pm`
   - Tuesday, Wednesday, Friday, Sunday: `Closed`
   - Minimum Notice: `24 hours`
   - Booking Window: `30 to 60 days`
3. **Configure Custom Intake Questions** (Section 5):
   - Prior massage history (Yes / No)
   - Current pain / injuries / concern areas (Long text)
   - Medical conditions (Optional, Long text)
   - Referral source (Dropdown: Google, referral, Instagram, other)
4. **Connect Stripe** (Section 6):
   - Connect Stripe via Cal.com App Store
   - Set deposit amount (e.g. 20% to 50%) charged upon booking

---

## 🌐 Hosting on Cloudflare Pages (Free)

Since you are using Cloudflare for your domain:
1. Push this repository to GitHub or GitLab.
2. In your Cloudflare dashboard, navigate to **Compute (Workers) > Pages**.
3. Click **Connect to Git** and choose this repository.
4. Set Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
5. Click **Save and Deploy**.
6. Under **Custom Domains**, add your domain (e.g., `mlmassagetherapy.com`).
   - Total hosting cost: **$0/month**!
