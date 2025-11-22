import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Trophy, Moon, Smile } from 'lucide-react';

export const Results: React.FC = () => {
  const benefits = [
    {
      icon: <Battery className="w-8 h-8 text-yellow-400" />,
      title: "Más Energía",
      desc: "Olvídate de los bajones de sueño después de comer."
    },
    {
      icon: <Trophy className="w-8 h-8 text-brand-primary" />,
      title: "Bajas de Peso",
      desc: "Resultados visibles comiendo rico y real."
    },
    {
      icon: <Moon className="w-8 h-8 text-purple-400" />,
      title: "Duermes Mejor",
      desc: "La buena nutrición regula tu descanso nocturno."
    },
    {
      icon: <Smile className="w-8 h-8 text-pink-400" />,
      title: "Mejor Ánimo",
      desc: "Mejoras tu relación con la comida y motivación."
    }
  ];

  return (
    <section id="results" className="py-20 px-6 bg-brand-dark relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-card via-brand-dark to-brand-dark opacity-80"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Cambiá tu cuerpo en 30 días
        </motion.h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Comenzá hoy y sentí el cambio en tu primera semana. Paso a paso, pero cada paso cuenta.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="mb-4 p-4 bg-white/5 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};