import React from 'react';
import calendario from '../assets/calendario.svg'
import reloj from '../assets/Reloj.svg'
import destino from '../assets/Destino.svg'
import { type Horario } from '../Data/horarios';

interface Props {
  titulo: string;
  horarios: Horario[];
}

export const ScheduleTable: React.FC<Props> = ({ titulo, horarios }) => {
  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="bg-[#003B5C] py-4">
        <h3 className="text-white text-center font-bold tracking-wider uppercase text-sm md:text-base">
          {titulo}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* HEADER CON ICONOS CENTRADOS */}
          <thead className="bg-[#005a8e]/75 text-white">
            <tr>
              {/* Usamos flex y justify-center para centrar las imágenes */}
              <th className="p-4 border-r border-white/20">
                <div className="flex justify-center items-center">
                  <img className="w-6 h-6 md:w-8 md:h-8 object-contain" src={calendario} alt='Dia'/>
                </div>
              </th>
              <th className="p-4 border-r border-white/20">
                <div className="flex justify-center items-center">
                  <img className="w-6 h-6 md:w-8 md:h-8 object-contain" src={reloj} alt='Horario' />
                </div>
              </th>
              <th className="p-4">
                <div className="flex justify-center items-center">
                  <img className="w-6 h-6 md:w-8 md:h-8 object-contain" src={destino} alt='Destino'/>
                </div>
              </th>
            </tr>
          </thead>
          
          {/* ... (el resto del tbody se mantiene igual) */}
          <tbody className="text-[#003B5C]">
            {horarios.map((item, index) => (
              <tr 
                key={item.id} 
                className={`${
                  index % 2 === 0 ? 'bg-transparent' : 'bg-[#00D7F8]/5'
                } border-b border-gray-100 hover:bg-cyan-500/10 transition-colors`}
              >
                {/* DÍA CENTRADO (Opcional, si querés que combine con el icono) */}
                <td className="p-4 font-bold text-base border-r border-gray-100/50 text-center">
                  {item.dia}
                </td>

                <td className="p-4 text-center border-r border-gray-100/50">
                  <span className="bg-[#EBF5FB] text-[#007bb1] px-3 py-2 rounded-xl font-black text-lg md:text-xl inline-block shadow-sm">
                    {item.hora}
                  </span>
                </td>

                <td className="p-4">
                  {/* ... contenido de paradas ... */}
                  <div className="flex flex-col gap-2">
                    {item.intermedio && (
                      <div className="flex items-center gap-1.5 text-[#00A8C1] font-black text-sm bg-[#24D6EA]/10 w-fit px-3 py-1 rounded-lg border border-[#24D6EA]/20">
                        <span>📍 {item.intermedio}</span>
                      </div>
                    )}
                    
                    <div className="text-sm md:text-base space-y-2">
                      <p className="leading-tight flex items-start gap-2">
                        <span className="text-green-600 font-black text-xl leading-none">↑</span> 
                        <span className="font-medium">{item.ascenso}</span>
                      </p>
                      <p className="text-gray-500 italic leading-tight flex items-start gap-2">
                        <span className="text-red-500 font-black text-xl leading-none">↓</span> 
                        <span className="font-medium">{item.descenso}</span>
                      </p>
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