import Burbuja from './Burbuja';
import Subtitulo from './Subtitulo';

function User({ imagen, nombre }) {
  return (
    <div>
      <Burbuja imagen={imagen} alt={nombre} />
      <Subtitulo texto={nombre} />
    </div>
  );
}

export default User;