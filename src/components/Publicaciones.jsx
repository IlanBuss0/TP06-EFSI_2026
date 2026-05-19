import Titulo from './Titulo';
import Publicacion from './Publicacion';

function Publicaciones({ publicaciones, onSeleccionarPublicacion }) {
  return (
    <section className="publicaciones-section">
      <Titulo texto="TRENDING" />

      <div className="publicaciones-grid">
        {publicaciones.map((item, index) => (
          <Publicacion
            key={item.id}
            id={item.id}
            imagen={item.url}
            usuario={`@catlover_${index + 1}`}
            likes={Math.floor(1200 + index * 167)}
            onSeleccionar={onSeleccionarPublicacion}
          />
        ))}
      </div>
    </section>
  );
}

export default Publicaciones;
