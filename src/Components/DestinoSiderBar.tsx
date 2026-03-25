import React from 'react'

// Definimos qué destinos existen en el sistema
type Destino = 'Santa Rosa' | 'General Pico';

interface Props {
  destinoActivo: string;
  setDestinoActivo: (destino: Destino) => void;
}

const DestinosSidebar: React.FC<Props> = ({ destinoActivo, setDestinoActivo }) => {
  const destinos: Destino[] = ['General Pico', 'Santa Rosa'];

  return (
    <aside className="hidden md:flex flex-col w-72 bg-white rounded-3xl shadow-lg overflow-hidden h-fit border border-gray-100">
      
      {/* TÍTULO CON ICONO */}
      <div className="flex items-center gap-3 p-6 border-b border-gray-100">
        <div className="text-gray-700">
          {/* Icono de Ruta/Mapa (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route">
            <circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#003B5C]">Destinos</h2>
      </div>

      {/* LISTA DE BOTONES */}
      <div className="flex flex-col">
        {destinos.map((destino) => {
          const esActivo = destino === destinoActivo;
          return (
            <button
              key={destino}
              onClick={() => setDestinoActivo(destino)}
              className={`
                py-6 px-8 text-left text-xl transition-all duration-300
                ${esActivo 
                  ? 'bg-gradient-to-r from-[#125287] to-[#24D6EA] text-white font-bold shadow-inner' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 font-medium'
                }
              `}
            >
              {destino}
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default DestinosSidebar;

