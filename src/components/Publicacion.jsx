import User from './User';
import Icono from './Icono';

function Publicacion({ id, imagen, usuario, likes, onSeleccionar }) {
  return (
    <article className="card-publicacion" onClick={() => onSeleccionar({ id, imagen, usuario, likes })}>
      <img src={imagen} alt="publicación" className="imagen-publicacion" />

      <div className="publicacion-footer">
        <User imagen={imagen} nombre={usuario} />

        <div className="acciones-publicacion">
          <Icono simbolo="♡" />
          <Icono simbolo="💬" />
          <Icono simbolo="✈️" />
        </div>
      </div>

      <p className="likes-texto">{likes} likes</p>
    </article>
  );
}

export default Publicacion;
