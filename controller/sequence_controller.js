var Sequence_Model = require('../model/sequence.model');


var Insert =(req, res)=>{

    let insert  = new Sequence_Model(req.body);

    insert.save((err, result)=>{

        if(err) res.json({"msg": "Unable to insert Sequence in database"});
        else res.json({"msg":" Successfully Stored to Database!"});
    });
}
module.exports= {Insert};