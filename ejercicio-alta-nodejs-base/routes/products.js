var express = require('express');
var router = express.Router();

/* GET users listing. */ 
/*req es toda la información que nos llega
el res es lo que yo devuelvo
*/
router.get('/', function (req, res, next) { /* si por el metodo get mandamos una barra responde con el metodo*/
    const productos =[ //creo una constante con un json interno dentro del array
        { 
            id:1,
            name: "Moto g"

        }
        {
            id: 2,
            name: "Moto X"

        }
    ]
    res.json(productos); // le mandamos este array
}); /* pero si mandamos otra cosa siempre mostrara el notfound ejemplo pagina/users/sarasa */

module.exports = router;
