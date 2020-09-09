//Facilmente enlazable, es mas facil de leer, es poderoso
//no maneja ecxepciones con los errores, necesitas babel para q ande en todos los navegadores
const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(data.name);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => console.error(err));
