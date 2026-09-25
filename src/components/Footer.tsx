import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config';
import { MapPin, Phone, Star, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onOpenBooking?: (calSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white font-normal">
              ML Massage Therapy
            </h3>
            <p className="text-xs uppercase tracking-widest text-sage-400 font-medium">
              Wellness PC • Maria, LMT
            </p>
            <p className="text-sm text-stone-400 leading-relaxed">
              Dedicated solo practice offering unhurried, personalized therapeutic and clinical bodywork designed to alleviate pain, restore mobility, and rebalance the nervous system.
            </p>
            <div className="flex items-center gap-1.5 pt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-medium text-stone-200 ml-1">
                5.0 Stars (20 Google Reviews)
              </span>
            </div>
          </div>

          {/* Column 2: Hours & Practice Schedule */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Weekly Hours
            </h4>
            <ul className="text-sm space-y-2">
              {BUSINESS_CONFIG.hours.map((h) => (
                <li key={h.day} className="flex justify-between items-center py-0.5 border-b border-stone-800/60 text-xs">
                  <span className={h.isOpen ? "text-stone-300 font-medium" : "text-stone-500"}>
                    {h.day}
                  </span>
                  <span className={h.isOpen ? "text-sage-400 font-medium" : "text-stone-500"}>
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-stone-400 italic">
              *By advance appointment only. No walk-in appointments.
            </p>
          </div>

          {/* Column 3: Location & Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Studio Location
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage-400 shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">{BUSINESS_CONFIG.contact.address.street}</p>
                  <p>{BUSINESS_CONFIG.contact.address.city}, {BUSINESS_CONFIG.contact.address.state} {BUSINESS_CONFIG.contact.address.zip}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{BUSINESS_CONFIG.contact.address.neighborhood}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-sage-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                  className="hover:text-white transition-colors underline decoration-stone-600 underline-offset-4"
                >
                  {BUSINESS_CONFIG.contact.phone}
                </a>
              </div>

              <p className="text-xs text-stone-400 pt-1">
                {BUSINESS_CONFIG.contact.transit}
              </p>
            </div>
          </div>

          {/* Column 4: Booking Policies */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-sage-400" />
              <span>Studio Policies</span>
            </h4>
            <div className="bg-stone-800/60 p-4 rounded-xl border border-stone-700/60 space-y-2.5 text-xs text-stone-300">
              <p>
                <strong className="text-white">Cancellation Policy:</strong> Full refund if cancelled 24+ hours ahead. Deposits are forfeited within 24 hours or for no-shows.
              </p>
              <p>
                <strong className="text-white">Deposits:</strong> Collected securely via Stripe at the time of reservation.
              </p>
              <button
                onClick={() => onOpenBooking ? onOpenBooking() : window.open(BUSINESS_CONFIG.calCom.baseUrl, '_blank')}
                className="w-full mt-2 py-2 px-3 bg-sage-700 hover:bg-sage-600 text-white rounded-lg text-xs font-semibold tracking-wide transition-colors text-center"
              >
                Schedule Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} ML Massage Therapy Wellness PC. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-stone-300 transition-colors">Home</Link>
            <Link to="/services" className="hover:text-stone-300 transition-colors">Services</Link>
            <Link to="/about" className="hover:text-stone-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-stone-300 transition-colors">Location</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
