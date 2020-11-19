var Order_History_Model = require('../model/order_history_model');
var CustomerModel = require('../model/customer_model');
var ProductModel = require('../model/product.model');
///////Inserting to order history
var Order_History= async (req, res)=>{

    const{cus_id, product, total_price, }=req.body;

    // var customer= await CustomerModel.findById({_id:cus_id});
    // var product= await ProductModel.findById({_id:product_id});

    let history = new Order_History_Model({
        customer:cus_id,
        product:product,
        total_price:total_price
    })


    history.save((err, result)=>{

        if(err) throw err;
        else res.json({"msg":"Order history Successfully insert to database "});

    });



}


module.exports={Order_History};