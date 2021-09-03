

module.exports=(sequelize, Sequelize)=>{


    const AddStock=sequelize.define("userstock",{
stockname:{

    type: Sequelize.STRING,
    allowNull: false
},
transactiontype:{

    type: Sequelize.STRING,
    allowNull: false
},
quantity: {

    type: Sequelize.BIGINT,
    allowNull: false
},
buyingorsellingprice: {

    type:Sequelize.BIGINT,
    allowNull: false
},
transactiondate: {

    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW,

},
user:{

    type:Sequelize.STRING
}


    })

    return AddStock;
}