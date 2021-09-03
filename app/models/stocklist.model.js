const { sequelize, Sequelize } = require(".");
const TODAY_START=new Date()
module.exports=(sequelize, Sequelize)=>{


    const Stocklist=sequelize.define("stocklist",{

stockname:{

    type: Sequelize.STRING,
},
transactiontype: {

    type: Sequelize.STRING,
   
},

quantity: {

    type: Sequelize.INTEGER
}
,

amount: {

    type: Sequelize.BIGINT
},

transactiondate: {

    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW,
   
}

        
    });
    return Stocklist;
}


