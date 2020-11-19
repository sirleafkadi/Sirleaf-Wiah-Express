var CategoryModel = require("../model/category.model");



var All =(req, res)=>{
     CategoryModel.find({}, (err, result)=>{
        if(err) res.json({"msg": "Unable to get category from  database"});
        else res.json(result);
    })

}

var Insert =(req, res)=>{


    let insert  = new CategoryModel(req.body);

    insert.save((err, result)=>{

        if(err) res.json({"msg": "Unable to insert category into database"});
        else res.json({"msg":"Successfully Stored to Database!"});
    });
}
module.exports= {Insert, All};

