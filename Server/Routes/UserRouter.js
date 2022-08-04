const express = require('express')
const router = express.Router()
const userBl = require('../Bl/UserBl')

router.get("/", async (req, res) => {
    try {
        const users = await userBl.getAllUsers()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.get("/:name/:password", async (req, res) => {
    let name = req.params.name
    let password = req.params.password
    try {
        const user = await userBl.getUserByName(name, password)
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.post("/", async (req, res) => {
    const user = req.body
    try {
        const status = await userBl.createNewUser(user)
        res.status(200).json(status)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const status = await userBl.deleteUserById(id)
        res.status(200).json(status)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const user = req.body
    try {
        const status = await userBl.updateUserById(id, user)
        res.status(200).json(status)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

module.exports = router