/* maneja la logica del products controller*/

/*req es toda la información que nos llega
el res es lo que yo devuelvo
*/
module.exports = {
  getAll: function (req, res, next) {/* si por el metodo get mandamos una barra, responde:*/
    const productos = [//creo una constante con un json interno dentro del array
          {
            id:1,
            name:"moto g"
          },
          {
            id:2,
            name:"moto x"
          }
        ]
    res.json(productos);// ledevolvemos  este array
    },
  getById: function (req, res, next) { /* si por el metodo get pedimos por ID */
    console.log(req.params.id) /* req params tiene todos los datos que nosotros enviemos en los parametros de la url*/
        const producto = {
            id:1,
            name:"moto g"
          }
        res.json(producto);
    },
    create:function(req, res, next) {
        console.log(req.body)
        res.json(req.body);
    },
    update:function(req, res, next) {
        console.log(req.params.id)
        console.log(req.body)
        res.json(req.body);
    },
    delete: function(req, res, next) {
        console.log(req.params.id)
        const producto = {
            id:1,
            name:"moto g"
          }
        res.json(producto);
    }
}