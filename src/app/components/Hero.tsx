import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden pt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#D64573]/5 rounded-bl-[100px] -z-0" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#006D77]/5 rounded-tr-[100px] -z-0" />
      
      <div className="container mx-auto px-4 z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Agende uma visita e criaremos um <span className="text-[#D64573]">plano personalizado</span> para sua empresa ou residência.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Conheça a melhor experiência em limpeza para você, sua família e seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-[#D64573] text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-[#b83660] transition-all hover:scale-105 shadow-xl shadow-pink-200"
          >
            Fale conosco!
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
