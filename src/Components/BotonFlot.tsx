import { useState, useEffect } from 'react';
import logo from '../assets/whatssapWhite.svg';

export const BotonFlot = () => {
  const [esFinal, setEsFinal] = useState(false);

  useEffect(() => {
    const controlarScroll = () => {
      // Detectamos la posición del usuario
      const scrollActual = window.innerHeight + window.scrollY;
      const alturaTotal = document.documentElement.scrollHeight;

      // Si el usuario está a menos de 60px del final de la página
      if (scrollActual >= alturaTotal - 10) {
        setEsFinal(true);
      } else {
        setEsFinal(false);
      }
    };

    window.addEventListener('scroll', controlarScroll);
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  return (
    <div 
      className={`md:hidden fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        esFinal 
          ? 'opacity-20 pointer-events-none scale-90' 
          : 'opacity-100 scale-100'
      }`}
    >
      <a
        href="https://wa.me/5492954693433"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center 
               h-20 w-20 rounded-full 
               bg-gradient-to-br from-[#125287] via-[#65A9CC] to-[#24D6EA] 
               text-white shadow-2xl -mb-1
               transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <img src={logo} alt="WhatsApp" className="w-[80%]" />
      </a>
    </div>
  );
};
