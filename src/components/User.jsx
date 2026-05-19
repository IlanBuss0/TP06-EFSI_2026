import Burbuja from './Burbuja';
import Subtitulo from './Subtitulo';

function User({ imagen, nombre }) {
  return (
    <div className="user-item">
      <Burbuja imagen={imagen} alt={nombre} />
      <Subtitulo texto={nombre} />
    </div>
  );
}

export default User;
