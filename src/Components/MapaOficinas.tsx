// Definimos la interfaz para que coincida con la del Hook y el Data
interface MapaOficinasProps {
  oficina: {
    id: string;
    nombre: string;
    lat: string | number;
    lng: string | number;
    direccion: string;
    horario: string;
    horariosDetallados?: { dias: string; horas: string }[]; // Propiedad opcional
  };
}

export const MapaOficinas = ({ oficina }: MapaOficinasProps) => {
  return (
    <section className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 flex flex-col gap-6">
      <h2 className="text-[#003B5C] text-2xl font-bold text-center mb-2">Nuestras oficinas</h2>
      
      {/* Contenedor del Mapa con sombra cian */}
      <div className="filter drop-shadow-[0_8px_15px_rgba(24,144,163,0.3)] rounded-2xl overflow-hidden border border-gray-50 h-64 md:h-80">
        <iframe
          title="mapa-servibus"
          width="100%"
          height="100%"
          src={`https://www.google.com/maps?q=${oficina.lat},${oficina.lng}&z=15&output=embed`}
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex flex-col gap-6">
        {/* Nombre y Dirección */}
        <div>
          <p className="text-[#1890A3] font-bold text-xs uppercase tracking-widest">Oficina más cercana</p>
          <h3 className="text-[#003B5C] font-black text-xl">{oficina.nombre}</h3>
          <p className="text-gray-500 text-sm font-medium">{oficina.direccion}</p>
        </div>
        
        {/* Sección de Horarios Dinámica */}
        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 w-full">
          <p className="text-[#003B5C] font-bold text-xs uppercase mb-3 tracking-widest">Horarios de Atención</p>
          
          <div className="space-y-2">
            {/* Si existen horarios detallados, los recorre. Si no, usa el horario simple */}
            {oficina.horariosDetallados && oficina.horariosDetallados.length > 0 ? (
              oficina.horariosDetallados.map((item, index) => (
                <div key={index} className="flex justify-between text-sm border-b border-gray-200 pb-1 last:border-0">
                  <span className="text-[#1890A3] font-bold">{item.dias}:</span>
                  <span className="text-gray-700 font-medium">{item.horas}</span>
                </div>
              ))
            ) : (
              <div className="flex items-center gap-2 text-gray-700 font-bold italic">
                <span>🕒</span>
                <p className="text-sm">{oficina.horario}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Banner inferior decorativo */}
      <div className="p-4 bg-cyan-50/30 rounded-2xl border border-dashed border-cyan-200 flex items-center justify-center gap-4">
        <span className="text-3xl">🚌</span>
        <p className="text-[#003B5C] font-black italic text-center leading-tight">
          ¡Te buscamos y dejamos en tu domicilio!
        </p>
      </div>
    </section>
  );
};