import React from 'react';
import { Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termo de Consentimento</a>
          </div>

          <div className="text-sm text-center border-t border-gray-800 pt-8 w-full">
            <p>&copy; {new Date().getFullYear()} BY BRIDA SERVICE. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
