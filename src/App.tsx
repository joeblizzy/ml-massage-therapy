import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NoticeBanner } from './components/NoticeBanner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BookingContactPage } from './pages/BookingContactPage';

// Helper component to scroll to top on page change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBookingSlug, setSelectedBookingSlug] = useState<string | undefined>(undefined);

  const handleOpenBooking = (calSlug?: string) => {
    setSelectedBookingSlug(calSlug);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedBookingSlug(undefined);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800">
        {/* Top Notice Banner */}
        <NoticeBanner />

        {/* Header Navigation */}
        <Header onOpenBooking={handleOpenBooking} />

        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/contact"
              element={<BookingContactPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/book"
              element={<BookingContactPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="*"
              element={<HomePage onOpenBooking={handleOpenBooking} />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Global Booking Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
          serviceSlug={selectedBookingSlug}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
