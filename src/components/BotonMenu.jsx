import Icono from './Icono';
import Subtitulo from './Subtitulo';

function BotonMenu({ icono, texto }) {
  return (
    <button>
      <Icono simbolo={icono} />
      <Subtitulo texto={texto} />
    </button>
  );
}

export default BotonMenu;