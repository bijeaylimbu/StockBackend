module.exports=app=>{

    const userstock=require("../controllers/add.stock.controller")
    var router=require("express").Router()

    router.post("/user-stock",userstock.create)

    router.get("/get-all",userstock.findAll)

    app.use("",router)



    
}

