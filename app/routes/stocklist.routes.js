

module.exports=app=> {


    const stocklist=require("../controllers/stocklist.controller.js")

    var router=require("express").Router();

    //create a new Stocklist

    router.post("/add-stock", stocklist.create)


    //retrive all stocklist
router.get("/all-stocks",stocklist.findAll);

    app.use("",router)
}


