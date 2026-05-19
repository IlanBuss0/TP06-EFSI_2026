import Titulo from './Titulo';
import Publicacion from './Publicacion';

function Publicaciones({ publicaciones, onSeleccionarPublicacion }) {
  return (
    <section className="publicaciones-section">
      <Titulo texto="TRENDING" />

      <div className="publicaciones-grid">
        {publicaciones.map((publicacion) => (
          <Publicacion
            key={publicacion.id}
            publicacion={publicacion}
            onSeleccionar={onSeleccionarPublicacion}
          />
        ))}
      </div>
    </section>
  );
}

export default Publicaciones;
