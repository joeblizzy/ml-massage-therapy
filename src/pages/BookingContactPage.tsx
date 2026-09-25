import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config';
import { MapPin, Phone, Clock, ShieldAlert, ExternalLink, Train, CheckCircle2 } from 'lucide-react';

interface BookingContactPageProps {
  onOpenBooking: (calSlug?: string) => void;
}

export const BookingContactPage: React.FC<BookingContactPageProps> = ({ onOpenBooking }) => {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>('');

  const currentBookingUrl = selectedServiceSlug
    ? `${BUSINESS_CONFIG.calCom.baseUrl}/${selectedServiceSlug}`
    : BUSINESS_CONFIG.calCom.baseUrl;

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-stone-100/70 border-b border-stone-200/80 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
            Location, Hours & Reservations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-stone-900 font-normal">
            Book Your Session & Visit Our Studio
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Located in Upper Manhattan. Private suite sessions by advance appointment only.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Booking Embed + Location Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Cal.com Interactive Booking Flow */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
              <div>
                <h2 className="font-serif text-2xl text-stone-900 font-normal">
                  Reserve Online via Cal.com
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Select a service below or choose an available time on the calendar
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(selectedServiceSlug || undefined)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 transition-colors"
                >
                  <span>Focus View</span>
                </button>
                <a
                  href={currentBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-700 hover:text-sage-800 bg-sage-50 px-3 py-1.5 rounded-lg border border-sage-200 transition-colors"
                >
                  <span>Open in Cal.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service Filter Tabs */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                Filter by Service Event Type:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedServiceSlug('')}
                  className={`text-left p-3 rounded-xl border text-xs transition-all ${
                    selectedServiceSlug === ''
                      ? 'border-sage-600 bg-sage-50 text-sage-900 font-semibold shadow-xs'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="font-medium">All Available Services</div>
                  <div className="text-[11px] text-stone-500">View complete calendar</div>
                </button>

                {BUSINESS_CONFIG.services.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedServiceSlug(srv.calSlug)}
                    className={`text-left p-3 rounded-xl border text-xs transition-all ${
                      selectedServiceSlug === srv.calSlug
                        ? 'border-sage-600 bg-sage-50 text-sage-900 font-semibold shadow-xs'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium truncate mr-1">{srv.name}</span>
                      <span className="font-serif text-stone-900 font-semibold">${srv.price}</span>
                    </div>
                    <div className="text-[11px] text-stone-500">{srv.duration} mins • +{srv.bufferAfter}m buffer</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Embedded Calendar Container */}
            <div className="w-full bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden min-h-[580px] relative">
              <iframe
                key={currentBookingUrl}
                src={currentBookingUrl}
                title="Cal.com Booking Embed"
                className="w-full h-[620px] border-0"
                allow="camera; microphone; autoplay; payment"
              />
            </div>

            {/* Policies Note */}
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-stone-800">Booking & Cancellation Summary</p>
                <p className="mt-0.5">
                  Deposit required at booking via Stripe. Cancellations with at least 24 hours notice receive a full refund. Cancellations made less than 24 hours in advance forfeit the deposit.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Studio Location, Transit & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location & Access Card */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-5">
              <h3 className="font-serif text-2xl text-stone-900 font-normal">
                Studio Location
              </h3>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-medium">
                      ML Massage Therapy Wellness PC
                    </strong>
                    <p>{BUSINESS_CONFIG.contact.address.street}</p>
                    <p>{BUSINESS_CONFIG.contact.address.city}, {BUSINESS_CONFIG.contact.address.state} {BUSINESS_CONFIG.contact.address.zip}</p>
                    <p className="text-xs text-stone-500 mt-1">
                      {BUSINESS_CONFIG.contact.address.neighborhood}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
                  <Train className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-medium text-xs uppercase tracking-wider">
                      Subway & Transit
                    </strong>
                    <p className="text-xs text-stone-600 mt-0.5">
                      {BUSINESS_CONFIG.contact.transit}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-stone-100">
                  <Phone className="w-5 h-5 text-sage-600 shrink-0" />
                  <div>
                    <span className="text-xs text-stone-500 block">Phone Inquiries:</span>
                    <a
                      href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                      className="font-medium text-stone-900 hover:text-sage-700 transition-colors underline decoration-stone-300 underline-offset-4"
                    >
                      {BUSINESS_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-sage-50/80 p-3.5 rounded-xl border border-sage-200 text-xs text-sage-900">
                  <strong>Arrival Instructions:</strong> {BUSINESS_CONFIG.contact.address.notes}
                </div>
              </div>
            </div>

            {/* Schedule & Hours Card */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-sage-600" />
                <h3 className="font-serif text-2xl text-stone-900 font-normal">
                  Practice Hours
                </h3>
              </div>

              <div className="space-y-2.5 pt-2">
                {BUSINESS_CONFIG.hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center text-sm py-1.5 border-b border-stone-100 last:border-b-0"
                  >
                    <span className={item.isOpen ? "font-medium text-stone-800" : "text-stone-400"}>
                      {item.day}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        item.isOpen
                          ? "bg-sage-100 text-sage-800 font-semibold"
                          : "bg-stone-100 text-stone-500 font-normal"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 text-xs text-stone-500 space-y-1">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0" />
                  <span>Strictly appointment only • No walk-ins</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0" />
                  <span>24-hour advance booking notice</span>
                </p>
              </div>
            </div>

            {/* Solo Practice Assurance */}
            <div className="bg-stone-900 text-white rounded-3xl p-6 shadow-md space-y-3 text-xs">
              <h4 className="font-serif text-lg text-white font-normal">
                Direct Solo Practitioner Communication
              </h4>
              <p className="text-stone-300 font-light leading-relaxed">
                When you schedule or leave a message, you communicate directly with Maria. There is no call center or front-desk intermediary.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sage-400" />
                  <span>Call Maria: {BUSINESS_CONFIG.contact.phone}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
