import Icono from './Icono';

function DetallePublicacion({ publicacion, onCerrar }) {
  const comentarios = ['Muy buena foto', 'Me encanta esta publicación', 'Increíble imagen'];

  return (
    <div className="overlay-detalle" onClick={onCerrar}>
      <div className="modal-detalle" onClick={(e) => e.stopPropagation()}>
        <button className="boton-cerrar" onClick={onCerrar}>✕</button>
        <img src={publicacion.imagen} alt="detalle" className="imagen-detalle" />

        <div className="contenido-detalle">
          <h3>{publicacion.usuario}</h3>
          <p>{publicacion.likes} likes</p>
          <p className="caption">Un día perfecto con mi gato 🐾</p>

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
