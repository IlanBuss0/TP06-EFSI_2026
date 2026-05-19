import Titulo from './Titulo';
import User from './User';

function Stories({ historias }) {
  return (
    <section className="stories-section">
      <Titulo texto="STORIES" />

      <div className="stories-fila">
        {historias.map((historia, index) => (
          <User
            key={historia.id}
            imagen={historia.url}
            nombre={`cat_${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Stories;
