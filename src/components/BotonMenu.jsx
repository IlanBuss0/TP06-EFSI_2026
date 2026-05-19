import Icono from './Icono';
import Subtitulo from './Subtitulo';

function BotonMenu({ icono, texto }) {
  return (
    <button className="boton-menu">
      <Icono simbolo={icono} />
      <Subtitulo texto={texto} />
    </button>
  );
}

export default BotonMenu;
