const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.port

app.use(express.json())



try {
    app.use(require('./db/db'))
} catch (error) {
    error
}




 try {
    app.use(require('./routes/individual'))
 } catch (error) {
  error  
 }


app.listen(`${PORT}`,()=>{
    console.log(`app listening at ${PORT}`)
})