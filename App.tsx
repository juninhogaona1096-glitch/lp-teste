import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Features } from './components/Features';
import { Audience } from './components/Audience';
import { Pricing } from './components/Pricing';
import { Results } from './components/Results';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-primary selection:text-brand-dark overflow-hidden">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-50"></div>
      
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Comparison />
        <Features />
        <Results />
        <Audience />
        <Pricing />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;