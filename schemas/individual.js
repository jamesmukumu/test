const Sequalize = require('sequelize')
const dbconnection  = require('../db/db')




const Individual = dbconnection.define('Individual',{
    firstname:{
  type:Sequalize.STRING,
  allowNull:false
 },
 secondname:{
    type:Sequalize.STRING,
    allowNull:false
   },
   phone:{
    type:Sequalize.INTEGER,
    allowNull:true,
    unique:true
   },
   residence:{
    type:Sequalize.STRING,
    allowNull:false
   }

})




module.exports = Individual