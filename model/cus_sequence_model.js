var mongoose = require('mongoose');
mongoose.pluralize(null);
var Schema = mongoose.Schema;


var Cus_Sequence_Model = new Schema({
    _id:{type: Number}, 
    cus_seq:{type: Number, default:1}, 
  
});


module.exports=mongoose.model('Cus_Sequence', Cus_Sequence_Model);
