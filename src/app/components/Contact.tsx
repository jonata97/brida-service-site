import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-50/50 rounded-[3rem] p-12 md:p-16 border border-blue-100"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Agende uma conversa.</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Conte-nos um pouco mais das suas necessidades pelo WhatsApp e em menos de 24 horas lhe daremos retorno com opções para atendê-lo.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5551992446647"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D64573] text-white text-lg font-bold px-10 py-4 rounded-full shadow-xl shadow-pink-200 hover:bg-[#b83660] transition-colors mb-12"
          >
            <MessageCircle size={24} />
            Agende uma conversa
          </motion.a>

          <div className="grid md:grid-cols-3 gap-8 text-center border-t border-gray-200 pt-10">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white rounded-full text-[#006D77] shadow-sm">
                <MapPin size={20} />
              </div>
              <p className="text-gray-600 text-sm">
                R. Açores, 79 - Sala 201 <br />
                Passo d'Areia, Porto Alegre - RS <br />
                91030-440
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white rounded-full text-[#006D77] shadow-sm">
                <Mail size={20} />
              </div>
              <a href="mailto:bridaservice@gmail.com.br" className="text-gray-600 hover:text-[#D64573] transition-colors">
                bridaservice@gmail.com.br
              </a>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white rounded-full text-[#006D77] shadow-sm">
                <Phone size={20} />
              </div>
              <div className="flex flex-col text-gray-600">
                <a href="tel:+5551992446647" className="hover:text-[#D64573] transition-colors">51 99244-6647</a>
                <a href="tel:+555132094717" className="hover:text-[#D64573] transition-colors">51 3209-4717</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
