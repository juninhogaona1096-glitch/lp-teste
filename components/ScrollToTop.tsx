import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-brand-primary p-3 rounded-full shadow-lg shadow-brand-primary/30 text-brand-dark hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};