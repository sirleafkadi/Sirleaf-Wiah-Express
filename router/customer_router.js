var express = require("express");
var router = express.Router();
var Cus = require('../controller/customer_controller');


router.post('/register', Cus.Register);
router.post('/login', Cus.login);
module.exports=router;