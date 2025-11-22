import React from 'react';
import { ChefHat, ShoppingCart, Clock, Activity, DollarSign, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <ChefHat className="w-6 h-6 text-blue-400" />,
      title: "Preparación paso a paso",
      desc: "Instrucciones claras, imposibles de fallar."
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-purple-400" />,
      title: "Lista de compras",
      desc: "Generada automáticamente para que no olvides nada."
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: "Tiempo real",
      desc: "Sabes exactamente cuánto tardarás en cocinar."
    },
    {
      icon: <Activity className="w-6 h-6 text-brand-primary" />,
      title: "Macros calculados",
      desc: "Proteínas, carbos y grasas bajo control."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: "Ahorro inteligente",
      desc: "Opciones económicas con lo que tienes en casa."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Phone/Interface Mockup */}
        <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full"></div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 bg-brand-card border border-white/10 rounded-[2.5rem] p-6 md:p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-xl">Receta Generada</h3>
                    <span className="text-xs bg-brand-primary/20 text-brand-primary px-2 py-1 rounded">Match 98%</span>
                </div>
                
                <img 
                    src="https://picsum.photos/800/600?food=healthy" 
                    alt="Healthy Food" 
                    className="w-full h-48 object-cover rounded-2xl mb-6" 
                />
                
                <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-gray-400" />
                            <span className="text-sm text-gray-300">20 min</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Activity className="w-5 h-5 text-brand-primary" />
                            <span className="text-sm text-gray-300">450 Kcal</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Ingredientes principales</p>
                        <div className="flex flex-wrap gap-2">
                            {['Pollo', 'Quinoa', 'Palta', 'Limón'].map(tag => (
                                <span key={tag} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <button className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-xl hover:bg-brand-accent transition-colors">
                        Ver Paso a Paso
                    </button>
                </div>
            </motion.div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Recetas inteligentes que te hacen <span className="text-brand-primary">avanzar</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10">
                    Personalizadas según tu objetivo (bajar de peso, tonificar), tus comidas favoritas y, lo más importante, los ingredientes que ya tienes.
                </p>
            </motion.div>

            <div className="space-y-6">
                {features.map((feature, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 bg-brand-card/50 p-4 rounded-xl border border-white/5 hover:border-brand-primary/30 transition-colors"
                    >
                        <div className="p-3 bg-brand-dark rounded-lg border border-white/5">
                            {feature.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-white">{feature.title}</h4>
                            <p className="text-sm text-gray-400">{feature.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-10 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-start gap-3">
                <MessageCircle className="w-6 h-6 text-blue-400 mt-1" />
                <p className="text-sm text-blue-100">
                    Todo sucede por chat. Sin apps complicadas. Si sabes usar WhatsApp, sabes usar Vita AI.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};