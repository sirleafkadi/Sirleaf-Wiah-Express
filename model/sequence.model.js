var mongoose = require('mongoose');
mongoose.pluralize(null);
var Schema = mongoose.Schema;


var Sequence_Model = new Schema({
    _id:{type: Number}, 
    product_seq:{type: Number, default:1}, 
  
});


module.exports=mongoose.model('Sequence', Sequence_Model);
