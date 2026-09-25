import React from 'react';
import { BUSINESS_CONFIG } from '../config';
import { Phone, Clock, ShieldCheck } from 'lucide-react';

export const NoticeBanner: React.FC = () => {
  return (
    <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 tracking-wide border-b border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-sage-400 shrink-0" />
          <span>
            <strong className="text-white font-medium">Private Studio Practice:</strong> Strictly by appointment only • No walk-ins
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-stone-300">
          <div className="hidden md:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-sage-400" />
            <span>Mon, Thu, Sat: 9am – 5pm</span>
          </div>
          <a
            href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors underline decoration-stone-600 underline-offset-2"
          >
            <Phone className="w-3.5 h-3.5 text-sage-400" />
            <span>{BUSINESS_CONFIG.contact.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
