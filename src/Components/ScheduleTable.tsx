import React from 'react';
import calendario from '../assets/calendario.svg'
import reloj from '../assets/reloj.svg'
import ubicacion from '../assets/destino.svg'
import { type Horario } from '../Data/horarios';

interface Props {
  titulo: string;
  horarios: Horario[];
}

export const ScheduleTable: React.FC<Props> = ({ titulo, horarios }) => {

  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="bg-[#003B5C] py-4">
        <h3 className="text-white text-center font-bold tracking-wider uppercase text-sm md:text-base px-4">
          {titulo}
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-auto text-left border-collapse table-fixed">
          {/* HEADER CON ICONOS CENTRADOS - Usamos w-fija para controlar el ancho */}
          <thead className="bg-[#005a8e]/75 text-white">
            <tr>
              {/* Columna Día: Ancho controlado */}
              <th className="p-4 border-r border-white/20 w-[20%] min-w-[90px]">
                <div className="flex justify-center items-center">
                  <img className="w-6 h-6 md:w-7 md:h-7 object-contain" src={calendario} alt='Dia'/>
                </div>
              </th>
              {/* Columna Hora: Ancho controlado */}
              <th className="p-4 border-r border-white/20 w-[25%] min-w-[110px]">
                <div className="flex justify-center items-center">
                  <img className="w-6 h-6 md:w-7 md:h-7 object-contain" src={reloj} alt='Horario' />
                </div>
              </th>
              {/* Columna Recorrido: El resto del ancho */}
              <th className="p-4">
                <div className="flex justify-center items-center">
                  <img className="w-6 h-6 md:w-7 md:h-7 object-contain" src={ubicacion} alt='Recorrido'/>
                </div>
              </th>
            </tr>
          </thead>
          
          <tbody className="text-[#003B5C]">
            {horarios.map((item, index) => (
              <tr 
                key={item.id} 
                className={`${
                  index % 2 === 0 ? 'bg-transparent' : 'bg-blue-50/5'
                } border-b border-gray-100 hover:bg-cyan-500/10 transition-colors`}
              >
                {/* DÍA: Agrandamos texto y quitamos italic */}
                <td className="p-4 font-bold text-base border-r border-gray-100/50 text-center">
                  {item.dia}
                </td>

                {/* HORA Y VILLA MIRASOL: Mantenemos el diseño limpio */}
                <td className="p-4 text-center border-r border-gray-100/50 relative">
                  <div className="flex flex-col items-center gap-2">
                    <span className="bg-[#EBF5FB] text-[#007bb1] px-3 py-2 rounded-xl font-black text-lg md:text-xl inline-block shadow-sm">
                      {item.hora}
                    </span>
                    
                    {/* Parada Intermedia: Usamos transparencia en el fondo */}
                    {titulo === "Colonia Barón ➔ General Pico" &&(
                      <div className="flex items-center gap-1.5 text-[#00A8C1] font-black text-xs bg-[#24D6EA]/10 w-fit px-2 py-1 rounded-lg border border-[#24D6EA]/20">
                        <span>07:15 {item.intermedio}</span>
                      </div>
                    )}
                  </div>
                </td>

                {/* RECORRIDO Y PARADAS: Aquí aplicamos el aumento de tamaño y flechas gruesas */}
                <td className="p-4">
                  <div className="text-sm md:text-base space-y-3">
                    {/* SECCIÓN SUBE (Verde) */}
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-black text-green-600 tracking-tighter leading-none mb-1">
                          Sube en
                        </span>
                        <p className="text-gray-700 font-bold leading-tight">
                          {item.ascenso}
                        </p>
                      </div>
                    </div>

                    {/* SECCIÓN BAJA (Rojo) */}
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-black text-red-500 tracking-tighter leading-none mb-1">
                          Baja en
                        </span>
                        <p className="text-gray-500 font-bold italic leading-tight">
                          {item.descenso}
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};