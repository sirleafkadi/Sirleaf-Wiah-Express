const { db } = require("../model/product.model");
var ProductModel = require("../model/product.model");
var CategoryModel = require("../model/category.model");
var SequenceModel = require("../model/sequence.model");

var GetAll =(req, res)=>{
    ProductModel.find({}).populate('category').exec((err, result)=>{

        if(err) throw err;
        else res.json(result);
    })
}


var GetType =(req, res)=>{

    let get_type= req.params.type;
  
    ProductModel.find({type:get_type}, (err, data)=>{
        if(err)  throw err;
        res.json(data);
    });
}




var GetById =(req, res)=>{
    var id = req.params.id;

    ProductModel.findOne({_id:id}).populate('category').exec((err, result)=>{
        if(err) res.json("msg", "Product not find!");
        else res.json(result);
    })

}






//////Insert


var Insert  = async (req, res)=>{
        const{name, quantity, short_desc, price, type, year, model, memory, cpu, display,  desc, img, category_id}=req.body;
        let get =  await CategoryModel.findById({_id:category_id});
        let sequence =  await SequenceModel.findById({_id:1});
        let seq_incre =sequence.product_seq;

        let product  = new ProductModel({
            _id:seq_incre,
            name:name,
            year:year,
            model:model,
            memory:memory, 
            cpu:cpu, 
            display:display, 
            desc:desc,
            type:type,
            quantity:quantity,
            img:img,
            price:price,
            short_desc:short_desc,
            category:get
        })
        seq_incre +=1;
       await SequenceModel.update({_id:1}, {$set:{product_seq:seq_incre} }  );
        product.save( (err, result)=>{

            if(err) res.json({"msg":"Unable to store Product to database"}) ;
            else  res.json("Product Successfully store to Database");

        })






}



module.exports={GetAll, GetById, Insert, GetType};