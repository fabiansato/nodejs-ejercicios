const mongoose = require("../bin/mongodb")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"El campo nombre es obligatorio"],
        minlength:1,
        maxlength:10
    },
    sku:{
        type:String,
        unique:true
    },
    description:String,
    price:{
        type:Number,
        get:function(price){
            return price*1.21
        }
    },
    status:{
        type:String,
        enum:["aprobado","inactivo"]
    }
})
productSchema.virtual("price_currency").get(function(){
    return "$ "+this.price
})
productSchema.set("toJSON",{getters:true,virtuals:true})
module.exports=mongoose.model("products",productSchema)