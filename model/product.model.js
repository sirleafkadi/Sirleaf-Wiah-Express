var CategoryModel = require("../model/category.model");
var mongoose = require('mongoose');
mongoose.pluralize(null);
var Schema = mongoose.Schema;


var schema = new Schema({
    _id:{type: Number}, 
    name:{type: String, required:true, unique:true},
    year:{type: String},
    display:{type: String},
    cpu:{type: String},
    memory:{type: String},
    model:{type: String},
    desc:{type: String, required:true},
    short_desc:{type: String, required:true},
    img:{type: String, required:true, unique:true},
    price:{type: Number, required:true },
    type:{type: Boolean, required:true},
    quantity:{type:Number, default:1 },
    category:{type: mongoose.Schema.Types.ObjectId, ref:"Category"}
});



module.exports=mongoose.model('Product', schema);


