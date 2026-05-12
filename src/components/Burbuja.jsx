function Burbuja({ imagen, alt = 'foto' }) {
  return <img src={imagen} alt={alt} width="60" height="60" />;
}

export default Burbuja;