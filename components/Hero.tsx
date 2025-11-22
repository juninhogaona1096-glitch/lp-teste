import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Brain } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Nutrición del Futuro
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Tu nuevo
            </span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">
              Nutricionista Inteligente
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
          >
            Come rico. Pierde peso. Vive con energía. Sin dietas estrictas ni pasar hambre.
            La inteligencia artificial que diseña tu plan perfecto en segundos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#pricing"
              className="group relative px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-full text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Quiero mi Nutricionista AHORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white underline-offset-4">
              ¿Cómo funciona?
            </a>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="flex-1 relative w-full max-w-lg md:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
             {/* Simulated App Interface Card */}
            <div className="relative bg-brand-card border border-white/10 rounded-2xl p-6 shadow-2xl shadow-brand-primary/10 animate-float">
               {/* Chat Bubble 1 */}
               <div className="flex items-start gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
                    <img src="https://picsum.photos/100/100?random=1" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-gray-800 p-4 rounded-2xl rounded-tl-none text-sm text-gray-300">
                    Quiero cenar algo rico, tengo pollo y palta. ¡Y que sea bajo en carbos!
                  </div>
               </div>

               {/* Chat Bubble 2 (AI) */}
               <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-brand-primary/10 border border-brand-primary/20 p-4 rounded-2xl rounded-tr-none text-sm text-white">
                    <p className="mb-2 font-bold text-brand-primary">¡Hecho! Aquí tienes:</p>
                    <div className="flex gap-3 items-center mb-2">
                      <img src="https://picsum.photos/200/200?random=food" alt="Salad" className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <p className="font-semibold">Ensalada Keto de Pollo</p>
                        <p className="text-xs text-gray-400">15 min • 350 kcal</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                      <div className="bg-brand-primary h-full w-3/4"></div>
                    </div>
                    <p className="text-xs text-brand-primary mt-1 text-right">Perfecto para tu meta</p>
                  </div>
               </div>
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-brand-primary to-purple-500 opacity-20 blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};