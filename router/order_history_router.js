var express = require("express");
var router = express.Router();

var Order_History = require('../controller/order_history_controller');

router.post('/insert', Order_History.Order_History );


module.exports=router;