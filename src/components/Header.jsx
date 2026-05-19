import Icono from './Icono';

function Header() {
  return (
    <header className="header-superior">
      <input className="buscador" type="text" placeholder="Username, hashtag and story search" />

      <div className="header-iconos">
        <Icono simbolo="⚙️" />
        <Icono simbolo="📷" />
        <Icono simbolo="✈️" />
      </div>

      <button className="boton-post">+ New Post</button>
    </header>
  );
}

export default Header;
