module.exports = {
    getAll: function(req, res, next) {
        const productos = [
          {
            id:1,
            name:"moto g"
          },
          {
            id:2,
            name:"moto x"
          }
        ]
        res.json(productos);
    },
    getById: function(req, res, next) {
        console.log(req.params.id)
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