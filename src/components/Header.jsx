import Icono from './Icono';

function Header() {
  return (
    <header>
      <input type="text" placeholder="Username, hashtag and story search" />

      <div>
        <Icono simbolo="⚙️" />
        <Icono simbolo="📷" />
        <Icono simbolo="✈️" />
      </div>

      <button>+ New Post</button>
    </header>
  );
}

export default Header;