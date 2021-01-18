/* maneja la logica del products controller*/

/*req es toda la información que nos llega
el res es lo que yo devuelvo
*/
module.exports = {
    getAll: function (req, res, next) { /* si por el metodo get mandamos una barra responde con el metodo*/
        const productos = [ //creo una constante con un json interno dentro del array
            {
                id: 1,
                name: "Moto g"

            },
            {
                id: 2,
                name: "Moto X"

            }
        ]
        res.json(productos); // le mandamos este array
    },

    getById: function (req, res, next) { /* si por el metodo get mandamos una barra responde con el metodo*/
        console.log(req.params.id); /* req params tiene todos los datos que nosotros enviemos en los parametros de la url*/
        const productos = {
            id:1,
            name:"moto g"
        }

        res.json(productos); // le mandamos este array
    }
}