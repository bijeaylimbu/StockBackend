const db=require("../models")
const Stocklist=db.stocklist;

const Op=db.Sequelize.Op;

exports.create=(req,res)=>{
   
    if(!req.body.stockname){

        res.status(400).send({

            message: "Cannot be empty"
        });
        return ;
    }

//create list
    const stocklist={
  stockname: req.body.stockname,
  transactiontype: req.body.transactiontype,
  quantity: req.body.quantity,
  amount: req.body.amount,
  transactiondate: req.body.transactiondate


    };
    Stocklist.create(stocklist)
    .then(data=> {

        res.send(data);
    })
    .catch(err=>{

        message:err.message || "something wrong"
    })

    }


    //retrive all list

    // exports.findAll=(req,res)=>{


    //     const stockname=req.query.stockname;
    //     var condition=stockname? {stockname:{[Op.like]:`${stockname}`}}:null;

    //     Stocklist.findAll({while: condition})
    //     .then(data=> {

    //         res.send(data);
    //     })
    //     .catch(err=>{

    //         res.status(500).send({

    //             message: err.message || "Something went wrong"
    //         })
    //     })
    // }



exports.findAll=(req,res)=>{


    const stockname=req.query.stockname;

    var condition=stockname? {stockname:{[Op.like]:`${stockname}`}}:null
    Stocklist.findAll({where:condition})
    .then(data=>{

        res.send(data);
    })
    .catch(err=>{

        res.status(500).send({

            msessage: err.message
        })
    })
}


