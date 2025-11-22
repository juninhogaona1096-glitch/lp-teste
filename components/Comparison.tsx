import React from 'react';
import { X, Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Comparison: React.FC = () => {
  const problems = [
    "Preguntarte qué comer todos los días",
    "Recetas difíciles o ingredientes caros",
    "Dietas restrictivas que te frustran",
    "Gastar horas buscando opciones saludables"
  ];

  const solutions = [
    "Vita AI analiza tus gustos y presupuesto",
    "Recetas generadas al instante",
    "Personalizado a tus ingredientes",
    "Lográs tu objetivo de forma simple"
  ];

  return (
    <section id="comparison" className="py-20 px-6 relative bg-brand-card/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Olvídate de lo complicado
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            La mayoría de las dietas fallan porque son difíciles de mantener. Vita AI cambia las reglas del juego.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* The Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark/50 border border-red-500/20 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <X className="w-32 h-32 text-red-500" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/10 rounded-full">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Ya no más:</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Vita AI Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary/5 border border-brand-primary/20 rounded-3xl p-8 relative overflow-hidden shadow-lg shadow-brand-primary/5"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Check className="w-32 h-32 text-brand-primary" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-primary/10 rounded-full">
                <Check className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Con Vita AI:</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white">
                  <div className="bg-brand-primary rounded-full p-0.5 mt-0.5">
                    <Check className="w-3 h-3 text-brand-dark" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};