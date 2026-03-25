import { useState } from 'react';
import { ScheduleTable } from '../Components/ScheduleTable'; 
import { datosHorarios } from '../Data/horarios'; 
import DestinosSiderBar from '../Components/DestinoSiderBar';

export const SchedulePage = () => {
  const [destino, setDestino] = useState<'Santa Rosa' | 'General Pico'>('Santa Rosa');

  return (
    <main className="max-w-7xl mx-auto p-4 md:p-10 flex flex-col lg:flex-row gap-8">
      
      {/* SIDEBAR: Solo se ve en Desktop (ya tiene el 'hidden md:flex') */}
      <DestinosSiderBar 
        destinoActivo={destino} 
        setDestinoActivo={setDestino} 
      />
      
      <div className="flex-1">
        <h2 className="text-3xl font-semibold text-[#003B5C] mb-8 border-b-2 border-[#24D6EA] w-fit pb-2">
          Horarios: <span className="text-[#00A8C1]">{destino}</span>
        </h2>

        {/* CONTENEDOR DE TABLAS: Una al lado de la otra en pantallas grandes */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          
          {/* TABLA 1: Ida */}
          <ScheduleTable 
            titulo={`Colonia Barón ➔ ${destino}`} 
            horarios={datosHorarios[destino].ida} 
          />
          
          {/* TABLA 2: Vuelta */}
          <ScheduleTable 
            titulo={`${destino} ➔ Colonia Barón`} 
            horarios={datosHorarios[destino].vuelta} 
          />
          
        </div>
      </div>
    </main>
  );
};