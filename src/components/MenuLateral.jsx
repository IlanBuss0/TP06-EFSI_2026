import Burbuja from './Burbuja';
import Subtitulo from './Subtitulo';
import Estadistica from './Estadictica';
import BotonMenu from './BotonMenu';

function MenuLateral() {
  const fotoPerfil = 'https://picsum.photos/seed/perfil/100/100';

  return (
    <aside>
      <h1>Instagram</h1>

      <Burbuja imagen={fotoPerfil} alt="perfil" />
      <Subtitulo texto="@usuario_demo" />

      <div>
        <Estadistica numero="121K" etiqueta="Followers" />
        <Estadistica numero="900K" etiqueta="Likes" />
      </div>

      <nav>
        <BotonMenu icono="🏠" texto="Home" />
        <BotonMenu icono="🧭" texto="Explore" />
        <BotonMenu icono="🎬" texto="Reels" />
        <BotonMenu icono="🖥️" texto="IGTV" />
        <BotonMenu icono="🔔" texto="Notification" />
      </nav>
    </aside>
  );
}

export default MenuLateral;