var mongoose = require('mongoose');
mongoose.pluralize(null);
var Schema = mongoose.Schema;


var schema = new Schema({
    _id:{type: Number}, 
    name:{type: String, required:true},
    password:{type: String, require:true, select:false},
    email:{type: String, require:true, unique:true}

});

module.exports=mongoose.model('Customer', schema);


