const express = require('express')
const router = express.Router()
const athenticationBl = require ('../Bl/AthenticationBl')

router.post("/", async (req,res)=>{
       const user = req.body
       const status = await athenticationBl.LogIn(user)
       res.json(status)
  
})

module.exports = router
