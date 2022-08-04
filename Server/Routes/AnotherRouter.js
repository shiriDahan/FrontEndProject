const express = require('express')
const router = express.Router()
const moviesBl = require('../Bl/MoviesBl')
const subscriptionBl = require('../Bl/SubscriptionsBl')


router.get("/:movieName", async (req, res) => {
   let movieName = req.params.movieName
   try {
      const movie = await moviesBl.getMovieByName(movieName)
      res.status(200).json(movie)
   }
   catch (err) {
      res.status(500).json({ msg: err })
   }
})

module.exports = router