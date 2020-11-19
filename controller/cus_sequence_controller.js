var Cus_Sequence_Model = require('../model/cus_sequence_model');


var Cus_Sequence = (req, res)=>{

    const {id} = req.body
    console.log(id);
    var sequence = new Cus_Sequence_Model({
         _id:id
    })

        sequence.save((err, result)=>{

            if(err) throw err;
            // res.json({"msg":"unable to register new user"});
            else res.json( {"msg":"Sequence successfully insert to database"} );

        })

}


module.exports={Cus_Sequence}


