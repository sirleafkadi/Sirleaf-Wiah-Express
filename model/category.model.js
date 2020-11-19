var mongoose = require('mongoose');
mongoose.pluralize(null);
var Schema = mongoose.Schema;


var schema = new Schema({
    _id:{type:Number},
    name:{type: String, required:true, unique:true},
  });


var Category_Model = mongoose.model('Category', schema);

module.exports=Category_Model;


