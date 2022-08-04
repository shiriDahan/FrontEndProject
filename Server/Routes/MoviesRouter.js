const express = require('express')
const router = express.Router()
const moviesBl = require('../Bl/MoviesBl')

router.get("/", async (req, res) => {
    try {
        const movies = await moviesBl.getAllMovies()
        res.status(200).json(movies)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.get("/:id", async (req, res) => {
    let id = req.params.id
    try {
        const movie = await moviesBl.getMovieById(id)
        res.status(200).json(movie)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.post("/", async (req, res) => {
    const movie = req.body
    try {
        const status = await moviesBl.createNewMovie(movie)
        res.status(200).json(status)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const status = await moviesBl.deleteMovieById(id)
        res.status(200).json(status)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.put('/:id', async (req, res) => {
    let id = req.params.id
    let obj = req.body
    try {
        let status = await moviesBl.updateMovieById(id, obj)
        res.status(200).json({ msg: status })
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

module.exports = router