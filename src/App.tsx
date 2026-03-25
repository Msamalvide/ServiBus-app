
import './App.css'
import Navbar from './Components/Navbar'
import { BotonFlot } from './Components/BotonFlot'
import {useState} from 'react';
import { SchedulePage } from './Pages/SchedulePage';


function App() {
  const [seccion, setSeccion]=useState('Horarios')
  
  return (
    <>
      <Navbar activeTab={seccion} setActiveTab={setSeccion}/>

      {/* Layout Principal: Sidebar + Contenido */}

      {seccion === 'Horarios' && <SchedulePage />}

      <BotonFlot />
    </>
  )
}

export default App
