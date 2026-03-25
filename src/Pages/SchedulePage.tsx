import { useState } from "react";
import DestinosSiderBar from "../Components/DestinoSiderBar";



export const SchedulePage= ()=> {

    const [destino, setDestino]=useState('Santa Rosa')

    return (    
    <main className="max-w-7xl mx-auto p-4 md:p-10 flex flex-col md:flex-row gap-8">
        
        {/* Lado Izquierdo: Menú de Destinos */}
        <DestinosSiderBar 
          destinoActivo={destino} 
          setDestinoActivo={setDestino} 
        />

        {/* Lado Derecho: Espacio para las Tablas */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[#003B5C] mb-6">
            Horarios de: <span className="text-[#00A8C1]">{destino}</span>
          </h1>
          
          {/* Próximo paso: Aquí irá el componente <ScheduleTable destino={destino} /> */}
          <div className="bg-white p-10 rounded-3xl shadow-md min-h-[400px] flex items-center justify-center border border-dashed border-gray-300">
             <p className="text-gray-400">Las tablas de {destino} aparecerán aquí...</p>
          </div>
        </div>
      </main>)
}