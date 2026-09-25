import React, { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config';
import { X, ExternalLink, ShieldCheck, Clock, AlertCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceSlug?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  serviceSlug,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentService = serviceSlug
    ? BUSINESS_CONFIG.services.find((s) => s.calSlug === serviceSlug)
    : null;

  const bookingUrl = serviceSlug
    ? `${BUSINESS_CONFIG.calCom.baseUrl}/${serviceSlug}`
    : BUSINESS_CONFIG.calCom.baseUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-stone-50 border-b border-stone-200">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
              {currentService ? currentService.name : 'Schedule Your Appointment'}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Solo practice with Maria Lara, LMT • Private Treatment Suite
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              title="Open Cal.com in a new window"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Policy & Preparation Banner (Per Spec Section 5 & 6) */}
        <div className="bg-sage-50/80 px-6 py-3 border-b border-sage-100 text-xs text-sage-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sage-600 shrink-0" />
            <span>
              <strong>Cancellation Policy:</strong> Full refund if cancelled 24+ hours ahead. Deposit forfeited if cancelled under 24 hours.
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sage-700 font-medium whitespace-nowrap">
            <Clock className="w-3.5 h-3.5" />
            <span>24h min advance notice</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-stone-50/30">
          {currentService && (
            <div className="mb-4 bg-white p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-stone-900">{currentService.name}</span>
                  <span className="text-xs bg-sage-100 text-sage-800 px-2.5 py-0.5 rounded-full font-medium">
                    {currentService.duration} minutes
                  </span>
                </div>
                <p className="text-xs text-stone-600 mt-1">{currentService.shortDescription}</p>
              </div>
              <div className="text-right">
                <span className="font-serif text-2xl font-normal text-stone-900">${currentService.price}</span>
                <span className="block text-[11px] text-stone-500">Deposit at booking</span>
              </div>
            </div>
          )}

          {/* Cal.com Embed Container */}
          <div className="w-full bg-white rounded-xl border border-stone-200 overflow-hidden shadow-inner min-h-[460px] relative">
            <iframe
              src={bookingUrl}
              title="Cal.com Booking Flow"
              className="w-full h-[520px] border-0"
              allow="camera; microphone; autoplay; payment"
            />
          </div>

          {/* Quick instructions for client */}
          <div className="mt-4 p-3 bg-stone-100/80 rounded-lg text-xs text-stone-600 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-stone-700">What to expect during booking:</p>
              <p className="mt-0.5">
                You will select your preferred date/time, provide your contact details, note any current pain areas or health considerations, and securely confirm your deposit via Stripe.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3 bg-stone-100/70 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>ML Massage Therapy Wellness PC • 640 W 153rd St, Suite A4A</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
