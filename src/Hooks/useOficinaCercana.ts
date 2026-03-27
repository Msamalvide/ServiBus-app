import { useState, useEffect } from "react";
import { PUNTOS_INTERES } from "../Data/oficinas";

// Definimos una interfaz para que TypeScript sepa exactamente qué tiene una oficina
interface Oficina {
  id: string;
  nombre: string;
  lat: string | number;
  lng: string | number;
  direccion: string;
  horario: string;
  horariosDetallados?: { dias: string; horas: string }[];
}

export const useOficinaCercana = () => {
  const [oficinaCercana, setOficinaCercana] = useState<Oficina>(PUNTOS_INTERES[0]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        const cercana = PUNTOS_INTERES.reduce((prev, curr) => {
          // Usamos String() para asegurar que parseFloat no falle si recibe un number
          const latPrev = parseFloat(String(prev.lat));
          const lngPrev = parseFloat(String(prev.lng));
          const latCurr = parseFloat(String(curr.lat));
          const lngCurr = parseFloat(String(curr.lng));

          const distPrev = Math.hypot(latPrev - latitude, lngPrev - longitude);
          const distCurr = Math.hypot(latCurr - latitude, lngCurr - longitude);

          return distCurr < distPrev ? curr : prev;
        });

        setOficinaCercana(cercana as Oficina);
      });
    }
  }, []);

  return oficinaCercana;
};