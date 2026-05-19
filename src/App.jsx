import { useEffect, useState } from 'react';
import MenuLateral from './components/MenuLateral';
import Header from './components/Header';
import Stories from './components/Stories';
import Publicaciones from './components/Publicaciones';
import { obtenerImagenes, obtenerMasHistorias } from './services/API'
import { useEffect, useState } from 'react';
import DetallePublicacion from './components/DetallePublicacion';
import './App.css'

function App() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [historias, setHistorias] = useState([]);
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

  useEffect(() => {
    const traerDatos = async () => {
      const imagenesPublicaciones = await obtenerImagenes();
      const imagenesHistorias = await obtenerMasHistorias();

      setPublicaciones(imagenesPublicaciones.slice(0, 12));
      setHistorias(imagenesHistorias);
    };

    traerDatos();
  }, []);
  return (
     <div className="app-layout">
      <MenuLateral />
      <MenuLateral />
      <main className="contenido-principal">
        <Header />
        <Stories historias={historias} />
        <Publicaciones
          publicaciones={publicaciones}
          onSeleccionarPublicacion={setPublicacionSeleccionada}
        />
      </main>

      {publicacionSeleccionada && (
        <DetallePublicacion
          publicacion={publicacionSeleccionada}
          onCerrar={() => setPublicacionSeleccionada(null)}
        />
      )}
    </div>
  );
}

export default App;
