import User from './chicos/User';
import Icono from './chicos/Icono';

function Publicacion({ imagen, usuario }) {
  return (
    <article>
      <img src={imagen} alt="publicación" width="250" />

      <div>
        <User imagen="https://picsum.photos/seed/userpost/50/50" nombre={usuario} />
        <div>
          <Icono simbolo="♡" />
          <Icono simbolo="💬" />
          <Icono simbolo="✈️" />
        </div>
      </div>
    </article>
  );
}

export default Publicacion;