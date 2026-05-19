function Burbuja({ imagen, alt = 'foto' }) {
  return <img src={imagen} alt={alt} className="burbuja-avatar" />;
}

export default Burbuja;
