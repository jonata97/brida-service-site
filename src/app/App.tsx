import React from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Features } from '@/app/components/Features';
import { Services } from '@/app/components/Services';
import { PosObra } from '@/app/components/PosObra';
import { Advantages } from '@/app/components/Advantages';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#D64573] selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <PosObra />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
