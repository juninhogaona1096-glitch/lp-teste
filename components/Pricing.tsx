import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Plan Mensual",
      price: "19.99",
      period: "/mes",
      desc: "Probalo sin compromiso",
      features: ["Plan nutricional completo", "Chat ilimitado con AI", "Recetas personalizadas"],
      highlight: false
    },
    {
      name: "Plan Anual",
      price: "14.99",
      period: "/mes",
      desc: "¡Tu dieta más barata del año!",
      features: ["Todo lo del plan mensual", "Prioridad en soporte", "Lista de compras inteligente", "Ahorras un 25%"],
      highlight: true,
      tag: "Más Popular 🔥"
    },
    {
      name: "Plan Semestral",
      price: "17.99",
      period: "/mes",
      desc: "Ahorro garantizado",
      features: ["Plan nutricional completo", "Chat ilimitado con AI", "Ahorras un 10%"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          El plan que se adapta a tu vida
        </h2>
        <p className="text-gray-400 text-lg">
          Menos que una comida por fuera al mes 🍱
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className={`relative p-8 rounded-3xl border ${
              plan.highlight 
                ? 'bg-brand-card border-brand-primary/50 shadow-2xl shadow-brand-primary/10 z-10 scale-105' 
                : 'bg-brand-card/30 border-white/10 hover:border-white/20'
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-brand-dark font-bold px-4 py-1 rounded-full text-sm shadow-lg shadow-brand-primary/20">
                {plan.tag}
              </div>
            )}

            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-extrabold text-white">${plan.price}</span>
              <span className="text-gray-400 mb-1">USD</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">{plan.desc}</p>

            <div className="h-px w-full bg-white/10 mb-6"></div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <Check className={`w-4 h-4 ${plan.highlight ? 'text-brand-primary' : 'text-gray-500'}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-bold transition-all ${
                plan.highlight
                  ? 'bg-brand-primary text-brand-dark hover:bg-brand-accent hover:scale-[1.02]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Empezar Ahora
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};