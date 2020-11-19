const { json } = require('body-parser');
var Customer_Model = require('../model/customer_model');
var Cus_Sequence_Model = require('../model/cus_sequence_model');


// var Info =(req, res)=>{
//         let email=req.params.email;
//     console.log("Server raw data  "+req.body);

//   Customer_Model.findOne({email:email},(err, result)=>{
//          if (err) {throw err;}
        
//        if(result!=null || result!=""){
//            res.status(200).json({result});
//        }
        
//      }

//     )
// }


var login = async (req, res)=>  {
   
  const{email, password}= req.body;
  await Customer_Model.findOne({email:email, password:password}, (err, result)=>{

        if (err) {throw err;}
        // return res.status(422).json({ 'login': false })
        else {

            if(result!=null || result=="") { 
                
              req.session.user_id=result._id
               let id=req.session.user_id;
           
                

               console.log('session_id  '+id);
               res.cookie('cokkieName',id, { maxAge: 900000, httpOnly: true })
                res.status(200).json({'logged_in':true});
            }
            else res.status(200).json({'logged_in':false});

        }
     }

    )
}



var Register =  async (req, res)=>{
    const {name, password, email}= req.body;
let sequence= await Cus_Sequence_Model.findById({_id:1});
    let seq = sequence.cus_seq;
 var register = new Customer_Model({
        _id:seq,
        name:name,
        password:password,
        email:email

 });
            
        seq+=1;
        await  Cus_Sequence_Model.update({_id:1}, {$set:{cus_seq: seq} }  );

        register.save((err, result)=>{

            if (err) throw err;
               res.status(200).json({'registered':true});
          })

}


module.exports={Register, login};