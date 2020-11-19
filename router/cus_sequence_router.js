var express = require("express");
var router = express.Router();


////sequence

var Seq = require('../controller/cus_sequence_controller');

router.post('/insert',Seq.Cus_Sequence);


module.exports=router;