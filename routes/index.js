import express from 'express';
/**
 * Sólo se puede tener una instancia de la aplicación, pero se puede utilizar
 * la misma instancia de express, utilizando su router
 */
const router = express.Router();

/**
 * método que recibe como argumentos una ruta y un callback que a su vez recibe como argumentos
 * un request y un response
 */
router.get('/', (req, res) => {
  /* req = lo que enviamos - req = lo que express nos responde */
  res.send('Inicio'); /* Muestra algo en pantalla */
  // res.json({                  /* Retorna una respuesta de json */
  //   id: 1
  // })
  // res.render()                /* Retorna una vista */
});

router.get('/nosotros', (req, res) => {
  res.send('Nosotros');
});

router.get('/contacto', (req, res) => {
  res.send('Contacto');
});

export default router;
