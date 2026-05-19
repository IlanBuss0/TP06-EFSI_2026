import MenuLateral from './components/MenuLateral';
import Header from './components/Header';
import Stories from './components/Stories';
import Publicaciones from './components/Publicaciones';
import { obtenerImagenes, obtenerMasHistorias } from './services/API'
import { useEffect, useState } from 'react';

function App() {
  const [imagenes, setImagenes] = useState([])
  const [historias, setHistorias] = useState([])

  //useEffects
  useEffect(() => {
    const traerDatos = async () => {
        const imagenesPublicaciones = await obtenerImagenes()
        const imagenesHistorias = await obtenerMasHistorias()

        setImagenes(imagenesPublicaciones)
        setHistorias(imagenesHistorias)
    }

    traerDatos()
}, []) // carga todas las imagenes de la app al iniciar la app
  useEffect((fotoElegida) =>{
    const traerDatos = async(fotoElegida) =>{
      const publicacion = fotoElegida
      setHistorias([])
      setImagenes([])
    }
  }, clickPublicacion) // cuando tocan una publicacion se amplia y 
  return (
    <div>
      <MenuLateral />
      <Header />
      <Stories historias={historias}/>
      <Publicaciones />
    </div>
  );
}

export default App;