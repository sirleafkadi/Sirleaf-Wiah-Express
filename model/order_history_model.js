var mongoose = require('mongoose');
mongoose.pluralize(null);
var Schema = mongoose.Schema;


var schema = new Schema({
    customer:{type: Number},
    product:[{type: String, require:true }],
    total_price:{type:Number, required:true},
    date:{type: Date, default:Date.now}
});



module.exports=mongoose.model('Order_History', schema);


