var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { /* si por el metodo get mandamos una barra responde con el metodo*/
  res.send('respond with a resource');
}); /* pero si mandamos otra cosa siempre mostrara el notfound ejemplo pagina/users/sarasa */

module.exports = router;
