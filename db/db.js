const dotenv = require('dotenv')
const sequalize = require('sequelize')
dotenv.config()


const mydatabasename = process.env.dbname
const  myAdminname = process.env.admin
const mypassword = process.env.password

//establishing connection

const Sequalize = new sequalize(mydatabasename,myAdminname,mypassword,{
host:'localhost',
dialect:'postgres'
})

Sequalize.sync({force:false})
.then(()=>{
    console.log(' Postgres Database connected successfully')
})
.catch(()=>{
    console.log('error in connecting to Database')
})

module.exports = Sequalize
 