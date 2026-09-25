export interface ServiceItem {
  id: string;
  name: string;
  duration: number; // in minutes
  bufferAfter: number; // in minutes
  price: number; // USD
  shortDescription: string;
  fullDescription: string;
  calSlug: string;
  image: string;
  bestFor: string;
}

export interface ReviewItem {
  quote: string;
  author: string;
  rating: number;
  highlight: string;
  date?: string;
}

export const BUSINESS_CONFIG = {
  name: "ML Massage Therapy Wellness PC",
  shortName: "ML Massage Therapy",
  tagline: "Restorative, Clinical & Tailored Massage Therapy in Upper Manhattan",
  practitioner: {
    name: "Maria",
    title: "Licensed Massage Therapist (LMT)",
    experience: "Dedicated solo clinical practice with 5.0-star client satisfaction",
    bio: [
      "Maria is a licensed massage therapist who founded ML Massage Therapy Wellness PC to provide unhurried, focused, and deeply restorative clinical bodywork.",
      "Working as a solo practitioner allows Maria to dedicate 100% of her focus to one client at a time. Each session is individually tailored to your unique anatomical needs—whether you are recovering from persistent muscular strain, managing chronic desk-bound tension, or seeking mindful stress relief.",
      "Every treatment occurs in a private, meticulously maintained and tranquil suite designed to promote nervous system down-regulation and lasting musculoskeletal relief."
    ],
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" // Client can replace with their photo
  },
  contact: {
    phone: "(646) 669-6308",
    phoneTel: "+16466696308",
    email: "contact@mlmassagetherapy.com",
    address: {
      street: "640 W 153rd St, Suite A4A",
      city: "New York",
      state: "NY",
      zip: "10031",
      neighborhood: "Washington Heights / Hamilton Heights",
      notes: "Private professional wellness suite. Buzzer A4A upon arrival for your appointment."
    },
    transit: "Conveniently accessible via the 1 train (157th St Station) or C train (155th St Station)."
  },
  hours: [
    { day: "Monday", hours: "9:00 AM – 5:00 PM", isOpen: true },
    { day: "Tuesday", hours: "Closed", isOpen: false },
    { day: "Wednesday", hours: "Closed", isOpen: false },
    { day: "Thursday", hours: "9:00 AM – 5:00 PM", isOpen: true },
    { day: "Friday", hours: "Closed", isOpen: false },
    { day: "Saturday", hours: "9:00 AM – 5:00 PM", isOpen: true },
    { day: "Sunday", hours: "Closed", isOpen: false },
  ],
  policies: {
    appointmentOnly: "Strictly by appointment only. We cannot accommodate walk-in visits to preserve treatment privacy and cleanliness.",
    cancellation: "Full refund if cancelled 24+ hours ahead. Deposits are forfeited if cancelled within 24 hours of your appointment or in the event of a no-show.",
    depositNotice: "A deposit is required to confirm your appointment, securely handled via Stripe at booking.",
    advanceBooking: "Appointments may be booked up to 30 to 60 days in advance. A minimum of 24 hours advance notice is required.",
    hygiene: "Linens are freshly sanitized between every appointment, and generous buffer times ensure thorough room ventilation and preparation."
  },
  calCom: {
    baseUrl: "https://cal.com/ml-massage-therapy",
    username: "ml-massage-therapy"
  },
  reviews: {
    averageRating: 5.0,
    totalCount: 20,
    source: "Google Reviews",
    featuredTestimonial: {
      quote: "Maria is phenomenal. Her targeted approach completely relieved chronic neck and shoulder tension I'd carried for months. The studio is impeccably clean, calm, and private.",
      author: "Verified Client",
      rating: 5,
      highlight: "Impeccably clean, calm, and targeted relief"
    },
    list: [
      {
        quote: "Hands down the best therapeutic massage in upper Manhattan. Maria takes time to listen to your body and customize the pressure perfectly. Truly professional.",
        author: "Sarah K.",
        rating: 5,
        highlight: "Best therapeutic massage in upper Manhattan",
        date: "Recent review"
      },
      {
        quote: "The quiet, solo studio setting is a breath of fresh air compared to busy commercial spas. Maria addressed my lower back pain with genuine skill and care.",
        author: "David M.",
        rating: 5,
        highlight: "Private, attentive solo setting",
        date: "Recent review"
      },
      {
        quote: "Easy online booking, peaceful atmosphere, and remarkable relief. I left feeling lighter and pain-free. Worth every star.",
        author: "Elena R.",
        rating: 5,
        highlight: "Remarkable relief and peaceful atmosphere",
        date: "Recent review"
      }
    ]
  },
  services: [
    {
      id: "initial-consultation",
      name: "Initial Consultation & Massage",
      duration: 75,
      bufferAfter: 15,
      price: 150,
      calSlug: "initial-consultation-and-massage",
      shortDescription: "Comprehensive postural & health assessment followed by a personalized therapeutic treatment tailored to your primary concerns.",
      fullDescription: "Ideal for all new clients. We begin with a 15-minute intake discussion to understand your musculoskeletal history, posture patterns, and current areas of tension or pain. The remaining 60 minutes are dedicated to customized, hands-on therapeutic bodywork designed to address root imbalances.",
      bestFor: "First-time clients, chronic pain sufferers, or those with specific rehabilitation goals.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "standard-session",
      name: "Standard Massage Session",
      duration: 60,
      bufferAfter: 15,
      price: 125,
      calSlug: "standard-massage-session",
      shortDescription: "A balanced 60-minute therapeutic massage combining targeted myofascial release with soothing restorative flow.",
      fullDescription: "Our flagship session. Tailored directly to your preferences, combining deep tissue techniques, trigger point therapy, and Swedish relaxation methods. Perfect for regular stress reduction and full-body neuromuscular restoration.",
      bestFor: "Returning clients, full-body stress reduction, and maintaining mobility.",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "express-session",
      name: "Express Session",
      duration: 30,
      bufferAfter: 10,
      price: 70,
      calSlug: "express-session",
      shortDescription: "A focused, intensive 30-minute treatment specifically targeting a single trouble area such as the neck, shoulders, or lower back.",
      fullDescription: "Designed for individuals seeking quick, efficient relief for acute strain without committing to a full-length session. Concentrates entirely on one area of tightness using precise neuromuscular release.",
      bestFor: "Lunchtime refresh, targeted neck/shoulder stiffness, or acute spot treatment.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "maintenance-session",
      name: "Follow-Up / Maintenance Session",
      duration: 45,
      bufferAfter: 10,
      price: 95,
      calSlug: "follow-up-maintenance-session",
      shortDescription: "A 45-minute treatment maintaining therapeutic progress between full sessions or focusing on dual problem areas.",
      fullDescription: "Created to support your ongoing wellness plan. Provides ample time to thoroughly work through two key tension zones (e.g., upper back and hips) to sustain joint mobility and prevent tension recurrence.",
      bestFor: "Clients on an active care plan needing bi-weekly or monthly tune-ups.",
      image: "https://images.unsplash.com/photo-1519824145371-296894a0dc91?auto=format&fit=crop&w=800&q=80"
    }
  ],
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      caption: "Tranquil treatment space equipped with heated table and natural botanicals",
      category: "Studio Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
      caption: "Focused, precise neuromuscular therapy tailored to your anatomy",
      category: "Hands-on Treatment"
    },
    {
      url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      caption: "Calming details designed for restorative nervous system relaxation",
      category: "Space Details"
    }
  ]
};
