import React from 'react';
import { UserCheck } from 'lucide-react';

export const Audience: React.FC = () => {
  const audienceList = [
    "No tienen tiempo para planificar",
    "No saben qué cocinar hoy",
    "Viven con agenda apretada",
    "Quieren ahorrar dinero en compras"
  ];

  return (
    <section className="py-20 px-6 bg-brand-card border-y border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Para quién es Vita AI?</h2>
            <p className="text-gray-400 text-lg mb-8">
                Diseñado para personas reales con vidas reales. Si querés cuidarte pero sentís que el sistema tradicional no se adapta a tu ritmo, esto es para vos.
            </p>
            <div className="grid grid-cols-1 gap-4">
                {audienceList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-200">
                        <div className="bg-brand-primary/20 p-1 rounded-full">
                             <UserCheck className="w-4 h-4 text-brand-primary" />
                        </div>
                        {item}
                    </div>
                ))}
            </div>
            <div className="mt-8 p-4 bg-brand-dark/50 rounded-lg border-l-4 border-brand-primary">
                <p className="font-semibold text-white italic">"Si este sos vos → Vita AI es tu solución."</p>
            </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/300/400?random=busy1" className="rounded-2xl opacity-80 hover:opacity-100 transition-opacity" alt="Busy person" />
            <img src="https://picsum.photos/300/400?random=busy2" className="rounded-2xl mt-8 opacity-80 hover:opacity-100 transition-opacity" alt="Cooking" />
        </div>
      </div>
    </section>
  );
};