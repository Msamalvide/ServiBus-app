import REDES_SOCIALES from "../Data/redes";


export const ContactoPage = () => {
  return (
    <main className="max-w-7xl mx-auto p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* TARJETA IZQUIERDA: REDES */}
      <section className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 h-fit">
        <h2 className="text-[#003B5C] text-2xl font-bold text-center mb-8">Nuestras redes</h2>
        
        <div className="flex flex-col gap-5 ">
          {REDES_SOCIALES.map((red) => (
            <a 
              key={red.id}
              href={red.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 shadow-md shadow-[#1890A3]/25 hover:shadow-md transition-all hover:scale-[1.02]"
            >   
              <img 
                src={red.icon} 
                alt={red.nombre} 
                className="w-12 h-12 " 
              />
              
              <div className={`flex flex-col ${red.id !== 'whatsapp' ? 'flex-1 text-center pr-12' : 'text-left'}`}>
                {red.etiqueta && (
                  <span className="text-gray-400 text-xs uppercase font-bold mb-1">
                    {red.etiqueta}
                  </span>
                )}
                <span className="text-[#003B5C] font-bold text-lg md:text-xl">
                   {red.dato}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TARJETA DERECHA: ACÁ IRÁ EL MAPA (Próximo paso) */}
      <section className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
          <h2 className="text-[#003B5C] text-2xl font-bold text-center mb-8">Nuestras oficinas</h2>
          <span className="text-gray-400 text-center block text-lg">Estamos trabajando en ello</span>
          {/* Aquí pegaremos el componente del mapa inteligente */}
      </section>

    </main>
  );
};