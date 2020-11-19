var express = require("express");
var router = express.Router();


var Category_Controller =  require('../controller/Category_controller');


router.post('/insert', Category_Controller.Insert);
router.get('/all', Category_Controller.All);
module.exports=router;