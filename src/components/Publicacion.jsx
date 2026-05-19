import User from './User';
import Icono from './Icono';

function Publicacion({ publicacion, onSeleccionar }) {
  return (
    <article className="card-publicacion" onClick={() => onSeleccionar(publicacion)}>
      <img src={publicacion.imagen} alt={publicacion.usuario} className="imagen-publicacion" />

      <div className="publicacion-footer">
        <User imagen={publicacion.imagen} nombre={`@${publicacion.usuario}`} />

        <div className="acciones-publicacion">
          <Icono simbolo="♡" />
          <Icono simbolo="💬" />
          <Icono simbolo="✈️" />
        </div>
      </div>

      <p className="likes-texto">{publicacion.likes} likes</p>
    </article>
  );
}

export default Publicacion;
