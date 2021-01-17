const productsModel = require("../models/productsModel")
module.exports = {
    getAll: async function(req, res, next) {
        try{
          const productos = await productsModel.find({});
          res.json(productos);
        }catch(e){
          next(e);
        }
        
    },
    getById: async function(req, res, next) {
       
        try{
          const producto = await productsModel.findById(req.params.id);
          res.json(producto);
        }catch(e){
          next(e);
        }
    },
    create: async function(req, res, next) {
  
        try{
          const producto = new productsModel({
            name:req.body.name,
            sku:req.body.sku,
            description:req.body.description,
            price:req.body.price
          })
          const prod = await producto.save()
          res.json(prod);
        }catch(e){
          console.log(e)
          next(e);
        }
    },
    update: async function(req, res, next) {
      try {
          let producto = await productsModel.updateOne({ _id: req.params.id }, req.body, { multi: false })
          res.json(producto)
      } catch (e) {
          next(e)
      }
    },
    delete: async function(req, res, next) {
      try{
          let producto = await productsModel.deleteOne({ _id: req.params.id })
          res.json(producto)
      } catch (e) {
          next(e)
      }
    }
}