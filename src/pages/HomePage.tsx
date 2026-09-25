import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config';
import { Calendar, Clock, MapPin, Star, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onOpenBooking: (calSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-100/80 border border-sage-200 text-sage-800 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-sage-600 animate-pulse"></span>
                <span>Solo Practice by Maria Lara, LMT (25+ Yrs Exp) • Upper Manhattan</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal leading-[1.15] text-balance">
                Therapeutic bodywork tailored to your anatomy & nervous system.
              </h1>

              <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed max-w-2xl">
                Unhurried, clinical, and deeply restorative massage therapy in a tranquil, private suite in Washington Heights. Strictly by appointment—dedicated solely to your session.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-sage-700 hover:bg-sage-800 text-white font-medium text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment Online</span>
                </button>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-base transition-colors"
                >
                  <span>Explore Services & Rates</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-6 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                  <span>1-on-1 Solo Practitioner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                  <span>Private Healing Suite</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                  <span>5.0-Star Rated Practice</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Image (Real Treatment Space Photo Placeholder) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                    alt="Private, tranquil massage therapy treatment space at ML Massage Therapy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif text-lg font-medium text-stone-900">Treatment Suite A4A</p>
                        <p className="text-xs text-stone-500">640 W 153rd St, Manhattan</p>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/80">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-semibold text-amber-900">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative background aura */}
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-sage-200/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-amber-100/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Testimonial Pull Quote (Per Spec: Pulled from Google Reviews) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-50/70 rounded-3xl p-8 sm:p-12 border border-sage-100/90 shadow-sm relative overflow-hidden">
          <div className="flex text-amber-400 mb-4 justify-center sm:justify-start">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-stone-800 leading-snug italic font-normal text-balance">
            "{BUSINESS_CONFIG.reviews.featuredTestimonial.quote}"
          </blockquote>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-6 border-t border-sage-200/60 text-xs sm:text-sm text-stone-600">
            <div>
              <span className="font-semibold text-stone-900">{BUSINESS_CONFIG.reviews.featuredTestimonial.author}</span>
              <span className="text-stone-400 mx-2">•</span>
              <span className="text-sage-700 font-medium">Google Maps Verified Client</span>
            </div>
            <div className="text-stone-500">
              5.0 ★ Rating across 20 Verified Reviews
            </div>
          </div>
        </div>
      </section>

      {/* 2 to 3 Supporting Real Photo Highlights (Per Spec Section 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
            The Studio Experience
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-light">
            A quiet sanctuary dedicated to focused healing, restorative relaxation, and unhurried clinical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_CONFIG.gallery.map((item, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-stone-100 relative">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-stone-800 px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="bg-stone-100/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
                Clinical & Restorative Treatments
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal mt-1">
                Featured Services
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-sm font-semibold text-sage-800 hover:text-sage-900 inline-flex items-center gap-1.5"
            >
              <span>View full service menu & details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_CONFIG.services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-between hover:border-sage-300 transition-colors"
              >
                <div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-sage-600" />
                      {service.duration} min
                    </span>
                    <span className="font-serif text-lg text-stone-900 font-medium">
                      ${service.price}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-normal text-stone-900 leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100">
                  <button
                    onClick={() => onOpenBooking(service.calSlug)}
                    className="w-full py-2.5 px-4 bg-sage-50 hover:bg-sage-700 hover:text-white text-sage-800 text-xs font-semibold rounded-lg transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Book {service.duration}m</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment-Only & Studio Schedule Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-sage-400 text-xs tracking-wider uppercase font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Solo Practice Protocol</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
              Ready for focused, unhurried bodywork?
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Because ML Massage Therapy is a solo clinical practice, all visits are reserved in advance online with a deposit. No unexpected walk-ins, no crowded waiting rooms—just your dedicated treatment time.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 bg-sage-600 hover:bg-sage-500 text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Appointment</span>
              </button>
              <Link
                to="/contact"
                className="text-stone-300 hover:text-white text-sm underline underline-offset-4"
              >
                View Map & Directions
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80 space-y-4 text-xs">
            <h3 className="font-serif text-lg text-white font-normal border-b border-stone-700 pb-2">
              Practice Hours & Access
            </h3>
            <div className="space-y-2 text-stone-300">
              <div className="flex justify-between py-1 border-b border-stone-700/50">
                <span>Monday, Thursday, Saturday:</span>
                <span className="text-sage-400 font-medium">9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-700/50">
                <span>Tuesday, Wednesday, Friday, Sunday:</span>
                <span className="text-stone-500">Closed</span>
              </div>
            </div>
            <div className="pt-2 text-stone-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
              <span>640 W 153rd St, Suite A4A, New York, NY 10031</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
