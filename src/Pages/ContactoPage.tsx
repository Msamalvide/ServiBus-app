
import { useOficinaCercana } from "../Hooks/useOficinaCercana";
import { RedesSociales } from "../Components/RedesSociales";
import { MapaOficinas } from "../Components/MapaOficinas";

export const ContactoPage = () => {
  const oficinaCercana = useOficinaCercana();

  return (
    <main className="max-w-7xl mx-auto p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <RedesSociales />
      <MapaOficinas oficina={oficinaCercana} />
    </main>
  );
};