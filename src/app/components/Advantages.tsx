import React from 'react';
import { motion } from 'motion/react';
import { Smile, Wallet, Clock } from 'lucide-react';

const advantages = [
  {
    icon: Smile,
    title: 'Sem preocupações',
    description: 'Ao contratar um serviço terceirizado, processos que geram muito tempo e preocupações passam a ser responsabilidade da empresa de terceirização; exemplos disso são os processos seletivos dos funcionários e a preocupação com seus benefícios, treinamento e condições de trabalho.',
  },
  {
    icon: Wallet,
    title: 'Sem custos extras',
    description: 'Com a terceirização todo o custo é fixado no contrato, tornando o planejamento eficiente do fluxo de caixa e das responsabilidades tributárias possível a partir do momento em que os custos são pré-fixados.',
  },
  {
    icon: Clock, // Represents efficiency/agility in replacement
    title: 'Fim dos imprevistos',
    description: 'Nós contamos com um sistema de substituição ágil e funcional que garante que você não terá problemas com faltas, licenças, férias e demissão. Suprindo assim a necessidade de substituição assim que ela aparece.',
  },
];

export const Advantages = () => {
  return (
    <section id="vantagens" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Vantagens da terceirização
          </motion.h2>
          <div className="h-1.5 w-24 bg-[#D64573] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#006D77] mb-6">
                <adv.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{adv.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
