var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController");

/* GET users listing. */ 
/* va  a devolver el objeto products controler con el metodo gettall  */
router.get('/', productsController.getAll); /* pero si mandamos otra cosa siempre mostrara el notfound ejemplo pagina/users/sarasa */
router.get('/:id', productsController.getById); /* llamamos directamente al elemento id del modulo getById*/

module.exports = router;
