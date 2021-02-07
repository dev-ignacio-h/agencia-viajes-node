/* se asigna a constante express importacion de express */

// const express = require('express'); /* Sintaxis de common.js, es la sintaxis por default*/
import express from 'express'; /* Sintaxis nativa se debe agregar "type": "module" a package.json */
import router from './routes/index.js';

const app = express(); /* se asigna a copnstante app la función para ejecutar express */

/**
 * Se define el puerto y se le asigna proces.env.PORT (variable de entorno), en local no exite,
 * por lo tanto se asignará el puerto 4000
 */
const port = process.env.PORT || 4000;

/** Agregar router */
app.use('/', router) /** Soporta todos los verbos y todas las rutas */

/**
 * Se arranca el server con la función listen a la cual se le da como argumento el puerto
 * en el que se quiere ejecutar y un callback que se ejecutará si arranca correctamente
 */
app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
