import React from 'react';
import { Brain, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Final CTA Box */}
        <div className="bg-gradient-to-r from-brand-primary to-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 text-center md:text-left shadow-2xl shadow-brand-primary/20">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">¿Listo para el cambio?</h2>
                <p className="text-blue-100">Iniciá tu cambio con Vita AI hoy mismo.</p>
            </div>
            <button className="bg-white text-brand-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap shadow-lg">
                👉 Quiero mi Nutricionista AHORA
            </button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-6 h-6 text-brand-primary" />
                    <span className="text-xl font-bold">Vita AI</span>
                </div>
                <p className="text-gray-400 text-sm max-w-sm">
                    Tu nutricionista inteligente que se adapta a tu vida, tus gustos y tu bolsillo. Sin complicaciones.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold mb-4">Producto</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-brand-primary">Cómo funciona</a></li>
                    <li><a href="#" className="hover:text-brand-primary">Precios</a></li>
                    <li><a href="#" className="hover:text-brand-primary">Testimonios</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-brand-primary">Privacidad</a></li>
                    <li><a href="#" className="hover:text-brand-primary">Términos</a></li>
                    <li><a href="#" className="hover:text-brand-primary">Contacto</a></li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© 2024 Vita AI. Todos los derechos reservados.</p>
            <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
            </div>
        </div>
      </div>
    </footer>
  );
};