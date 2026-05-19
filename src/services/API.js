import axios from "axios"
BASE_URL = "https://api.thecatapi.com/v1/images/search?"

export const obtenerImagenes = async () => {
    const respuesta = await axios.get(`${BASE_URL}limit=15`)
    return respuesta.data
}
export const obtenerMasHistorias = async () =>{
    const respuesta = await axios.get(`${BASE_URL}limit=7`)
    return respuesta.data
}


