import { historia } from "../Data/historia";
import imagenServis from "../assets/imagenServi.svg"

export const HistoriaPage = () => {
    return (
        <main className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 min-h-[70vh]">
            
            {/* SECCIÓN IMAGEN: Con bordes muy redondeados y sombra suave */}
            <section className="w-full md:w-1/2 flex justify-center">
                <div className="relative group">
                    <img 
                        src={imagenServis} 
                        alt="Unidades de Servi Bus" 
                        className="rounded-[40px] shadow-2xl w-full max-w-lg object-cover border-4 border-white"
                    />
                </div>
            </section>

            {/* SECCIÓN TEXTO: Tarjeta blanca con padding generoso */}
            <section className="w-full md:w-1/2 bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-50">
                <p className="text-[#003B5C] text-lg md:text-xl leading-relaxed font-medium whitespace-pre-line text-justify">
                    {historia}
                </p>
                
                {/* Detalle decorativo al final del texto */}
                <div className="mt-8 flex items-center gap-3">
                    <div className="h-1 w-12 bg-[#24D6EA] rounded-full"></div>
                    <span className="text-[#1890A3] font-black italic uppercase text-xs tracking-widest">
                        Nuestra Trayectoria
                    </span>
                </div>
            </section>

        </main>
    );
};