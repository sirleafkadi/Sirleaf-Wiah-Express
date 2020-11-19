var express = require("express");
var router = express.Router();

var Sequence = require('../controller/sequence_controller');

router.post('/insert', Sequence.Insert)


module.exports=router;