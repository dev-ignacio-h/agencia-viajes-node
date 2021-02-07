/** Sintaxis de common.js */
const express = require('express'); // se asigna a constante express importacion de express

const app = express(); // se asigna a copnstante app función para ejecutar express

// Definir puerto7
/**
 * Se define el puerto y se le asigna proces.env.PORT (variable de entorno), en local no exite,
 * por lo tanto se asignará el puerto 4000
 */
const port = process.env.PORT || 4000;

/**
 * Se arranca el server con la función listen a la cual se le da como argumento el puerto
 * en el que se quiere ejecutar y un callback que se ejecutará si arranca correctamente
 */
app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
