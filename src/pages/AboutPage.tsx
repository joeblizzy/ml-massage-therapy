import React from 'react';
import { BUSINESS_CONFIG } from '../config';
import { Calendar, ShieldCheck, HeartHandshake, Sparkles, MapPin } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: (calSlug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-stone-100/70 border-b border-stone-200/80 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
            Solo Practice & Clinical Care
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-900 font-normal">
            About {BUSINESS_CONFIG.practitioner.name} & ML Massage Therapy
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Delivering dedicated, evidence-informed therapeutic bodywork and medical massage in a quiet, private Upper Manhattan studio.
          </p>
        </div>
      </section>

      {/* Practitioner Bio & Photo Section (Per Spec: Practitioner Photo + Bio) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Practitioner Photo Slot */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-200 relative group">
                <img
                  src={BUSINESS_CONFIG.practitioner.photo}
                  alt="Maria Lara, Licensed Massage Therapist at ML Massage Therapy Wellness PC"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-serif text-2xl font-normal">{BUSINESS_CONFIG.practitioner.name}</h3>
                  <p className="text-xs text-sage-200 uppercase tracking-wider font-medium">
                    Licensed Massage Therapist (LMT)
                  </p>
                  <p className="text-[11px] text-stone-300 mt-1">
                    Founder, ML Massage Therapy Wellness PC • 25+ Years Experience
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-sage-700 text-white text-xs px-4 py-2 rounded-xl shadow-lg font-medium">
                5.0 ★ Rated (20 Google Reviews)
              </div>
            </div>
          </div>

          {/* Bio & Philosophy Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Solo Practice</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight">
              One therapist, one private suite, and zero rushed sessions.
            </h2>

            <div className="space-y-4 text-stone-600 leading-relaxed font-light text-base">
              {BUSINESS_CONFIG.practitioner.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="font-serif text-lg font-medium text-stone-900 mb-1">
                  Individual Anatomical Focus
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  No generic routines. Every session directly targets postural compensation, tension patterns, and repetitive strain.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="font-serif text-lg font-medium text-stone-900 mb-1">
                  Unhurried & Meticulous Care
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Appointments are spaced intentionally to ensure pristine linens, thorough air sanitization, and peaceful preparation.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 rounded-xl bg-sage-700 hover:bg-sage-800 text-white font-medium text-sm shadow transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment with Maria</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Optional: Studio / Space Photo & Hygiene Standard (Per Spec) */}
      <section className="bg-stone-100/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
                The Environment
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                Designed for nervous system restoration.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Located in a calm, discreet residential building in Washington Heights, Suite A4A is an intimate wellness space completely shielded from the sensory overload of New York City streets.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900">Hospital-Grade Linen & Hygiene Protocols</h4>
                    <p className="text-xs text-stone-600">Fresh organic linens and headrest covers changed and laundered after every individual appointment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900">Dedicated Arrival & Zero Waiting Room Overlap</h4>
                    <p className="text-xs text-stone-600">Appointments are individually scheduled so you never have to wait in a crowded lobby or cross paths with other clients.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900">Discreet & Convenient Location</h4>
                    <p className="text-xs text-stone-600">640 W 153rd St, Suite A4A — just steps from the 1 train at 157th St or C train at 155th St.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                    alt="Heated massage therapy table in private suite"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
                    alt="Therapeutic essential oils and calming studio ambiance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Testimonials Carousel/Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-serif text-3xl text-stone-900 font-normal">
            What Clients Say
          </h2>
          <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">
            20 Five-Star Reviews on Google Maps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BUSINESS_CONFIG.reviews.list.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <p className="text-xs font-semibold text-sage-800 tracking-wide">
                  "{rev.highlight}"
                </p>
                <p className="text-sm text-stone-600 font-light italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100 flex justify-between items-center text-xs text-stone-500">
                <span className="font-medium text-stone-900">{rev.author}</span>
                <span>Verified Client</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-sage-800 text-white rounded-3xl p-10 shadow-lg space-y-4">
          <h2 className="font-serif text-3xl font-normal">
            Experience the difference of focused, solo care.
          </h2>
          <p className="text-sage-200 text-sm max-w-lg mx-auto font-light">
            Sessions are booked in advance online. Reserve your preferred time slot today.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 bg-white text-sage-900 hover:bg-stone-100 rounded-xl font-semibold text-sm shadow transition-colors"
            >
              Book Online with Maria
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
