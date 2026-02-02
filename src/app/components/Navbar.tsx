import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '@/assets/14ffadee4df1564845016a86b7dfc9585431c54e.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <img src={logo} alt="Brida Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#D64573] font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-[#D64573] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#b83660] transition-colors shadow-lg shadow-pink-200"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-medium py-2 border-b border-gray-50 hover:text-[#D64573]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#D64573] text-white px-5 py-3 rounded-lg font-semibold text-center mt-2"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
