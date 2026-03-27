import whatsapp from "../assets/whatsappicono.svg";
import instagram from "../assets/instagramlogo.svg";
import facebook from "../assets/logos_facebook.svg";


const REDES_SOCIALES = [
  { 
    id: 'whatsapp',
    nombre: 'WhatsApp', 
    dato: '2954-693433', 
    etiqueta: 'Consultas y reservas', 
    link: 'https://wa.me/5492954693433',
    icon: whatsapp, 
  },
  { 
    id: 'instagram',
    nombre: 'Instagram', 
    dato: 'servibus.cb', 
    link: 'https://instagram.com/servibus.cb',
    icon: instagram,
  },
  { 
    id: 'facebook',
    nombre: 'Facebook', 
    dato: 'servi bus', 
    link: 'https://www.facebook.com/profile.php?id=100063705547240',
    icon: facebook,
  }
];

export default REDES_SOCIALES;