import Titulo from './Titulo';
import User from './User';

function Stories({ historias }) {
  return (
    <section className="stories-section">
      <Titulo texto="STORIES" />

      <div className="stories-fila">
        {historias.map((historia) => (
          <User
            key={historia.id}
            imagen={historia.imagen}
            nombre={historia.usuario}
          />
        ))}
      </div>
    </section>
  );
}

export default Stories;
