
import './App.css'
import Navbar from './Components/Navbar'
import { BotonFlot } from './Components/BotonFlot'
import {useState} from 'react';
import { SchedulePage } from './Pages/SchedulePage';
import { ContactoPage } from './Pages/ContactoPage';
import { HistoriaPage } from './Pages/HistoriaPage';


function App() {
  const [seccion, setSeccion]=useState('Horarios')
  
  return (
    <>
      <Navbar activeTab={seccion} setActiveTab={setSeccion}/>

      {/* Layout Principal: Sidebar + Contenido */}

      {seccion === 'Horarios' && <SchedulePage />}
      {seccion === 'Contacto' && <ContactoPage />}
      {seccion === 'Historia' && <HistoriaPage />}

      <BotonFlot />
    </>
  )
}

export default App
