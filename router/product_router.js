var express = require("express");
var router = express.Router();

var product_controller= require("../controller/product_controller");

router.get("/getall", product_controller.GetAll);

router.get("/get/:id", product_controller.GetById);

router.get("/get_type/:type", product_controller.GetType);

router.post("/insert", product_controller.Insert);


module.exports=router;

