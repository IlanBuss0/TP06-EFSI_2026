import Titulo from './chicos/Titulo';
import User from './chicos/User';

function Stories() {
  const stories = [
    { id: 1, nombre: '@user_name', imagen: 'https://picsum.photos/seed/story1/80/80' },
    { id: 2, nombre: '@user_name', imagen: 'https://picsum.photos/seed/story2/80/80' },
    { id: 3, nombre: '@user_name', imagen: 'https://picsum.photos/seed/story3/80/80' },
    { id: 4, nombre: '@user_name', imagen: 'https://picsum.photos/seed/story4/80/80' }
  ];

  return (
    <section>
      <Titulo texto="STORIES" />

      <div>
        {stories.map((story) => (
          <User key={story.id} imagen={story.imagen} nombre={story.nombre} />
        ))}
      </div>
    </section>
  );
}

export default Stories;