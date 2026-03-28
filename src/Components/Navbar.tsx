import React from 'react';
import logo from '../assets/Logo.svg';
import whatsapp from '../assets/whatsapp.svg';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = ['Historia', 'Horarios', 'Contacto'];
  const buttonClass = "flex items-center gap-3 bg-white text-[#007bb1] px-10 py-3 rounded-full font-bold shadow-md hover:bg-cyan-50 transition-all text-lg hover:scale-101"

  return (
    <nav className="w-full shadow-xl flex flex-col items-center
      /* PARCHE MÓVIL: bg-[#125287] es el color de respaldo si falla el degradado */
      bg-[#125287] bg-gradient-to-b from-[#125287] via-[#65A9CC] to-[#24D6EA] py-2 gap-0 min-h-fit
      
      /* PARCHE ESCRITORIO: md:bg-[#125287] respaldo y 'block' para asegurar el renderizado */
      md:flex-row md:h-20 md:bg-[#125287] md:bg-gradient-to-r md:from-[#125287] md:via-[#65A9CC] md:to-[#0C9FAF] md:py-0 md:px-6 md:justify-between display-block"
    >
      
      {/* 1. LOGO: Agregamos block y min-h para que Safari no lo colapse */}
      <div className="w-full flex justify-center items-center md:w-auto md:justify-start min-h-[90px] md:min-h-0">
        <img 
          src={logo} 
          alt="Logo ServiBus" 
          /* MÓVIL: Usamos block para que Safari WebKit lo trate como elemento sólido */
          className="w-[85%] max-w-[320px] h-auto md:w-auto md:h-20 block" 
        />
      </div>

      {/* 2. MENÚ DE NAVEGACIÓN */}
      <ul className="flex justify-center items-center gap-6 md:gap-12 font-medium text-base md:text-xl text-[#024A70]">
        {menuItems.map((item) => (
          <li 
            key={item}
            onClick={() => setActiveTab(item)}
            className={`cursor-pointer transition-all pb-1 border-b-2 ${
              activeTab === item ? 'border-[#024A70] text-white' : 'border-transparent hover:border-cyan-200'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* 3. BOTÓN DE ACCIÓN (Escritorio) */}
      <div className="hidden md:block">
        <a 
          href="https://wa.me/5492954693433" 
          target="_blank" 
          rel="noreferrer"
          className={buttonClass}
        >
          <img src={whatsapp} alt="WhatsApp" className="w-10 h-10" />
          Reservar Pasaje
        </a>
      </div>
    </nav>
  );
};

export default Navbar;