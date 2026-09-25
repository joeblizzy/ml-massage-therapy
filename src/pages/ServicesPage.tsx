import React from 'react';
import { BUSINESS_CONFIG } from '../config';
import { Clock, Calendar, Check, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (calSlug?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-stone-100/70 border-b border-stone-200/80 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
            Individualized Clinical Bodywork
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-900 font-normal">
            Services & Transparent Pricing
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Individualized clinical and restorative treatments designed to alleviate tension, restore mobility, and promote lasting relief.
          </p>
        </div>
      </section>

      {/* Services List Section (One entry per service per Spec Section 1 & 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {BUSINESS_CONFIG.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden hover:border-sage-300 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                
                {/* Image per service slot (Real photo upload placeholder) */}
                <div className="lg:col-span-4 relative bg-stone-100 min-h-[240px] lg:min-h-full">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sage-400" />
                    <span>{service.duration} Minutes</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="lg:col-span-8 p-6 lg:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Top Row: Title & Price */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-stone-100">
                      <div>
                        {service.id === 'initial-consultation' && (
                          <div className="mb-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sage-100 text-sage-800 text-[11px] font-semibold">
                              <Sparkles className="w-3 h-3" /> Recommended for New Clients
                            </span>
                          </div>
                        )}
                        <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                          {service.name}
                        </h2>
                      </div>

                      <div className="text-left sm:text-right">
                        <div className="font-serif text-3xl font-medium text-stone-900">
                          ${service.price}
                        </div>
                        <span className="text-xs text-stone-500 block">
                          Deposit required at booking
                        </span>
                      </div>
                    </div>

                    {/* Descriptions */}
                    <div className="pt-4 space-y-3">
                      <p className="text-base text-stone-800 font-normal leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <p className="text-sm text-stone-600 font-light leading-relaxed">
                        {service.fullDescription}
                      </p>
                    </div>

                    {/* Best Suited For Tag */}
                    <div className="mt-5 text-xs bg-stone-50 p-3.5 rounded-xl border border-stone-200/80 flex flex-col sm:flex-row sm:items-center gap-1.5">
                      <span className="text-stone-500 font-medium">Best Suited For:</span>
                      <span className="text-stone-800 font-medium">{service.bestFor}</span>
                    </div>
                  </div>

                  {/* Booking CTA per Service */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-xs text-stone-500 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-sage-600 shrink-0" />
                      <span>Direct 1-on-1 session with Maria Lara, LMT</span>
                    </div>

                    <button
                      onClick={() => onOpenBooking(service.calSlug)}
                      className="px-6 py-3 rounded-xl bg-sage-700 hover:bg-sage-800 text-white font-medium text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book This Service ({service.duration} min)</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment & Cancellation Policies (Per Spec Section 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-sage-400 text-xs tracking-wider uppercase font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Section 6 • Payment & Cancellation Terms</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
              Transparent Booking & Cancellation Policy
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-2 font-light">
              As a solo clinical practice, our schedule is reserved exclusively for you. Please review our policies prior to booking:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700/80 space-y-2">
              <h3 className="font-serif text-lg text-white font-medium">1. Secure Stripe Deposits</h3>
              <p className="text-stone-300 font-light leading-relaxed">
                A deposit is collected via Stripe at the time of scheduling in Cal.com to confirm and lock in your appointment time.
              </p>
            </div>

            <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700/80 space-y-2">
              <h3 className="font-serif text-lg text-white font-medium">2. 24-Hour Cancellation Policy</h3>
              <p className="text-stone-300 font-light leading-relaxed">
                Full refund provided if cancelled 24+ hours ahead. Deposits are forfeited if cancelled within 24 hours of the appointment or in the event of a no-show.
              </p>
            </div>

            <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700/80 space-y-2">
              <h3 className="font-serif text-lg text-white font-medium">3. Appointment Only</h3>
              <p className="text-stone-300 font-light leading-relaxed">
                We do not accept walk-ins. Bookings may be made 24 hours to 60 days in advance via our online calendar.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 flex items-center gap-2 text-xs text-stone-400">
            <AlertCircle className="w-4 h-4 text-sage-400 shrink-0" />
            <span>
              These policies are stated directly in your Cal.com booking confirmation for full transparency.
            </span>
          </div>
        </div>
      </section>

      {/* Custom Intake Questions Notice (Per Spec Section 5) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-50/90 rounded-2xl p-6 sm:p-8 border border-sage-200">
          <h3 className="font-serif text-2xl text-sage-950 font-normal">
            Streamlined Intake Built Into Booking
          </h3>
          <p className="text-xs sm:text-sm text-sage-900 mt-2 font-light leading-relaxed">
            No cumbersome clipboards or multi-page waiting room packets. When reserving your time on Cal.com, you will answer a brief 6 to 8 question clinical intake:
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-sage-800">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-sage-600 shrink-0" />
              <span>Prior massage history with ML Massage</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-sage-600 shrink-0" />
              <span>Active pain points, injuries, or tension</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-sage-600 shrink-0" />
              <span>Relevant medical conditions / considerations</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-sage-600 shrink-0" />
              <span>Optional SMS reminder preferences</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
