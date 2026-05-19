import Titulo from './Titulo';
import User from './User';

function Stories(story) {
  historias = story
  return (
    <section>
      <Titulo texto="STORIES" />

      <div>
        {stories.map((historias) => (
          <User key={historias.id} imagen={historias.imagen} nombre={historias.nombre} />
        ))}
      </div>
    </section>
  );
}

export default Stories;