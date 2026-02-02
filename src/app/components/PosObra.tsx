import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const PosObra = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-[#006D77] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1762810951632-68c9f197cf33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                alt="Ambiente limpo pós obra" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Sparkles className="text-[#D64573]" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold">Pós-obra</h2>
                </div>
                
                <p className="text-lg text-blue-50 leading-relaxed mb-8">
                  Deixamos o ambiente pós-obra completamente limpo e higienizado, pronto para ser utilizado assim que deixamos o local. Removemos toda a sujeira pesada, poeira fina e resíduos para que você possa aproveitar seu novo espaço imediatamente.
                </p>
                
                <ul className="space-y-3">
                  {['Remoção de resíduos', 'Limpeza fina detalhada', 'Higienização completa'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-blue-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D64573]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
