import Titulo from './chicos/Titulo';
import Publicacion from './Publicacion';

function Publicaciones() {
  const listaPublicaciones = [
    { id: 1, imagen: 'https://picsum.photos/seed/post1/400/300', usuario: '@user_name' },
    { id: 2, imagen: 'https://picsum.photos/seed/post2/400/300', usuario: '@user_name' },
    { id: 3, imagen: 'https://picsum.photos/seed/post3/400/300', usuario: '@user_name' }
  ];

  return (
    <section>
      <Titulo texto="TRENDING" />

      <div>
        {listaPublicaciones.map((item) => (
          <Publicacion key={item.id} imagen={item.imagen} usuario={item.usuario} />
        ))}
      </div>
    </section>
  );
}

export default Publicaciones;