import React from 'react';
import { UserCheck, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: UserCheck,
    title: 'Personalização',
    description: 'Um de nossos profissionais irá até você para entender bem suas necessidades e apresentar a melhor solução.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança',
    description: 'Com nossos serviços você terá certeza de que será atendido. Sem mais faltas ou preocupações.',
  },
  {
    icon: TrendingUp,
    title: 'Produtividade',
    description: 'Ganhe mais focando no sua atividade principal enquanto a Brida administra a limpeza.',
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-[#D64573] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
