const express = require('express')
const router = express.Router()
const SubscriptionsBl = require('../Bl/SubscriptionsBl')

router.get("/", async (req, res) => {
  try {
    const subscription = await SubscriptionsBl.getAllSubsriptions()
    res.status(200).json(subscription)
  }
  catch (err) {
    res.status(500).json({ msg: err })
  }
})

router.get("/:type/:x", async (req, res) => {
  const type = req.params.type
  const x = req.params.x
  if(type=='1'){
    try {
      const subscriptions = await SubscriptionsBl.getSubscriptions('MemberId',x)
      res.status(200).json(subscriptions)
    }
    catch (err) {
      res.status(500).json({ msg: err })
    }
  }else if(type=='2'){
    try {
      const subscriptions = await SubscriptionsBl.getSubscriptions('MovieId',x)
      res.status(200).json(subscriptions)
    }
    catch (err) {
      res.status(500).json({ msg: err })
    }
  }
  
})

router.post("/", async (req, res) => {
  const subscription = req.body
  try {
    const status = await SubscriptionsBl.createNewSubscription(subscription)
    res.status(200).json(status)
  }
  catch (err) {
    res.status(500).json({ msg: err })
  }
})

router.delete("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const status = await SubscriptionsBl.deleteSubscriptionsByMovieId(id)
    res.status(200).json(status)
  }
  catch (err) {
    res.status(500).json({ msg: err })
  }
})

router.put("/:id", async (req, res) => {
  const id = req.params.id
  const subscription = req.body
  try {
    const status = await SubscriptionsBl.updateSubscriptionById(id, subscription)
    res.status(200).json(status)
  }
  catch (err) {
    res.status(500).json({ msg: err })
  }
})

module.exports = router