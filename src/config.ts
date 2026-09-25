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
    name: "Maria Lara",
    title: "Licensed Massage Therapist (LMT)",
    experience: "Over 25 years of specialized clinical experience with a 5.0-star rating across 20 Google reviews",
    bio: [
      "Maria Lara is a licensed massage therapist with over 25 years of extensive clinical experience, certifications, and hands-on dedication. She founded ML Massage Therapy Wellness PC to provide an unhurried, focused healing haven in Upper Manhattan.",
      "Recognized by clients for her intuitive and medical massage techniques, Maria specializes in rehabilitating long-term injuries, resolving chronic pain (including severe back, leg, and arm conditions), alleviating debilitating migraines, and restoring neuromuscular mobility.",
      "As a solo practitioner, Maria dedicates her full, uninterrupted presence to one client at a time. Every session begins with active listening to understand your unique physical state, followed by precise, customized bodywork in a clean, quiet first-floor suite."
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
      notes: "Clean, calming first-floor private wellness suite (A4A). Buzzer A4A upon arrival for your appointment."
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
    baseUrl: "https://cal.com/mlmassagetherapy",
    username: "mlmassagetherapy"
  },
  reviews: {
    averageRating: 5.0,
    totalCount: 20,
    source: "Google Reviews",
    featuredTestimonial: {
      quote: "Maria is phenomenal. Her medical massage techniques and intuitive approach completely resolved chronic back and leg pain I'd carried for years. A true healing haven in Upper Manhattan.",
      author: "Verified Client",
      rating: 5,
      highlight: "A true healing haven with transformative medical massage"
    },
    list: [
      {
        quote: "Maria has over 25 years of experience and it shows in every minute of the session. She relieved debilitating migraines and restored mobility in my neck and shoulders that no other therapy touched.",
        author: "Client Review",
        rating: 5,
        highlight: "Over 25 years of experience & migraine relief",
        date: "Google Maps Review"
      },
      {
        quote: "The quiet, solo studio setting is a breath of fresh air. Maria took time to listen carefully, ask the right questions, and tailor the treatment specifically to my injury rehabilitation.",
        author: "Client Review",
        rating: 5,
        highlight: "Intuitive listener & dedicated rehabilitation",
        date: "Google Maps Review"
      },
      {
        quote: "Clean, calming first-floor suite with an incredibly peaceful atmosphere. Sessions with Maria are transformative and deeply restorative. The 5.0 rating is well deserved.",
        author: "Client Review",
        rating: 5,
        highlight: "Transformative, peaceful & impeccably clean",
        date: "Google Maps Review"
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
      calSlug: "initial-consultation-massage",
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
