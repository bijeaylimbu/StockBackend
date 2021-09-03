const db=require("../models")

const AddStock=db.addstock;

const Op=db.Sequelize.Op;

exports.create=(req,res)=>{

 

    const userStock={
stockname: req.body.stockname,
transactiontype:req.body.transactiontype,
quantity: req.body.quantity,
buyingorsellingprice:req.body.buyingorsellingprice,
user:req.body.user

    };
    AddStock.create(userStock)
    .then(data=>{

        res.send(data);
    })
    .catch(err=>{

        res.status(400).send({message: err.message});
    }
    //     {

    //     message: err.message
    // }
 
  
    
    
    )

}


exports.findAll=(req,res)=>{


    const user=req.query.user;

    var condition=user? {user:{[Op.like]:`${user}`}}:null
    AddStock.findAll({where:condition})
    .then(data=>{

        res.send(data);
    })
    .catch(err=>{

        res.status(500).send({

            msessage: err.message
        })
    })
}




// exports.findAll=(req,res)=>{

//     const username=req.params.username;
//     AddStock.findByUsername
// }

