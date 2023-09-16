const{ Sequalize} = require('sequelize')
const Individual = require('../schemas/individual')
const express = require('express')
const router = express.Router()


router.post('/post/individual',async(req,res)=>{
try {
 const createdindividual =  await Individual.create({
firstname:req.body.firstname,
secondname:req.body.secondname,
phone:req.body.phone,
residence:req.body.residence
 })   


res.json({message:'Posted to database',data:createdindividual})

} catch (error) {
   res.json({error:'Error in posting'}) 
}

})



//get 

router.get('/get/individual',async(req,res)=>{
try {
const allindividual = await Individual.findAll()
res.status(200).json(allindividual)

    
} catch (error) {
  res.json({error:"error"})  
}


})

module.exports = router

