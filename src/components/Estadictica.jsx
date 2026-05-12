import Subtitulo from './Subtitulo';

function Estadistica({ numero, etiqueta }) {
  return (
    <button>
      <strong>{numero}</strong>
      <Subtitulo texto={etiqueta} />
    </button>
  );
}

export default Estadistica;