import Burbuja from './Burbuja';
import Subtitulo from './Subtitulo';
import Estadistica from './Estadictica';
import BotonMenu from './BotonMenu';

function MenuLateral() {
  const fotoPerfil = 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg';

  return (
    <aside className="menu-lateral">
      <h1 className="logo">Instagram</h1>

      <div className="perfil-lateral">
        <Burbuja imagen={fotoPerfil} alt="perfil" />
        <Subtitulo texto="@michi_queen" />
      </div>

      <div className="estadisticas-lateral">
        <Estadistica numero="121K" etiqueta="Followers" />
        <Estadistica numero="900K" etiqueta="Likes" />
      </div>

      <nav className="nav-lateral">
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
