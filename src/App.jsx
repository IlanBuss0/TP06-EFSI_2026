import { useEffect, useState } from 'react';
import MenuLateral from './components/MenuLateral';
import Header from './components/Header';
import Stories from './components/Stories';
import Publicaciones from './components/Publicaciones';
import DetallePublicacion from './components/DetallePublicacion';
import { obtenerImagenes, obtenerMasHistorias } from './services/API';
import './App.css';

const usuariosDemo = [
  'michi.daily',
  'catmom.world',
  'sir.whiskers',
  'meowcity',
  'catgram.feed',
  'nap.queen',
  'purrfect.vibes',
  'gatos.trending'
];

function crearPublicaciones(imagenes = []) {
  return imagenes.map((imagen, index) => ({
    id: `${imagen.id}-${index}`,
    imagen: imagen.url,
    usuario: usuariosDemo[index % usuariosDemo.length],
    likes: 1100 + index * 143,
    caption: `Momento #${index + 1} con mucha actitud felina 🐾`
  }));
}

function crearHistorias(imagenes = []) {
  return imagenes.map((imagen, index) => ({
    id: `${imagen.id}-story-${index}`,
    imagen: imagen.url,
    usuario: `cat_${index + 1}`
  }));
}

function App() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [historias, setHistorias] = useState([]);
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

  useEffect(() => {
    const traerDatos = async () => {
      const imagenesPublicaciones = await obtenerImagenes();
      const imagenesHistorias = await obtenerMasHistorias();

      setPublicaciones(crearPublicaciones(imagenesPublicaciones));
      setHistorias(crearHistorias(imagenesHistorias));
    };

    traerDatos();
  }, []);

  return (
    <div className="app-layout">
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
