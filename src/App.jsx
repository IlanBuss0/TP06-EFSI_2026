import MenuLateral from './components/MenuLateral';
import Header from './components/Header';
import Stories from './components/Stories';
import Publicaciones from './components/Publicaciones';
import { obtenerImagenes, obtenerMasHistorias } from './services/API'
import { useEffect, useState } from 'react';

function App() {
  //useStates
  const [imagenes, setImagenes] = useState([])
  const [historias, setHistorias] = useState([])
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null)

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
  
setPublicacionSeleccionada(publicacion) //cuando tocan se cambia publicacionSeleccionada y activa la funcion se la ventana emergente
useEffect(() =>{
    setHistorias([])
    setImagenes([])
  }, publicacionSeleccionada) // a chequear
  return (
    <div>
      <ventanaEmergente />
      <MenuLateral />
      <Header />
      <Stories historias={historias}/>
      <Publicaciones />
    </div>
  );
}

export default App;