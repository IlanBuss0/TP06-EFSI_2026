import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

export const obtenerImagenes = async () => {
  const respuesta = await axios.get(`${BASE_URL}?limit=18`);
  return respuesta.data;
};

export const obtenerMasHistorias = async () => {
  const respuesta = await axios.get(`${BASE_URL}?limit=8`);
  return respuesta.data;
};
