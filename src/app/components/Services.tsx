import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[#D64573] uppercase mb-2">Sobre Nós</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">O que fazemos? <br/><span className="text-gray-500 font-light">Entenda como funciona</span></h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Temos aqui a solução que você precisa para serviços de higienização, eventos, portaria e recepção. Nosso compromisso é manter a qualidade que você deseja, sempre visando o bem-estar e a tranquilidade que você merece.
              </p>
              <p>
                Oferecemos um serviço personalizado que se encaixa perfeitamente nas suas necessidades: você entra em contato conosco, marca um horário, analisamos sua necessidade e criamos uma solução personalizada para seu negócio ou residência.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1583955746149-71a61419d759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                alt="Detalhes de limpeza" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="text-[#006D77] font-semibold italic">"Atendemos também pós-obra com excelência."</p>
            </div>
          </motion.div>
        </div>

        {/* Services Cards */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Nossos Serviços</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579141132886-e86d831034ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                alt="Equipe de limpeza profissional" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Terceirização</h3>
              <p className="text-sm text-[#D64573] font-semibold mb-4 uppercase tracking-wide">Nosso carro chefe</p>
              <p className="text-gray-600 mb-6 flex-grow">
                Nós buscamos entender suas necessidades e oferecemos uma solução personalizada. Neste modelo de atendimento a Brida fica responsável por realizar seleção, treinamento e gerencia do pessoal e recursos contratados.
              </p>
              <a href="#vantagens" className="inline-flex items-center text-[#006D77] font-semibold hover:text-[#D64573] transition-colors">
                Conheça as vantagens <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                alt="Seleção e Recrutamento" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Seleção e recrutamento</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Escolhemos profissionais de qualidade e que melhor se adequarem as suas necessidades. Garantimos um processo seletivo rigoroso para encontrar o talento ideal para sua empresa.
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto">
                <CheckCircle2 size={16} className="text-[#D64573]" />
                <span>Profissionais qualificados</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
