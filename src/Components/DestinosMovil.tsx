import React from 'react';

type Destino = 'Santa Rosa' | 'General Pico';

interface Props {
  destinoActivo: string;
  setDestinoActivo: (destino: Destino) => void;
}

const DestinosMobile: React.FC<Props> = ({ destinoActivo, setDestinoActivo }) => {
  const destinos: Destino[] = ['Santa Rosa', 'General Pico'];

  return (
    /* Solo se muestra en móvil (hidden md:flex) */
    <div className="flex md:hidden w-full gap-4 px-4 my-6">
      {destinos.map((destino) => {
        const esActivo = destino === destinoActivo;
        return (
          <button
            key={destino}
            onClick={() => setDestinoActivo(destino)}
            className={`flex-1 py-3 rounded-2xl font-bold text-lg border-2 transition-all duration-300
              ${esActivo 
                ? 'bg-gradient-to-r from-[#24D6EA] to-[#0C9FAF] border-[#24D6EA] text-white shadow-lg' 
                : 'bg-white border-[#24D6EA] text-[#007bb1]'
              }`}
          >
            {destino === 'General Pico' ? 'Gral. Pico' : destino}
          </button>
        );
      })}
    </div>
  );
};

export default DestinosMobile;