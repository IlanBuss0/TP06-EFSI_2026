import Icono from './Icono';

function DetallePublicacion({ publicacion, onCerrar }) {
  const comentarios = [
    '@miauuuu: Tremenda foto 😍',
    '@catlover: Este gatito merece portada.',
    '@furry.friends: Necesito más posts así.'
  ];

  return (
    <div className="overlay-detalle" onClick={onCerrar}>
      <div className="modal-detalle" onClick={(e) => e.stopPropagation()}>
        <button className="boton-cerrar" onClick={onCerrar}>✕</button>
        <img src={publicacion.imagen} alt={publicacion.usuario} className="imagen-detalle" />

        <div className="contenido-detalle">
          <h3>@{publicacion.usuario}</h3>
          <p>{publicacion.likes} likes</p>
          <p className="caption">{publicacion.caption}</p>

          <div className="acciones-detalle">
            <Icono simbolo="♡" />
            <Icono simbolo="💬" />
            <Icono simbolo="✈️" />
          </div>

          <div className="comentarios">
            {comentarios.map((comentario) => (
              <p key={comentario}>• {comentario}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallePublicacion;
