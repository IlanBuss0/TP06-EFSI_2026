import Subtitulo from './Subtitulo';

function Estadistica({ numero, etiqueta }) {
  return (
    <div className="estadistica-item">
      <strong>{numero}</strong>
      <Subtitulo texto={etiqueta} />
    </div>
  );
}

export default Estadistica;
